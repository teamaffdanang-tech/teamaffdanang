import { getPayloadClient } from '../src/lib/payload'

/**
 * Runs before `payload migrate` in the production build (see the
 * `vercel-build` script). `payload migrate` prompts interactively — with no
 * flag to skip it — if the `payload_migrations` table has a `batch = -1` row
 * (the marker `next dev`'s auto-push writes every time it runs). Confirmed
 * empirically: in a non-interactive shell that prompt hangs forever rather
 * than failing fast, which would hang the whole Vercel build instead of
 * failing it safely.
 *
 * This only matters if a `dev`-mode push ever touches the target database
 * (e.g. someone intentionally targets production via
 * .env.production.local per AGENTS.md). Production has never been pushed to
 * directly, so this is normally a no-op — it exists so that scenario can't
 * turn into a silent hang later.
 */
const run = async () => {
  const payload = await getPayloadClient()
  const pool = (payload.db as { pool: { query: (sql: string) => Promise<{ rows: unknown[] }> } }).pool

  const exists = await pool.query(`SELECT to_regclass('"payload_migrations"') AS exists`)
  const tableExists = Boolean((exists.rows[0] as { exists: string | null } | undefined)?.exists)
  if (!tableExists) {
    console.log('prepare-migrate: payload_migrations table does not exist yet, nothing to clear.')
    process.exit(0)
  }

  const deleted = await pool.query(`DELETE FROM "payload_migrations" WHERE batch = -1 RETURNING name`)
  console.log(
    deleted.rows.length
      ? `prepare-migrate: cleared ${deleted.rows.length} dev-push marker row(s).`
      : 'prepare-migrate: no dev-push marker present, nothing to clear.',
  )
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
