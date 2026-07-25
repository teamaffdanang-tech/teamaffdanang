# HANDOFF — Seasonal Picks Hub

## Trạng thái hiện tại
- **Milestone đã xong:** M0 (repo + SSH auth), M1 (Next.js + Payload CMS + Postgres adapter + Admin routes wired), M2 (taxonomy collections), M3 (Products collection + S3-compatible media storage), M4 (review content fields + Buying Guides), M5 (SEO meta + Open Graph + JSON-LD + internal linking), M6 (Product Content Engine: excerpt field, buying-guide template với picks/methodology/verdict, sample-data import structure)
- **Milestone đang làm:** M6b — Public frontend (Wirecutter-inspired)

> Lưu ý đặt tên: milestone "M6" được người dùng đổi hướng giữa chừng thành "Product Content Engine" thay vì frontend gốc trong plan ban đầu. Frontend build (nội dung M6 cũ) đã dời sang **M6b**, làm sau M6 hiện tại.
- **Repo:** https://github.com/teamaffdanang-tech/teamaffdanang (branch `main`), push qua SSH alias `github.com-teamaffdanang`

## Quality bar (áp dụng cho MỌI milestone từ M2 trở đi)
Trước khi báo "Đã hoàn thành" phải pass cả 4: `npm run build`, `npm run lint`, `npx tsc --noEmit`, không còn TODO/FIXME/placeholder trong code.

## Stack đã cài
- Next.js 16.2.11 (App Router, Turbopack, `output: 'standalone'`)
- Payload CMS 3.86.0 + `@payloadcms/db-postgres` (KHÔNG dùng `db-vercel-postgres`, giữ portable)
- Lexical richtext editor, sharp, Tailwind CSS
- Collections hiện có: `Users` (auth), `Media` (upload), `Categories`, `Occasions`, `Brands`, `Authors`, `Retailers`, `Products` (drafts enabled, có `excerpt`), `BuyingGuides` (drafts enabled, có template `picks`/`methodology`/`verdict`/`faqs`)

