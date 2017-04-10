// app/routes/client.routes.js

'use strict';

const path = require('path');

module.exports = function(app) {

    // frontend routes =================================
    app.get('/', (req, res) => {
        // res.sendFile('index.html', { root: path.join(__dirname, '../../public/views') });
        // res.sendfile('./public/views/index.html');
        res.sendFile(path.join(__dirname, '../../public/views/index.html'));
    });

};