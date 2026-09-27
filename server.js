require('dotenv').config();

const express = require('express');

const criaturasRoutes = require('./routes/criaturas');
const objetosRoutes = require('./routes/objetos');
const hechizosRoutes = require('./routes/hechizos');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/objetos', objetosRoutes);
app.use('/criaturas', criaturasRoutes);
app.use('/hechizos', hechizosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});