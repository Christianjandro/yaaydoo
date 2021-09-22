
const insert = require('../insertDatosMsSQL');
const update = require('../updateDatosMsSQL');

/*
*************************************
**********Save to MsSQL**********
*************************************
*/

//Insert Users
const insertUser = async (values) => {
  let query = `INSERT INTO Users (@fields) VALUES ('%s','%s',%s)`;

    return await insert(query,values);
}

//Insert Details Users
const insertDetailsUser = async (values) => {
    let query = `INSERT INTO DetailsUser (@fields) VALUES ('%s','%s','%s','%s')`;
  
      return await insert(query,values);
  }


  /*
*************************************
**********Update to MsSQL**********
*************************************
*/

//Update Users
const updateUser = async (values,Id) => {
  let query = `UPDATE Users
                SET @setfields
                WHERE ID = ${Id};`;
    return await update(query,values);
}

//Update Details Users
const updateDetailsUser = async (values,Id) => {
  let query = `UPDATE DetailsUser
                SET @setfields
                WHERE IDUser = ${Id};`;
  
    return await update(query,values);
  }

module.exports = {insertUser,insertDetailsUser, updateUser, updateDetailsUser};