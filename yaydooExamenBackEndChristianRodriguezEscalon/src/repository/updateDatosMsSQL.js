const { update } = require('./sql/msSQL');

//Funcion general de update
const updateDatos = async (query, datos) => {

    return await update(query, datos);
};

module.exports = updateDatos;