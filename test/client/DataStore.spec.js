import DataStore from 'DataStore';
import {FakeServer} from 'FakeServer';

describe('DataStore', function() {

    let dataStore, server;

    beforeEach(function() {
        dataStore = DataStore();

        server = FakeServer();
        server.setup();
    });

    afterEach(function() {
        server.restore();
    });

    it('should send request to the proper endpoint', async function() {
        
        this.timeout(100);

        server.respondWith('GET', '/api/v1/data', [200, { 'Content-Type': 'application/json' }, '[]']);

        await dataStore.fetch();
    });

    it('should translate the json response to the proper format', async function() {
        
        const response = [{x: 12.3, y: 15.5}, {x: 11, y: 32}];
        server.respondWith('GET', '/api/v1/data', 
            [200, { 'Content-Type': 'application/json' }, JSON.stringify(response)]
        );

        const data = await dataStore.fetch();

        expect(data).to.be.eql([ [12.3, 15.5], [11, 32] ]);
    });

    it('should return an empty array in case of server side error', async function() {
        
        server.respondWith('GET', '/api/v1/data', [500, {}, '']);

        const data = await dataStore.fetch();

        expect(data).to.be.eql([]);
    });

});
