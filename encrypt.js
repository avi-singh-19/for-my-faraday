const fs = require('fs');
const CryptoJS = require('crypto-js');

// 1. Get the filename from the command (e.g., node encrypt.js birthday)
const fileName = process.argv[2];
const password = '17112023';

if (!fileName) {
    console.error('Please provide a filename - for example: node encrypt.js ten-things');
    process.exit(1);
}

try {
    // Look in the unencrypted subfolder
    const inputPath = `messages/unencrypted/${fileName}-unencrypted.txt`;
    
    // Save in the encrypted subfolder
    const outputPath = `messages/encrypted/${fileName}.txt`;
    if (!fs.existsSync(inputPath)) {
        throw new Error(`File not found: ${inputPath}`);
    }

    const rawText = fs.readFileSync(inputPath, 'utf8');

    // 3. Encrypt
    const encrypted = CryptoJS.AES.encrypt(rawText, password).toString();

    // 4. Save
    fs.writeFileSync(outputPath, encrypted);

    console.log('---------------------------------------');
    console.log(`Success!`);
    console.log(`Read from: ${inputPath}`);
    console.log(`Saved to:  ${outputPath}`);
    console.log('---------------------------------------');
    console.log(`Next step: Add "${fileName}" to your messages/list.json`);

} catch (err) {
    console.error('Error:', err.message);
}