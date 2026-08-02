import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_products_retailer_links_currency" ADD VALUE 'GBP';
  ALTER TYPE "public"."enum__products_v_version_retailer_links_currency" ADD VALUE 'GBP';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products_retailer_links" ALTER COLUMN "currency" SET DATA TYPE text;
  ALTER TABLE "products_retailer_links" ALTER COLUMN "currency" SET DEFAULT 'USD'::text;
  DROP TYPE "public"."enum_products_retailer_links_currency";
  CREATE TYPE "public"."enum_products_retailer_links_currency" AS ENUM('USD', 'HKD');
  ALTER TABLE "products_retailer_links" ALTER COLUMN "currency" SET DEFAULT 'USD'::"public"."enum_products_retailer_links_currency";
  ALTER TABLE "products_retailer_links" ALTER COLUMN "currency" SET DATA TYPE "public"."enum_products_retailer_links_currency" USING "currency"::"public"."enum_products_retailer_links_currency";
  ALTER TABLE "_products_v_version_retailer_links" ALTER COLUMN "currency" SET DATA TYPE text;
  ALTER TABLE "_products_v_version_retailer_links" ALTER COLUMN "currency" SET DEFAULT 'USD'::text;
  DROP TYPE "public"."enum__products_v_version_retailer_links_currency";
  CREATE TYPE "public"."enum__products_v_version_retailer_links_currency" AS ENUM('USD', 'HKD');
  ALTER TABLE "_products_v_version_retailer_links" ALTER COLUMN "currency" SET DEFAULT 'USD'::"public"."enum__products_v_version_retailer_links_currency";
  ALTER TABLE "_products_v_version_retailer_links" ALTER COLUMN "currency" SET DATA TYPE "public"."enum__products_v_version_retailer_links_currency" USING "currency"::"public"."enum__products_v_version_retailer_links_currency";`)
}
