$(function(){
    var myChart = echarts.init(document.getElementById("main"));
    var geoCoordMap = {
    "贵州省-苗族-西江千户苗寨":[108.17,26.49],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    console.log(res);
    return res;
};

option = {
    backgroundColor: '#404a59',
    // rgba:(0, 0, 0, 0.5),
    title: {
        text: '全国主要少数民族特色地区',
        // subtext: 'data from PM25.in',
        // sublink: 'http://www.pm25.in',
        x:'center',
        textStyle: {
            color: '#fff',
        }
    },
    tooltip: {               //触发类型
        trigger: 'item',
        formatter: function (params) {
            return params.name ;
        }
    },
    legend: {                // 右下角
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['少数民族特色地区'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {             // 左下角
        min: 0,
        max: 200,
        calculable: true,
        show:false,
        color: ['#d94e5d','#eac736','#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {                   // 地图上的散点
        map: 'china',
        label: {             //散点上的文本标签
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {        //默认状态下
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {      //高亮状态下
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: '少数民族特色地区',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "贵州省-苗族-西江千户苗寨",value:98}
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}

 myChart.setOption(option);
 var ecConfig = echarts.config;
 console.log(echarts)
 console.log(ecConfig)
 // function eConsole(params){
 //    alert(option.series[0].data[param.dataIndex].name);
 //    window.location.href="https://www.baidu.com/";
 // }
 // myChart.on("click", eConsole);  
 myChart.on("click", function (param){ 
// alert(param.dataIndex+':'+option.series[0].data[param.dataIndex].name);
// window.location.href="https://localhost/zuji/index.php?c=main&a=showtouristarea&t_id="+option.series[0].data[param.dataIndex].value[2];
});
})
