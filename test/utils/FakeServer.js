export function FakeServer() {
    return {
        setup() {
            this.server = sinon.fakeServer.create();
            this.server.autoRespond = true;
            this.server.respondImmediately = true;
            this.server.autoRespondAfter = 0;
            window.XMLHttpRequest = global.XMLHttpRequest;
        },

        restore() {
            this.server.restore();
            window.XMLHttpRequest = global.XMLHttpRequest;
        },

        respondWith(...args) {
            this.server.respondWith(...args);
        }
    }
}