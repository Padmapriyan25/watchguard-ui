import { useState } from 'react';
import { AlertCircle, ChevronRight, FileStack, RefreshCw, ShieldAlert } from 'lucide-react';
import { dashboardPageData } from '../../data/mockData';
import ActionCards from './ActionCards';
import HeroHeader from './HeroHeader';
import MetricCards from './MetricCards';
import ProductPanel from './ProductPanel';
import ProtectionStatusTable from './ProtectionStatusTable';
import SecurityStatusPanel from './SecurityStatusPanel';
import UpgradePanel from './UpgradePanel';

function EmptyDashboardTab({ activeTab }: { activeTab: 'Threats' | 'Licenses' }) {
  const placeholder = dashboardPageData.tabPlaceholders[activeTab];
  const Icon = activeTab === 'Threats' ? ShieldAlert : FileStack;

  return (
    <div className="px-6 py-5">
      <article className="rounded-[20px] border border-[#dde5ec] bg-gradient-to-br from-white to-[#f7fafc] p-8 shadow-[0_14px_32px_rgba(15,23,42,0.05)]">
        <div className="flex max-w-2xl items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef6fb] text-[#5f92ad]">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7ca5bb]">{activeTab}</p>
            <h2 className="mt-2 text-[1.35rem] font-semibold tracking-[-0.03em] text-[#1f2937]">
              {placeholder.title}
            </h2>
            <p className="mt-3 text-[13px] leading-6 text-[#5f6c75]">{placeholder.description}</p>
            <p className="mt-3 text-[12px] font-medium text-[#7a8791]">{placeholder.helper}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'Home' | 'Threats' | 'Licenses'>('Home');

  return (
    <section className="bg-[#f7f9fb]">
      <div className="flex items-center justify-between border-x border-b border-[#efc9c9] bg-[#f7d7d7] px-4 py-3 text-[12px] text-[#7f4444] shadow-[inset_0_-1px_0_rgba(255,255,255,0.35)] sm:px-5 lg:px-6">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <p className="font-medium">{dashboardPageData.alertMessage}</p>
        </div>
        <ChevronRight className="h-4 w-4" />
      </div>

      <div className="border border-t-0 border-[#dde4ea] bg-white shadow-[0_20px_44px_rgba(15,23,42,0.05)]">
        <div className="flex flex-wrap items-start justify-between gap-3 px-4 pt-6 pb-4 sm:px-5 lg:px-6 lg:pt-7">
          <HeroHeader />
          <div className="flex items-center gap-2 pt-1 text-[12px] text-[#59666f] lg:pt-2">
            <RefreshCw className="h-4 w-4" />
            <span>{dashboardPageData.user.lastUpdated}</span>
          </div>
        </div>

        <div className="border-b border-[#e8edf2] px-4 sm:px-5 lg:px-6">
          <div className="flex gap-6 overflow-x-auto sm:gap-8 lg:gap-10">
            {dashboardPageData.tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab.label as 'Home' | 'Threats' | 'Licenses')}
                className={[
                  'relative pb-3 text-[12px] font-medium whitespace-nowrap',
                  activeTab === tab.label ? 'text-[#202124]' : 'text-[#5e6a73]',
                ].join(' ')}
              >
                <span>{tab.label}</span>
                {tab.count ? (
                  <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full bg-[#f5d9dd] px-1.5 text-[10px] font-semibold text-[#a14e58]">
                    {tab.count}
                  </span>
                ) : null}
                {activeTab === tab.label ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#e44c3a]" />
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'Home' ? (
          <div className="grid items-start gap-3 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-3 self-start">
              <MetricCards />

              <div className="grid gap-3 lg:grid-cols-2">
                <SecurityStatusPanel />
                <UpgradePanel />
              </div>

              <ProtectionStatusTable />
            </div>

            <div className="space-y-3 self-start">
              <ProductPanel />
              <ActionCards />
            </div>
          </div>
        ) : (
          <EmptyDashboardTab activeTab={activeTab as 'Threats' | 'Licenses'} />
        )}
      </div>
    </section>
  );
}
