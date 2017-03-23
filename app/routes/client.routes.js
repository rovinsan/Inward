// app/routes/client.routes.js

'use strict';

module.exports = function(app){

    // frontend routes =================================
    // app.get('*', (req, res, next) => {
    //     res.send("Ithu Athida");
    //     next();
    // });
    app.get('/', (req, res ,next) => {
        res.sendFile('./public/index.html');
    })
};