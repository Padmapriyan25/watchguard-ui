import { useTableFilters, type UseTableFiltersConfig } from './useTableFilters';
import { useTablePagination } from './useTablePagination';

export type UseTableDataConfig<T> = UseTableFiltersConfig<T> & {
  defaultPageSize?: number;
};

export type UseTableDataResult<T> = {
  filteredRows: T[];
  paginatedRows: T[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDateValue: string;
  setSelectedDateValue: (value: string) => void;
  selectedFilterValue: string;
  setSelectedFilterValue: (value: string) => void;
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

/**
 * Small composition hook that combines filtering and pagination.
 * This keeps each hook focused and easier to learn/debug.
 */
export function useTableData<T>({
  rows,
  searchFn,
  dateFilterFn,
  filterFn,
  defaultDateValue = 'all',
  defaultFilterValue = 'all',
  debugLabel = 'Table',
  defaultPageSize = 10,
}: UseTableDataConfig<T>): UseTableDataResult<T> {
  const filters = useTableFilters({
    rows,
    searchFn,
    dateFilterFn,
    filterFn,
    defaultDateValue,
    defaultFilterValue,
    debugLabel: `${debugLabel}:Filters`,
  });

  const pagination = useTablePagination({
    rows: filters.filteredRows,
    defaultPageSize,
    debugLabel: `${debugLabel}:Pagination`,
  });

  return {
    filteredRows: filters.filteredRows,
    paginatedRows: pagination.paginatedRows,
    searchQuery: filters.searchQuery,
    setSearchQuery: filters.setSearchQuery,
    selectedDateValue: filters.selectedDateValue,
    setSelectedDateValue: filters.setSelectedDateValue,
    selectedFilterValue: filters.selectedFilterValue,
    setSelectedFilterValue: filters.setSelectedFilterValue,
    pageSize: pagination.pageSize,
    setPageSize: pagination.setPageSize,
    currentPage: pagination.currentPage,
    setCurrentPage: pagination.setCurrentPage,
    totalPages: pagination.totalPages,
    canGoBack: pagination.canGoBack,
    canGoForward: pagination.canGoForward,
    goToFirstPage: pagination.goToFirstPage,
    goToPreviousPage: pagination.goToPreviousPage,
    goToNextPage: pagination.goToNextPage,
    goToLastPage: pagination.goToLastPage,
  };
}
