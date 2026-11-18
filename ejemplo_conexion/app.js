const http = require("http");
//incorporar modulo con require http

const hostname = "127.0.0.1";
const port = 3000;
//configurar el puerto a escuchar y la ip

const server = http.createServer((req, res) => {
  res.statusCode = 200; //ok
  res.setHeader("Content-type", "text/plain");
  res.end("Hola Mundo, esto es una prueba\n");
}); //funcion callback para crear una instancia del servidor que va atender las peticiones

server.listen(port, hostname, () => {
  console.log(
    `Servidor está corriendo exitosamente sobre http://${hostname}:${port}`,
  );
});//poner en escucha el servidor, lo que recibe de hostname y puertp


