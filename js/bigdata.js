// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('analyze'));
    option = {
        // title: {
        //     subtext: '虚构数据',
        //     left: 'center'
        // },
        color: ['#c1232b', '#27727b', '#fcce10', '#e87c25','#b5c334'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top: '0',
            // bottom: 10,
            left: 'left',
            textStyle: { color: '#fff' },
            data: ['卖淫嫖娼', '经侦嫌疑', '重点人口', '刑侦重点', '吸毒人口']
            
        },
        series: [
            {
                type: 'pie',
                radius: '55%',
                center: ['50%', '65%'],
                selectedMode: 'single',
                data: [
                    { value: 335, name: '卖淫嫖娼' },
                    { value: 310, name: '经侦嫌疑' },
                    { value: 234, name: '重点人口' },
                    { value: 135, name: '刑侦重点' },
                    { value: 1548, name: '吸毒人口' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    // minigrateChart.resize();
})





var myChart1 = echarts.init(document.getElementById('age'));

option1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        textStyle:{color:'#fff'},
        data: ['13-30', '31-40', '41-50', '51-60', '65岁以上','未标明'],
        
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '60%'],
            center: ['50%', '65%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                        
                    }
                }
            },
            color: ['#c1232b', '#27727b', '#fcce10', '#e87c25', '#b5c334', '#fe8463'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '13-30' },
                { value: 310, name: '31-40' },
                { value: 234, name: '41-50' },
                { value: 135, name: '51-60' },
                { value: 135, name: '65岁以上' },
                { value: 1548, name: '未标明'}
            ]
        }
    ]
};
myChart1.setOption(option1);



var myChart2 = echarts.init(document.getElementById('area'));
// app.title = '坐标轴刻度与标签对齐';

option2 = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top:'3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['河北', '天津', '北京', '新疆', '内蒙', '宁夏', '海南'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                textStyle: {
                    color: '#fadb71'
                }

            },
            axisLine: {
                lineStyle: {
                    color: '#27727b'
                }
            }
        }
    ],
    yAxis: [
        {
            // type : 'category',
            // data : ['100','200','300','400'],
            min: 0,
            max: 400,
            axisTick: {
                alignWithLabel: true,
                
            },
            axisLabel: {
                textStyle: {
                    color: '#fadb71'
                }

            },
            axisLine: {
                lineStyle: {
                    color: 'transparent'
                }
            }
        }
    ],
    series: [
        {
            name: '地区分布',
            type: 'bar',
            barWidth: '55%',
            color: '#fadb71',
            data: [10, 52, 200, 334, 390, 330, 220]
        },

    ],
    label: {
        normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
        }
    },
    itemStyle: {
        normal: {

            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: 'rgba(17, 168,171, 1)'
            // }, {
            //     offset: 1,
            //     color: 'rgba(17, 168,171, 0.1)'
            // }]),
            // color: '#fadb71',
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
        }
    }
};
myChart2.setOption(option2);





var myChart3 = echarts.init(document.getElementById('inOutTime'));
option3 = {
    // title: {
    //     text: '呼叫情况',
    //     textStyle: {
    //         color: '#fff',
    //     },
    // },
    backgroundColor: 'rgba(255,255,255,.1)',
    backgroundSize:'content',
    tooltip: {
        trigger: 'axis'
    },
    // legend: {
    //     top: '3%',
    //     data: [
    //         { name: '呼入', textStyle: { color: "#fff" } },
    //         { name: '呼出', textStyle: { color: "#fff" } }
    //     ],
    // },
    grid: {
        top: '18%',
        left: '5%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['6:00-9:00', '10:00-12:00', '13:00-15:00', '16:00-20:00', '21:00-24:00'],
        axisLine: { lineStyle: { color: "#008acd" } },
        axisLabel: {
            textStyle: {
                color: '#7fff00'
            }
        }
    },
    yAxis: {
        type: 'value',
        data: [2, 5],
        axisLine: { lineStyle: { color: "#008acd" } },
        axisLabel: {
            textStyle: {
                color: '#7fff00'
            }
        }

    },
    series: [
        {
            // name:'呼入',
            type: 'line',
            smooth: true,
            label: {
                normal: {
                    // show: true,
                    position: 'top',
                    textStyle: {
                        color: '#FC8A31'
                    }
                }
            },
            name: '人次',
            data: [800, 300, 500, 800, 300],
            itemStyle: {
                normal: {
                    color: '#7fff00'
                }
            }
        }

    ]
};
myChart3.setOption(option3);





