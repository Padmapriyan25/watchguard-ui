const fs = require('fs');
const path = require('path');

const dirs = [
  'src/api',
  'src/models',
  'src/components/common',
  'src/pages/dashboard',
  'src/pages/purchase',
  'src/pages/renewals',
  'src/pages/billing'
];

dirs.forEach(d => fs.mkdirSync(path.join(__dirname, d), { recursive: true }));

const moves = [
  ['src/pages/DashboardPage.tsx', 'src/pages/dashboard/index.tsx'],
  ['src/pages/PurchasePage.tsx', 'src/pages/purchase/index.tsx'],
  ['src/pages/RenewalsPage.tsx', 'src/pages/renewals/index.tsx'],
  ['src/pages/BillingPage.tsx', 'src/pages/billing/index.tsx'],
  ['src/pages/index.tsx', 'src/App.tsx']
];

moves.forEach(([src, dest]) => {
  const srcPath = path.join(__dirname, src);
  const destPath = path.join(__dirname, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    try { fs.unlinkSync(srcPath); } catch (e) { console.log('Could not delete ' + srcPath, e.message); }
  }
});

console.log('Structure created and files copied successfully');
