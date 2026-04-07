import { Download } from 'lucide-react';
import { invoicePageData, type InvoiceRow } from '../../data/mockData';

type InvoiceHistoryTableProps = {
  rows: InvoiceRow[];
};

export default function InvoiceHistoryTable({ rows }: InvoiceHistoryTableProps) {
  return (
    <>
      <div className="hidden overflow-x-auto rounded-sm border border-[#cfd6dc] bg-white md:block">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#f3f3f3] text-left text-[12px] text-[#525e67]">
              {invoicePageData.tableHeaders.map((header) => (
                <th
                  key={header}
                  className="border-r border-[#cfd6dc] px-4 py-3 font-medium last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="text-[12px] text-[#38444d]">
                <td className="border-t border-[#edf1f4] px-4 py-3">{row.name}</td>
                <td className="border-t border-[#edf1f4] px-4 py-3">{row.amount}</td>
                <td className="border-t border-[#edf1f4] px-4 py-3">{row.issueDate}</td>
                <td className="border-t border-[#edf1f4] px-4 py-3">
                  <button
                    type="button"
                    className="text-[#4e5862] transition hover:text-[#24313a]"
                    aria-label={`Download ${row.name}`}
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:hidden">
        {rows.map((row) => (
          <article key={row.id} className="rounded-xl border border-[#d8dfe5] bg-white p-4 shadow-sm">
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
        ))}
      </div>
    </>
  );
}
