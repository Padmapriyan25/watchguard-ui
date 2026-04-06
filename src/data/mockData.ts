export const headerUserData = {
  name: 'Acme IT Solutions',
  role: 'Gold Partner',
  initials: 'AI',
  email: 'john.doe@msp-portal.com'
};

export const dashboardMetrics = {
  activeCustomers: { count: 124, subtext: '+12 this month' },
  activeSubscriptions: { count: 856, subtext: '+45 this month' },
  totalLicenses: { count: 45000, utilized: 42300, available: 2700 },
  outstandingBalance: { amount: 12450, dueText: '2 invoices overdue' },
  renewalsDue: { count: 24, nextDate: 'Due in next 30 days' }
};

export const subscriptionsData = [
  { 
    id: 'SUB-001',
    customer: 'TechCorp Industries',
    product: 'AuthPoint MFA',
    productCode: 'PWTGISPNT1YRB5',
    category: { type: 'identity', name: 'Identity' },
    term: '1 Year',
    licenses: 200,
    utilized: 178,
    status: 'Active',
    autoRenew: true,
    renewal: '6/30/2025'
  },
  { 
    id: 'SUB-002',
    customer: 'Financial Services Group',
    product: 'Firebox T45 Bundle',
    productCode: 'T55BASAPT1YR',
    category: { type: 'network', name: 'Network Security' },
    term: '1 Year',
    licenses: 50,
    utilized: 50,
    status: 'Expiring Soon',
    autoRenew: false,
    renewal: '5/3/2025'
  },
  { 
    id: 'SUB-003',
    customer: 'TechCorp Industries',
    product: 'DNSWatchGO',
    productCode: 'PWGDNSWATCHGO1YRB4',
    category: { type: 'network', name: 'Network Security' },
    term: '1 Year',
    licenses: 500,
    utilized: 340,
    status: 'Active',
    autoRenew: true,
    renewal: '12/15/2025'
  },
  {
    id: 'SUB-004',
    customer: 'Healthcare Plus',
    product: 'WatchGuard Cloud',
    productCode: 'PWGCLOUD1YRB1',
    category: { type: 'cloud', name: 'Cloud' },
    term: '1 Year',
    licenses: 100,
    utilized: 88,
    status: 'Active',
    autoRenew: true,
    renewal: '3/10/2026'
  },
  {
    id: 'SUB-005',
    customer: 'Financial Services Group',
    product: 'Panda Adaptive Defense 360',
    productCode: 'PWESSAEPDR1YRB4',
    category: { type: 'endpoint', name: 'Endpoint' },
    term: '1 Year',
    licenses: 350,
    utilized: 320,
    status: 'Active',
    autoRenew: true,
    renewal: '8/20/2025'
  },
  {
    id: 'SUB-006',
    customer: 'Retail Solutions Inc',
    product: 'WatchGuard EPDR',
    productCode: 'PWESSEPDR1YRB6',
    category: { type: 'endpoint', name: 'Endpoint' },
    term: '1 Year',
    licenses: 200,
    utilized: 185,
    status: 'Active',
    autoRenew: false,
    renewal: '7/15/2025'
  },
];

export const invoiceData = [
  { id: 'INV-2024-001', description: 'TechCorp Annual Renewal', details: 'Firebox M290', amount: 4500, date: '2024-10-01', status: 'Paid' },
  { id: 'INV-2024-002', description: 'Acme Seat Expansion', details: 'AuthPoint MFA', amount: 1200, date: '2024-10-05', status: 'Upcoming' },
  { id: 'INV-2024-003', description: 'Global Finance Setup', details: 'DNSWatchGO', amount: 8900, date: '2024-09-28', status: 'Paid' },
];

export const hierarchyData = {
  parent: { name: 'Acme IT Solutions (MSP)', percentage: 100 },
  children: [
    { id: 'child-1', name: 'TechCorp Industries', percentage: 65.40 },
    { id: 'child-2', name: 'Global Finance Corp', percentage: 34.60 }
  ]
};

export const purchaseCustomersData = [
  'TechCorp Industries - Technology', 
  'Acme IT Solutions', 
  'Financial Services Group'
];

export const purchaseCategoriesData = [
  { id: 'network_security', name: 'Network Security', accent: 'text-blue-500' },
  { id: 'endpoint', name: 'Endpoint', accent: 'text-violet-500' },
  { id: 'identity', name: 'Identity', accent: 'text-green-500' },
  { id: 'cloud', name: 'Cloud', accent: 'text-sky-500' },
];

