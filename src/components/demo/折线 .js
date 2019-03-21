{
    xAxis: {   //x坐标
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {  //Y坐标
        type: 'value'
    },
    series: [{   //数据分类
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color: "#ff0"
        }
    }]
};