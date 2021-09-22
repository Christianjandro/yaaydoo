const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2)

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//rutes
app.use(require('./routes/getListUsers'));
app.use(require('./routes/deleteUser'));
app.use(require('./routes/saveUser'));


//staring server
app.listen(app.get('port'),()=> {
    console.log(`Server on port ${app.get('port')}`);
});