export const productsData = [
  {
    id: 'p1',
    name: 'Firebox M290',
    description: 'High-performance network security appliance for mid-size enterprises',
    priceTag: 'Starting from',
    priceValue: 2499,
    priceUnit: '/user/yr',
    categoryId: 'network_security',
    icon: 'flame',
    billingCycles: ['Annual Upfront', 'Quarterly'],
    termDiscounts: {
      '1': 0,
      '2': 0.05,
      '3': 0.1
    },
    addOns: [
      { id: 'priority-support', name: 'Priority Support', price: 249 },
      { id: 'advanced-analytics', name: 'Advanced Analytics', price: 129 },
      { id: 'custom-training', name: 'Custom Training', price: 399 }
    ]
  },
  {
    id: 'p2',
    name: 'Firebox T45',
    description: 'Tabletop firewall perfect for small offices and remote locations',
    priceTag: 'Starting from',
    priceValue: 899,
    priceUnit: '/user/yr',
    categoryId: 'network_security',
    icon: 'shield',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.04,
      '3': 0.08
    },
    addOns: [
      { id: 'priority-support', name: 'Priority Support', price: 99 },
      { id: 'rack-mount-kit', name: 'Rack Mount Kit', price: 79 }
    ]
  },
  {
    id: 'p3',
    name: 'DNSWatchGO',
    description: 'Cloud-based DNS filtering and threat protection',
    priceTag: 'Starting from',
    priceValue: 1.2,
    priceUnit: '/user/yr',
    categoryId: 'cloud',
    icon: 'globe',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.03,
      '3': 0.07
    },
    addOns: [
      { id: 'sandboxing', name: 'Cloud Sandboxing', price: 0.3 },
      { id: 'reporting', name: 'Advanced Reporting', price: 0.2 }
    ]
  },
  {
    id: 'p4',
    name: 'AuthPoint MFA',
    description: 'Multi-factor authentication to protect identities and critical apps',
    priceTag: 'Starting from',
    priceValue: 4.5,
    priceUnit: '/user/mo',
    categoryId: 'identity',
    icon: 'lock',
    billingCycles: ['Monthly', 'Annual Upfront'],
    termDiscounts: {
      '1': 0,
      '2': 0.05,
      '3': 0.12
    },
    addOns: [
      { id: 'risk-insights', name: 'Risk Insights', price: 1.1 },
      { id: 'vip-support', name: 'VIP Support', price: 0.5 }
    ]
  }
];

export const purchaseStepsData = [
  { number: 1, label: 'Step 1', subtitle: 'Browse' },
  { number: 2, label: 'Step 2', subtitle: 'Configure' },
  { number: 3, label: 'Step 3', subtitle: 'Review Cart' },
  { number: 4, label: 'Step 4', subtitle: 'Place Order' },
  { number: 5, label: 'Step 5', subtitle: 'Confirmation' },
];

export const renewalActionsData = [
  {
    title: 'Renew Existing Subscriptions',
    description: 'Extend your current subscriptions',
    iconId: 'refresh',
    iconBg: 'bg-blue-500',
  },
  {
    title: 'Add Licenses / Seats',
    description: 'Increase capacity for existing products',
    iconId: 'plus',
    iconBg: 'bg-green-500',
  },
  {
    title: 'Upgrade Tier / Level',
    description: 'Access advanced features',
    iconId: 'trending',
    iconBg: 'bg-purple-500',
  },
  {
    title: 'Browse New Products',
    description: 'Explore additional solutions',
    iconId: 'shopping',
    iconBg: 'bg-orange-500',
  }
];

export const renewalBenefitsData = [
  {
    title: 'Subscriptions Updated',
    description: 'Licenses adjusted instantly',
  },
  {
    title: 'Confirmation + Invoice',
    description: 'Emailed to MSP',
  },
  {
    title: 'Auto-Provisioned',
    description: 'No manual steps',
  },
  {
    title: 'Health Review',
    description: 'Proactive alerts',
  }
];

export const billingInvoicesData = [
  {
    customer: 'TechCorp Industries',
    id: 'INV-2025-0312',
    date: '3/1/2025',
    description: 'AuthPoint MFA Renewal - 200 licenses',
    amount: '$12,400',
    status: 'Paid',
  },
  {
    customer: 'TechCorp Industries',
    id: 'INV-2025-0211',
    date: '2/1/2025',
    description: 'DNSWatchGO Additional Licenses - 100 seats',
    amount: '$3,200',
    status: 'Paid',
  },
  {
    customer: 'Financial Services Group',
    id: 'INV-2025-0401',
    date: '4/1/2025',
    description: 'Panda Adaptive Defense 360 Renewal',
    amount: '$4,280',
    status: 'Outstanding',
  },
  {
    customer: 'Financial Services Group',
    id: 'INV-2025-0115',
    date: '1/15/2025',
    description: 'Firebox T45 Bundle Annual Service',
    amount: '$8,900',
    status: 'Paid',
  }
];

export const billingAddressData = {
  company: 'Acme IT Solutions',
  lines: [
    '123 Business Park Drive',
    'Suite 400',
    'San Francisco, CA 94107',
    'United States'
  ]
};

export const defaultPaymentMethod = {
  type: 'Visa',
  last4: '4242',
  expiry: '12/2026',
  isDefault: true
};

export const billingSummaryData = {
  currentBalance: '$4,280',
  lastPaymentAmount: '$12,400',
  lastPaymentDate: '3/1/2025',
  nextInvoiceDue: 'May 1, 2025'
};
