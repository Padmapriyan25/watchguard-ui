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
  root: {
    id: 'root',
    name: 'Acme IT Solutions',
    percentage: 100,
    color: 'bg-[#d90416]',
    children: [
      {
        id: 'financial-services-group',
        name: 'Financial Services Group',
        percentage: 84.54,
        color: 'bg-[#2f9458]',
        children: [
          {
            id: 'firebox-t45-bundle',
            name: 'Firebox T45 Bundle',
            percentage: 73.18,
            color: 'bg-[#157ac4]',
            children: [],
          },
          {
            id: 'panda-adaptive-defense-360',
            name: 'Panda Adaptive Defense 360',
            percentage: 11.36,
            color: 'bg-[#157ac4]',
            children: [],
          }
        ],
      },
      {
        id: 'techcorp-industries',
        name: 'TechCorp Industries',
        percentage: 7.67,
        color: 'bg-[#2f9458]',
        children: [
          {
            id: 'authpoint-mfa',
            name: 'AuthPoint MFA',
            percentage: 4.13,
            color: 'bg-[#157ac4]',
            children: [],
          },
          {
            id: 'dnswatchgo',
            name: 'DNSWatchGO',
            percentage: 3.54,
            color: 'bg-[#157ac4]',
            children: [],
          }
        ],
      },
      {
        id: 'retail-solutions-inc',
        name: 'Retail Solutions Inc',
        percentage: 4.96,
        color: 'bg-[#2f9458]',
        children: [
          {
            id: 'watchguard-epdr',
            name: 'WatchGuard EPDR',
            percentage: 4.96,
            color: 'bg-[#157ac4]',
            children: [],
          }
        ],
      },
      {
        id: 'healthcare-plus',
        name: 'Healthcare Plus',
        percentage: 2.83,
        color: 'bg-[#2f9458]',
        children: [
          {
            id: 'watchguard-cloud',
            name: 'WatchGuard Cloud',
            percentage: 2.83,
            color: 'bg-[#157ac4]',
            children: [],
          }
        ],
      }
    ],
  }
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
    icon: 'lock',
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
    categoryId: 'network_security',
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
    name: 'Panda Adaptive Defense 360',
    description: 'Advanced endpoint protection with EDR capabilities',
    priceTag: 'Starting from',
    priceValue: 5.5,
    priceUnit: '/user/yr',
    categoryId: 'endpoint',
    icon: 'shield',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.05,
      '3': 0.1
    },
    addOns: [
      { id: 'threat-hunting', name: 'Threat Hunting', price: 0.8 },
      { id: 'incident-support', name: 'Incident Response Support', price: 1.2 }
    ]
  },
  {
    id: 'p5',
    name: 'WatchGuard EPDR',
    description: 'Endpoint detection and response with zero-trust application service',
    priceTag: 'Starting from',
    priceValue: 4.2,
    priceUnit: '/user/yr',
    categoryId: 'endpoint',
    icon: 'monitor',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.04,
      '3': 0.08
    },
    addOns: [
      { id: 'device-control', name: 'Advanced Device Control', price: 0.4 },
      { id: 'host-isolation', name: 'Host Isolation Controls', price: 0.7 }
    ]
  },
  {
    id: 'p6',
    name: 'WatchGuard EDR',
    description: 'Essential endpoint detection and response for threat hunting',
    priceTag: 'Starting from',
    priceValue: 3.8,
    priceUnit: '/user/yr',
    categoryId: 'endpoint',
    icon: 'search',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.03,
      '3': 0.06
    },
    addOns: [
      { id: 'forensics', name: 'Forensics Pack', price: 0.5 },
      { id: 'extended-retention', name: 'Extended Retention', price: 0.3 }
    ]
  },
  {
    id: 'p7',
    name: 'AuthPoint MFA',
    description: 'Multi-factor authentication for cloud and on-premise applications',
    priceTag: 'Starting from',
    priceValue: 3.5,
    priceUnit: '/user/yr',
    categoryId: 'identity',
    icon: 'lock',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.05,
      '3': 0.12
    },
    addOns: [
      { id: 'risk-insights', name: 'Risk Insights', price: 1.1 },
      { id: 'vip-support', name: 'VIP Support', price: 0.5 }
    ]
  },
  {
    id: 'p8',
    name: 'AuthPoint Total Identity Security',
    description: 'Complete identity security with MFA, SSO, and password management',
    priceTag: 'Starting from',
    priceValue: 5.9,
    priceUnit: '/user/yr',
    categoryId: 'identity',
    icon: 'user',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.06,
      '3': 0.13
    },
    addOns: [
      { id: 'password-vault', name: 'Password Vault', price: 0.8 },
      { id: 'sso-app-pack', name: 'SSO App Pack', price: 0.9 }
    ]
  },
  {
    id: 'p9',
    name: 'WatchGuard Cloud',
    description: 'Unified cloud platform for security management and visibility',
    priceTag: 'Starting from',
    priceValue: 4.8,
    priceUnit: '/user/yr',
    categoryId: 'cloud',
    icon: 'cloud',
    billingCycles: ['Annual Upfront', 'Monthly'],
    termDiscounts: {
      '1': 0,
      '2': 0.04,
      '3': 0.09
    },
    addOns: [
      { id: 'log-retention', name: 'Extended Log Retention', price: 0.6 },
      { id: 'compliance-reports', name: 'Compliance Reports', price: 0.7 }
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
    id: 'renew',
    title: 'Renew Existing Subscriptions',
    description: 'Extend your current subscriptions',
    iconId: 'refresh',
    iconBg: 'bg-blue-500',
  },
  {
    id: 'add_seats',
    title: 'Add Licenses / Seats',
    description: 'Increase capacity for existing products',
    iconId: 'plus',
    iconBg: 'bg-green-500',
  },
  {
    id: 'upgrade',
    title: 'Upgrade Tier / Level',
    description: 'Access advanced features',
    iconId: 'trending',
    iconBg: 'bg-purple-500',
  },
  {
    id: 'browse',
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

export const renewalManagedSubscriptionsData = [
  {
    id: 'SUB-001',
    customer: 'TechCorp Industries',
    product: 'AuthPoint MFA',
    category: 'Identity',
    licenses: 200,
    utilized: 178,
    renewalDate: '6/30/2025',
    renewalPrice: 700,
    seatPrice: 3.5,
  },
  {
    id: 'SUB-002',
    customer: 'Financial Services Group',
    product: 'Firebox T45 Bundle',
    category: 'Network Security',
    licenses: 50,
    utilized: 50,
    renewalDate: '5/3/2025',
    renewalPrice: 12400,
    seatPrice: 248,
  },
  {
    id: 'SUB-003',
    customer: 'TechCorp Industries',
    product: 'DNSWatchGO',
    category: 'Network Security',
    licenses: 500,
    utilized: 340,
    renewalDate: '12/15/2025',
    renewalPrice: 600,
    seatPrice: 1.2,
  },
  {
    id: 'SUB-004',
    customer: 'Healthcare Plus',
    product: 'WatchGuard Cloud',
    category: 'Cloud',
    licenses: 100,
    utilized: 88,
    renewalDate: '3/10/2026',
    renewalPrice: 480,
    seatPrice: 4.8,
  },
  {
    id: 'SUB-005',
    customer: 'Financial Services Group',
    product: 'Panda Adaptive Defense 360',
    category: 'Endpoint',
    licenses: 350,
    utilized: 320,
    renewalDate: '8/20/2025',
    renewalPrice: 1925,
    seatPrice: 5.5,
  },
  {
    id: 'SUB-006',
    customer: 'Retail Solutions Inc',
    product: 'WatchGuard EPDR',
    category: 'Endpoint',
    licenses: 200,
    utilized: 185,
    renewalDate: '7/15/2025',
    renewalPrice: 840,
    seatPrice: 4.2,
  }
];

export const renewalTierPlansData = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 50,
    features: ['Core Features', '24/7 Support'],
    isCurrent: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    monthlyPrice: 100,
    features: ['Core Features', '24/7 Support', 'Advanced Analytics'],
    isCurrent: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 150,
    features: ['Core Features', '24/7 Support', 'Advanced Analytics', 'Dedicated Manager'],
    isCurrent: false,
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

export const sidebarPartnerData = {
  tierLabel: 'Gold Partner',
  managerLabel: 'Account Manager',
  managerName: 'Sarah Mitchell',
  supportLabel: 'Contact Support',
  supportHref: '#'
};

export const purchaseReviewContent = {
  billingEmail: 'john.smith@acmeit.com',
  paymentLabel: 'Payment: Credit Card ****4242',
  orderSummaryProductSuffix: 'product(s)',
  deliveryText: 'Estimated delivery: Immediate',
  termsLabel: 'I agree to the Terms & Conditions',
  autoRenewLabel: 'Enable Auto-Renew for these subscriptions'
};

export const purchaseConfirmationData = {
  title: 'Order Placed Successfully!',
  emailMessage: 'A confirmation email has been sent to your registered email address.',
  nextTitle: "What's Next?",
  downloadLabel: 'Download Invoice',
  restartLabel: 'Start Another Purchase',
  nextSteps: [
    {
      id: 'provisioned',
      iconId: 'check',
      title: 'Account Provisioned',
      description: 'Your services are being set up'
    },
    {
      id: 'resources',
      iconId: 'shopping',
      title: 'Onboarding Resources',
      description: 'Check your email for guides'
    },
    {
      id: 'reminders',
      iconId: 'bell',
      title: 'Renewal Reminders',
      description: "We'll notify you in advance"
    }
  ]
};

export const renewalsHeroData = {
  title: 'Manage + Expand Subscriptions',
  description: 'Select an action below to renew, expand, or enhance your WatchGuard services'
};

export const subscriptionsQuickActionsData = [
  { id: 'invoices', title: 'View Invoices', subtitle: 'Pay outstanding', iconId: 'file', active: true },
  { id: 'auto-renew', title: 'Auto-Renew', subtitle: 'Manage settings', iconId: 'rotate', active: false },
  { id: 'promo', title: 'Promo Code', subtitle: 'Redeem code', iconId: 'ticket', active: false },
  { id: 'support', title: 'Support', subtitle: 'Get help', iconId: 'support', active: false }
];

export const dashboardQuickActionsData = [
  { id: 'purchase', title: 'New Purchase', iconId: 'shopping', border: 'border-blue-500' },
  { id: 'renew', title: 'Renew', iconId: 'refresh', border: 'border-blue-500' },
  { id: 'invoices', title: 'Invoices', iconId: 'file', border: 'border-gray-200' },
  { id: 'support', title: 'Support', iconId: 'ticket', border: 'border-gray-200' }
];

export const accountExecutiveData = {
  heading: 'Your Account Executive',
  name: 'Sarah Mitchell',
  role: 'WatchGuard Partner Success',
  emailLabel: 'Email',
  email: 'sarah.mitchell@watchguard.com',
  phoneLabel: 'Phone',
  phone: '+1 (206) 613-0895',
  ctaLabel: 'Contact Me'
};

