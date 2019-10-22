document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('container1', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Sandwich Sales by Type (April 2017-2019)'
    },
    subtitle: {
        text: 'Source: Monthly Sales'
    },
    xAxis: {
        categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
    },
    yAxis: {
        title: {
            text: 'Sum of Unit Sales'
        },
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    series: [{
        name: 'Hamburger',
        color: '#BE0C0C',
        marker: {
            lineColor: '#BE0C0C',
            symbol: 'circle'
        },
        data: [7947352, 8186393, 7629715, 8012517, 8060250, 7922921, {
            y: 6781234,
            marker: {
                symbol: 'url(http://icons.iconarchive.com/icons/danieledesantis/playstation-flat/24/playstation-circle-black-and-white-icon.png)'
            }
        }, 7386402, 6954506, 7568561, 7350256, 7267799, 7317841]

    }, {
        name: 'Chicken Fillet',
        color: ' ',
        marker: {
            lineColor: '#FFC300',
            symbol: 'circle'
        },
        data: [3285062, 3438398, 3256752, 3338673, 3467244, 3327230, {
            y: 2862020,
            marker: {
                symbol: 'url(http://icons.iconarchive.com/icons/danieledesantis/playstation-flat/24/playstation-circle-black-and-white-icon.png)'
            }
        }, 3052314, 2874069, 3128423, 3061564, 3003545, 3073157]
    }, {
        name: 'Fish Fillet',
        color: '#000000',
        marker: {
            lineColor: '#000000',
            symbol: 'circle'
        },
        data: [2019461, 2063039, 1954050, 1987216, 2014826, 1997118, {
            y: 1730781,
            marker: {
                symbol: 'url(http://icons.iconarchive.com/icons/danieledesantis/playstation-flat/24/playstation-circle-black-and-white-icon.png)'
            }
        }, 1860819, 1710520, 1861751, 1866627, 1802980, 1859086]

    }]
});
    });