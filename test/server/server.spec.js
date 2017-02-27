import scatterPlotServer from 'server';
import request from 'supertest';
import express from 'express';
import path from 'path';

describe('server', function() {

    const dataFileName = path.join(__dirname, 'fixtures', 'namekians.csv'),
        publicPath = path.join(__dirname, 'fixtures');
    
    let expressApp,
        expressServer,
        logger;

    beforeEach(function() {
        expressApp = express();
        logger = {info: () => {}};
        
        expressServer = scatterPlotServer({
            port: 3001,
            publicPath: publicPath,
            dataFilePath: dataFileName
        }, {expressApp, logger});
    });

    afterEach(function(done) {
        expressServer.close(done);
    })

    it('should response to /', function(done) {
        request(expressApp)
            .get('/')
            .expect(200, done);
    });

    it('should response to /api/v1/data', function(done) {
        request(expressApp)
            .get('/api/v1/data')
            .expect(200, done);
    });
});