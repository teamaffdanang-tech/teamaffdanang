<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CLAUDE.md — Project Notes cho Claude Code

> File này giúp Claude Code hiểu ngữ cảnh project ngay từ đầu mỗi phiên làm việc mới,
> không cần giải thích lại từ đầu. Cập nhật file này khi có thay đổi lớn về kiến trúc/quy tắc.

## 1. Tổng quan project

- Tên project: `seasonal-picks-hub`
- Loại: Website affiliate marketing — giới thiệu sản phẩm theo mùa/dịp lễ, kèm link affiliate
- Stack: Next.js (webpack), Database Postgres qua Neon
- Đường dẫn local: `C:\Users\Hi\seasonal-picks-hub`
- Admin panel: `http://localhost:3001/admin` (tài khoản: `teamaffdanang@gmail.com`)

## 2. Kiến trúc hosting (đã chốt)

| Giai đoạn | Hosting | Ghi chú |
|---|---|---|
| Dev (hiện tại) | Local (`npm run dev`) | DB: Neon |
| Test/preview | Vercel hoặc Hostinger App Hosting | Connect Git, tự build |
| Production thật | VPS Hostinger (KVM 2) | Cùng codebase, chỉ đổi biến môi trường |

Nguyên tắc: **không khóa cứng vào 1 nền tảng** — Postgres qua connection string chuẩn, ảnh lưu theo chuẩn S3-compatible. Chuyển môi trường chỉ cần đổi `.env`, không sửa code.

## 2b. Database Isolation — Dev vs Production (chốt 2026-07-31)

**Bối cảnh:** trước ngày này, dev local và production Vercel dùng **chung 1** Neon
Postgres DB (qua cùng 1 connection string). Hậu quả thực tế: một lần đổi tên
collection lúc code ở local (`BuyingGuides` → `BlogPosts`) đã kích hoạt cơ chế
auto schema-sync của Payload và **thay đổi schema production ngay lập tức**,
trước khi code kịp deploy — không có gì cách ly dev khỏi production cả.

**Đã tách biệt bằng Neon Branch:**
- Neon project: `SẢN PHẨM VẬT LÝ GLOBAL` (project gốc, không đổi).
- Branch **`production`** (branch gốc/mặc định) — đây là DB Vercel Dashboard
  đang trỏ tới (biến `DATABASE_URL` trên Vercel, loại **Sensitive** — không ai
  xem lại được giá trị qua CLI/API, kể cả chủ tài khoản). **KHÔNG đổi gì ở
  đây trong lần setup này.**
- Branch **`dev`** — tạo mới từ `production` (snapshot schema+data tại thời
  điểm branch), dùng riêng cho local.

**File nào kiểm soát cái nào (chốt 2026-07-31, đã fix gap trước đó):**
- `.env` **và** `.env.development.local` (cả hai, **gitignored**, không
  commit) — cả hai đều trỏ `DATABASE_URL` vào Neon branch `dev`. Nghĩa là
  **mọi** cách chạy local đều an toàn: `npm run dev`/`next dev` (đọc theo thứ
  tự ưu tiên của Next.js, `.env.development.local` cao hơn `.env`, nhưng cả
  hai giờ cùng trỏ 1 chỗ nên không còn khác biệt), **và** mọi script chạy
  dạng `tsx --env-file=.env ...` (`npm run seed`, `npm run import:links`,
  `npm run migrate:media-hostinger`, script một lần nào khác) — vì các script
  này đọc thẳng `.env`, và `.env` giờ cũng là branch `dev`.
- `.env.production.local.example` (**commit được** — ngoại lệ trong
  `.gitignore` giống `.env.example`, không chứa giá trị thật) — file hướng
  dẫn cho trường hợp hiếm cần 1 script local nhắm thẳng vào production một
  cách **cố ý, rõ ràng**. Copy thành `.env.production.local` (tự động
  gitignored, không cần thêm rule) rồi điền connection string production
  thật, chạy `tsx --env-file=.env.production.local script.ts`. Đây là ngoại
  lệ có chủ đích, không phải hành vi mặc định.
- Production (Vercel) — đọc `DATABASE_URL` từ **Vercel Dashboard** (Production
  environment), **không** đọc bất kỳ file `.env*` nào từ local/deploy source.
  Đã xác nhận thực nghiệm: đổi biến trên Dashboard có hiệu lực ngay khi
  redeploy, bất kể file `.env` local chứa gì.

