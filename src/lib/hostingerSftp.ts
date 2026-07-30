import SftpClient from 'ssh2-sftp-client'

/**
 * Direct SFTP access to Hostinger's public_html/media/products/ directory,
 * which Hostinger already serves as static files at PUBLIC_BASE_URL. Used by
 * the Payload cloud-storage adapter (hostingerStorageAdapter.ts) and by the
 * one-time local-to-Hostinger migration script.
 *
 * The public URL uses a dedicated media.<domain> subdomain rather than the
 * apex/www domain — the apex and www now point at Vercel (the app), so
 * serving media from the same hostname would collide with it. The
 * subdomain's own document root must be pointed at REMOTE_DIR in Hostinger's
 * hPanel (see .env.example) so `media.<domain>/<filename>` resolves there.
 */

// Relative to the SFTP login's home directory, not an absolute filesystem path —
// Hostinger multi-domain accounts serve each domain from
// domains/<domain>/public_html/, not a bare /public_html at the account root.
const REMOTE_DIR = process.env.HOSTINGER_SFTP_REMOTE_DIR || 'public_html/media/products'
export const HOSTINGER_PUBLIC_BASE_URL = process.env.HOSTINGER_PUBLIC_BASE_URL || 'https://media.gettrendyfinds.com'

const getConnectConfig = () => {
  const host = process.env.HOSTINGER_SFTP_HOST
  const username = process.env.HOSTINGER_SFTP_USERNAME
  const password = process.env.HOSTINGER_SFTP_PASSWORD
  if (!host || !username || !password) {
    throw new Error(
      'Hostinger SFTP is not configured — set HOSTINGER_SFTP_HOST, HOSTINGER_SFTP_USERNAME, and HOSTINGER_SFTP_PASSWORD.',
    )
  }
  return {
    host,
    port: Number(process.env.HOSTINGER_SFTP_PORT || 22),
    username,
    password,
  }
}

const withConnection = async <T>(fn: (sftp: SftpClient) => Promise<T>): Promise<T> => {
  const sftp = new SftpClient()
  await sftp.connect(getConnectConfig())
  try {
    return await fn(sftp)
  } finally {
    await sftp.end()
  }
}

export const hostingerPublicUrl = (filename: string): string => `${HOSTINGER_PUBLIC_BASE_URL}/${filename}`

export const uploadToHostinger = async (buffer: Buffer, filename: string): Promise<string> => {
  await withConnection(async (sftp) => {
    if (!(await sftp.exists(REMOTE_DIR))) {
      await sftp.mkdir(REMOTE_DIR, true)
    }
    await sftp.put(buffer, `${REMOTE_DIR}/${filename}`)
  })
  return hostingerPublicUrl(filename)
}

export const deleteFromHostinger = async (filename: string): Promise<void> => {
  await withConnection(async (sftp) => {
    const remotePath = `${REMOTE_DIR}/${filename}`
    if (await sftp.exists(remotePath)) {
      await sftp.delete(remotePath)
    }
  })
}

export const existsOnHostinger = async (filename: string): Promise<boolean> =>
  withConnection(async (sftp) => Boolean(await sftp.exists(`${REMOTE_DIR}/${filename}`)))
