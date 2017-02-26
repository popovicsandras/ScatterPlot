import React from 'react';
import Highcharts from 'highcharts';
    
export default class ScatterPlotChart extends React.Component {

    componentDidMount() {
        this.chart = Highcharts.chart(this.chartContainer, {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'World domination intention in the nuclear chicken population by intelligence'
            },
            subtitle: {
                text: 'Source: Heinz  2003'
            },
            xAxis: {
                title: {
                    text: 'PIP (Poultry Intelligence Point)',
                    showLastLabel: true
                }
            },
            yAxis: {
                title: {
                    text: 'Intention level'
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Chicken',
                color: 'rgba(223, 83, 83, .5)',
                data: this.props.data
            }]
        });

        this._updateLoadingState();
    }

    componentDidUpdate(prevProps, prevState) {
        this.chart.update({
            series: [{
                name: 'Chicken',
                color: 'rgba(223, 83, 83, .5)',
                data: this.props.data
            }]
        });

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