var myChart4 = echarts.init(document.getElementById('mapCont'));
// 秋雁南飞：
// 此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果
// 默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
// 当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。
// http://echarts.baidu.com/option.html#series-map.geoIndex
// 并且加了pin气泡图标以示数值大小
// // 全局变量区:参考江西绿色金融（谢谢：本来想用闭包实现接口数据调用，没时间了）

// 本图作者：参考秋雁南飞的《投票统计》一图，网址：http://gallery.echartsjs.com/editor.html?c=xrJU-aE-LG
var name_title = "犯罪人口来源分析"
// var subname = '数据爬取自千栀网\n，\n上海、浙江无文理科录取人数'
// var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
// var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [
    { name: "北京", value: 31 },
    { name: "天津", value: 25 },
    { name: "河北", value: 123 },
    { name: "山西", value: 34 },
    { name: "内蒙古", value: 245 },
    { name: "辽宁", value: 564 },
    { name: "吉林", value: 123 },
    { name: "黑龙江", value: 278 },
    { name: "上海", value: 189 },
    { name: "江苏", value: 256 },
    { name: "浙江", value: 199 },
    { name: "安徽", value: 242 },
    { name: "福建", value: 242 },
    { name: "江西", value: 189 },
    { name: "山东", value: 289 },
    { name: "河南", value: 289 },
    { name: "湖北", value: 378 },
    { name: "湖南", value: 280 },
    { name: "重庆", value: 498 },
    { name: "四川", value: 474 },
    { name: "贵州", value: 175 },
    { name: "云南", value: 135 },
    { name: "西藏", value: 35 },
    { name: "陕西", value: 364 },
    { name: "甘肃", value: 287 },
    { name: "青海", value: 164 },
    { name: "宁夏", value: 287 },
    { name: "新疆", value: 40 },
    { name: "广东", value: 80 },
    { name: "广西", value: 109 },
    { name: "海南", value: 32 },
];

var geoCoordMap = {};
var toolTipData = [
    { name: "北京", value: 31 },
    { name: "天津", value: 25 },
    { name: "河北", value: 123 },
    { name: "山西", value: 34 },
    { name: "内蒙古", value: 245},
    { name: "辽宁", value: 564 },
    { name: "吉林", value: 123 },
    { name: "黑龙江", value: 278 },
    { name: "上海", value: 189 },
    { name: "江苏", value: 256 },
    { name: "浙江", value: 199 },
    { name: "安徽", value: 242},
    { name: "福建", value: 242},
    { name: "江西", value: 189},
    { name: "山东", value: 289 },
    { name: "河南", value: 289 },
    { name: "湖北", value: 378 },
    { name: "湖南", value: 280},
    { name: "重庆", value: 498 },
    { name: "四川", value: 474 },
    { name: "贵州", value: 175 },
    { name: "云南", value: 135 },
    { name: "西藏", value: 35 },
    { name: "陕西", value: 364},
    { name: "甘肃", value: 287 },
    { name: "青海", value: 164 },
    { name: "宁夏", value: 287},
    { name: "新疆", value: 40 },
    { name: "广东", value: 80 },
    { name: "广西", value: 109 },
    { name: "海南", value: 32 },
];

/*获取地图数据*/
myChart4.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart4.hideLoading();
// mapFeatures.forEach(function (v) {
    // 地区名称
    // var name = v.properties.name;
    // 地区经纬度
    // geoCoordMap[name] = v.properties.cp;

// });

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
// console.log(data)
// console.log(toolTipData)
var max = 1000,
    min = 0; // todo 
var maxSize4Pin = 1000,
    minSize4Pin = 20;

