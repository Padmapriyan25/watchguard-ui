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

export const dashboardPageData = {
  navItems: [
    { label: 'Dashboard', href: '/' },
    { label: 'Monitor', href: '/monitor' },
    { label: 'Configure', href: '/configure' },
    { label: 'Inventory', href: '/inventory' },
    { label: 'Administration', href: '/administration' },
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
  deviceStatus: [
    { label: 'Connected', value: 7, color: '#54a35d' },
    { label: 'Not Connected', value: 15, color: '#d83025' },
    { label: 'Inactive', value: 11, color: '#888888' },
    { label: 'Never Connected', value: 21, color: '#111111' },
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
