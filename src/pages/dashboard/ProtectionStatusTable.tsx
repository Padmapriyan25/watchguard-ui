import { Shield } from 'lucide-react';
import { dashboardPageData } from '../../data/mockData';

export default function ProtectionStatusTable() {
  return (
    <article className="rounded-[18px] border border-[#dde5ec] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <div className="border-b border-[#e8edf2] px-4 py-4 sm:px-5">
        <h2 className="text-[13px] font-semibold text-[#33414c]">Endpoint Security Protection Status</h2>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-[720px] border-separate border-spacing-0 sm:min-w-full">
          <thead>
            <tr className="bg-[#fafcfd] text-left text-[11px] text-[#73808a]">
              <th className="px-4 py-3 font-semibold sm:px-5">Account Name</th>
              <th className="px-4 py-3 font-semibold sm:px-5">Product</th>
              <th className="px-4 py-3 font-semibold sm:px-5">Endpoints</th>
              <th className="px-4 py-3 font-semibold sm:px-5">Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboardPageData.protectionRows.map((row) => (
              <tr key={row.accountName} className="text-[12px] text-[#43505a]">
                <td className="border-t border-[#eef2f5] px-4 py-3.5 sm:px-5">
                  <div className="flex items-center gap-2 font-semibold text-[#27333b]">
                    <Shield className="h-4 w-4 text-[#7b8790]" />
                    {row.accountName}
                  </div>
                </td>
                <td className="border-t border-[#eef2f5] px-4 py-3.5 font-medium sm:px-5">{row.product}</td>
                <td className="border-t border-[#eef2f5] px-4 py-3.5 font-medium text-[#27333b] sm:px-5">{row.endpoints}</td>
                <td className="border-t border-[#eef2f5] px-4 py-3.5 sm:px-5">
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-[#edf1f5]">
                    {row.status.map((item, index) => (
                      <span key={`${row.accountName}-${index}`} style={{ width: item.width, backgroundColor: item.color }} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 p-4 md:hidden">
        {dashboardPageData.protectionRows.map((row) => (
          <article key={row.accountName} className="rounded-2xl border border-[#eef2f5] bg-[#fbfdfe] p-4">
            <div className="flex items-center gap-2 font-semibold text-[#27333b]">
              <Shield className="h-4 w-4 text-[#7b8790]" />
              <span>{row.accountName}</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-[12px] text-[#5d6972]">
              <div>
                <p className="font-medium text-[#7a8791]">Product</p>
                <p className="mt-1 font-semibold text-[#27333b]">{row.product}</p>
              </div>
              <div>
                <p className="font-medium text-[#7a8791]">Endpoints</p>
                <p className="mt-1 font-semibold text-[#27333b]">{row.endpoints}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="mb-2 text-[12px] font-medium text-[#7a8791]">Status</p>
              <div className="flex h-2.5 overflow-hidden rounded-full bg-[#edf1f5]">
                {row.status.map((item, index) => (
                  <span key={`${row.accountName}-${index}`} style={{ width: item.width, backgroundColor: item.color }} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center gap-2 px-4 py-4 text-[12px] text-[#5d6972] sm:px-5">
        <span>{dashboardPageData.tableSummary}</span>
        <button type="button" className="font-medium text-[#6f9eb8] transition hover:text-[#567f96]">
          {dashboardPageData.tableLinkLabel}
        </button>
      </div>
    </article>
  );
}