// var convertData = function (data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//         var geoCoord = geoCoordMap[data[i].name];
//         if (geoCoord) {
//             res.push({
//                 // name: data[i].name,
//                 value: geoCoord.concat(data[i].value),
//             });
//         }
//     }
//     return res;
// };
option4 = {
    title: {
        text: name_title,
        // subtext: subname,
        x: 'center',
        textStyle: {
            color: '#fff',
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle: {
            // fontSize: subname_fontSize,
            fontFamily: name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if (typeof (params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += "犯罪人口来源分析" + "<br>" + toolTipData[i].name+" : " + toolTipData[i].value;
                        // for (var j = 0; j < toolTipData[i].value.length; j++) {
                        //     toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        // }
                    }
                }
                // console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>'
                        // for (var j = 0; j < toolTipData[i].value.length; j++) {
                        //     toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        // }
                    }
                }
                // console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            }
        }
    },
    // legend: {
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x: 'right',
    //     data: ['credit_pm2.5'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
        show: false,
        min: 0,
        max: 600,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#f0f06f', '#0e94eb'] // 蓝绿
            color: ['#00cc00', '#0e94eb', '#f0f06f', '#ffff00'] // 蓝绿
            // color: ['yellow', 'blue'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    // geo: {
    //     show: true,
    //     map: mapName,
    //     label: {
    //         normal: {
    //             show: false
    //         },
    //         emphasis: {
    //             show: false,
    //         }
    //     },
    //     roam: true,
    //     itemStyle: {
    //         normal: {
    //             areaColor: '#031525',
    //             borderColor: '#3B5077',
    //         },
    //         emphasis: {
    //             areaColor: '#2B91B7',
    //         }
    //     }
    // },
    series: [{
        name: '散点',
        type: 'scatter',
        coordinateSystem: 'geo',
        // data: convertData(data),
        symbolSize: function (val) {
            return val[2] / 10;
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#05C3F9'
            }
        }
    },
    {
        type: 'map',
        map: mapName,
        geoIndex: 0,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
            normal: {
                // show: true
            },
            emphasis: {
                show: false,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#d0b30b'
            }
        },
        // animation: false,
        data: data
    },
    {
        // name: '点',
        type: 'scatter',
        coordinateSystem: 'geo',
        // symbol: 'pin', //气泡
        symbolSize: function (val) {
            var a = (maxSize4Pin - minSize4Pin) / (max - min);
            var b = minSize4Pin - a * min;
            b = maxSize4Pin - a * max;
            return a * val[2] + b;
        },
        // label: {
        //     normal: {
        //         show: true,
        //         textStyle: {
        //             color: '#fff',
        //             fontSize: 9,
        //         }
        //     }
        // },
        // itemStyle: {
        //     normal: {
        //         color: '#F62157', //标志颜色
        //     }
        // },
        // zlevel: 6,
        // data: convertData(data),
    },
    {
        // name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        // data: convertData(data.sort(function (a, b) {
        //     return b.value - a.value;
        // }).slice(0, 5)),
        // symbolSize: function (val) {
            // return val[2] / 10;
        // },
        // showEffectOn: 'render',
        // rippleEffect: {
            // brushType: 'stroke'
        // },
        // hoverAnimation: true,
        // label: {
            // normal: {
                // formatter: '{b}',
                // position: 'right',
                // show: true
            // }
        // },
        // itemStyle: {
            // normal: {
                // color: 'yellow',
                // shadowBlur: 10,
                // shadowColor: 'yellow'
            // }
        // },
        // zlevel: 1
    },

    ]
};
myChart4.setOption(option4);










