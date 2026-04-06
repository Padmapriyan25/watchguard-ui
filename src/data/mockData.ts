export const headerUserData = {
  name: 'John Doe',
  role: 'MSP Admin',
  initials: 'JD',
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
    id: 'SUB-001', customer: 'TechCorp Industries', product: 'Firebox M290', 
    category: { type: 'network', name: 'Network Security' }, licenses: 500, utilized: 480, 
    status: 'Active', renewal: '2025-10-15' 
  },
  { 
    id: 'SUB-002', customer: 'Acme IT Solutions', product: 'AuthPoint MFA', 
    category: { type: 'identity', name: 'Identity' }, licenses: 1200, utilized: 1180, 
    status: 'Expiring Soon', renewal: '2025-04-01' 
  },
  { 
    id: 'SUB-003', customer: 'Global Finance Corp', product: 'DNSWatchGO', 
    category: { type: 'cloud', name: 'Cloud' }, licenses: 300, utilized: 210, 
    status: 'Active', renewal: '2026-01-20' 
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
  { id: 'network_security', name: 'Network Security' },
  { id: 'endpoint', name: 'Endpoint' },
  { id: 'identity', name: 'Identity' },
  { id: 'cloud', name: 'Cloud' },
];

export const productsData = [
  {
    id: 'p1',
    name: 'Firebox M290',
    description: 'High-performance network security appliance for mid-size enterprises',
    priceTag: 'Starting from',
    priceValue: 2499,
    priceUnit: '/user/yr',
    categoryId: 'network_security'
  },
  {
    id: 'p2',
    name: 'Firebox T45',
    description: 'Tabletop firewall perfect for small offices and remote locations',
    priceTag: 'Starting from',
    priceValue: 899,
    priceUnit: '/user/yr',
    categoryId: 'network_security'
  },
  {
    id: 'p3',
    name: 'DNSWatchGO',
    description: 'Cloud-based DNS filtering and threat protection',
    priceTag: 'Starting from',
    priceValue: 1.2,
    priceUnit: '/user/yr',
    categoryId: 'network_security'
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
