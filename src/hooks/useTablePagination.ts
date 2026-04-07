import { useEffect, useMemo, useState } from 'react';

export type UseTablePaginationConfig<T> = {
  rows: T[];
  defaultPageSize?: number;
  debugLabel?: string;
};

export type UseTablePaginationResult<T> = {
  paginatedRows: T[];
  pageSize: number;
  setPageSize: (size: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  canGoBack: boolean;
  canGoForward: boolean;
  goToFirstPage: () => void;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToLastPage: () => void;
};

export function useTablePagination<T>({
  rows,
  defaultPageSize = 10,
  debugLabel = 'TablePagination',
}: UseTablePaginationConfig<T>): UseTablePaginationResult<T> {
  const [pageSize, setPageSizeState] = useState(defaultPageSize);
  const [currentPage, setCurrentPageState] = useState(1);

  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));

  useEffect(() => {
    console.log(`[${debugLabel}] Rows/page size changed. Resetting to page 1.`);
    setCurrentPageState(1);
  }, [rows, pageSize, debugLabel]);

  useEffect(() => {
    setCurrentPageState((page) => {
      const nextPage = Math.min(page, totalPages);
      if (nextPage !== page) {
        console.log(`[${debugLabel}] Clamping current page from ${page} to ${nextPage}.`);
      }
      return nextPage;
    });
  }, [totalPages, debugLabel]);

  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const result = rows.slice(start, start + pageSize);

    console.log(
      `[${debugLabel}] Paginating rows: page=${currentPage}, pageSize=${pageSize}, showing=${result.length}`
    );

    return result;
  }, [rows, currentPage, pageSize, debugLabel]);

  const setPageSize = (size: number) => {
    console.log(`[${debugLabel}] Page size changed:`, size);
    setPageSizeState(size);
  };

  const setCurrentPage = (page: number) => {
    console.log(`[${debugLabel}] Current page changed:`, page);
    setCurrentPageState(page);
  };

  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  const goToFirstPage = () => setCurrentPage(1);
  const goToPreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1));
  const goToNextPage = () => setCurrentPage(Math.min(totalPages, currentPage + 1));
  const goToLastPage = () => setCurrentPage(totalPages);

  return {
    paginatedRows,
    pageSize,
    setPageSize,
    currentPage,
    setCurrentPage,
    totalPages,
    canGoBack,
    canGoForward,
    goToFirstPage,
    goToPreviousPage,
    goToNextPage,
    goToLastPage,
  };
}
