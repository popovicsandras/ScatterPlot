const express = require("express"),
    winston = require('winston'),
    dataEndpoint = require('./dataEndpoint');

const wsLogger = new (winston.Logger)({
  transports: [ new (winston.transports.Console)({ colorize: true }) ]
});

function scatterPlotServer({publicPath, port, dataFilePath}, {expressApp = express(), logger = wsLogger} = {}) {

    expressApp.use(express.static(publicPath));  
    
    // Ideally (in a larger application) the static server and the API would be two separate app
    expressApp.get('/api/v1/data', dataEndpoint(dataFilePath, logger));

    return expressApp.listen(port, () => {
        logger.info(`Server started on port: http://localhost:${port}`);
    });
}

module.exports = scatterPlotServer;

