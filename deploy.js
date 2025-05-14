const { execSync } = require('child_process');
const fs = require('fs');

// Check if package-lock.json exists
if (!fs.existsSync('./package-lock.json')) {
  console.log('⚠️ package-lock.json not found. Running npm install to generate it...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ package-lock.json generated successfully!');
} else {
  console.log('✅ package-lock.json exists');
}

// Verify build process works
console.log('🔨 Testing build process...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.error('❌ Build failed!', error);
  process.exit(1);
}

console.log('\n🚂 Your app is ready for Railway deployment!');
console.log('\nTo deploy to Railway:');
console.log('1. Push your code to GitHub');
console.log('2. Connect your GitHub repository to Railway');
console.log('3. Railway will automatically deploy your app');
console.log('\nAlternatively, use the Railway CLI:');
console.log('$ railway up'); 