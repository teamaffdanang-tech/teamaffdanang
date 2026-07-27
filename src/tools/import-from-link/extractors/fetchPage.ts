// A standard browser User-Agent avoids being rejected outright for having no/an
// obviously-scripted UA — the same courtesy any link-preview/unfurl bot extends.
// This is not bot-detection evasion: no headless browser, no proxy rotation, no
// captcha solving, and a single plain request per URL.
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const BLOCK_MARKERS = [
  'captcha',
  'robot check',
  'access denied',
  'are you a human',
  'unusual traffic',
  'verify you are a human',
]

// Real bot-challenge/interstitial pages (Cloudflare, PerimeterX, Amazon's "Sorry"
// page, etc.) are small. A large page containing the word "captcha" is far more
// likely a normal, fully-rendered page with an embedded reCAPTCHA widget (e.g. a
// contact/login form) than an actual block — so size-gate the keyword check to
// avoid flagging those as blocked.
const BLOCKED_PAGE_SIZE_THRESHOLD = 10_000
const FETCH_TIMEOUT_MS = 15_000

const looksBlocked = (status: number, body: string): boolean => {
  if (status === 403 || status === 429 || status === 503) return true
  if (body.length > BLOCKED_PAGE_SIZE_THRESHOLD) return false
  const sample = body.toLowerCase()
  return BLOCK_MARKERS.some((marker) => sample.includes(marker))
}

export type FetchPageOutcome = {
  html?: string
  blocked: boolean
  error?: string
}

/** Fetches a URL once with a single plain request, sharable across product extraction and link discovery. */
export const fetchPage = async (url: string): Promise<FetchPageOutcome> => {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

  let response: Response
  try {
    response = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
      signal: controller.signal,
    })
  } catch (err) {
    clearTimeout(timeout)
    return { blocked: false, error: err instanceof Error ? err.message : 'Fetch failed' }
  }
  clearTimeout(timeout)

  const body = await response.text()

  if (looksBlocked(response.status, body)) {
    return { blocked: true, error: `Site blocked the request (HTTP ${response.status}) or served a bot-check page.` }
  }

  if (!response.ok) {
    return { blocked: false, error: `HTTP ${response.status} ${response.statusText}` }
  }

  return { html: body, blocked: false }
}
