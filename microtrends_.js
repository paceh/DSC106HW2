document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('container4', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Daily Sandwich Sales Percentage per Day (MTD)'
            },
            subtitle: {
                text: 'Source: Daily Sales'
            },
            xAxis: {
                categories: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Daily Sales Percentage'
                }
            },
            tooltip: {
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + 
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Hamburger',
                data: [60.51, 59.83, 60.11, 59.65, 59.09, 58.58, 61.28],
                color: '#BE0C0C'

            }, {
                name: 'Chicken Fillet',
                data: [25.90, 25.41, 25.17, 25.15, 24.99, 24.43, 25.09],
                color: '#FFC300'

            }, {
                name: 'Fish Fillet',
                data: [13.58, 14.76, 14.71, 15.20, 15.92, 16.98, 13.62],
                color: '#000000'

            }]
        });
    });
