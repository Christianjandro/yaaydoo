
const exec = require('../removeDatosMsSQL');

/*
*************************************
**********Query to MsSQL**********
*************************************
*/

//Remove User
const deleteUser = async (val) => {
  let query = `DELETE FROM Users
                    WHERE ID = ${val}`;

    return await exec(query);
}

//Remove User
const deleteDetailsUser = async (val) => {
  let query = `DELETE FROM DetailsUser
                    WHERE IDUser = ${val}`;

    return await exec(query);
}

module.exports = {deleteUser,deleteDetailsUser};