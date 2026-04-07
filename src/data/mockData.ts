import type { LucideIcon } from 'lucide-react';
import {
  Flame,
  LaptopMinimal,
  ShieldCheck,
  UserRound,
  Wifi,
  CircleGauge,
  CloudCog,
  Fingerprint,
  ScanEye,
  ShieldAlert,
  ShieldPlus,
  Sparkles,
  MessageCircleMore,
} from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type DashboardTab = {
  label: string;
  count?: number;
};

export type DashboardTabPlaceholder = {
  title: string;
  description: string;
  helper: string;
};

export type MetricCard = {
  title: string;
  value: number;
  subtitle: string;
  icon: LucideIcon;
};

export type StatusSegment = {
  label: string;
  value: number;
  color: string;
  arc?: number;
};

export type UpgradeStatus = {
  label: string;
  completed: number;
  total: number;
  color: string;
};

export type ProductItem = {
  name: string;
  accounts: string;
  owned: boolean;
  icon: LucideIcon;
};

export type ProtectionRow = {
  accountName: string;
  product: string;
  endpoints: number;
  status: Array<{
    color: string;
    width: string;
  }>;
};

export type ActionCard = {
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
  tint: string;
};

export type InvoiceRow = {
  id: string;
  name: string;
  amount: string;
  issueDate: string;
};

export const dashboardPageData = {
  navItems: [
    { label: 'Dashboard', href: '/' },
    { label: 'Monitor', href: '/monitor' },
    { label: 'Configure', href: '/configure' },
    { label: 'Inventory', href: '/inventory' },
    { label: 'Administration', href: '/administration' },
    { label: 'Invoice', href: '/invoice' },
  ] satisfies NavItem[],
  alertMessage:
    "To activate your subscription billing, please provide a payment method. You'll be taken to our secure payment provider to finalize this process.",
  user: {
    initials: 'JS',
    name: 'Hi John',
    organization: 'WatchGuard Cloud Demo',
    accounts: '47 Accounts',
    delegatedAccounts: '7 Delegated Accounts',
    lastUpdated: 'Last update 15 minutes ago',
  },
  tabs: [
    { label: 'Home' },
    { label: 'Threats' },
    { label: 'Licenses', count: 2 },
  ] satisfies DashboardTab[],
  tabPlaceholders: {
    Threats: {
      title: 'Threat visibility is coming soon',
      description:
        'This area will show detections, suspicious activity, and recommended next actions across your WatchGuard accounts.',
      helper: 'For now, this tab is ready and functional with a temporary empty state.',
    },
    Licenses: {
      title: 'License insights will appear here',
      description:
        'This section will help you review license usage, renewal status, and account-level subscription coverage.',
      helper: 'For now, this tab is ready and functional with a temporary empty state.',
    },
  } satisfies Record<string, DashboardTabPlaceholder>,
  metrics: [
    {
      title: 'Cloud-Managed Fireboxes',
      value: 18,
      subtitle: 'In 5 accounts',
      icon: Flame,
    },
    {
      title: 'Locally-Managed Fireboxes',
      value: 11,
      subtitle: 'In 5 accounts',
      icon: CircleGauge,
    },
    {
      title: 'Access Points',
      value: 7,
      subtitle: 'In 5 accounts',
      icon: Wifi,
    },
    {
      title: 'Protected Endpoints',
      value: 208,
      subtitle: 'In 15 accounts',
      icon: LaptopMinimal,
    },
    {
      title: 'Protected Users',
      value: 87,
      subtitle: 'In 15 accounts',
      icon: UserRound,
    },
  ] satisfies MetricCard[],
  deviceStatusTotal: 36,
  deviceStatus: [
    { label: 'Connected', value: 7, color: '#54a35d', arc: 18 },
    { label: 'Not Connected', value: 13, color: '#d83025', arc: 9 },
    { label: 'Inactive', value: 15, color: '#888888', arc: 13 },
    { label: 'Never Connected', value: 3, color: '#111111', arc: 60 },
  ] satisfies StatusSegment[],
  firmware: {
    headline: 19,
    subtitle: 'Devices ready to upgrade now',
    rows: [
      { label: 'Fireboxes', completed: 12, total: 18, color: '#7dd9bc' },
      { label: 'Access Points', completed: 7, total: 7, color: '#9fc5ff' },
    ] satisfies UpgradeStatus[],
  },
  products: [
    { name: 'Network Security', accounts: 'In 5 accounts', owned: true, icon: ShieldCheck },
    { name: 'Endpoint Security', accounts: 'In 5 accounts', owned: true, icon: LaptopMinimal },
    { name: 'AuthPoint', accounts: 'In 4 accounts', owned: true, icon: Fingerprint },
    { name: 'FireCloud', accounts: 'In 0 accounts', owned: false, icon: CloudCog },
    { name: 'ThreatSync+', accounts: 'In 0 accounts', owned: false, icon: ShieldAlert },
    { name: 'MDR', accounts: 'In 5 accounts', owned: true, icon: ScanEye },
  ] satisfies ProductItem[],
  protectionRows: [
    {
      accountName: 'Paris',
      product: 'Prime',
      endpoints: 23,
      status: [
        { color: '#82dcc0', width: '62%' },
        { color: '#7faef7', width: '10%' },
        { color: '#4f8fe8', width: '6%' },
        { color: '#825be5', width: '22%' },
      ],
    },
    {
      accountName: 'Bilbao',
      product: 'Basic',
      endpoints: 17,
      status: [
        { color: '#82dcc0', width: '85%' },
        { color: '#9fc5ff', width: '15%' },
      ],
    },
    {
      accountName: 'Roma',
      product: 'Basic',
      endpoints: 11,
      status: [
        { color: '#82dcc0', width: '68%' },
        { color: '#7faef7', width: '12%' },
        { color: '#326cae', width: '20%' },
      ],
    },
    {
      accountName: 'New York',
      product: 'Prime',
      endpoints: 20,
      status: [
        { color: '#82dcc0', width: '84%' },
        { color: '#9fc5ff', width: '16%' },
      ],
    },
    {
      accountName: 'Manchester',
      product: 'Basic',
      endpoints: 33,
      status: [
        { color: '#82dcc0', width: '67%' },
        { color: '#98b8ea', width: '14%' },
        { color: '#5c90d3', width: '19%' },
      ],
    },
  ] satisfies ProtectionRow[],
  actionCards: [
    {
      title: 'Try New Products',
      description: 'Explore additional products.',
      cta: 'Start a trial',
      icon: Sparkles,
      tint: 'from-[#fff4ef] to-[#f4fbfb]',
    },
    {
      title: 'Provide Your Feedback',
      description: 'We want to know what you think about our products.',
      cta: 'Provide feedback',
      icon: MessageCircleMore,
      tint: 'from-[#eef9fc] to-[#f7fbff]',
    },
  ] satisfies ActionCard[],
  tableSummary: 'Showing 5 of 30 rows.',
  tableLinkLabel: 'View All',
  badges: {
    owned: 'Owned',
    notOwned: 'Not Owned',
  },
  sidePanelTitle: 'My Products',
  sidePanelIcon: ShieldPlus,
} as const;

