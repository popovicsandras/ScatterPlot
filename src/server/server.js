const express = require("express"),
    winston = require('winston'),
    dataEndpoint = require('./dataEndpoint');

const logger = new (winston.Logger)({
  transports: [ new (winston.transports.Console)({ colorize: true }) ]
});

function scatterPlotServer({publicPath, port, dataFilePath}) {
    const app = express();

    app.use(express.static(publicPath));    
    app.get('/api/v1/data', dataEndpoint(dataFilePath, logger));

    app.listen(port, () => {
        logger.info(`Server started on port: http://localhost:${port}`);
    });
}

module.exports = scatterPlotServer;

