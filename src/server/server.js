const express = require("express"),
    logger = require('winston'),
    dataEndpoint = require('./dataEndpoint');

function scatterPlotServer({staticDirPaths = [], port, dataFilePath}) {
    const app = express();

    staticDirPaths.forEach((staticDirPath) => {
        app.use(express.static(staticDirPath));
    });
    
    app.get('/data', dataEndpoint(dataFilePath, logger));

    app.listen(port);
}

module.exports = scatterPlotServer;

