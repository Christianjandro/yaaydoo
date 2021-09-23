
const exec = require('../getDatosMsSQL');

/*
*************************************
**********Query to MsSQL**********
*************************************
*/

//Get List Users
const getListUsers = async () => {
  let query = `SELECT name, email, address, telephone, FORMAT (dateofbirth, 'dd/MM/yyyy') dateofbirth, '**********' password, A.id, DATEDIFF(YEAR,dateofbirth,GETDATE()) age
                FROM Users A
                INNER JOIN DetailsUser B ON A.ID = B.IDUser`;

    return await exec(query);
}

module.exports = getListUsers;