// let minigrateChart = echarts.init(document.getElementById("mapCont"));
// let geoCoordMap = {
//     '上海': [121.4648, 31.2891],
//     '东莞': [113.8953, 22.901],
//     '东营': [118.7073, 37.5513],
//     '中山': [113.4229, 22.478],
//     '临汾': [111.4783, 36.1615],
//     '临沂': [118.3118, 35.2936],
//     '丹东': [124.541, 40.4242],
//     '丽水': [119.5642, 28.1854],
//     '乌鲁木齐': [87.9236, 43.5883],
//     '佛山': [112.8955, 23.1097],
//     '保定': [115.0488, 39.0948],
//     '兰州': [103.5901, 36.3043],
//     '包头': [110.3467, 41.4899],
//     '北京': [116.4551, 40.2539],
//     '北海': [109.314, 21.6211],
//     '南京': [118.8062, 31.9208],
//     '南宁': [108.479, 23.1152],
//     '南昌': [116.0046, 28.6633],
//     '南通': [121.1023, 32.1625],
//     '厦门': [118.1689, 24.6478],
//     '台州': [121.1353, 28.6688],
//     '合肥': [117.29, 32.0581],
//     '呼和浩特': [111.4124, 40.4901],
//     '咸阳': [108.4131, 34.8706],
//     '哈尔滨': [127.9688, 45.368],
//     '唐山': [118.4766, 39.6826],
//     '嘉兴': [120.9155, 30.6354],
//     '大同': [113.7854, 39.8035],
//     '大连': [122.2229, 39.4409],
//     '天津': [117.4219, 39.4189],
//     '太原': [112.3352, 37.9413],
//     '威海': [121.9482, 37.1393],
//     '宁波': [121.5967, 29.6466],
//     '宝鸡': [107.1826, 34.3433],
//     '宿迁': [118.5535, 33.7775],
//     '常州': [119.4543, 31.5582],
//     '广州': [113.5107, 23.2196],
//     '廊坊': [116.521, 39.0509],
//     '延安': [109.1052, 36.4252],
//     '张家口': [115.1477, 40.8527],
//     '徐州': [117.5208, 34.3268],
//     '德州': [116.6858, 37.2107],
//     '惠州': [114.6204, 23.1647],
//     '成都': [103.9526, 30.7617],
//     '扬州': [119.4653, 32.8162],
//     '承德': [117.5757, 41.4075],
//     '拉萨': [91.1865, 30.1465],
//     '无锡': [120.3442, 31.5527],
//     '日照': [119.2786, 35.5023],
//     '昆明': [102.9199, 25.4663],
//     '杭州': [119.5313, 29.8773],
//     '枣庄': [117.323, 34.8926],
//     '柳州': [109.3799, 24.9774],
//     '株洲': [113.5327, 27.0319],
//     '武汉': [114.3896, 30.6628],
//     '汕头': [117.1692, 23.3405],
//     '江门': [112.6318, 22.1484],
//     '沈阳': [123.1238, 42.1216],
//     '沧州': [116.8286, 38.2104],
//     '河源': [114.917, 23.9722],
//     '泉州': [118.3228, 25.1147],
//     '泰安': [117.0264, 36.0516],
//     '泰州': [120.0586, 32.5525],
//     '济南': [117.1582, 36.8701],
//     '济宁': [116.8286, 35.3375],
//     '海口': [110.3893, 19.8516],
//     '淄博': [118.0371, 36.6064],
//     '淮安': [118.927, 33.4039],
//     '深圳': [114.5435, 22.5439],
//     '清远': [112.9175, 24.3292],
//     '温州': [120.498, 27.8119],
//     '渭南': [109.7864, 35.0299],
//     '湖州': [119.8608, 30.7782],
//     '湘潭': [112.5439, 27.7075],
//     '滨州': [117.8174, 37.4963],
//     '潍坊': [119.0918, 36.524],
//     '烟台': [120.7397, 37.5128],
//     '玉溪': [101.9312, 23.8898],
//     '珠海': [113.7305, 22.1155],
//     '盐城': [120.2234, 33.5577],
//     '盘锦': [121.9482, 41.0449],
//     '石家庄': [114.4995, 38.1006],
//     '福州': [119.4543, 25.9222],
//     '秦皇岛': [119.2126, 40.0232],
//     '绍兴': [120.564, 29.7565],
//     '聊城': [115.9167, 36.4032],
//     '肇庆': [112.1265, 23.5822],
//     '舟山': [122.2559, 30.2234],
//     '苏州': [120.6519, 31.3989],
//     '莱芜': [117.6526, 36.2714],
//     '菏泽': [115.6201, 35.2057],
//     '营口': [122.4316, 40.4297],
//     '葫芦岛': [120.1575, 40.578],
//     '衡水': [115.8838, 37.7161],
//     '衢州': [118.6853, 28.8666],
//     '西宁': [101.4038, 36.8207],
//     '西安': [109.1162, 34.2004],
//     '贵阳': [106.6992, 26.7682],
//     '连云港': [119.1248, 34.552],
//     '邢台': [114.8071, 37.2821],
//     '邯郸': [114.4775, 36.535],
//     '郑州': [113.4668, 34.6234],
//     '鄂尔多斯': [108.9734, 39.2487],
//     '重庆': [107.7539, 30.1904],
//     '金华': [120.0037, 29.1028],
//     '铜川': [109.0393, 35.1947],
//     '银川': [106.3586, 38.1775],
//     '镇江': [119.4763, 31.9702],
//     '长春': [125.8154, 44.2584],
//     '长沙': [113.0823, 28.2568],
//     '长治': [112.8625, 36.4746],
//     '阳泉': [113.4778, 38.0951],
//     '青岛': [120.4651, 36.3373],
//     '韶关': [113.7964, 24.7028]
// };
// let BJData = [
//     [{
//         name: '北京'
//     }, {
//         name: '上海',
//         value: 95
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '广州',
//         value: 90
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '大连',
//         value: 80
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '南宁',
//         value: 70
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '南昌',
//         value: 60
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '拉萨',
//         value: 50
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '长春',
//         value: 40
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '包头',
//         value: 30
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '重庆',
//         value: 20
//     }],
//     [{
//         name: '北京'
//     }, {
//         name: '常州',
//         value: 10
//     }]
// ];
// let planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
// let convertData = function (data) {
//     let res = [];
//     for (let i = 0; i < data.length; i++) {
//         let dataItem = data[i];
//         let fromCoord = geoCoordMap[dataItem[0].name];
//         let toCoord = geoCoordMap[dataItem[1].name];
//         if (fromCoord && toCoord) {
//             res.push({
//                 fromName: dataItem[0].name,
//                 toName: dataItem[1].name,
//                 numValue: dataItem[1].value,
//                 coords: [fromCoord, toCoord]
//             });
//         }
//     }
//     return res;
// };
// //设置Line和Point的颜色
// let LineColor = ['#ff3333', 'orange', 'lime', 'aqua'];
// let series = [];
// [
//     ['北京', BJData]
// ].forEach(function (item, i) {
//     series.push({
//         // 设置飞行线
//         name: item[1],
//         type: 'lines',
//         zlevel: 1,
//         coordinateSystem: 'bmap',
//         effect: {
//             show: true,
//             period: 6,
//             trailLength: 1.7,
//             color: '#fff',
//             shadowBlur: 0,
//             symbolSize: 0
//         },

