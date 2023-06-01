const { spawn } = require('child_process');

// Ejecuta el servidor socket en segundo plano
const serverProcess = spawn('node', ['server.js']);

// Ejecuta el cliente socket en segundo plano después de un breve retraso
setTimeout(() => {
  const clientProcess = spawn('node', ['client.js']);
}, 2000); // Cambia esto si necesitas ajustar el tiempo de retraso
