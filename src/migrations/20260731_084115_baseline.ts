import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

/**
 * Genesis migration for adopting Payload's migration system on an existing
 * database. Production (and dev) already have every table/column this would
 * create — they were built up over time via `next dev`'s auto-push, back
 * when NODE_ENV !== 'production' pushed schema changes directly (see
 * node_modules/@payloadcms/db-postgres/dist/connect.js).
 *
 * The up()/down() bodies are intentionally blank (no-ops) so running
 * `payload migrate` against an already-current database is a safe no-op that
 * just records this migration as applied. The accompanying
 * 20260731_084115_baseline.json snapshot is NOT blanked — that's what future
 * `payload migrate:create` calls diff against, so it must reflect the real,
 * full current schema for incremental migrations to generate correct deltas.
 */
export async function up(_args: MigrateUpArgs): Promise<void> {
  // Intentionally empty — see file header.
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // Intentionally empty — see file header.
}
