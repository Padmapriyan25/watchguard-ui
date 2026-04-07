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
import { AllCommunityModule, type ColDef } from 'ag-grid-community';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import type {
  DataTableProps,
} from './DataTable.types';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

export default function DataTable<T>({
  rows,
  columns,
  getRowKey,
  mobileCardRenderer,
  emptyMessage = 'No records found.',
  getSearchText,
  toolbar,
  pagination,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState<number>(pagination?.defaultPageSize ?? 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDateValue, setSelectedDateValue] = useState<string>(toolbar?.defaultDateValue ?? 'all');
  const [selectedFilterValue, setSelectedFilterValue] = useState<string>(toolbar?.defaultFilterValue ?? 'all');

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearch = getSearchText
        ? (() => {
            const query = searchQuery.trim().toLowerCase();
            return !query || getSearchText(row).toLowerCase().includes(query);
          })()
        : true;

      const matchesDate =
        toolbar?.dateFilterFn && selectedDateValue !== 'all'
          ? toolbar.dateFilterFn(row, selectedDateValue)
          : true;

      const matchesFilter =
        toolbar?.filterFn && selectedFilterValue !== 'all'
          ? toolbar.filterFn(row, selectedFilterValue)
          : true;

      return matchesSearch && matchesDate && matchesFilter;
    });
  }, [getSearchText, rows, searchQuery, selectedDateValue, selectedFilterValue, toolbar]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, pageSize, selectedDateValue, selectedFilterValue]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRows.slice(start, start + pageSize);
  }, [currentPage, filteredRows, pageSize]);

  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;
  const hasToolbar = Boolean(toolbar?.showDateFilter || toolbar?.showFilterButton || toolbar?.showSearch);
  const hasPagination = Boolean(pagination?.show ?? Boolean(pagination));
  const columnDefs = useMemo<ColDef<T>[]>(
    () =>
      columns.map((column) => ({
        colId: column.key,
        headerName: column.header,
        sortable: column.sortable ?? true,
        resizable: column.resizable ?? true,
        minWidth: column.minWidth ?? 140,
        width: column.width,
        flex: column.flex ?? 1,
        headerClass: column.headerClassName,
        cellClass: column.cellClassName,
        cellRenderer: (params: { data: T }) => column.cell(params.data),
      })),
    [columns]
  );
  const defaultColDef = useMemo<ColDef<T>>(
    () => ({
      resizable: true,
      sortable: true,
      suppressMovable: true,
    }),
    []
  );

  return (
    <>
      {hasToolbar ? (
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {toolbar?.showDateFilter ? (
            toolbar.dateOptions?.length ? (
              <label className="relative inline-flex items-center">
                <CalendarDays className="pointer-events-none absolute left-0 h-4 w-4 text-[#7aa7bf]" />
                <select
                  value={selectedDateValue}
                  onChange={(event) => {
                    setSelectedDateValue(event.target.value);
                    toolbar.onDateValueChange?.(event.target.value);
                  }}
                  className="appearance-none bg-transparent pl-6 pr-6 text-[12px] font-medium text-[#40505a] outline-none"
                >
                  {toolbar.dateOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-0 h-4 w-4 text-[#7aa7bf]" />
              </label>
            ) : (
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[#40505a]"
              >
                <CalendarDays className="h-4 w-4 text-[#7aa7bf]" />
                <span>{toolbar.dateLabel}</span>
                <ChevronDown className="h-4 w-4 text-[#7aa7bf]" />
              </button>
            )
          ) : (
            <div />
          )}

          {toolbar?.showFilterButton || toolbar?.showSearch ? (
            <div className="flex items-center gap-3 md:min-w-[280px]">
              {toolbar?.showFilterButton ? (
                toolbar.filterOptions?.length ? (
                  <label className="relative">
                    <Filter className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#7aa7bf]" />
                    <select
                      value={selectedFilterValue}
                      onChange={(event) => {
                        setSelectedFilterValue(event.target.value);
                        toolbar.onFilterValueChange?.(event.target.value);
                      }}
                      className="h-9 min-w-[132px] appearance-none rounded-sm border border-[#d6dde3] bg-white pl-9 pr-8 text-[12px] text-[#38444d] outline-none"
                      aria-label="Filter table data"
                    >
                      {toolbar.filterOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[#7aa7bf]" />
                  </label>
                ) : (
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#d6dde3] text-[#7aa7bf] transition hover:bg-[#f6fbfe]"
                    aria-label="Filter table data"
                  >
                    <Filter className="h-4 w-4" />
                  </button>
                )
              ) : null}
              {toolbar?.showSearch && getSearchText ? (
                <label className="relative block flex-1">
                  <input
                    type="search"
                    placeholder={toolbar?.searchPlaceholder ?? 'Search'}
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="h-9 w-full rounded-sm border border-[#d6dde3] bg-white pl-3 pr-10 text-[12px] text-[#38444d] outline-none placeholder:text-[#8a98a3] focus:border-[#9fc0d3]"
                  />
                  <Search className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#7aa7bf]" />
                </label>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="hidden md:block">
        {paginatedRows.length ? (
          <AgGridProvider modules={[AllCommunityModule]}>
            <div className="ag-theme-quartz data-table-grid overflow-hidden rounded-2xl border border-[#d7dee4] bg-white shadow-sm">
              <AgGridReact<T>
                rowData={paginatedRows}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                domLayout="autoHeight"
                headerHeight={48}
                rowHeight={48}
                animateRows={false}
                suppressCellFocus
                suppressRowHoverHighlight
                getRowId={(params) => getRowKey(params.data)}
              />
            </div>
          </AgGridProvider>
        ) : (
          <div className="rounded-sm border border-[#cfd6dc] bg-white px-4 py-8 text-center text-[12px] text-[#6f7c86]">
            {emptyMessage}
          </div>
        )}
      </div>

      <div className="grid gap-3 md:hidden">
        {paginatedRows.length ? (
          paginatedRows.map((row) =>
            mobileCardRenderer ? (
              <div key={getRowKey(row)}>{mobileCardRenderer(row)}</div>
            ) : (
              <article key={getRowKey(row)} className="rounded-xl border border-[#d8dfe5] bg-white p-4 shadow-sm">
                {columns.map((column) => (
                  <div key={column.key} className="mt-2 first:mt-0">
                    <p className="text-[11px] font-medium text-[#6b7882]">{column.header}</p>
                    <div className="mt-1 text-[12px] text-[#26323a]">{column.cell(row)}</div>
                  </div>
                ))}
              </article>
            )
          )
        ) : (
          <article className="rounded-xl border border-[#d8dfe5] bg-white p-4 text-[12px] text-[#6f7c86] shadow-sm">
            {emptyMessage}
          </article>
        )}
      </div>

      {hasPagination ? (
        <div className="mt-4 flex flex-col gap-3 border-t border-[#e8edf1] pt-4 text-[11px] text-[#5c6973] md:flex-row md:items-center md:justify-end">
          <div className="flex items-center gap-4">
            <span>{`${filteredRows.length} ${pagination?.totalRecordsSuffix ?? 'total records'}`}</span>
            <span>{`${totalPages} ${pagination?.totalPagesSuffix ?? 'pages'}`}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex h-8 min-w-8 items-center justify-center rounded-sm border border-[#d6dde3] bg-white px-3 text-[12px] text-[#3d4952]">
              {currentPage}
            </div>
            <label className="relative">
              <select
                value={pageSize}
                onChange={(event) => setPageSize(Number(event.target.value))}
                className="h-8 min-w-16 appearance-none rounded-sm border border-[#d6dde3] bg-white px-3 pr-8 text-[12px] text-[#3d4952] outline-none"
              >
                {(pagination?.pageSizeOptions ?? [10, 25, 50]).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-[#7aa7bf]" />
            </label>
            <span>{pagination?.pageSizeLabel ?? 'Per page'}</span>
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
              {pagination?.backLabel ?? 'Back'}
            </button>
            <button
              type="button"
              className="transition hover:text-[#4c7993] disabled:cursor-not-allowed disabled:text-[#bfd2de]"
              disabled={!canGoForward}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
            >
              {pagination?.nextLabel ?? 'Next'}
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
      ) : null}
    </>
  );
}
