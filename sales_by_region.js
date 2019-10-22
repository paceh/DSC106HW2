document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('container2', {

            chart: {
                type: 'column'
            },

            title: {
                text: 'Sandwich Sales(Apr2018-Sep2018 and Nov2018-Apr2019) by Region'
            },

            xAxis: {
                categories: ['Northeast','Southwest','Northwest','Southeast','Central']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of Units Sold'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'Hamburger(Apr-Sep)',
                data: [1631340, 1617368, 1602201, 1569626, 1539324],
                stack: 'Apr-Sep',
                color: '#BE0C0C'
            }, {
                name: 'Hamburger(Nov-Apr)',
                data: [1515188, 1491718, 1449467, 1436653, 1414536],
                stack: 'Nov-Apr',
                color: '#BE0C0C'
            }, {
                name: 'Chicken Fillet(Apr-Sep)',
                data: [693577, 678232, 667617, 654071, 658730],
                stack: 'Apr-Sep',
                color: '#FFC300'
            }, {
                name: 'Chicken Fillet(Nov-Apr)',
                data: [614720, 625707, 599928, 594522, 597303],
                stack: 'Nov-Apr',
                color: '#FFC300'
            }, {
                name: 'Fish Fillet(Apr-Sep)',
                data: [416092, 406858, 400511, 392463, 390028],
                stack: 'Apr-Sep',
                color: '#000000'
            }, {
                name: 'Fish Fillet(Nov-Apr)',
                data: [375647, 374863, 364378, 361362, 355613],
                stack: 'Nov-Apr',
                color: '#000000'
            }]
        });
    });