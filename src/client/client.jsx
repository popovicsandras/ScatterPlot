import Chart from 'chart.js'
import 'whatwg-fetch';

export function scatterPlotClient(ctx) {
    
    fetch('/data')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const scatterChart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Scatter Dataset',
                        data: data
                    }]
                },
                options: {
                    showLines: false,
                    tooltips: {
                        enabled: false
                    },
                    scales: {
                        xAxes: [{
                            type: 'linear',
                            position: 'bottom'
                        }]
                    }
                }
            });
        })
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
}

