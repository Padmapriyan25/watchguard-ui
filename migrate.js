const fs = require('fs');
const path = require('path');

const domains = ['dashboard', 'purchase', 'renewals', 'billing'];

domains.forEach(domain => {
  const srcDir = path.join(__dirname, 'src/components', domain);
  const destDir = path.join(__dirname, 'src/pages', domain);
  
  if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir);
    files.forEach(file => {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, file);
      
      let content = fs.readFileSync(srcPath, 'utf8');
      fs.writeFileSync(destPath, content);
      
      try {
        fs.unlinkSync(srcPath);
      } catch (e) {
        console.log(`Failed to delete ${srcPath}`);
      }
    });
  }
  
  const indexFile = path.join(destDir, 'index.tsx');
  if (fs.existsSync(indexFile)) {
    let indexContent = fs.readFileSync(indexFile, 'utf8');
    indexContent = indexContent.replace(new RegExp(`\\.\\./\\.\\./components/${domain}/`, 'g'), './');
    fs.writeFileSync(indexFile, indexContent);
  }
});
console.log('Migration complete');
