import { useEffect, useMemo, useState } from 'react';
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Filter,
  Search,
} from 'lucide-react';
import { invoicePageData } from '../../data/mockData';
import InvoiceHistoryTable from './InvoiceHistoryTable';

export default function InvoicePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState<number>(invoicePageData.pagination.defaultPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRows = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return invoicePageData.rows;

    return invoicePageData.rows.filter(
      (row) =>
        row.name.toLowerCase().includes(query) ||
        row.amount.toLowerCase().includes(query) ||
        row.issueDate.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRows.slice(start, start + pageSize);
  }, [currentPage, filteredRows, pageSize]);

  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  return (
    <section className="w-full px-0 py-0">
      <div className="border-b border-[#d6dde3] border-x bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-3 border-b border-[#d6dde3] px-4 py-3 text-[14px] text-[#38444d] sm:px-5">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-[#6095b2] transition hover:text-[#416f88]"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{invoicePageData.backLabel}</span>
          </button>
          <span className="text-[#c7d0d6]">|</span>
          <h1 className="font-medium text-[#38444d]">{invoicePageData.title}</h1>
        </div>

        <div className="px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[12px] font-medium text-[#40505a]"
            >
              <CalendarDays className="h-4 w-4 text-[#7aa7bf]" />
              <span>{invoicePageData.selectedDateLabel}</span>
              <ChevronDown className="h-4 w-4 text-[#7aa7bf]" />
            </button>

            <div className="flex items-center gap-3 md:min-w-[280px]">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#d6dde3] text-[#7aa7bf] transition hover:bg-[#f6fbfe]"
                aria-label="Filter invoices"
              >
                <Filter className="h-4 w-4" />
              </button>
              <label className="relative block flex-1">
                <input
                  type="search"
                  placeholder={invoicePageData.searchPlaceholder}
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="h-9 w-full rounded-sm border border-[#d6dde3] bg-white pl-3 pr-10 text-[12px] text-[#38444d] outline-none placeholder:text-[#8a98a3] focus:border-[#9fc0d3]"
                />
                <Search className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#7aa7bf]" />
              </label>
            </div>
          </div>

          <div className="mt-4">
            <InvoiceHistoryTable rows={paginatedRows} />
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-[#e8edf1] pt-4 text-[11px] text-[#5c6973] md:flex-row md:items-center md:justify-end">
            <div className="flex items-center gap-4">
              <span>{`${filteredRows.length} ${invoicePageData.pagination.totalRecordsSuffix}`}</span>
              <span>{`${totalPages} ${invoicePageData.pagination.totalPagesSuffix}`}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex h-8 min-w-8 items-center justify-center rounded-sm border border-[#d6dde3] bg-white px-3 text-[12px] text-[#3d4952]">
                {currentPage}
              </div>
              <label className="relative">
                <select
                  value={pageSize}
                  onChange={(event) => {
                    setPageSize(Number(event.target.value));
                    setCurrentPage(1);
                  }}
                  className="h-8 min-w-16 appearance-none rounded-sm border border-[#d6dde3] bg-white px-3 pr-8 text-[12px] text-[#3d4952] outline-none"
                >
                  {invoicePageData.pagination.pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[#7aa7bf]" />
              </label>
              <span>{invoicePageData.pagination.pageSizeLabel}</span>
            </div>

            <div className="flex items-center gap-3 text-[#7aa7bf]">
              <button
                type="button"
                className="transition hover:text-[#4c7993] disabled:cursor-not-allowed disabled:text-[#bfd2de]"
                aria-label="First page"
                disabled={!canGoBack}
                onClick={() => setCurrentPage(1)}
              >
                <ChevronsLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="transition hover:text-[#4c7993] disabled:cursor-not-allowed disabled:text-[#bfd2de]"
                aria-label="Previous page"
                disabled={!canGoBack}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="transition hover:text-[#4c7993] disabled:cursor-not-allowed disabled:text-[#bfd2de]"
                disabled={!canGoBack}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              >
                {invoicePageData.pagination.backLabel}
              </button>
              <button
                type="button"
                className="transition hover:text-[#4c7993] disabled:cursor-not-allowed disabled:text-[#bfd2de]"
                disabled={!canGoForward}
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              >
                {invoicePageData.pagination.nextLabel}
              </button>
              <button
                type="button"
                className="transition hover:text-[#4c7993] disabled:cursor-not-allowed disabled:text-[#bfd2de]"
                aria-label="Next page"
                disabled={!canGoForward}
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              >
                <ChevronLeft className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                className="transition hover:text-[#4c7993] disabled:cursor-not-allowed disabled:text-[#bfd2de]"
                aria-label="Last page"
                disabled={!canGoForward}
                onClick={() => setCurrentPage(totalPages)}
              >
                <ChevronsRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
