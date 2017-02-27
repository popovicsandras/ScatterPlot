const chai = require('chai'),
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);
global.chai = chai;
global.expect = chai.expect;
global.sinon = sinon;
global.sinonChai = sinonChai;