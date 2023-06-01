const net = require('net');

// Define el puerto y la dirección IP del servidor socket
const PORT = 3000;
const HOST = 'localhost'; // Cambia esto por la dirección IP del servidor si corresponde

// Crea un socket cliente
const client = new net.Socket();

// Conéctate al servidor socket
client.connect(PORT, HOST, () => {
  console.log('Conexión establecida con el servidor');
  // Envía un mensaje al servidor
  client.write('Hola, servidor');
});

// Escucha los datos recibidos desde el servidor
client.on('data', data => {
  console.log(`Mensaje recibido del servidor: ${data}`);

  // Cierra la conexión con el servidor
  client.end();
});

// Escucha el evento 'end' que se dispara cuando se cierra la conexión con el servidor
client.on('end', () => {
  console.log('Conexión cerrada con el servidor');
});
