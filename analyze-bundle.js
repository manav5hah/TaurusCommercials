const fs = require('fs');
const path = require('path');

// Function to format bytes to human readable format
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Function to get gzipped size estimate (rough approximation)
function estimateGzipSize(bytes) {
  // JavaScript files typically compress to about 30% of original size
  return Math.round(bytes * 0.3);
}

// Analyze the build directory
function analyzeBundle() {
  const buildDir = path.join(__dirname, 'build');
  const staticDir = path.join(buildDir, 'static');
  
  console.log('📊 Bundle Analysis Report\n');
  console.log('='.repeat(50));
  
  // Check if build directory exists
  if (!fs.existsSync(buildDir)) {
    console.log('❌ Build directory not found. Run "npm run build" first.');
    return;
  }
  
  // Analyze JavaScript files
  const jsDir = path.join(staticDir, 'js');
  if (fs.existsSync(jsDir)) {
    console.log('\n📦 JavaScript Files:');
    console.log('-'.repeat(30));
    
    const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
    let totalJsSize = 0;
    
    jsFiles.forEach(file => {
      const filePath = path.join(jsDir, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      const gzipSize = estimateGzipSize(size);
      totalJsSize += size;
      
      console.log(`${file.padEnd(30)} ${formatBytes(size).padStart(10)} (${formatBytes(gzipSize)} gzipped)`);
    });
    
    console.log(`\nTotal JS: ${formatBytes(totalJsSize)} (${formatBytes(estimateGzipSize(totalJsSize))} gzipped)`);
  }
  
  // Analyze CSS files
  const cssDir = path.join(staticDir, 'css');
  if (fs.existsSync(cssDir)) {
    console.log('\n🎨 CSS Files:');
    console.log('-'.repeat(30));
    
    const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
    let totalCssSize = 0;
    
    cssFiles.forEach(file => {
      const filePath = path.join(cssDir, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      const gzipSize = estimateGzipSize(size);
      totalCssSize += size;
      
      console.log(`${file.padEnd(30)} ${formatBytes(size).padStart(10)} (${formatBytes(gzipSize)} gzipped)`);
    });
    
    console.log(`\nTotal CSS: ${formatBytes(totalCssSize)} (${formatBytes(estimateGzipSize(totalCssSize))} gzipped)`);
  }
  
  // Analyze media files
  const mediaDir = path.join(staticDir, 'media');
  if (fs.existsSync(mediaDir)) {
    console.log('\n🖼️  Media Files:');
    console.log('-'.repeat(30));
    
    const mediaFiles = fs.readdirSync(mediaDir);
    let totalMediaSize = 0;
    
    mediaFiles.forEach(file => {
      const filePath = path.join(mediaDir, file);
      const stats = fs.statSync(filePath);
      const size = stats.size;
      totalMediaSize += size;
      
      console.log(`${file.padEnd(30)} ${formatBytes(size).padStart(10)}`);
    });
    
    console.log(`\nTotal Media: ${formatBytes(totalMediaSize)}`);
  }
  
  // Calculate total size
  const totalSize = fs.readdirSync(buildDir).reduce((total, item) => {
    const itemPath = path.join(buildDir, item);
    if (fs.statSync(itemPath).isFile()) {
      return total + fs.statSync(itemPath).size;
    }
    return total;
  }, 0);
  
  console.log('\n📈 Summary:');
  console.log('='.repeat(30));
  console.log(`Total Build Size: ${formatBytes(totalSize)}`);
  
  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('-'.repeat(30));
  
  if (fs.existsSync(jsDir)) {
    const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
    const mainJsFile = jsFiles.find(file => file.startsWith('main.'));
    
    if (mainJsFile) {
      const mainJsPath = path.join(jsDir, mainJsFile);
      const mainJsSize = fs.statSync(mainJsPath).size;
      const mainJsGzip = estimateGzipSize(mainJsSize);
      
      if (mainJsGzip > 250) {
        console.log('⚠️  Main bundle is large (>250KB gzipped). Consider:');
        console.log('   - Code splitting with React.lazy()');
        console.log('   - Removing unused dependencies');
        console.log('   - Using dynamic imports for heavy libraries');
      } else {
        console.log('✅ Main bundle size is good');
      }
    }
  }
  
  console.log('\n🔧 Next Steps:');
  console.log('-'.repeat(20));
  console.log('1. Run "npm run build" to create production build');
  console.log('2. Deploy with "npm run deploy"');
  console.log('3. Test service worker in browser DevTools');
  console.log('4. Monitor performance with Google PageSpeed Insights');
}

// Run the analysis
analyzeBundle(); 