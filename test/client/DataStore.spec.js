import DataStore from 'DataStore';

describe('DataStore', function() {

    let dataStore;

    beforeEach(function() {
        dataStore = DataStore();

        this.xhr = sinon.useFakeXMLHttpRequest();
        this.requests = [];
        this.xhr.onCreate = (xhr) => { this.requests.push(xhr); };
    });

    afterEach(function() {
        this.xhr.restore();
    });

    it('should send request to the proper endpoint', function() {
        
        dataStore.fetch();

        expect(this.request[0].url).to.be.equal('/api/v1/data');
    });
});
