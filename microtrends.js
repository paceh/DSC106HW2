// Make monochrome colors
var pieColors = (function () {
    var colors = [],
        base = '#FFC300',
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('container3', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Total Average Sale of Sandwiches per Day (MTD)'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    colors: pieColors,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    }
                }
            },
            series: [{
                name: 'Share',
                data: [
                    { name: 'Sunday', y: 14.04 },
                    { name: 'Monday', y: 14.35 },
                    { name: 'Tuesday', y: 14.20 },
                    { name: 'Wednesday', y: 14.39 },
                    { name: 'Thursday', y: 14.38 },
                    { name: 'Friday', y: 14.70 },
                    { name: 'Saturday', y: 13.93 }
                ]
            }]
        });
    });
