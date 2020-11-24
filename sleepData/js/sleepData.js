// $(window).ready(function () {




var sleepRate= [
    { value: 12, name: '深度睡眠' },
    { value: 58, name: '浅度睡眠' },
    { value: 24, name: '快速眼动' },
    { value: 6,  name: '清醒' }
];

window.onresize = this.resize;
function resize() {

        if (myChart1) {
            myChart1.resize();
        }
        if (this.myChart2) {
            this.myChart2.resize();
        }
        if (this.myChart3) {
            this.myChart3.resize();
        }
        if (this.myChart4) {
            this.myChart4.resize();
        }

}
resize();

var myChart1= echarts.init($("#tu1")[0]);

var option1 = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%',
        textStyle: {
            fontSize: 14
        },
    },
    color: ['#353AEA', '#3775F6', '#39CAEC', '#E3E5EA'],
    legend: {
        orient: 'vertical',
        left: '60%',
        top: 'middle',
        align: 'left',
        textStyle: {
            fontSize: 20
        },
        data: ['深度睡眠', '浅度睡眠', '快速眼动', '清醒']
        ,
        formatter: (name)=>{
            const val = this.sleepRate.find(element=>element.name === name)

            return name + ' ' + val.value + '%';
        }
    },
    series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['30%', '50%'],
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
            },
            itemStyle: {
                color: '#fbdd7a',
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
    }]
};

myChart1.setOption(option1);

var myChart2 = echarts.init($('#tu2')[0]);
var option2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'none' // 删除标线,显示就是line
        },
        formatter: '<div style="font-size:28px;color:white;padding:6px;">{b} ❤ {c}</div>', // {c} 就是y的值 {a} <br/>
    },
    xAxis: {
        type: 'category',
        data: ['9.4','9.3','9.2','9.1','8.31','8.30','8.29'],
        boundaryGap : false,
        splitLine: {
            lineStyle: {
                type: 'solid',
                width: 3
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6a6f7a',
                fontSize: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E3E5EA',
                width: 2
            }
        }
    },
    yAxis: {
        // min: 40,
        type: 'value',
        // data: [40, 50, 60, 70, 80, 90],
        // data: this.dto.sevenDaysHeartY,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                width: 2 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6a6f7a', //更改坐标轴文字颜色
                fontSize: 15 //更改坐标轴文字大小
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E3E5EA',
                width: 2
            }
        }
    },
    grid: {
        height: 'auto',
        left: '3%', //组件离容器左侧的距离
        right: '3%',
        bottom: '5%',
        top: '5%',
        containLabel: true //grid 区域是否包含坐标轴的刻度标签
    },
    series: [{
        data: ['86','85','84','81','81','86','88'],
        type: 'line',
        smooth: true,
        symbol: 'circle', //拐点设置为实心
        symbolSize: 4, //拐点大小
        itemStyle: {
            normal: {
                // label : {show: true},
                color: '#4680f1',
                lineStyle: {
                    color: '#4680f1',
                    width: 2 //这里是为了突出显示加上的
                }
            }
        }
    }]
};
   myChart2.setOption(option2);


var myChart3 = echarts.init($('#tu3')[0]);
var option3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'none' // 删除标线,显示就是line
        },
        formatter: '<div style="font-size:28px;color:white;padding:6px;"> ❤ {c}</div>', // {c} 就是y的值 {a} <br/>
    },
    xAxis: {
        type: 'category',
        data: ['0','0','0','0','0'],
        boundaryGap : false,
        splitLine: {
            lineStyle: {
                type: 'solid',
                width: 3
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#6a6f7a',
                fontSize: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E3E5EA',
                width: 2
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                width: 2 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6a6f7a', //更改坐标轴文字颜色
                fontSize: 15 //更改坐标轴文字大小
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E3E5EA',
                width: 2
            }
        }
    },
    grid: {
        height: 'auto',
        left: '3%', //组件离容器左侧的距离
        right: '3%',
        bottom: '5%',
        top: '5%',
        containLabel: true //grid 区域是否包含坐标轴的刻度标签
    },
    series: [{
        data: ['0','0','0','0','0'],
        type: 'line',
        smooth: true,
        symbol: 'circle', //拐点设置为实心
        symbolSize: 4, //拐点大小
        itemStyle: {
            normal: {
                // label : {show: true},
                color: '#28BFDD',
                lineStyle: {
                    color: '#28BFDD',
                    width: 2 //这里是为了突出显示加上的
                }
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(40,191,221,1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(40,191,221,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};
myChart3.setOption(option3);


var myChart4 = echarts.init($('#tu4')[0]);
var option4 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'none' // 删除标线,显示就是line
        },
        formatter: '<div style="font-size:28px;color:white;padding:6px;"> ❤ {c}</div>', // {c} 就是y的值 {a} <br/>
    },
    xAxis: {
        type: 'category',
        data: ['0','0','0','0','0'],
        boundaryGap : false,
        splitLine: {
            lineStyle: {
                type: 'solid',
                width: 3
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#6a6f7a',
                fontSize: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E3E5EA',
                width: 2
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                width: 2 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6a6f7a', //更改坐标轴文字颜色
                fontSize: 15 //更改坐标轴文字大小
            }
        },
        axisLine: {
            lineStyle: {
                color: '#E3E5EA',
                width: 2
            }
        }
    },
    grid: {
        height: 'auto',
        left: '3%', //组件离容器左侧的距离
        right: '3%',
        bottom: '5%',
        top: '5%',
        containLabel: true //grid 区域是否包含坐标轴的刻度标签
    },
    series: [{
        data: ['0','0','0','0','0'],
        type: 'line',
        smooth: true,
        symbol: 'circle', //拐点设置为实心
        symbolSize: 4, //拐点大小
        itemStyle: {
            normal: {
                // label : {show: true},
                color: '#3775F6',
                lineStyle: {
                    color: '#3775F6',
                    width: 2 //这里是为了突出显示加上的
                }
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'rgba(40,191,221,1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(40,191,221,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};
myChart4.setOption(option4);


// })
