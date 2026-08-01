import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  /** Path with no query string, e.g. "/christmas" or "/categories/home-fragrance". */
  basePath: string;
};

const pageHref = (basePath: string, page: number) => (page <= 1 ? basePath : `${basePath}?page=${page}`);

const pillClass =
  "rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors duration-200";

export function Pagination({ currentPage, totalPages, hasNextPage, hasPrevPage, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-3">
      {hasPrevPage ? (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          className={`${pillClass} cursor-pointer bg-surface text-foreground hover:border-accent hover:text-accent`}
        >
          ← Previous
        </Link>
      ) : (
        <span aria-disabled="true" className={`${pillClass} text-muted-foreground opacity-50`}>
          ← Previous
        </span>
      )}
      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      {hasNextPage ? (
        <Link
          href={pageHref(basePath, currentPage + 1)}
          className={`${pillClass} cursor-pointer bg-surface text-foreground hover:border-accent hover:text-accent`}
        >
          Next →
        </Link>
      ) : (
        <span aria-disabled="true" className={`${pillClass} text-muted-foreground opacity-50`}>
          Next →
        </span>
      )}
    </nav>
  );
}
