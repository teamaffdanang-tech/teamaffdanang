import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" ADD COLUMN "best_for" varchar;
  ALTER TABLE "_products_v" ADD COLUMN "version_best_for" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" DROP COLUMN "best_for";
  ALTER TABLE "_products_v" DROP COLUMN "version_best_for";`)
}
