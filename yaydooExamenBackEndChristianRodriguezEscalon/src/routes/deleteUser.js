const {Router} = require('express');
const router = Router();
const deleteUsers = require('../business/deleteUsers')

router.get('/deleteUsers',async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
   
    console.log("service get => deleteUsers");
    console.log("res",req.query);
    const data = req.query;
    const response = await deleteUsers(data);
    console.log("response",response);
    res.json(response);
})

router.post('/deleteUsers',async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    console.log("service post => deleteUsers");
    console.log("res",req.query);
    const data = req.query;
    const response = await deleteUsers(data);
    console.log("response",response);
    res.json(response);
})

module.exports = router;