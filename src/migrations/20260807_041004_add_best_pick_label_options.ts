import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_products_best_pick_label" ADD VALUE 'editor-choice';
  ALTER TYPE "public"."enum_products_best_pick_label" ADD VALUE 'best-value';
  ALTER TYPE "public"."enum_products_best_pick_label" ADD VALUE 'best-premium';
  ALTER TYPE "public"."enum_products_best_pick_label" ADD VALUE 'best-everyday';
  ALTER TYPE "public"."enum_products_best_pick_label" ADD VALUE 'best-travel';
  ALTER TYPE "public"."enum__products_v_version_best_pick_label" ADD VALUE 'editor-choice';
  ALTER TYPE "public"."enum__products_v_version_best_pick_label" ADD VALUE 'best-value';
  ALTER TYPE "public"."enum__products_v_version_best_pick_label" ADD VALUE 'best-premium';
  ALTER TYPE "public"."enum__products_v_version_best_pick_label" ADD VALUE 'best-everyday';
  ALTER TYPE "public"."enum__products_v_version_best_pick_label" ADD VALUE 'best-travel';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" ALTER COLUMN "best_pick_label" SET DATA TYPE text;
  ALTER TABLE "products" ALTER COLUMN "best_pick_label" SET DEFAULT 'none'::text;
  DROP TYPE "public"."enum_products_best_pick_label";
  CREATE TYPE "public"."enum_products_best_pick_label" AS ENUM('none', 'best-overall', 'best-budget', 'best-upgrade', 'best-for-beginners');
  ALTER TABLE "products" ALTER COLUMN "best_pick_label" SET DEFAULT 'none'::"public"."enum_products_best_pick_label";
  ALTER TABLE "products" ALTER COLUMN "best_pick_label" SET DATA TYPE "public"."enum_products_best_pick_label" USING "best_pick_label"::"public"."enum_products_best_pick_label";
  ALTER TABLE "_products_v" ALTER COLUMN "version_best_pick_label" SET DATA TYPE text;
  ALTER TABLE "_products_v" ALTER COLUMN "version_best_pick_label" SET DEFAULT 'none'::text;
  DROP TYPE "public"."enum__products_v_version_best_pick_label";
  CREATE TYPE "public"."enum__products_v_version_best_pick_label" AS ENUM('none', 'best-overall', 'best-budget', 'best-upgrade', 'best-for-beginners');
  ALTER TABLE "_products_v" ALTER COLUMN "version_best_pick_label" SET DEFAULT 'none'::"public"."enum__products_v_version_best_pick_label";
  ALTER TABLE "_products_v" ALTER COLUMN "version_best_pick_label" SET DATA TYPE "public"."enum__products_v_version_best_pick_label" USING "version_best_pick_label"::"public"."enum__products_v_version_best_pick_label";`)
}
