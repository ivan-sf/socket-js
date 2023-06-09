Documentación
=====================

Descripción
-----------

Este código implementa un servidor socket utilizando Node.js. El servidor escucha conexiones entrantes en el puerto 3000 y puede recibir mensajes de los clientes. Cuando recibe un mensaje, envía una respuesta al cliente y muestra información en la consola.

Documentación del Servidor
--------------------------

### Variables

- `net`: Módulo que proporciona funcionalidades para implementar sockets en Node.js.
- `PORT`: Puerto en el que el socket escuchará las conexiones entrantes.
- `server`: Objeto que representa el servidor socket.
 
### Funciones

- `net.createServer()`: Crea un servidor socket que espera conexiones entrantes.
- `socket.on('data')`: Escucha los datos recibidos desde el cliente.
- `socket.on('end')`: Escucha el evento 'end' que se dispara cuando el cliente cierra la conexión.
- `server.listen()`: Inicia el servidor y empieza a escuchar conexiones entrantes en el puerto especificado.
 
Documentación del Cliente
-------------------------

### Variables

- `net`: Módulo que proporciona funcionalidades para implementar sockets en Node.js.
- `PORT`: Puerto del servidor socket al que se conectará el cliente.
- `HOST`: Dirección IP del servidor socket al que se conectará el cliente.
- `client`: Objeto que representa el cliente socket.
 
### Funciones

- `new net.Socket()`: Crea un nuevo socket cliente.
- `client.connect()`: Establece la conexión con el servidor socket.
- `client.write()`: Envía un mensaje al servidor.
- `client.on('data')`: Escucha los datos recibidos desde el servidor.
- `client.on('end')`: Escucha el evento 'end' que se dispara cuando se cierra la conexión con el servidor.
 
Instrucciones de Uso
--------------------

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Abre una terminal y navega hasta el directorio donde se encuentra el archivo del servidor y el cliente.
3. Instala las dependencias ejecutando el siguiente comando: `npm install`
4. Para arrancar el servidor, utiliza el comando: `npm start`
5. Para ejecutar el cliente, utiliza el comando: `npm run client`
6. El servidor ahora está escuchando en el puerto 3000. El cliente se conectará automáticamente y enviará un mensaje al servidor. El servidor responderá con un mensaje y luego se cerrará la conexión.
 
Dependencias
------------

- [Node.js](https://nodejs.org/)
 
Recursos
--------

- [Documentación de la API 'net' de Node.js](https://nodejs.org/api/net.html)
 