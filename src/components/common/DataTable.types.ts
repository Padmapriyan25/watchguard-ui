import type { ReactNode } from 'react';

export type DataTableColumn<T> = {
  key: string;
  header: string;
  cell: (row: T) => ReactNode;
  headerClassName?: string;
  cellClassName?: string;
  width?: number;
  minWidth?: number;
  flex?: number;
  sortable?: boolean;
  resizable?: boolean;
};

export type DataTablePaginationConfig = {
  show?: boolean;
  defaultPageSize?: number;
  pageSizeOptions?: readonly number[];
  totalRecordsSuffix?: string;
  totalPagesSuffix?: string;
  pageSizeLabel?: string;
  backLabel?: string;
  nextLabel?: string;
};

export type DataTableFilterOption = {
  label: string;
  value: string;
};

export type DataTableToolbarConfig<T> = {
  showDateFilter?: boolean;
  dateLabel?: string;
  dateOptions?: ReadonlyArray<DataTableFilterOption>;
  defaultDateValue?: string;
  onDateValueChange?: (value: string) => void;
  dateFilterFn?: (row: T, value: string) => boolean;
  showFilterButton?: boolean;
  filterOptions?: ReadonlyArray<DataTableFilterOption>;
  defaultFilterValue?: string;
  onFilterValueChange?: (value: string) => void;
  filterFn?: (row: T, value: string) => boolean;
  showSearch?: boolean;
  searchPlaceholder?: string;
};

export type DataTableProps<T> = {
  rows: T[];
  columns: DataTableColumn<T>[];
  getRowKey: (row: T) => string;
  mobileCardRenderer?: (row: T) => ReactNode;
  emptyMessage?: string;
  getSearchText?: (row: T) => string;
  toolbar?: DataTableToolbarConfig<T>;
  pagination?: DataTablePaginationConfig;
};