**Kết luận cho các phiên làm việc sau:** chạy `npm run dev` bình thường, sửa
schema/rename collection thoải mái — Payload's auto schema-sync giờ chỉ chạm
vào branch `dev`, **không rò rỉ sang production nữa**. Production chỉ thay
đổi khi có `git push` + `vercel --prod` (redeploy) rõ ràng, và schema production
chỉ nên đổi qua migration có kiểm soát, không phải qua schema-sync tự động của
dev server.

## 2c. Production Schema Migrations (chốt 2026-07-31)

**Sự cố xảy ra:** ngay sau khi 2b tách dev/production, một field mới (`currency`
trên `Products.retailerLinks`) được auto-push vào `dev` như bình thường —
nhưng vì auto-push của Payload **chỉ chạy khi `NODE_ENV !== 'production'`**
(xem `node_modules/@payloadcms/db-postgres/dist/connect.js`), production
**không** nhận được thay đổi này. Deploy code phụ thuộc vào field đó lên
production → mọi query đụng tới `products` lỗi 500 (site sập thật, đã phải
rollback alias khẩn cấp). Đây là hệ quả trực tiếp, chưa xử lý, của việc 2b
gỡ bỏ "safety net" tình cờ (trước đây dev+production chung DB nên auto-push
vô tình đồng bộ luôn production).

**MUST — từ giờ, mọi thay đổi field/collection PHẢI đi qua migration commit
cùng lúc với code:**
1. Sửa field/collection như bình thường, để `next dev` auto-push vào `dev`
   (không đổi gì ở bước này).
2. Chạy `npm run migrate:create -- <tên-mô-tả>` để sinh file trong
   `src/migrations/` (2 file: `<timestamp>_<tên>.ts` chứa SQL up/down,
   `<timestamp>_<tên>.json` là snapshot schema — **cả hai đều phải commit**,
   snapshot JSON là thứ mà lần `migrate:create` tiếp theo sẽ diff vào, không
   phải SQL trong file `.ts`).
3. Đọc lại SQL sinh ra trước khi commit — `migrate:create` diff dựa trên
   **config Payload hiện tại so với snapshot lần trước**, không đọc DB thật,
   nên luôn kiểm tra SQL có đúng ý không trước khi để nó chạy vào production.
4. Commit migration **cùng** commit đổi schema — không tách rời, không deploy
   code phụ thuộc schema mới nếu migration tương ứng chưa có trong commit.

**Cơ chế tự động hoá (đã setup 2026-07-31):** `package.json` có script
`vercel-build` (`tsx scripts/prepare-migrate.ts && payload migrate && next
build --webpack`) — đây là build command thật Vercel sẽ chạy (ưu tiên hơn
`build` mặc định). Nghĩa là **mỗi lần `vercel --prod`**, mọi migration commit
nhưng chưa áp dụng sẽ tự chạy vào production **trước khi** build code mới —
không cần nhớ chạy tay, không cần endpoint tạm nào nữa.

**Đã xác nhận thực nghiệm (không chỉ đọc code):**
- `payload migrate` gọi `process.exit(1)` khi 1 migration lỗi (xem
  `node_modules/@payloadcms/drizzle/dist/migrate.js`) — kết hợp `&&` trong
  `vercel-build`, lỗi migration = `next build` không chạy = Vercel coi build
  fail = **không deploy**, production giữ nguyên bản đang chạy. Đã test thật:
  tạo 1 migration cố tình lỗi SQL, chạy `payload migrate` → exit code 1 xác
  nhận (coi chừng bug `$?` sau lệnh có pipe — pipe trả exit code của lệnh
  cuối trong pipe, không phải lệnh gốc, phải redirect ra file để check `$?`
  chính xác).
