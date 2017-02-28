const jsdom = require('jsdom'),
    jqueryFactory = require('jquery'),
    chai = require('chai'),
    sinonChai = require('sinon-chai');

const document = jsdom.jsdom('<html><body></body></html>'),
    window = document.defaultView;

let $;

global.document = document;
global.window = window;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
    }
});

global.navigator = { userAgent: 'node.js' };

global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;

$ = jqueryFactory(window);
global.$ = $;
window.$ = $;

// This can be required only after the global.window and global.XMLHttpRequest have been created
const sinon = require('sinon');

chai.use(sinonChai);
global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;
global.sinonChai = sinonChai;

// Poor man's fetch mock, only for this Scatter Plot exercise (whatwg-fetch doesn't work in node...)
global.fetch = function(url) {
    return Promise.resolve({
        json: () => {
            return new Promise(function(resolve, reject) {
                global.$.get(url)
                    .done(resolve)
                    .fail(reject);
            });
        }
    });
}
