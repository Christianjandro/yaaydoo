const {Router} = require('express');
const router = Router();
const saveUser = require('../business/saveUser')

router.get('/saveUser',async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    const data = req.query;
    console.log("service get => saveUser");
    console.log(req.query);
    const response = await saveUser(data);
    res.json(response);
})

router.post('/saveUser',async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    const data = req.query;
    console.log("service post => saveUser");
    console.log(req.query);
    const response = await saveUser(data);
    res.json(response);
})

module.exports = router;