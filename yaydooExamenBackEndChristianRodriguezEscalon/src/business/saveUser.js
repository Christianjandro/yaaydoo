const {insertUser,insertDetailsUser,updateUser, updateDetailsUser} = require('../repository/users/saveUser');


const validate  = async (param) => {
    let user = [];
    let details = [];
    let response = {};

    user.Name = param.name;
    user.Email = param.email;
    user.Password = `HASHBYTES('SHA2_512', '${param.password}')`;

    details.Address = param.address;
    details.Telephone = param.telephone;
    details.Dateofbirth = param.dateofbirth;

    if(param.id > 0){   
        let affected = await updateUser(user, param.id);
        if(affected > 0){
            affected = 0;
            affected = await updateDetailsUser(details,param.id);
            if(affected > 0){
                response = {"message": "Usuario Agregado Correctamente"}
            }else{
                response = {"Err": "Informacion del Usuario no actualizado"}
            }
        }else{
            response = {"Err": "Usuario no actualizado"}
        } 
        
    }else{
        details.IDUser = await insertUser(user);
        if(details.IDUser > 0){        
            let lastID = await insertDetailsUser(details);
            if(lastID > 0){
                response = {"message": "Usuario Agregado Correctamente"}
            }else{
                response = {"Err": "Informacion del Usuario no agregado"}
            }
        }else{
            response = {"Err": "Usuario no agregado"}
        }
    }

    return response;
}

module.exports = validate;
