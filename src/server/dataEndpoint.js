const csv = require('csvtojson');

function sendJsonResponse(response, jsonArrObj) {
    response.json(jsonArrObj.map((coordinates) => {
        return {
            x: parseFloat(coordinates.x),
            y: parseFloat(coordinates.y)
        };
    }));
}

function handleError(dataFilePath, response, logger, error) {
    logger.error(`File: ${dataFilePath}`, error);
    response.sendStatus(500);
}

module.exports = function dataEndpoint(dataFilePath, logger = console) {
    return function expressMiddleWare(request, response) {
        csv()
            .fromFile(dataFilePath)
            .on('end_parsed', sendJsonResponse.bind(null, response))
            .on('error', handleError.bind(null, dataFilePath, response, logger));
    }
}