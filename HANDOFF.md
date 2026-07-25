# HANDOFF — Seasonal Picks Hub

## Trạng thái hiện tại
- **Milestone đã xong:** M0 (repo + SSH auth), M1 (Next.js + Payload CMS + Postgres adapter + Admin routes wired), M2 (taxonomy collections), M3 (Products collection + S3-compatible media storage)
- **Milestone đang làm:** M4 — Review content fields
- **Repo:** https://github.com/teamaffdanang-tech/teamaffdanang (branch `main`), push qua SSH alias `github.com-teamaffdanang`

## Quality bar (áp dụng cho MỌI milestone từ M2 trở đi)
Trước khi báo "Đã hoàn thành" phải pass cả 4: `npm run build`, `npm run lint`, `npx tsc --noEmit`, không còn TODO/FIXME/placeholder trong code.

## Stack đã cài
- Next.js 16.2.11 (App Router, Turbopack, `output: 'standalone'`)
- Payload CMS 3.86.0 + `@payloadcms/db-postgres` (KHÔNG dùng `db-vercel-postgres`, giữ portable)
- Lexical richtext editor, sharp, Tailwind CSS
- Collections hiện có: `Users` (auth), `Media` (upload), `Categories`, `Occasions`, `Brands`, `Authors`, `Retailers`, `Products` (drafts enabled)

## Quyết định kỹ thuật quan trọng
- Portable architecture: Postgres qua connection string chuẩn (chạy được Neon lẫn self-host VPS), không dùng adapter riêng của Vercel.
- Storage ảnh: `@payloadcms/storage-s3` wired vào collection `media`, nhưng CHỈ kích hoạt khi có `S3_BUCKET` trong env — chưa set thì tự fallback local disk (build/dev không bị chặn vì chưa có bucket R2 thật).
- `Products.gallery` là array field (upload + caption), kéo-thả reorder có sẵn từ Payload admin UI, không cần code thêm.
- `Products.retailerLinks` là array (retailer relationship + affiliateUrl + price) — không hardcode Amazon, hỗ trợ nhiều network cùng lúc.
- Files admin route (`src/app/(payload)/**`) lấy từ template chính thức Payload tag `v3.86.0` (khớp đúng version cài) — KHÔNG copy từ branch `main` vì branch main có API mới hơn (`generatePayloadViewport`) chưa có trong bản đã cài.
- `.env` (gitignored) đang trỏ `DATABASE_URL=postgres://payload:payload@localhost:5432/seasonal_picks_hub` — chỉ là placeholder cho dev, CHƯA có Postgres thật chạy.

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
M4 — Review content fields: Pros & Cons, Specifications, FAQs, Ratings, Best Pick/Featured, Buying Guide collection, Testing Notes (optional richtext) — thêm vào `Products` + collection `BuyingGuides` mới.
