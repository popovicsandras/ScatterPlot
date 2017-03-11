const scatterPlotServer = require('./src/server/server'),
    path = require('path');

const appServerConfig = {
    publicPath: path.join(__dirname, 'build'),
    dataFilePath: path.join(__dirname, 'data', 'data.csv'),
    port: process.env.PORT || 3000
};

scatterPlotServer(appServerConfig);