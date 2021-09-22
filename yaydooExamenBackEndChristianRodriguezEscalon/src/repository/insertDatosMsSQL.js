const { insert } = require('./sql/msSQL');

//Funcion general de update
const insertDatos = async (query, datos) => {

    return await insert(query, datos);
};

module.exports = insertDatos;