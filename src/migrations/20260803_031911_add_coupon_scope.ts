import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_coupons_scope" AS ENUM('product', 'brand');
  ALTER TABLE "coupons" ALTER COLUMN "linked_product_id" DROP NOT NULL;
  ALTER TABLE "coupons" ADD COLUMN "scope" "enum_coupons_scope" DEFAULT 'product' NOT NULL;
  ALTER TABLE "coupons" ADD COLUMN "linked_brand_id" integer;
  ALTER TABLE "coupons" ADD CONSTRAINT "coupons_linked_brand_id_brands_id_fk" FOREIGN KEY ("linked_brand_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "coupons_linked_brand_idx" ON "coupons" USING btree ("linked_brand_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "coupons" DROP CONSTRAINT "coupons_linked_brand_id_brands_id_fk";
  
  DROP INDEX "coupons_linked_brand_idx";
  ALTER TABLE "coupons" ALTER COLUMN "linked_product_id" SET NOT NULL;
  ALTER TABLE "coupons" DROP COLUMN "scope";
  ALTER TABLE "coupons" DROP COLUMN "linked_brand_id";
  DROP TYPE "public"."enum_coupons_scope";`)
}
