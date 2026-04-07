import {
  ChevronLeft,
  Download,
} from 'lucide-react';
import { invoicePageData, type InvoiceRow } from '../../data/mockData';
import DataTable, { type DataTableColumn } from '../../components/common/DataTable';

const invoiceDateOptions = [
  { label: 'Today: 2025-02-07', value: '2025-02-07' },
  { label: 'All Dates', value: 'all' },
  ...Array.from(new Set(invoicePageData.rows.map((row) => row.issueDate)))
    .filter((date) => date !== '2025-02-07')
    .map((date) => ({ label: date, value: date })),
];

const invoiceFilterOptions = [
  { label: 'All Invoices', value: 'all' },
  { label: 'High Value', value: 'high-value' },
  { label: 'Network Security', value: 'network-security' },
  { label: 'Endpoint', value: 'endpoint' },
  { label: 'Recent Months', value: 'recent-months' },
];

const invoiceTableColumns: DataTableColumn<InvoiceRow>[] = [
  {
    key: 'name',
    header: invoicePageData.tableHeaders[0],
    cell: (row) => row.name,
  },
  {
    key: 'amount',
    header: invoicePageData.tableHeaders[1],
    cell: (row) => row.amount,
  },
  {
    key: 'issueDate',
    header: invoicePageData.tableHeaders[2],
    cell: (row) => row.issueDate,
  },
  {
    key: 'download',
    header: invoicePageData.tableHeaders[3],
    cell: (row) => (
      <button
        type="button"
        className="text-[#4e5862] transition hover:text-[#24313a]"
        aria-label={`Download ${row.name}`}
      >
        <Download className="h-4 w-4" />
      </button>
    ),
    cellClassName: 'w-[120px]',
  },
];

export default function InvoicePage() {
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
          <DataTable
            rows={invoicePageData.rows}
            toolbar={{
              dateLabel: invoicePageData.selectedDateLabel,
              dateOptions: invoiceDateOptions,
              defaultDateValue: 'all',
              dateFilterFn: (row, value) => row.issueDate === value,
              showFilterButton: true,
              filterOptions: invoiceFilterOptions,
              defaultFilterValue: 'all',
              filterFn: (row, value) => {
                switch (value) {
                  case 'high-value':
                    return Number(row.amount.replace(/[$,]/g, '')) >= 800;
                  case 'network-security':
                    return row.name.toLowerCase().includes('network-security');
                  case 'endpoint':
                    return row.name.toLowerCase().includes('endpoint');
                  case 'recent-months':
                    return row.issueDate >= '2025-06-01';
                  default:
                    return true;
                }
              },
              searchPlaceholder: invoicePageData.searchPlaceholder,
            }}
            pagination={invoicePageData.pagination}
            getSearchText={(row) => `${row.name} ${row.amount} ${row.issueDate}`}
            columns={invoiceTableColumns}
            getRowKey={(row) => row.id}
            emptyMessage="No invoices match your search."
            mobileCardRenderer={(row) => (
              <article className="rounded-xl border border-[#d8dfe5] bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-semibold text-[#26323a]">{row.name}</p>
                    <p className="mt-1 text-[11px] text-[#63707a]">{row.issueDate}</p>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 text-[#4e5862] transition hover:text-[#24313a]"
                    aria-label={`Download ${row.name}`}
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 text-[12px] text-[#47545d]">
                  <span className="font-medium text-[#6b7882]">Amount: </span>
                  <span className="font-semibold text-[#26323a]">{row.amount}</span>
                </div>
              </article>
            )}
          />
        </div>
      </div>
    </section>
  );
}
