import React from 'react';
import { shallow, mount } from 'enzyme';
import ScatterPlotController from 'ScatterPlotController';
import ScatterPlotChart from 'ScatterPlotChart';
import Highcharts from 'highcharts';

function waitForNextTick(callback) {
    setTimeout(callback, 0);
} 

describe('<ScatterPlotController />', function() {
    
    let highchartsStub;

    beforeEach(function() {
        highchartsStub = sinon.stub(Highcharts, 'chart', () => {
            return { 
                showLoading: () => {}, 
                hideLoading: () => {},
                series: [
                    {setData: () => {}}
                ]
            };
        });
    });

    afterEach(function() {
        highchartsStub.restore();
    });

    it('should renders <ScatterPlotChart /> with loading state=true by default', function() {
        
        const wrapper = shallow(<ScatterPlotController />);
        
        expect(wrapper.find(ScatterPlotChart)).to.have.length(1);
        expect(wrapper.find(ScatterPlotChart).prop('loading')).to.be.equal(true);
        expect(wrapper.find(ScatterPlotChart).prop('data')).to.be.eql([]);
    });

    it('should update <ScatterPlotChart /> with loading state=false after the data has been loaded', function(done) {
        
        const DataStore = () => {
            return {
                fetch: () => { return Promise.resolve([[3,4]]); }
            }
        };
        
        const wrapper = mount(<ScatterPlotController DataStore={DataStore} />);

        waitForNextTick(() => {
            expect(wrapper.find(ScatterPlotChart).prop('loading')).to.be.equal(false);
            expect(wrapper.find(ScatterPlotChart).prop('data')).to.be.eql([[3,4]]);
            done();
        });
    });
});