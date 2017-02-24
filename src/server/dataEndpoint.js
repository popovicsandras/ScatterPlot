const csv = require('csvtojson');

function dataEndpoint(dataFilePath, logger = console) {
    return function (req, res) {
        csv()
            .fromFile(dataFilePath)
            .on('end_parsed', (jsonArrObj) => {
                res.json(jsonArrObj.map((coordinates) => {
                    return {
                        x: parseFloat(coordinates.x),
                        y: parseFloat(coordinates.y)
                    };
                }));
            })
            .on('error', (error) => {
                logger.log('error', error);
                res.sendStatus(500);
            });
    }
}

module.exports = dataEndpoint;