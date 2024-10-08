const express = require('express');
const path = require('path');

function expressConfig(app) {
    app.use('/static', express.static(path.join(__dirname, '../public')));
    app.use(express.urlencoded({ extended: true }));
}

module.exports = expressConfig;