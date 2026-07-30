export function RetailerCard({
  name,
  productCount,
  couponCode,
  couponDiscountPercent,
}: {
  name: string;
  productCount: number;
  couponCode?: string | null;
  couponDiscountPercent?: number | null;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
        <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
          {productCount} {productCount === 1 ? "product" : "products"}
        </span>
      </div>
      {couponCode && (
        <p className="text-sm text-muted-foreground">
          Use code <span className="font-mono font-semibold text-foreground">{couponCode}</span>
          {typeof couponDiscountPercent === "number" && ` for ${couponDiscountPercent}% off`}
        </p>
      )}
    </div>
  );
}
