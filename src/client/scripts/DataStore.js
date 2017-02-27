const endpoint = '/api/v1/data';

const DataStorePrototype = {
    async fetch() {
        try {
            const response = await fetch(endpoint);
            const json = await response.json();
            return json.map(({x,y}) => [x,y]);
        } catch (ex) {
            console.error('parsing failed', ex);
            return [];
        }
    }
}

export default function DataStore() {
    return Object.create(DataStorePrototype);
}