//         lineStyle: {
//             normal: {
//                 color: function (params) {
//                     let num = params.data.numValue;
//                     if (num > 75) {
//                         return LineColor[0];
//                     } else if (num > 50) {
//                         return LineColor[1];
//                     } else if (num > 25) {
//                         return LineColor[2];
//                     } else {
//                         return LineColor[3];
//                     }
//                 },
//                 width: 1,
//                 curveness: 0.2
//             }
//         },
//         data: convertData(item[1])
//     },
//         // 设置轨迹线
//         {
//             name: item[0].name,
//             type: 'lines',
//             zlevel: 2,
//             coordinateSystem: 'bmap',
//             effect: {
//                 show: true,
//                 period: 6,
//                 trailLength: 0.7,
//                 symbol: planePath,
//                 symbolSize: 12
//             },

//             lineStyle: {
//                 normal: {
//                     color: function (params) {
//                         console.log(params)
//                         let num = params.data.numValue;
//                         if (num > 75) {
//                             return LineColor[0];
//                         } else if (num > 50) {
//                             return LineColor[1];
//                         } else if (num > 25) {
//                             return LineColor[2];
//                         } else {
//                             return LineColor[3];
//                         }
//                     },
//                     width: 0.2,
//                     opacity: 0.4,
//                     curveness: 0.2
//                 }
//             },
//             data: convertData(item[1])
//         }, {

//             // 设置点
//             name: item[0],
//             type: 'effectScatter',
//             coordinateSystem: 'bmap',
//             zlevel: 2,
//             rippleEffect: {
//                 brushType: 'stroke'
//             },
//             label: {
//                 normal: {
//                     show: true,
//                     position: 'right',
//                     formatter: function (params) {
//                         var res = params.value[2];
//                         return res;
//                     }
//                 }
//             },
//             symbolSize: function (val) {
//                 return val[2] / 10;
//             },
//             itemStyle: {
//                 normal: {
//                     color: function (params) {
//                         let num = params.value[2];
//                         if (num > 75) {
//                             return LineColor[0];
//                         } else if (num > 50) {
//                             return LineColor[1];
//                         } else if (num > 25) {
//                             return LineColor[2];
//                         } else {
//                             return LineColor[3];
//                         }
//                     }
//                 }
//             },
//             data: item[1].map(function (dataItem) {
//                 return {
//                     name: dataItem[1].name,
//                     value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//                 };
//             })
//         });
// });
// let MinigrateOption = {
//     title: {
//         text: '',
//         subtext: '',
//         left: 'center',
//         textStyle: {
//             color: '#fff'
//         }
//     },
//     tooltip: {
//         trigger: 'item',
//         formatter: function (params) {
//             var res = params.name;
//             return res;
//         }
//     },
//     legend: {
//         orient: 'vertical',
//         top: 'bottom',
//         left: 'right',
//         data: ['北京 Top10', '上海 Top10', '广州 Top10'],
//         textStyle: {
//             color: '#fff'
//         },
//         selectedMode: 'single'
//     },
//     // dataRange: {
//     //     min : 0,
//     //     max : 100,
//     //     calculable : true,
//     //     color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
//     //     textStyle:{
//     //         color:'#fff'
//     //     }
//     // },
//     bmap: {
//         center: [113.65, 34.76],
//         zoom: 5.5,
//         roam: true,
//         mapStyle: {
//             styleJson: [{
//                 'featureType': 'land',
//                 //调整土地颜色
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'color': '#081734'
//                 }
//             }, {
//                 'featureType': 'building',
//                 //调整建筑物颜色
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'color': '#04406F'
//                 }
//             }, {
//                 'featureType': 'building',
//                 //调整建筑物标签是否可视
//                 'elementType': 'labels',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'highway',
//                 //调整高速道路颜色
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'color': '#015B99'
//                 }
//             }, {
//                 'featureType': 'highway',
//                 //调整高速名字是否可视
//                 'elementType': 'labels',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'arterial',
//                 //调整一些干道颜色
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'color': '#003051'
//                 }
//             }, {
//                 'featureType': 'arterial',
//                 'elementType': 'labels',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'green',
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'water',
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'color': '#044161'
//                 }
//             }, {
//                 'featureType': 'subway',
//                 //调整地铁颜色
//                 'elementType': 'geometry.stroke',
//                 'stylers': {
//                     'color': '#003051'
//                 }
//             }, {
//                 'featureType': 'subway',
//                 'elementType': 'labels',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'railway',
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'railway',
//                 'elementType': 'labels',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'all',
//                 //调整所有的标签的边缘颜色
//                 'elementType': 'labels.text.stroke',
//                 'stylers': {
//                     'color': '#313131'
//                 }
//             }, {
//                 'featureType': 'all',
//                 //调整所有标签的填充颜色
//                 'elementType': 'labels.text.fill',
//                 'stylers': {
//                     'color': '#FFFFFF'
//                 }
//             }, {
//                 'featureType': 'manmade',
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'manmade',
//                 'elementType': 'labels',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'local',
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'local',
//                 'elementType': 'labels',
//                 'stylers': {
//                     'visibility': 'off'
//                 }
//             }, {
//                 'featureType': 'subway',
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'lightness': -65
//                 }
//             }, {
//                 'featureType': 'railway',
//                 'elementType': 'all',
//                 'stylers': {
//                     'lightness': -40
//                 }
//             }, {
//                 'featureType': 'boundary',
//                 'elementType': 'geometry',
//                 'stylers': {
//                     'color': '#8b8787',
//                     'weight': '1',
//                     'lightness': -29
//                 }
//             }]
//         }
//     },
//     series: series
// };
// minigrateChart.setOption(MinigrateOption);




//时间
function show(){
    var d = new Date();
    var str = toDateTimeString1(d, "/");
    document.getElementById("curTime").innerHTML = str;
}
function showDate(){
    var d = new Date();
    var str1 = toDateString(d,"/");
    let str2="";
    document.getElementById("curDate").innerHTML = str1;
    if(d.getHours()<=12){
        str2+="am";
    }else{
        str2+="pm"
    }
    document.getElementById("apM").innerHTML = str2;
    let num=d.getDay();
    let str3="";
    switch (num) {
        case 0:
            str3+="日"
            break;
        case 1:
            str3 += "1"
            break;
        case 2:
            str3 += "1"
            break;
        case 3:
            str3 += "3"
            break;
        case 4:
            str3 += "4"
            break;
        case 5:
            str3 += "5"
            break;
        case 6:
            str3 += "6"
            break;
        default:
            break;
    }
    document.getElementById("week").innerHTML = "周"+str3;

}
setInterval(() => {
    show();
    showDate()
}, 1000);





