# HANDOFF — Seasonal Picks Hub

## Trạng thái hiện tại
- **Milestone đã xong:** M0 (repo + SSH auth), M1 (Next.js + Payload CMS + Postgres adapter + Admin routes wired), M2 (taxonomy collections), M3 (Products collection + S3-compatible media storage), M4 (review content fields + Buying Guides), M5 (SEO meta + Open Graph + JSON-LD + internal linking), M6 (Product Content Engine: excerpt field, buying-guide template với picks/methodology/verdict, sample-data import structure), M6b (Public frontend — Wirecutter-inspired)
- **Milestone đang làm:** M7 — Performance & Core Web Vitals

> Lưu ý đặt tên: milestone "M6" được người dùng đổi hướng giữa chừng thành "Product Content Engine" thay vì frontend gốc trong plan ban đầu. Frontend build (nội dung M6 cũ) đã làm ở **M6b**.
- **Repo:** https://github.com/teamaffdanang-tech/teamaffdanang (branch `main`), push qua SSH alias `github.com-teamaffdanang`

## Quality bar (áp dụng cho MỌI milestone từ M2 trở đi)
Trước khi báo "Đã hoàn thành" phải pass cả 4: `npm run build`, `npm run lint`, `npx tsc --noEmit`, không còn TODO/FIXME/placeholder trong code.

## Stack đã cài
- Next.js 16.2.11 (App Router, `output: 'standalone'`) — build/dev chạy bằng **webpack**, KHÔNG phải Turbopack (xem lý do bên dưới)
- Fonts: Libre Bodoni (heading) + Public Sans (body), qua `next/font/google`
- Design system: `design-system/seasonal-picks-hub/MASTER.md` (sinh bởi skill `ui-ux-pro-max`, style "Exaggerated Minimalism" đã tiết chế lại cho phù hợp trang review nội dung dày, palette đen/trắng/xám + accent hồng)
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
- **QUAN TRỌNG — build/dev PHẢI dùng webpack, không dùng Turbopack:** Turbopack trên Windows bị lỗi `TurbopackInternalError: failed to create junction point ... (os error 80)` khi tạo junction cho package `pino`/`pino-pretty` (dependency của Payload logger) trong `.next/node_modules`. `package.json` đã cố định `"dev": "next dev --webpack"` và `"build": "next build --webpack"` — không tự ý bỏ flag `--webpack` này.
- Public frontend KHÔNG dùng route group `(frontend)` — nằm trực tiếp ở `src/app/` (root layout + pages), song song với `(payload)` (admin/API). Đây là pattern chuẩn của Payload+Next.
- Data access cho public site: `src/lib/payload.ts` (`getPayloadClient()`) — mọi Server Component gọi Payload Local API trực tiếp, không qua REST.
- Route `src/app/[occasion]/page.tsx` là dynamic catch-all TOP-LEVEL (vd `/christmas`) — Next.js ưu tiên static route (`/products`, `/categories`, `/guides`, `/about`) trước, chỉ fallback vào `[occasion]` khi không khớp route tĩnh nào, nên không xung đột.
- Richtext render qua `src/components/site/Prose.tsx` (wrap `RichText` từ `@payloadcms/richtext-lexical/react`) — dùng chung cho `Product.description`/`testingNotes` và `BuyingGuide.intro`/`methodology`/`verdict`/`picks[].blurb`.
- `Header` fetch Occasions cho nav — bọc try/catch fallback về mảng rỗng nếu DB lỗi, vì nav là phụ trợ, không nên làm sập toàn bộ site nếu DB tạm gián đoạn. Các trang nội dung chính (product/guide/category/occasion) thì KHÔNG che lỗi — để lỗi/notFound() nổi lên bình thường.
- Mọi trang public đều `export const dynamic = "force-dynamic"` — tránh Next cố gắng query DB lúc build (chưa có Postgres sống) mà vẫn build được; sẽ xem lại có cần ISR/ static generation ở M7 (Performance) không.
- Đã xoá asset mặc định của create-next-app không dùng tới (`public/{next,vercel,file,globe,window}.svg`).
- Trang `/about` có nội dung affiliate disclosure thật (không phải placeholder) — Header/Footer đều link tới đây, cần cho tuân thủ FTC.

## Đã verify
- `npm run build` — pass, không lỗi (route table hiện đủ `/`, `/[occasion]`, `/about`, `/categories/[slug]`, `/guides`, `/guides/[slug]`, `/products/[slug]` + admin/API).
- `npm run dev` + truy cập `/` và `/admin` — server khởi động đúng, route wiring đúng. Lỗi runtime hiện tại vẫn là `ECONNREFUSED 127.0.0.1:5432` (đúng như dự đoán vì chưa có Postgres thật) — xác nhận code/config không có bug, chỉ thiếu DB sống. **Chưa verify được UI thật sự render đúng ngoài trình duyệt** — cần Postgres sống để test end-to-end (xem TODO/Blocking).

## TODO / Blocking
- **Cần 1 Postgres instance thật để verify admin login + CRUD** (M1 chưa test được end-to-end). 3 lựa chọn:
  1. Cài Docker Desktop trên máy → dùng `docker-compose.dev.yml` đã có sẵn trong repo.
  2. Cài PostgreSQL native trên Windows.
  3. Tạo free Neon Postgres (đúng hướng kiến trúc dev/test đã chốt) → gửi connection string để cập nhật `.env`.
- Chưa tạo GitHub Actions CI (để M9).
- Chưa có Dockerfile production (để M9).

## Milestone tiếp theo
M7 — Performance & Core Web Vitals: image pipeline (`sharp` đã cài từ M1, cần cấu hình `next.config.ts` `images.remotePatterns` cho domain R2 một khi có bucket thật), xem xét ISR/on-demand revalidation thay cho `force-dynamic` hiện tại ở các trang public, đo Lighthouse.

M8 (Seed data) sau này chỉ cần MỞ RỘNG `src/seed/data/sample.ts` (hoặc thêm file data mới) theo đúng `SeedDataset` shape rồi gọi lại `importSeedData` — không cần viết lại import engine. Đây cũng sẽ là lần đầu tiên có thể verify UI thật (một khi có Postgres sống + chạy seed).

## Rủi ro lớn nhất hiện tại
Toàn bộ M1 → M6b (7 milestone) đã qua build/lint/tsc nhưng **CHƯA có milestone nào được verify chạy thật với dữ liệu thật** vì thiếu Postgres sống. Nên ưu tiên giải quyết 1 trong 3 lựa chọn ở mục TODO/Blocking sớm, trước khi tích lũy thêm nợ kỹ thuật chưa-verify-được.
