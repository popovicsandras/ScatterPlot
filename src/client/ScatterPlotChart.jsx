import React from 'react';
import getChartOptions from './chartOptions';
import Highcharts from 'highcharts';
    
export default class ScatterPlotChart extends React.Component {

    componentDidMount() {
        this.chart = Highcharts.chart(this.chartContainer, getChartOptions(this.props.data));
        this._updateLoadingState();
    }

    componentDidUpdate(prevProps, prevState) {
        this.chart.series[0].setData(this.props.data);

        if (prevProps.loading !== this.props.loading) {
            this._updateLoadingState();
        }
    }

    _updateLoadingState() {
        if (this.props.loading) {
            this.chart.showLoading();
        } else {
            this.chart.hideLoading();
        }
    }
        
    render() {
        return <div ref={(chartContainer) => { this.chartContainer = chartContainer; }} />;
    }
};

