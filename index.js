const scatterPlotServer = require('./src/server/server')
    path = require('path');

const appServerConfig = {
    staticDirPaths: [
        path.join(__dirname, 'build'),
        path.join(__dirname, 'public')
    ],
    dataFilePath: path.join(__dirname, 'data', 'data.csv'),
    port: process.env.PORT || 3000
};

scatterPlotServer(appServerConfig);