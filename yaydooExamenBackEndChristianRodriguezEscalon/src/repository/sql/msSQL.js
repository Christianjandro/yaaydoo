const secrets = require('../../secrets/conection.json');
const sql = require('mssql');

const connected = async () => {

    let dbSettings = {
        user : "yaydoo",
        password: "examen",
        server: "LAPTOP-JOT4GGDV\\SQLEXPRESS", 
        database : "yaydoo_examen",
        options: { 
            trustServerCertificate: true,
            }
    }

    let pool = await sql.connect(dbSettings)
    return pool.request();
}

const exec  = async (query) => {
    let conn = await connected();
    let rows = conn.query(query);
    return rows;
}

const insert  = async (sql,values) => {
    let query = insertSintaxis(sql,values);
    return scalar(query,0);
}

const update  = async (sql,values) => {
    let query = updateSintaxis(sql,values);
    return scalar(query);
}

const remove = async (sql) => {
    return scalar(sql);
}

const scalar = async (sql,type) => {
    let conn = await connected();
    console.log(sql);
    let recordset = await conn.query(sql).then(function(recordset) {
        if(type == 0){
            return recordset.recordset[0].ID
        }else{
            return recordset.rowsAffected[0]
        }
      }).catch(function(err) {
        console.log('Request error: ' + err);
      });
    
    return recordset;
}


const insertSintaxis  = (sql,param) => {

    let fields = Object.keys(param);
    let values = Object.values(param);
    let query = sql.replace('@fields',fields);
    query = parse(query,values);
    query += ";SELECT SCOPE_IDENTITY() AS ID";
    return query;
}

const updateSintaxis  = (sql,param) => {

    let fields = Object.keys(param);
    let sets = [];

    fields.forEach((elemento) => {
        let prm = param[elemento].includes("'") ? param[elemento] : `'${param[elemento]}'`;
        sets.push(`${elemento} = ${prm}`);
    });

    let query = sql.replace('@setfields',sets.join(','));

    return query;
}





function parse(str) {
    var args = [].slice.call(arguments, 1)[0],
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

module.exports = {connected,exec,insert,update,remove,scalar,insertSintaxis,updateSintaxis};