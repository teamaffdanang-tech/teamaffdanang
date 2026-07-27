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
