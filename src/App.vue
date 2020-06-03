<template>

  <div style="float: left;padding-left: 0px">
<!--    <div id="chart" style="width: 600px;height:400px;background: red;float: left"></div>-->
      <div style="float: left; padding-top: 50px">
          <span>选择国家：</span>
          <select id="selectCountry" placeholder="请选择" value="中国" @change="change($event)">
              <option
                      v-for="(item, index) in countries"
                      :key="index"
                      :label="item.value"
                      :value="item.num"
              ></option>
          </select>
          <div id="chart2" style="width: 600px;height:600px;padding-top: 100px"></div>
      </div>
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
    import Vue from 'vue';
    import { Option } from 'element-ui'
    import { Select } from 'element-ui'
    Vue.use(Select)
    import echarts from "echarts";
  import jsonp from "jsonp";
  import "echarts/map/js/china";
  import "echarts-countries-js/echarts-countries-js/USA.js"
  import "echarts-countries-js/echarts-countries-js/France.js"
  import "echarts-countries-js/echarts-countries-js/Germany.js"
  import "echarts-countries-js/echarts-countries-js/United_Kingdom.js"
  import "echarts-countries-js/echarts-countries-js/Japan.js"
  import "echarts-countries-js/echarts-countries-js/South_Korea.js"
  import "echarts-countries-js/echarts-countries-js/Italy.js"
  import "echarts-countries-js/echarts-countries-js/Spain.js"
  import "echarts-countries-js/echarts-countries-js/Islamic_Republic_of_Iran.js"
  import "echarts-countries-js/echarts.min.js"

  let option = {
    title: {
      text: "中国疫情地图", //图表 标题
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
        //钩子 函数加载中国地图
      this.getChinaData();
      //this.getForeignData("美国")
    },
    data() {
      return {
        urlChina: "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
        urlForeign: "https://gwpre.sina.cn/interface/news/wap/ncp_foreign.d.json?citycode=",
        date: "&_="+Date.now(),
          //"https://c.m.163.com/ug/api/wuhan/app/data/list-total"
          //"https://gwpre.sina.cn/interface/news/wap/ncp_foreign.d.json?citycode=SCUS0001&_=Date.now()"
        countries: [                                                                          //目前只找到了这10个......
              {value: "中国",code: 0, num: 0},
              {value: "美国",code: "SCUS0001", num: 1},
              {value: "法国",code: "SCFR0033", num: 2},
              {value: "德国",code: "SCDE0049", num: 3},
              {value: "英国",code: "SCGB0044", num: 4},
              {value: "日本",code: "SCJP0081", num: 5},
              {value: "韩国",code: "SCKR0082", num:6},
              {value: "意大利",code: "SCIT0039", num: 7},
              {value: "西班牙",code: "SCES0034", num: 8},
              {value: "伊朗", code: "SCIR0098", num: 9},
          ],
      };
    },
    methods: {
      init() {
        var myChart = echarts.init(document.getElementById("chart2"));
        myChart.clear();
        myChart.setOption(option);
      },
        change(event){
          var value = event.target.value;
          if(value == 0){
              this.getChinaData();
          }
          else if(value >=1 && value<= 12){
              this.getForeignData(value);
          }
        },
      getChinaData() {
        var that = this;
        jsonp(that.urlChina, (err, data) => {
          // jsonp 在请求创建script标签发送，不受同源策略影响
          //console.log(data.data.list);
          let arr = data.data.list;
          let lists = arr.map(function(e) {
            return { name: e.name, value: e.econNum };
          });
          option.series[0].data = lists;
          that.init();
        });
      },
        getForeignData(value) {
          var cityname = this.countries[value].value;
          var code = this.countries[value].code;
            var that = this;
            jsonp(that.urlForeign+code+that.date, (err, data) => {
                // jsonp 在请求创建script标签发送，不受同源策略影响
                let arr = data.data.city;
                let dataList = arr.map(function (e) {
                    return {name: e.mapName, value: e.conNum};
                });
                this.make_map(cityname,'chart2',dataList);
            });
        },
        make_map(cityname, dom_id, data) {
            var achart = echarts.init(document.getElementById(dom_id));
            let option = {
                title: {
                    text: cityname+"疫情地图", //图表 标题
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
                        mapType: cityname,
                        zoom: 1.2, //缩放比例
                        roam: true,
                        data: data,
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
                        { min: 30000 }, // 不指定 max，表示 max 为无限大（Infinity）。
                        { min: 15000, max: 29999 },
                        { min: 10000, max: 14999 },
                        { min: 3000, max: 9999 },
                        { min: 1, max: 2999 },
                        // { value: 123, label: "123（自定义特殊颜色）", color: "grey" },  // 表示 value 等于 123 的情况。
                        { value: 0 }
                    ]
                }
            };
            achart.clear();
            achart.setOption(option);
        }
    }
  };
</script>
<style lang="scss" scoped>
</style>