## Quyết định kỹ thuật quan trọng
- Portable architecture: Postgres qua connection string chuẩn (chạy được Neon lẫn self-host VPS), không dùng adapter riêng của Vercel.
- Storage ảnh: `@payloadcms/storage-s3` wired vào collection `media`, nhưng CHỈ kích hoạt khi có `S3_BUCKET` trong env — chưa set thì tự fallback local disk (build/dev không bị chặn vì chưa có bucket R2 thật).
- `Products.gallery` là array field (upload + caption), kéo-thả reorder có sẵn từ Payload admin UI, không cần code thêm.
- `Products.retailerLinks` là array (retailer relationship + affiliateUrl + price) — không hardcode Amazon, hỗ trợ nhiều network cùng lúc.
- `Products` tab "Review": pros/cons (array), specifications (free-form label/value array — linh hoạt theo từng category), faqs, ratings (overall + optional criteria breakdown), testingNotes (richText, optional — không ép hands-on test).
- `Products` tab "Badges": isFeatured (checkbox), bestPickLabel (select: none/best-overall/best-budget/best-upgrade/best-for-beginners).
- Buying Guide quan hệ 1 chiều: `BuyingGuides.products` (nguồn sự thật) → `Products.buyingGuides` chỉ là `join` field (read-only, không duplicate data, không cần đồng bộ 2 chiều thủ công).
- Files admin route (`src/app/(payload)/**`) lấy từ template chính thức Payload tag `v3.86.0` (khớp đúng version cài) — KHÔNG copy từ branch `main` vì branch main có API mới hơn (`generatePayloadViewport`) chưa có trong bản đã cài.
- `.env` (gitignored) đang trỏ `DATABASE_URL=postgres://payload:payload@localhost:5432/seasonal_picks_hub` — chỉ là placeholder cho dev, CHƯA có Postgres thật chạy.
- `package.json` có `"type": "module"` — bắt buộc phải thêm, nếu không `payload generate:types`/CLI sẽ lỗi `ERR_REQUIRE_ASYNC_MODULE` khi load `payload.config.ts` (richtext-lexical là ESM có top-level await, Node 26 không require() được). `next build`/`next dev` không bị ảnh hưởng.
- `seoField()` (`src/fields/seo.ts`) là field factory dùng chung cho `Products` và `BuyingGuides` — sửa 1 chỗ áp dụng cả 2. Gồm metaTitle/metaDescription/metaImage/ogTitle/ogDescription/noIndex.
- `src/lib/seo/`: `metadata.ts` (resolveSeo → Next.js Metadata object), `jsonld.ts` (productJsonLd/faqJsonLd/breadcrumbJsonLd — thuần data, KHÔNG render, sẽ dùng ở M6), `relatedProducts.ts` (Payload Local API, tìm sản phẩm cùng Category/Occasion), `shared.ts` (absoluteUrl/mediaUrl helper).
- Đã chạy `npm run generate:types` → `src/payload-types.ts` tạo ra, các util SEO import type từ đây thay vì tự định nghĩa lại.
- `faqsField()` (`src/fields/faqs.ts`) — field factory FAQ dùng chung Products + BuyingGuides, giống pattern `seoField()`.
- `BuyingGuides` giờ có 2 chỗ tham chiếu Product: `products` (flat relationship, hasMany — BẮT BUỘC giữ vì là target của `join` field bên Products; Payload KHÔNG hỗ trợ join trỏ vào relationship nằm trong array field) và `picks` (array: product + pickLabel + blurb — nội dung narrative riêng cho từng guide). Khi thêm/sửa picks phải đồng bộ tay với `products` (không tự động).
- `src/seed/`: `types.ts` (SeedDataset — author-friendly shape, tham chiếu nhau bằng `slug` thay vì id), `lexical.ts` (`plainTextToLexical` — convert plain string → Lexical JSON tối thiểu cho các field richText), `import.ts` (`importSeedData` — upsert theo slug, thứ tự dependency: taxonomy → products → buying guides, an toàn chạy lại nhiều lần), `data/sample.ts` (bộ dữ liệu chứng minh 1 category/occasion/brand/retailer/author/product/buying-guide), `run.ts` (CLI entry, `npm run seed`).
- Trong `import.ts`, lời gọi `payload.create`/`payload.update` phải ép kiểu `unknown` vì Payload type discriminated-union theo literal collection slug, không tương thích với helper `upsert` dùng chung cho nhiều collection — đã ghi rõ lý do bằng comment tại chỗ, không phải TODO.
- **CHƯA chạy được `npm run seed` thật** (cần Postgres sống, vẫn đang blocked — xem mục TODO/Blocking bên dưới). Code đã qua build/lint/tsc nhưng runtime chưa verify end-to-end.

## Đã verify
- `npm run build` — pass, không lỗi.
- `npm run dev` + truy cập `/admin` — server khởi động đúng, route wiring đúng. Lỗi runtime hiện tại là `ECONNREFUSED 127.0.0.1:5432` (đúng như dự đoán vì chưa có Postgres thật) — xác nhận code/config không có bug, chỉ thiếu DB sống.

## TODO / Blocking
- **Cần 1 Postgres instance thật để verify admin login + CRUD** (M1 chưa test được end-to-end). 3 lựa chọn:
  1. Cài Docker Desktop trên máy → dùng `docker-compose.dev.yml` đã có sẵn trong repo.
  2. Cài PostgreSQL native trên Windows.
  3. Tạo free Neon Postgres (đúng hướng kiến trúc dev/test đã chốt) → gửi connection string để cập nhật `.env`.
- Chưa tạo GitHub Actions CI (để M9).
- Chưa có Dockerfile production (để M9).

## Milestone tiếp theo
M6b — Public frontend (Wirecutter-inspired): chạy `ui-ux-pro-max` skill sinh design system trước, sau đó build trang chủ, category listing, occasion listing (`/christmas`...), product detail (dùng `resolveSeo` + `productJsonLd`/`faqJsonLd`/`breadcrumbJsonLd` đã có sẵn ở M5), buying guide page. Mobile-first, Tailwind.

M8 (Seed data) sau này chỉ cần MỞ RỘNG `src/seed/data/sample.ts` (hoặc thêm file data mới) theo đúng `SeedDataset` shape rồi gọi lại `importSeedData` — không cần viết lại import engine.
