var jsdom = require('jsdom'),
    chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

var document = jsdom.jsdom('<!doctype html><html><body></body></html>');
var window = document.defaultView;
global.document = document;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;

chai.expect();
chai.use(sinonChai);
global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;
global.sinonChai = sinonChai;