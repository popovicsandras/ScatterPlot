const jsdom = require('jsdom'),
    jqueryFactory = require('jquery'),
    chai = require('chai'),
    sinonChai = require('sinon-chai');

const document = jsdom.jsdom('<!doctype html><html><body></body></html>'),
    window = document.defaultView;

let $;

global.window = window;
global.document = document;
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
