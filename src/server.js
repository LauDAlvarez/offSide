const app = require('../index.ts');
const port = process.env.PORT || 3000;
const sequelize = require('./config/database');


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
sequelize.sync({ force: false }) // force: true borrará y creará tablas
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });