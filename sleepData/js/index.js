

    var myChart1=echarts.init($('#tu1')[0]);

    var  option1 = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data:['深度睡眠','浅度睡眠','快速眼动','清醒']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value:12, name: '深度睡眠'},
                    {value: 58, name: '浅度睡眠'},
                    {value: 24, name: '快速眼动'},
                    {value: 6, name: '清醒'}
                ]
            }
        ]
    };
    myChart1.setOption(option1);

//    图2
    var myChart2 = echarts.init ($('#tu2')[0]);
    var option2 = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['12.28', '12.29', '12.30', '12.31', '01.01', '01.02', '01.03'],
            splitLine:{
                lineStyle:{
                    type:'solid',
                    width:3
                }
            }
            ,axisLabel:{
                show:true,
                textStyle:{
                    color:'#6a6f7a',
                    fontsize:10
                }
            }
        },
        yAxis: {type: 'value',
            max:90,
            min:40,
            splitNumber:6,
            minInterval: 1,
            boundaryGap:[0.2,0.5],
            data:[40,50,60,70,80,90],
            splitLine: {
                lineStyle: {
                    type:'dashed',
                    width:3
                }
            }
            ,axisLabel:{
                show:true,
                textStyle:{
                    color:'#6a6f7a',
                    fontsize:10
                }
            }
        },
        series: [{
            data: [71, 75, 58, 63, 55, 64, 68],
            type: 'line',
            smooth: 'true',
            symbol:'circle',
            symbolSize:5,
            itemStyle:{
                normal:{
                    color:'#4680f1',
                    lineStyle:{
                        color:'#4680f1',
                        width:2
                    }
                }
            }
        }],
        tooltip: {
            trigger: 'axis',
            axisPointer:{

            },
            formatter:'<div style="font-size: 28rem;color: white;padding: 6rem;">{b}❤{c}</div>'
        }
    };
    myChart2.setOption (option2);

    //图三
    var myChart3 = echarts.init ($('#tu3')[0]);
    var option3= {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // data: ['01:57', '02:08', '02:38', '02:49', '03:23', '03:34', '03:45', '03:56', '04:07', '04:18', '04:29', '04:40', '04:51', '05:02', '05:13', '05:24', '05:35', '05:50']
        },
        yAxis: {type: 'value',
            max: 150,
            min: 50,
            splitNumber:6,
            splitLine: {
                lineStyle: {
                    type:'dashed',
                    width:3
                }
            }

        },
        series: [{
            data: ['96', '105', '98', '104', '99', '126', '112', '110', '109', '97', '99', '102', '108', '98'],
            type: 'line',
            smooth: 'true',
            symbol:'circle',
            symbolSize: 5,
            itemStyle:{
                normal:{
                    color:'#28BFDD',
                    lineStyle:{
                        color:'#28BFDD',
                        width:2
                    }
                }
            }
        }],
        tooltip: {
            trigger: 'axis'
        }
    };
    myChart3.setOption (option3);


    //图四
    var myChart4 = echarts.init ($('#tu4')[0]);
    var option4= {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // data: ['01:57', '02:08', '02:38', '02:49', '03:23', '03:34', '03:45', '03:56', '04:07', '04:18', '04:29', '04:40', '04:51', '05:02', '05:13', '05:24', '05:35', '05:50']
        },
        yAxis: {type: 'value',
            max: 150,
            min: 0,
            splitNumber:6,
            splitLine: {
                lineStyle: {
                    type:'dashed',
                    width:3
                }
            }


        },
        series: [{
            data: ['96', '105', '98', '104', '99', '126', '112', '110', '109', '97', '99', '102', '108', '98'],
            type: 'line',
            smooth: 'true',
            symbol:'circle',
            symbolSize: 5,
            itemStyle:{
                normal:{
                    color:'#4680f1',
                    lineStyle:{
                        color:'#4680f1',
                        width:2
                    }
                }
            }
        }],
        tooltip: {
            trigger: 'axis'
        }
    };
    myChart4.setOption (option4);