export const invoicePageData = {
  title: 'Invoice History',
  backLabel: 'Back',
  selectedDateLabel: 'Today: 2025-02-07',
  searchPlaceholder: 'Search',
  tableHeaders: ['Invoice', 'Invoice Amount', 'Issue Date', 'Download .CSV'],
  pagination: {
    totalRecordsSuffix: 'total records',
    totalPagesSuffix: 'pages',
    defaultPageSize: 10,
    pageSizeOptions: [10, 25, 50],
    pageSizeLabel: 'Per page',
    backLabel: 'Back',
    nextLabel: 'Next',
  },
  rows: [
    { id: 'invoice-1', name: 'WG-Subscription-Jan-2025.pdf', amount: '$752.55', issueDate: '2025-01-12' },
    { id: 'invoice-2', name: 'WG-Endpoint-Addons-Jan-2025.pdf', amount: '$186.40', issueDate: '2025-01-14' },
    { id: 'invoice-3', name: 'WG-Network-Security-Feb-2025.pdf', amount: '$942.10', issueDate: '2025-02-01' },
    { id: 'invoice-4', name: 'WG-AuthPoint-Feb-2025.pdf', amount: '$128.75', issueDate: '2025-02-03' },
    { id: 'invoice-5', name: 'WG-MDR-Feb-2025.pdf', amount: '$1,245.00', issueDate: '2025-02-05' },
    { id: 'invoice-6', name: 'WG-Wireless-Fleet-Feb-2025.pdf', amount: '$318.90', issueDate: '2025-02-07' },
    { id: 'invoice-7', name: 'WG-Cloud-Managed-Fireboxes-Mar-2025.pdf', amount: '$864.32', issueDate: '2025-03-02' },
    { id: 'invoice-8', name: 'WG-Delegated-Accounts-Mar-2025.pdf', amount: '$96.50', issueDate: '2025-03-06' },
    { id: 'invoice-9', name: 'WG-Inventory-Renewal-Mar-2025.pdf', amount: '$410.20', issueDate: '2025-03-09' },
    { id: 'invoice-10', name: 'WG-Support-Services-Mar-2025.pdf', amount: '$220.00', issueDate: '2025-03-11' },
    { id: 'invoice-11', name: 'WG-Subscription-Apr-2025.pdf', amount: '$783.55', issueDate: '2025-04-01' },
    { id: 'invoice-12', name: 'WG-ThreatSync-Upgrade-Apr-2025.pdf', amount: '$154.25', issueDate: '2025-04-04' },
    { id: 'invoice-13', name: 'WG-FireCloud-Trial-Conversion-Apr-2025.pdf', amount: '$279.99', issueDate: '2025-04-08' },
    { id: 'invoice-14', name: 'WG-Endpoint-Expansion-Apr-2025.pdf', amount: '$532.60', issueDate: '2025-04-12' },
    { id: 'invoice-15', name: 'WG-Network-Security-May-2025.pdf', amount: '$1,018.45', issueDate: '2025-05-02' },
    { id: 'invoice-16', name: 'WG-Access-Points-May-2025.pdf', amount: '$267.80', issueDate: '2025-05-05' },
    { id: 'invoice-17', name: 'WG-User-Protection-May-2025.pdf', amount: '$349.10', issueDate: '2025-05-07' },
    { id: 'invoice-18', name: 'WG-Quarterly-Billing-Adjustment-May-2025.pdf', amount: '$89.35', issueDate: '2025-05-10' },
    { id: 'invoice-19', name: 'WG-Endpoint-Basic-May-2025.pdf', amount: '$214.95', issueDate: '2025-05-13' },
    { id: 'invoice-20', name: 'WG-Endpoint-Advanced-May-2025.pdf', amount: '$468.30', issueDate: '2025-05-16' },
    { id: 'invoice-21', name: 'WG-Inventory-Audit-May-2025.pdf', amount: '$74.50', issueDate: '2025-05-19' },
    { id: 'invoice-22', name: 'WG-Network-Security-Jun-2025.pdf', amount: '$998.15', issueDate: '2025-06-02' },
    { id: 'invoice-23', name: 'WG-MDR-Jun-2025.pdf', amount: '$1,310.00', issueDate: '2025-06-04' },
    { id: 'invoice-24', name: 'WG-AuthPoint-Jun-2025.pdf', amount: '$132.20', issueDate: '2025-06-06' },
    { id: 'invoice-25', name: 'WG-Wireless-Fleet-Jun-2025.pdf', amount: '$355.70', issueDate: '2025-06-08' },
    { id: 'invoice-26', name: 'WG-Cloud-Managed-Fireboxes-Jun-2025.pdf', amount: '$882.45', issueDate: '2025-06-10' },
    { id: 'invoice-27', name: 'WG-ThreatSync-Jun-2025.pdf', amount: '$165.80', issueDate: '2025-06-12' },
    { id: 'invoice-28', name: 'WG-Delegated-Accounts-Jun-2025.pdf', amount: '$109.90', issueDate: '2025-06-14' },
    { id: 'invoice-29', name: 'WG-FireCloud-Jun-2025.pdf', amount: '$294.35', issueDate: '2025-06-17' },
    { id: 'invoice-30', name: 'WG-Support-Services-Jun-2025.pdf', amount: '$220.00', issueDate: '2025-06-20' },
    { id: 'invoice-31', name: 'WG-Subscription-Jul-2025.pdf', amount: '$792.10', issueDate: '2025-07-01' },
    { id: 'invoice-32', name: 'WG-Endpoint-Expansion-Jul-2025.pdf', amount: '$548.40', issueDate: '2025-07-03' },
    { id: 'invoice-33', name: 'WG-Access-Points-Jul-2025.pdf', amount: '$281.65', issueDate: '2025-07-05' },
    { id: 'invoice-34', name: 'WG-User-Protection-Jul-2025.pdf', amount: '$362.75', issueDate: '2025-07-07' },
    { id: 'invoice-35', name: 'WG-Quarterly-Billing-Adjustment-Jul-2025.pdf', amount: '$94.20', issueDate: '2025-07-10' },
    { id: 'invoice-36', name: 'WG-Network-Security-Aug-2025.pdf', amount: '$1,024.90', issueDate: '2025-08-02' },
  ] satisfies InvoiceRow[],
} as const;
