const express = require("express"),
    logger = require('winston'),
    dataEndpoint = require('./dataEndpoint');

function scatterPlotServer({publicPath, port, dataFilePath}) {
    const app = express();

    app.use(express.static(publicPath));    
    app.get('/api/v1/data', dataEndpoint(dataFilePath, logger));

    app.listen(port);
}

module.exports = scatterPlotServer;

