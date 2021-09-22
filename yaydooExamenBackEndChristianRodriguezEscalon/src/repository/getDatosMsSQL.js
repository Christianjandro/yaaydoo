const { exec } = require('./sql/msSQL');

//Funcion general de consulta
const getDatos = async (query) => {
    var rows = [];
    try {
        let result = await exec(query);
        rows = result.recordsets;

    } catch (err) {
        console.log(err);
    }
    return rows;
};

module.exports = getDatos;