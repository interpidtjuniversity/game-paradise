<template>
  <div style="float: left;padding-left: 0px">
<!--    <div id="chart" style="width: 600px;height:400px;background: red;float: left"></div>-->
<!--    <div id="chart2" style="width: 600px;height:400px;float:left;padding-top: 100px"></div>-->
    <div id="app" style="float:left;">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
  import echarts from "echarts"; //引入echarts
  import jsonp from "jsonp";
  import "echarts/map/js/china"; //引入中国地图
  let option = {
    title: {
      text: "疫情地图", //图表 标题
      x: "center",
      textStyle: {
        color: "red"
      }
    },
    toolbox: {
      //工具栏
      feature: {
        saveAsImage: {} //保存图片
      }
    },
    tooltip: {
      //提示信息
      trigger: "item", //类型
      formatter: "地图：{b}<br/>确诊：{c}"
    },
    series: [
      //数据
      {
        type: "map", //图表类型 是地图
        map: "china", //中国地图
        zoom: 1.2, //缩放比例
        roam: true,
        data: [],
        label: {
          //图形上的文本标签，可用于说明图形的一些数据信息
          show: true,
          color: "#eee",
          fontSize: 10
        },
        emphasis: {
          //输入表移入的显示情况
          label: {
            //图形上的文本标签，可用于说明图形的一些数据信息
            show: true,
            color: "#ffffff", //鼠标移入文字颜色
            fontSize: 16
          },
          itemStyle: {
            show: true,
            areaColor: "#ccc" //鼠标移入背景颜色
          }
        },
        itemStyle: {
          backgroundColor: "red",
          borderColor: "#eee",
          borderWidth: 1,
          borderType: "solid",
          areaColor: "#ccc"
        }
      }
    ],

    visualMap: {
      //视觉映射组件 --侧边柱子
      type: "piecewise", //piecewise 点状视觉映射组件，continuous 直线状视觉映射组件
      // min: 8, //最低多少
      // max: 500, //最高多少
      // text: ["High", "Low"], //高低处文本
      // realtime: true, // 拖拽时，是否实时更新
      // calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
      itemWidth: 10, //每个方块的宽度
      itemHeight: 20, //每个方块的高度
      inRange: {
        //范围
        color: ["#d0ddec", "#42b983", "red"] //高中低处的颜色
      },
      pieces: [
        { min: 400 }, // 不指定 max，表示 max 为无限大（Infinity）。
        { min: 80, max: 300 },
        { min: 60, max: 79 },
        { min: 20, max: 59 },
        { min: 1, max: 19 },
        // { value: 123, label: "123（自定义特殊颜色）", color: "grey" },  // 表示 value 等于 123 的情况。
        { value: 0 }
      ]
    }
  };

  export default {
    mounted() {
      this.getData();
    },
    data() {
      return {
        url:
                "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427"
        //"https://c.m.163.com/ug/api/wuhan/app/data/list-total"
      };
    },
    methods: {
      init() {
        var myChart = echarts.init(document.getElementById("chart2"));
        myChart.setOption(option);
      },
      getData() {
        var that = this;
        jsonp(that.url, (err, data) => {
          // jsonp 在请求创建script标签发送，不受同源策略影响
          //console.log(data.data.list);
          let arr = data.data.list;
          let lists = arr.map(function(e) {
            return { name: e.name, value: e.value };
          });
          option.series[0].data = lists;
          that.init();
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>
