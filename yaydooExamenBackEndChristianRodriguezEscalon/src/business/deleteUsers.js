const {deleteUser,deleteDetailsUser} = require('../repository/users/deleteUser');


const validate  = async (param) => {
    let response = {};
  
    let affected = await deleteDetailsUser(param.id);
    if(affected > 0){
        affected = 0;
        affected = await deleteUser(param.id);
        if(affected > 0){
            response = {"message": "Usuario Borrado Correctamente"}
        }else{
            response = {"Err": "Usuario no Eliminada"}
        }
    }else{
        response = {"Err": "Informacion del Usuario no Eliminado"}
    }
    

    return response;
}

module.exports = validate;