- **Rủi ro treo đã phát hiện:** nếu bảng `payload_migrations` có 1 dòng
  `batch = -1` (marker `next dev`'s auto-push luôn ghi mỗi lần chạy), `payload
  migrate` sẽ hỏi tương tác ("It looks like you've run Payload in dev
  mode...") — **không có flag nào để bỏ qua câu hỏi này** ở bản Payload
  3.86. Trong shell không tương tác (như build của Vercel), câu hỏi này
  **treo vĩnh viễn**, không tự fail — đã tái hiện được thật (không phải đoán).
  `scripts/prepare-migrate.ts` xử lý việc này: xoá dòng `batch = -1` (nếu có)
  trước khi `payload migrate` chạy, nên `vercel-build` an toàn kể cả khi kịch
  bản này xảy ra. Production hiện chưa từng bị dính (bảng `payload_migrations`
  chưa từng tồn tại ở đó), nhưng rủi ro này sẽ xuất hiện nếu sau này có ai
  nhắm `next dev` thẳng vào production qua `.env.production.local` (xem 2b).
- Field `currency` hoá ra tồn tại ở **2 bảng Postgres riêng** với **2 enum
  type riêng**: `products_retailer_links` (bảng chính) và
  `_products_v_version_retailer_links` (bảng version/draft, sinh ra vì
  `Products` có `versions.drafts: true`) — sửa 1 bảng mà quên bảng kia gây
  lỗi (đã gặp thật). Khi review SQL migration sinh ra cho 1 field mới trên
  `Products`, luôn kiểm tra cả 2 bảng `_v_version_...` tương ứng có xuất hiện
  không.
- Baseline đầu tiên (`src/migrations/20260731_084115_baseline.*`) là migration
  "genesis" cho project — vì dev/production đã tồn tại từ trước (build bằng
  auto-push, không phải migration), `up()`/`down()` của nó **cố ý để trống**
  (không chạy SQL thật) để áp dụng vào DB đã có sẵn schema là no-op an toàn;
  chỉ file `.json` snapshot đi kèm là thật (dùng để diff cho migration kế
  tiếp). Không xoá file `.json` này.

## 3. Schema các collection chính

Categories → Occasions → Brands → Retailers → Authors → Products → Buying Guides

- **Occasions cố định gồm 6 dịp**: Christmas, Halloween, Black Friday, Valentine's Day, Back to School, Summer (sản phẩm cũng có thể không gắn dịp nào)
- **Retailer**: xác định theo domain của link sản phẩm (vd: stationerypal.com → Retailer "StationeryPal")
- **Category**: KHÔNG được tool tự đoán — luôn cần người dùng chỉ định

## 4. Tính năng "Import sản phẩm từ link" (đã yêu cầu xây dựng)

**Input:** Link sản phẩm cụ thể, hoặc link danh mục/collection (liệt kê nhiều sản phẩm).

**Quy tắc xử lý:**

1. Nếu là **link danh mục**: quét tự động, liệt kê danh sách sản phẩm bên trong (tên + link), hỏi người dùng chọn import hết hay chọn lọc.
2. Nếu là **link 1 sản phẩm**: lấy tên, giá, ảnh, mô tả, rating qua JSON-LD/OG tags trước (ưu tiên hơn scrape thô). Không dùng Amazon PA-API (chưa đủ điều kiện — cần tài khoản Associates đã có đơn hàng qualifying).
3. Bắt buộc hỏi người dùng mỗi lần: **Category** và **Occasion** (không tự đoán).
4. Retailer mới: hỏi xác nhận tên trước khi tạo.
5. Ảnh: hỏi giữ nguyên link gốc hay tải về lưu storage riêng.
6. **Affiliate link: giữ nguyên y hệt, không tự đổi/rút gọn** — bao gồm mọi mã tracking dạng `?ref=...`, `?sca_ref=...`.
7. KHÔNG tự ghi thẳng vào database — luôn hiển thị bản nháp để xác nhận trước khi ghi vào seed file hoặc gọi API tạo record.
8. Nếu 1 link lỗi (die/chặn/thiếu dữ liệu) — ghi log rõ ràng, không dừng cả batch.
9. Coupon code riêng của Retailer (nếu có) — lưu kèm để hiển thị trên web.

**Module lấy dữ liệu sản phẩm nên tách riêng**, để sau này dễ thay bằng Amazon PA-API hoặc affiliate network feed khi đủ điều kiện, không phải sửa toàn bộ pipeline.

## 5. Affiliate links đang có (cập nhật khi có thêm)

- `gadgetryclub.com` — mã tracking dạng `?sca_ref=...` (ShareASale)
- `stationerypal.com` — mã tracking dạng `?ref=nnsfaquk`, coupon code: `DNAFFTEAM`

## 6. Quy tắc làm việc để tránh hết hạn mức Claude Code

- Xử lý import theo từng đợt nhỏ (5-10 link/lần), không dồn hết vào 1 lần
- Mở phiên chat mới sau khi hoàn thành 1 đợt việc, tránh kéo dài 1 cuộc hội thoại quá lâu
- Luôn cập nhật file này khi có quyết định/kiến trúc mới, thay vì giải thích lại bằng lời mỗi lần

## 7. Production Workflow (chốt 2026-07-28)

Kiến trúc hiện tại (Next.js + Payload + Postgres, routing/page structure,
component set — bao gồm `AffiliateDisclosure`, `QuickAnswerTable`,
`ProductCard`, JSON-LD builders) được coi là **ổn định**. Project đã
chuyển từ giai đoạn xây kiến trúc sang **giai đoạn sản xuất nội dung**.

Thứ tự ưu tiên công việc từ giờ:
1. Import và tổ chức sản phẩm.
2. Cải thiện chất lượng dữ liệu sản phẩm.
3. Viết buying guide chất lượng cao.
4. Cải thiện nội dung review khi được yêu cầu.
5. Chỉ sửa bug thật sự phát sinh.
6. Giữ codebase sạch, sẵn sàng production.

**KHÔNG** tự đề xuất kiến trúc mới, framework mới, refactor lớn, hay cải
tiến UX/SEO mới trừ khi được yêu cầu rõ ràng. **KHÔNG** tự khởi tạo
milestone mới — chờ task cụ thể từ người dùng. Chỉ quay lại các cải tiến
UX/SEO lớn khi có dữ liệu thật cho thấy thực sự cần thiết.

## 8. Product Import Rules (rút ra từ đợt import StationeryPal)

- Category tự động gán theo trang collection nguồn **không đáng tin tuyệt
  đối** — một sản phẩm xuất hiện trên nhiều trang collection (cross-
  merchandising) không có nghĩa nó thuộc cả các category đó. Luôn xác
  minh sản phẩm có thực sự khớp bản chất category trước khi chấp nhận
  (vd: bút bi, đèn DIY, đồ chơi Montessori không phải "túi/hộp đựng" dù
  được liệt kê trên trang collection đó).
- **Không publish nguyên văn copy quảng cáo của vendor** nếu chứa nội
  dung có hạn dùng (mã coupon riêng của họ, "flash sale sẽ ngừng bán khi
  hết") — nội dung này sẽ lỗi thời nhanh khi nhúng vào mô tả sản phẩm
  evergreen. Loại bỏ trước khi publish.
- Trước khi ghi nhận sản phẩm là published, **tự kiểm tra** (không cần
  chị duyệt từng cái): category có khớp thật không, mô tả có ngôn ngữ
  khuyến mãi có hạn không, giá có hợp lý không. Batch đầu tiên từ 1
  nguồn/retailer mới thì nên làm kỹ và báo cáo lại; các batch sau từ
  cùng nguồn có thể tự publish thẳng, chỉ báo cáo trường hợp ngoại lệ.
- **Chu kỳ QA (chốt sau đợt LukeCase):** flow chuẩn là Retailer import →
  QA riêng cho retailer đó → Done. **Không** chạy full-site QA (toàn bộ
  site, mọi retailer) sau mỗi lần import 1 retailer mới. Full-site QA
  chỉ chạy khi: trước khi release, trước 1 đợt publish lớn, hoặc khi
  chị yêu cầu rõ.
- Affiliate URL / tracking param / network **luôn tách trường riêng**
  (không hardcode nối chuỗi) — dùng `buildAffiliateUrl()`. Khi
  `officialUrl` trùng với một `retailerLinks[].affiliateUrl` (retailer
  chính là nhà sản xuất), phải bọc link đó qua `buildAffiliateUrl()` +
  `rel="sponsored"` luôn, không để 1 link trùng đích nhưng thiếu tracking
  — tránh rò rỉ hoa hồng.
- **Không tự fabricate** rating (`ratings.overall`) hay `bestPickLabel`
  để "cho có nội dung" — nếu chưa có căn cứ đánh giá thật, để trống, chờ
  Editorial Selection Framework/đánh giá thật.
- **`SeedProduct.occasionSlugs` (và tương tự `categorySlugs`) ghi ĐÈ TOÀN
  BỘ mỗi lần seed, không merge** — `seedProducts` trong `src/seed/import.ts`
  set thẳng `occasions: row.occasionSlugs?.map(...)`, không cộng dồn với
  occasion đã có sẵn trên record. Hệ quả: mỗi khi sửa/thêm 1
  `SeedProduct` đã tồn tại (kể cả chỉ để backport dữ liệu cũ vào
  `imported.ts`, không đổi ý nghĩa), **PHẢI liệt kê ĐẦY ĐỦ mọi occasion
  hiện có** của sản phẩm đó, không chỉ occasion mới muốn thêm — thiếu 1
  occasion trong danh sách = xoá âm thầm occasion đó khỏi DB lần seed
  tiếp theo. Đã gặp thật (2026-07-31): backport 7 sản phẩm ApoloSign vào
  `imported.ts` chỉ ghi `["christmas","black-friday"]` cho 3 portable TV
  (quên "back-to-school" đang thêm), rồi ở phiên bản sau ghi
  `["christmas","back-to-school"]` (quên "black-friday" đã có sẵn) —
  chạy `npm run seed` xoá mất Black Friday khỏi cả 3 sản phẩm cho tới khi
  phát hiện qua kiểm tra sau-seed và sửa lại. **Luôn kiểm tra occasion
  hiện tại của sản phẩm trong DB trước khi viết `occasionSlugs`** cho 1
  sản phẩm đã tồn tại, và luôn tự verify occasion sau mỗi lần chạy seed
  ảnh hưởng sản phẩm không phải mới tinh.
- **Mô tả sản phẩm PHẢI viết bằng giọng riêng của site — không copy
  nguyên văn quảng cáo retailer (chốt sau đợt content-audit StationeryPal
  2026-08-03):** mọi `SeedProduct` import từ nay về sau bắt buộc:
  1. `description`/`excerpt` viết lại bằng giọng trung lập — không copy
     cấu trúc câu, giọng bán hàng, hay emoji quảng cáo từ trang gốc của
     nhà bán, dù có thể lấy spec/feature thật từ đó.
  2. Gắn đúng nhãn thực tế: "Hands-on tested" chỉ khi thực sự có test tay
     (thể hiện qua field `testingNotes` có nội dung thật), mặc định
     "Based on research" nếu chưa test tay. Nhãn suy ra tự động từ
     `testingNotes` có nội dung hay không — không cần field mới.
  3. Có `pros`/`cons` (field có sẵn) dựa trên spec thật, và 1 câu
     `bestFor` (field trên `Products`, thêm ở migration
     `20260803_080946_add_product_best_for`) nêu đối tượng phù hợp nhất —
     giọng Wirecutter/RTINGS, thực dụng, không hoa mỹ.
  4. **TUYỆT ĐỐI không bịa `ratingOverall`/Community Rating** nếu chưa có
     dữ liệu đánh giá thật — để trống hoàn toàn.

  Vi phạm này đã xảy ra thật: 31 sản phẩm trong batch StationeryPal (nhập
  trước khi rule này tồn tại) copy nguyên văn quảng cáo kèm emoji quảng
  cáo — case điển hình là Kokuyo Mag CRITZ Pencil Case (13 emoji, "Say
  hello to...But wait, there's more!"), mâu thuẫn trực tiếp với cam kết
  công khai "Independently tested" / "based on research" trên trang chủ
  và trang About. Đã audit toàn catalog, phân loại, và viết lại toàn bộ
  31 sản phẩm theo 3 đợt (xem commit `3284a8e`, `7a1bc54`, `f214822`).

## 9. Coding Rules

- Mọi thay đổi code: `npx tsc --noEmit` + `npm run lint` + `npm run build`
  sạch trước khi báo hoàn thành. Nếu là thay đổi hiển thị cho người dùng,
  browser-verify trên dev server với data thật (không chỉ tin build pass).
- Tái sử dụng component/collection/helper đã có trước khi tạo mới
  (`AffiliateDisclosure`, `QuickAnswerTable`, `ProductCard`,
  `buildAffiliateUrl`, `formatDate`...) — không viết lại logic tương tự
  rải rác nhiều nơi.
- JSON-LD/structured data: không nhồi `aggregateRating` khi không có
  `reviewCount` thật (vi phạm chính sách Google) — chỉ dùng `review` cho
  điểm đánh giá biên tập nội bộ. Khi cần xác nhận tuân thủ, kiểm tra trực
  tiếp tài liệu Google thay vì suy đoán.
- Git: commit nhỏ theo từng thay đổi logic, không `git add -A`/`.`,
  không push khi chưa được yêu cầu rõ, chỉ amend khi được yêu cầu rõ.

## 10. Working Mode

- Báo cáo ngắn gọn kiểu "đã làm / file thay đổi / bước tiếp theo", không
  lặp lại giải thích những quyết định đã chốt.
- Với thay đổi có hệ quả thật (publish sản phẩm, di chuyển vị trí UI, xoá
  nội dung, push code) — trình bày phân tích/kết quả kiểm tra trước, chờ
  xác nhận rồi mới thực hiện, trừ khi đã được uỷ quyền rõ trong phạm vi cụ
  thể đó.
- Khi đề xuất cải tiến kiến trúc/UX ngoài phạm vi task hiện tại — chỉ nêu
  phát hiện, không tự thực hiện, chờ chị quyết định (xem mục 7).
