$(function() {
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'pie',
                margin: 0,
                width: 240,
                height: 240
            },
            title: {
                useHTML: true,
                text: '<span id="files">2,435 files</span><br><span id="space">47gb</span>',
                align: 'center',
                verticalAlign: 'middle',
                y: -10
            },
            subtitle: {
                text: '',
                style: {
                    display: 'none'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            exporting: { 
                enabled: false 
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Browsers',
                data: [
                {
                    name: "Audio",
                    y: 55,
                    color: "#4daf7b"
                },
                {
                    name: "Video",
                    y: 23,
                    color: "#e55f3b"
                },
                {
                    name: "Photos",
                    y: 17,
                    color: "#ebc85e"
                },
                {
                    name: 'Others',
                    y: 5.0,
                    color: "#f4ede7"
                }],
                size: '100%',
                innerSize: '50%',
                showInLegend:false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });