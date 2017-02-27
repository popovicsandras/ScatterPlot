import dataEndPoint from 'dataEndPoint';
import path from 'path';

describe('dataEndPoint', function() {

    const dataFileName = path.join(__dirname, 'fixtures', 'namekians.csv'),
        nonExistingDataFileName = 'whatever.csv';

    let request = null,
        response,
        logger;

    beforeEach(function() {
        response = {
            json: () => {},
            sendStatus: () => {}
        };

        logger = {
            error: sinon.spy()
        };
    });

    it('should return an express middleware callback', function() {
        
        function isCallable() {
            const callback = dataEndPoint(dataFileName);
            callback(request, response);
        }

        expect(isCallable).to.not.throw();
    });

    it('should invoke the json method on the passed response object with proper parameters', function(done) {
        
        response.json = function(json) {
            expect(json).to.be.eql([{"x": 1, "y": 2}, {"x": 3, "y": 4}]);
            done();
        };

        const callback = dataEndPoint(dataFileName);
        callback(request, response);        
    });

    it('should send status code 500 on error with the csv parsing', function(done) {
        
        response.sendStatus = function(statusCode) {
            expect(statusCode).to.be.equal(500);
            done();
        };

        const callback = dataEndPoint(nonExistingDataFileName, logger);
        callback(request, response);        
    });    

    it('should log the error', function(done) {
        
        response.sendStatus = function() {
            expect(logger.error).to.have.been.calledWith(`File: ${nonExistingDataFileName}`);
            done();
        };

        const callback = dataEndPoint(nonExistingDataFileName, logger);
        callback(request, response);        
    });    
});