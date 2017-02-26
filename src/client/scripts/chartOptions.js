export default function(data) {
    return {
        chart: { 
            type: 'scatter', 
            zoomType: 'xy' 
        },
        title: {
            text: 'World domination intention in the nuclear chicken population by intelligence'
        },
        subtitle: { 
            text: 'Source: Chickengraph' 
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
        credits: {
            enabled: false
        },
        series: [{
            name: 'Chicken',
            color: 'rgba(83, 150, 200, .5)',
            data: data
        }]
    };
}