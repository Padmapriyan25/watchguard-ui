import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      
      // Fix imports in the component files themselves
      // If a component was importing Card via ../../components/common/Card
      // Since it moved from components/domain to pages/domain
      // The relative path up to src/ is still ../../, BUT since common is in components, it stays ../../components/common/Card.
      // So actually most imports don't need changing! Except if it imported another component from the same folder.
      content = content.replace(/'\.\//g, "'./").replace(/"\.\//g, '"./');

      fs.writeFileSync(destPath, content);
      
      try {
        fs.unlinkSync(srcPath);
      } catch (e) {
        console.log(`Failed to delete ${srcPath}`);
      }
    });
    // Remove the old components folder if empty
    try {
      fs.rmdirSync(srcDir);
    } catch(e) {}
  }
  
  const indexFile = path.join(destDir, 'index.tsx');
  if (fs.existsSync(indexFile)) {
    let indexContent = fs.readFileSync(indexFile, 'utf8');
    indexContent = indexContent.replace(new RegExp(`\\.\\./\\.\\./components/${domain}/`, 'g'), './');
    fs.writeFileSync(indexFile, indexContent);
  }
});
console.log('Migration complete');
