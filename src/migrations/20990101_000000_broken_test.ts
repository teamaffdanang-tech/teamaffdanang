import type { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`SELECT * FROM this_table_does_not_exist_deliberate_test_failure;`)
}

export async function down(_args: MigrateDownArgs): Promise<void> {
  // n/a — test-only migration
}
