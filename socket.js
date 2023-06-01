const net = require('net');

// Define el puerto en el que el socket escuchará las conexiones entrantes
const PORT = 3000;

// Crea un servidor socket
const server = net.createServer(socket => {
  console.log('Cliente conectado');

  // Escucha los datos recibidos desde el cliente
  socket.on('data', data => {
    console.log(`Mensaje recibido del cliente: ${data}`);

    // Envía una respuesta al cliente
    socket.write('Mensaje recibido por el servidor');
  });

  // Escucha el evento 'end' que se dispara cuando el cliente cierra la conexión
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

// Inicia el servidor y empieza a escuchar conexiones entrantes
server.listen(PORT, () => {
  console.log(`Servidor socket iniciado en el puerto ${PORT}`);
});
