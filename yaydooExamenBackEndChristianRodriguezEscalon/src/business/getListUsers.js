const getListUsers = require('../repository/users/getListUsers')

const validate  = async () => {
    const data = await getListUsers();
    let response = {};
    if(data.length > 0){
        response = {"data": data}
    }else{
        response = {"message": "No existen Usuarios"}
    }
    return response;
}

module.exports = validate;
