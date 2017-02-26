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
            data: data
        }]
    };
}