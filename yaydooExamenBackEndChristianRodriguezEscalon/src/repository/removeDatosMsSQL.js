const { remove } = require('./sql/msSQL');

//Funcion general de update
const removeDatos = async (query) => {

    return await remove(query);
};

module.exports = removeDatos;