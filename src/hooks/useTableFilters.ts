import { useMemo, useState } from 'react';

export type UseTableFiltersConfig<T> = {
  rows: T[];
  searchFn?: (row: T, query: string) => boolean;
  dateFilterFn?: (row: T, value: string) => boolean;
  filterFn?: (row: T, value: string) => boolean;
  defaultDateValue?: string;
  defaultFilterValue?: string;
  debugLabel?: string;
};

export type UseTableFiltersResult<T> = {
  filteredRows: T[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDateValue: string;
  setSelectedDateValue: (value: string) => void;
  selectedFilterValue: string;
  setSelectedFilterValue: (value: string) => void;
};

export function useTableFilters<T>({
  rows,
  searchFn,
  dateFilterFn,
  filterFn,
  defaultDateValue = 'all',
  defaultFilterValue = 'all',
  debugLabel = 'TableFilters',
}: UseTableFiltersConfig<T>): UseTableFiltersResult<T> {
  const [searchQuery, setSearchQueryState] = useState('');
  const [selectedDateValue, setSelectedDateValueState] = useState(defaultDateValue);
  const [selectedFilterValue, setSelectedFilterValueState] = useState(defaultFilterValue);

  const filteredRows = useMemo(() => {
    let result = rows;

    console.log(`[${debugLabel}] Input rows count:`, result.length);

    if (searchQuery.trim() && searchFn) {
      result = result.filter((row) => searchFn(row, searchQuery.toLowerCase()));
      console.log(`[${debugLabel}] After search ("${searchQuery}"):`, result.length, 'rows');
    }

    if (selectedDateValue !== 'all' && dateFilterFn) {
      result = result.filter((row) => dateFilterFn(row, selectedDateValue));
      console.log(`[${debugLabel}] After date filter ("${selectedDateValue}"):`, result.length, 'rows');
    }

    if (selectedFilterValue !== 'all' && filterFn) {
      result = result.filter((row) => filterFn(row, selectedFilterValue));
      console.log(
        `[${debugLabel}] After custom filter ("${selectedFilterValue}"):`,
        result.length,
        'rows'
      );
    }

    console.log(`[${debugLabel}] Final filtered rows:`, result.length, result);
    return result;
  }, [
    rows,
    searchQuery,
    selectedDateValue,
    selectedFilterValue,
    searchFn,
    dateFilterFn,
    filterFn,
    debugLabel,
  ]);

  const setSearchQuery = (query: string) => {
    console.log(`[${debugLabel}] Search changed:`, query);
    setSearchQueryState(query);
  };

  const setSelectedDateValue = (value: string) => {
    console.log(`[${debugLabel}] Date filter changed:`, value);
    setSelectedDateValueState(value);
  };

  const setSelectedFilterValue = (value: string) => {
    console.log(`[${debugLabel}] Custom filter changed:`, value);
    setSelectedFilterValueState(value);
  };

  return {
    filteredRows,
    searchQuery,
    setSearchQuery,
    selectedDateValue,
    setSelectedDateValue,
    selectedFilterValue,
    setSelectedFilterValue,
  };
}
