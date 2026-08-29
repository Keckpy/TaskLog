// USAGE: node env-loader.js <pasted Service URI>
const fs = require('fs');

const serviceURI = process.argv[2];
const url = new URL(serviceURI);

// Build the clean .env content string using template literals
const envContent = [
    `DB_HOST=${url.hostname}`,
    `DB_USER=${url.username}`,
    `DB_PASSWORD=${url.password}`,
    `DB_NAME=${url.pathname.slice(1)}`,
    `DB_PORT=${url.port}`
].join('\n') + '\n'; // Joins everything with newlines

// Create .env file with content
fs.writeFileSync('.env', envContent);

console.log("File created and database keys appended successfully!");
