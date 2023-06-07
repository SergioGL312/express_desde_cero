const express = require('express'); // Acceso a lo que nos devuelve la libreria de express
const app = express(); // Es instancia de express; se llama al constructor de express
const PORT = 5555;

app.get('/', (req, res, next) => {
  res.statu(200);
  res.send("Bienvenido");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} . . .`);
}); // Es para levantar un servicio / creando un servidor
