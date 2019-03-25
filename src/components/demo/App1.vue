<template> 
 <div id="demo" style="height:100%;">
   <div class="top">
       <marquee id = "country_list" class="country_info">Selected Country：</marquee>
   </div> 
   <div class="Container"> 
    <div class="demoLeft"> 
     <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0">BMI国家风险</li>
          <li class="title-list-1">
            <input type="text" name="" list="list_0" value="Short-term economic indicators">
             <datalist id ="list_0">
                <option value="Short-term economic indicators"></option>
                <option value="test"></option>
                <option value="test--1"></option>
             </datalist>
            </li>
        </ul>
     </div>
     <div id="leftChartsone" ref="leftChartsone"></div> 
     <!--折线图--> 
          <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0"> BMI运营风险</li>
          <li class="title-list-1"><input type="" name="" value="Short-term economic indicators">
          </li>
         
        </ul>
     </div>
     <div id="leftChartstwo" ref="leftChartstwo"></div> 
          <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0" >EIU国家风险</li>
          <li class="title-list-1"><input type="" name="" value="Short-term economic indicators">
          </li>
         
        </ul>
     </div>
     <div id="leftChartsthree" ref="leftChartsthree"></div> 
          <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0">EIU运营风险</li>
          <li class="title-list-1"><input type="" name="" value="Short-term economic indicators">
          </li>
         
        </ul>
     </div>
     <div id="leftChartsfour" ref="leftChartsfour"></div> 
    </div> 
    <div class="mainContainer">
      <div ref="worldMap" id="worldMap"></div> 
      <div ref="brandEnterprise" id="brandEnterprise">
           <img class="arrow-icon" src="./images/arrow_left.gif">
          <div class="brand-list">
             <div class="info-up">
             <img src="./images/Enterprise_logo.gif">
             <ul>
                <li class="brand_title">贵州茅台酒股份有限公司</li>
                <li class="brand_content">同意社会信用代码：293298582923XT 法人代表：李保芳 成立日期：1990-11-20</li>
             </ul>
             </div>
             <div class="info-down">
                 <img src="./images/two_dimension_code.gif">
                 <ul>
                    <li class="brand_title">Guizhou Maotai Liquor Co., Ltd</li>
                    <li class="brand_content">Agree to the social credit code: 293298582923XT Legal representative: Li Baofang Date of establishment: 1990-11-20</li>
                 </ul>
             </div>
          </div>

             <div class="brand-list">
             <div class="info-up">
             <img src="./images/Enterprise_logo.gif">
             <ul>
                <li class="brand_title">贵州茅台酒股份有限公司</li>
                <li class="brand_content">同意社会信用代码：293298582923XT 法人代表：李保芳 成立日期：1990-11-20</li>
             </ul>
             </div>
             <div class="info-down">
                 <img src="./images/two_dimension_code.gif">
                 <ul>
                    <li class="brand_title">Guizhou Maotai Liquor Co., Ltd</li>
                    <li class="brand_content">Agree to the social credit code: 293298582923XT Legal representative: Li Baofang Date of establishment: 1990-11-20</li>`
                 </ul>
             </div>
          </div>
          <img class="arrow-icon" src="./images/arrow_right.gif">
     </div>
   

    </div> 
    <div class="slidebar"> 
     <!--柱形图--> 
          <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0">WB世界发展</li>
          <li class="title-list-1"><input type="" name="" value="Short-term economic indicators">
          </li>
         
        </ul>
     </div>
     <div id="rightChartsone" ref="rightChartsone"></div> 
          <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0">WB营商</li>
          <li class="title-list-1"><input type="" name="" value="Short-term economic indicators">
          </li>
         
        </ul>
     </div>
     <div id="rightChartstwo" ref="rightChartstwo"></div> 
     <!--横行柱形图--> 
          <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0">国际评级</li>
          <li class="title-list-1"><input type="" name="" value="Short-term economic indicators">
          </li>
         
        </ul>
     </div>
     <div id="rightChartsthree" ref="rightChartsthree"></div> 
          <!--BMI国家风险：--> 
     <div class="title">
        <ul>
          <li class="title-list-0"> 国内评级</li>
          <li class="title-list-1"><input type="" name="" value="Short-term economic indicators">
          </li>
         
        </ul>
     </div>
     <div id="rightChartsfour" ref="rightChartsfour"></div> 
    </div> 
   </div>  <!-- Container 结束 -->
  </div> <!-- demo 结束 -->
  </template>   
<style>
    * {
        margin: 0;
        padding: 0;
      }
      body {
        font-size: 15px;
        width: 100%;
        height: 100%;
        min-width:1800px;
        min-height: 1000px;   
        background: url('./images/body_background.png') no-repeat;
      }
      td {
        text-align: center
      }
      p {
        color: #798ab1;
      }
      input::-webkit-outer-spin-button,  
      input::-webkit-calendar-picker-indicator{
        display: none;
        -webkit-appearance: none;
      }
      #demo {
          /*display: flex;*/
        width: 100%;
        font-size: 12px;
        color: #798ab1;
          /*background: rgba(40,126,255,0.5);*/
      }

      .demoLeft {
        width: 24%;
        height: 100%;
        display: block;
        float: left;
          /*border: 1px solid red;*/
      }

      #rightChartsone {
        margin:14px 0px 9px 0px;
        width: 100%;
      }

      #rightChartstwo {
        margin:14px 0px 9px 0px;
        width: 100%;
      }

      #leftChartstwo {
        margin:14px 0px 9px 0px;
        width: 100%;
      }

      #rightChartsthree {
        margin:14px 0px 9px 0px;
        width: 100%;
          /*border: 1px solid;*/
      }

      #rightChartsfour {
        margin:14px 0px 9px 0px;
        width: 100%;
      }

      #leftChartsone {
        margin:14px 0px 9px 0px;
        width: 100%;
        height: 20%;
        /*height: 500px;*/
      }

      #leftChartsthree {
        margin:14px 0px 9px 0px;
        width: 100%;
           /*height: 500px;*/
      }

      #leftChartsfour {
        margin:14px 0px 9px 0px;
        width: 100%;
      }

      #worldMap {
        margin-top: 143px;
        padding: 1px;
        width: 100%;
        height: 427px;
        display: block;
        /*border: 1px solid red;*/
      }

      .mainContainer {
        width: 50%;
        height: 100%;
        display: block;
        margin:0 1%;
        float: left;
      }

      .slidebar {
        width: 24%;
        height: 100%;
        margin-top: -6px;
        display: block;
        float: left;
      }

      .degree-statements {
        position: relative;
        width: 300px;
        height: 30px;
        left: 330px;
        top: 0px;
        z-index: 100
      }

      .top {
        width: 100%;
        height: 120px;
        display: block;
        background: url('./images/worldmap_head.gif') center no-repeat;
      }
      .Container {
        width: 88%;
        height: 100%;
        display: block;
        margin:0 auto;
        /*padding: 0px 08px;*/
      }
      .title{
          width: 100%;
          height: 38px;
          background: url('./images/title_background.gif') no-repeat;
          display: block;
      }
      .title li{
         /*width: 40%;*/
         height: 36px;
         list-style: none;
         margin-right: 10%;
         line-height: 36px;
         float: left;
      }
      .title-list-0{
        width: 40%;
        height: 36px;
        font-size: 20px;
        font-weight: bold;
        color: rgba(8,139,253,1);
        vertical-align: top;
        margin-top: 0px;
        line-height: 24px;
      }
      .title-list-1{
         width: 40%;
      }
      .title li input{
          width:100%;
          height: 34px;
          padding:0px 23px 0px 10px;
          border:1px solid rgba(8,139,253,1);
          background: transparent;
          font-size:12px;
          font-weight:bold;
          color:rgba(8,139,253,1);
          line-height:14px;
          background: url('./images/input.gif') no-repeat;
          background-position: right;
      }
      #bml-buttom{
          margin-left: 22px;
          margin-top:1px;
          width: 36px;
      }
      #brandEnterprise{
        margin-top: 30px;
        width:100%;
        height:178px;
        background:rgba(255,255,255,0.05);
        /*border: 1px solid red;*/
        display: block;
        z-index: 100;
      }

      .arrow-icon{
          width: 14px;
          height: 22px;
          margin: 9% 3%;
          display: block;
          float: left;
      }
/*      .arrow-icon-right{
          width: 14px;
          height: 22px;
          margin: 9% 3%;
          display: block;
          float: right;
      }*/
      .brand-list{
          width: 40%;
          height: 77%;
          margin:20px 0px;
          margin-right: 1%;
          display: block;
          float: left;
      }
      .info-up{
         width:  100%;
         height: 45%;
         display: block;
         /*border: 1px solid;*/
      }
      .brand-list .info-up img {
         width: 61px;
         height: 61px;
         display: block;
         margin-right: 4%;
         float: left;
      }
      .info-up ul ,.info-down ul{
         display: block;
         width: 76%;
         float: left;
      }
      .brand-list .info-up li{
         padding: 1%;
         list-style: none;
      }
     .brand_title{
          width:100%;
          height:17px;
          font-size:12px;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:17px;
      }
     .brand_content{
          width:100%;
          height:28px;
          font-size:10px;
          font-weight:500;
          color:rgba(8,139,253,1);
          line-height:14px;
      }
      .info-down{
        margin-top: 3%;
        width: 100%;
        height: 50%;
        display: block;
        /*border: 1px solid;*/
      }
      .info-down img {
         width: 68px;
         height: 68px;
         display: block;
         margin-right: 3%;
         float: left;
      }
      .info-down .brand_content{
          width:100%;
          height:42px;
          font-size:10px;
          font-weight:500;
          color:rgba(8,139,253,1);
          line-height:14px;
      }
      .country_info{
        display: block;
        width: 576px;
        height: 34px;
        font-size: 25px;
        font-weight: 800;
        color: rgba(8,139,253,1);
        line-height: 34px;
        padding-top: 3%;
        margin: 0px auto;
        text-align: left;
      }
</style>
<script> 
 import echarts from 'echarts'
 import ecStat from 'echarts-stat'
 import 'echarts/map/js/world.js'
 export default {
          name:
          'demo',
          data() {
             //clientHeight: '600px'
             return {

             }
          },
          methods: {

              // //  纵向柱形图charts生成方法
              rightChartsone(param) {
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('rightChartsone'));
                  let option = {
                     // title:{
                     //   text:"WB世界发展"
                     // },
                       /*backgroundColor : '#1c3f82',*/
                       grid: {
                          left: '2%',
                          right: '2%',
                          top:'5%',
                          bottom: '2%',
                          containLabel: true
                        },
                      xAxis: {
                          type: 'category',
                          boundaryGap: false,
                          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                          axisLabel: {
                              formatter: '{value}',
                              textStyle: {
                                  color: '#798ab1'
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                            },

                      },
                      yAxis: {
                          type: 'value',
                          axisLabel: {
                              textStyle: {
                                  color: '#798ab1'
                              }
                          },
                          splitLine:{
                             show:false
                          },
                           axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                            },
                      },
                      series: [{
                          data: [820, 932, 901, 934, 1290, 1330, 1320],
                          type: 'line',
                          smooth: true,
                          areaStyle: {
                               normal:{
                                 color: '#18468f'
                               }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      }]
                  };
                  myChart.setOption(option);
              },
              //BMI 国家风险折线图
              leftChartsone(param) {
                  let myChart = echarts.init(document.getElementById('leftChartsone'));


                  let option = {
                      // title: {
                      //     text: 'BMI 国家风险折线图'
                      // },
                      grid: {
                          left: '2%',
                          right: '2%',
                          top:'5%',
                          bottom: '2%',
                          containLabel: true
                        },
                      xAxis: {
                          type: 'category',
                          data: ['Mon', 'Tue', 'Wed', 'Thu'],
                          axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#798ab1'
                            }
                           },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                          },
                          splitLine:{
                             show : false
                          }
                      },
                      yAxis: {
                          type: 'value',
                          axisLabel: {
                              textStyle: {
                                  color: '#798ab1'
                                },
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                          },
                          splitLine:{
                              show:false
                          }
                      },
                      series: [{
                          data: [20, 32, 10, 34],
                          type: 'line',
                          smooth: true,
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      }]
                  };
                  myChart.setOption(option, true);
              },

                            //WB世界发展
              leftChartsthree(param) {
                  let myChart = echarts.init(document.getElementById('leftChartsthree'));
                 // let option = {
                 //     // title:{
                 //     //   text:"WB世界发展"
                 //     // },
                 //       grid: {
                 //          left: '2%',
                 //          right: '2%',
                 //          top:'5%',
                 //          bottom: '2%',
                 //          containLabel: true
                 //        },
                 //      xAxis: {
                 //          type: 'category',
                 //          boundaryGap: false,
                 //          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                 //          axisLabel: {
                 //              formatter: '{value}',
                 //              textStyle: {
                 //                  color: '#798ab1'
                 //              }
                 //          } 

                 //      },
                 //      yAxis: {
                 //          type: 'value',
                 //          axisLabel: {
                 //              textStyle: {
                 //                  color: '#798ab1'
                 //              }
                 //          } 
                 //      },
                 //      series: [{
                 //          data: [820, 932, 901, 934, 1290, 1330, 1320],
                 //          type: 'line',
                 //          areaStyle: {
                 //               normal:{
                 //                 color: '#18468f'
                 //               }
                 //          }
                 //      }]
                 //  };
                                   // 绘制图表
                  var data = [[1, 4862.4], [2, 5294.7], [3, 5934.5], [4, 7171.0], [5, 8964.4], [6, 10202.2], [7, 11962.5], [8, 14928.3], [9, 16909.2], [10, 18547.9], [11, 21617.8], [12, 26638.1], [13, 34634.4], [14, 46759.4], [15, 58478.1], [16, 67884.6], [17, 74462.6], [18, 79395.7]];

                  // See https://github.com/ecomfe/echarts-stat
                  var myRegression = ecStat.regression('exponential', data);

                  myRegression.points.sort(function(a, b) {
                      return a[0] - b[0];
                  });

                  let option = {
                      // title: {
                      //     text: 'EIU国家风险'
                      //     // subtext: 'By ecStat.regression',
                      //     // sublink: 'https://github.com/ecomfe/echarts-stat',
                      //     // left: 'center'
                      // },
                      /*backgroundColor : '#1c3f82',*/
                      grid: {
                          left: '2%',
                          right: '2%',
                          top:'5%',
                          bottom: '2%',
                          containLabel: true
                        },
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'cross'
                          }
                      },
                      xAxis: {
                          type: 'value',
                           axisLabel: {
                              textStyle: {
                                  color: '#798ab1'
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                          },
 
                          splitLine: {
                              lineStyle: {
                                  type: 'dashed',
                                  color : '#798ab1'
                              }
                          },
                          splitNumber: 10,

                      },
                      yAxis: {
                          type: 'value',
                          // splitLine: {
                          //     lineStyle: {
                          //         type: 'dashed',
                          //         color : '#798ab1'
                          //     }
                          // },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                          },
                          axisLabel: {
                              textStyle: {
                                  color: '#798ab1'
                              }
                          },
                          splitLine:{
                             show:false
                          }
                      },
                      series: [{
                          name: 'scatter',
                          type: 'scatter',
                          symbolSize: 5,
                          label: {
                              emphasis: {
                                  show: true,
                                  position: 'left',
                                  textStyle: {
                                      color: 'blue',
                                      fontSize: 16
                                  }
                              }
                          },
                          data: data
                      },
                      {
                          name: 'line',
                          type: 'line',
                          showSymbol: false,
                          smooth: true,
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          data: myRegression.points,
                          markPoint: {
                              itemStyle: {
                                  normal: {
                                      color: 'transparent'
                                  }
                              },
                              label: {
                                  normal: {
                                      show: true,
                                      position: 'left',
                                      formatter: myRegression.expression,
                                      textStyle: {
                                          color: '#798ab1',
                                          fontSize: 14
                                      }
                                  }
                              },
                              data: [{
                                  coord: myRegression.points[myRegression.points.length - 1]
                              }]
                          }
                      }]
                  };
                  myChart.setOption(option, true);
              },

               
              //WB世界发展
              leftChartsfour(param) {
                  let myChart = echarts.init(document.getElementById('leftChartsfour'));
                  // Generate data
                  // 绘制图表
                  var weatherIcons = {
                      'Sunny': './data/asset/img/weather/sunny_128.png',
                      'Cloudy': './data/asset/img/weather/cloudy_128.png',
                      'Showers': './data/asset/img/weather/showers_128.png'
                  };

                  var seriesLabel = {
                      normal: {
                          show: true,
                          textBorderColor: '#333',
                          textBorderWidth: 2
                      }
                  };

                  let option = {
                      /*backgroundColor : '#1c3f82',*/
                      grid: {
                          left: '2%',
                          right: '2%',
                          top:'5%',
                          bottom: '2%',
                          containLabel: true
                        },
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'shadow'
                          }
                      },
                      legend: {
                          data: ['City Alpha', 'City Beta', 'City Gamma'],
                          textStyle :{
                            color : '#798ab1'
                          }
                      },
                      toolbox: {
                          show: true,
                          feature: {
                              saveAsImage: {}
                          }
                      },
                      xAxis: {
                          type: 'value',
                          name: 'Days',
                          axisLabel: {
                              formatter: '{value}',
                              textStyle: {
                                  color: '#798ab1'
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                            },
                      },
                      yAxis: {
                          type: 'category',
                          inverse: true,
                          data: ['Sunny', 'Cloudy', 'Showers'],
                          axisLabel: {
                              formatter: function(value) {
                                  return '{' + value + '| }\n{value|' + value + '}';
                              },
                              textStyle:{
                                color: '#798ab1'
                              },
                              margin: 20,
                              rich: {
                                  value: {
                                      lineHeight: 30,
                                      align: 'center'
                                  },
                                  Sunny: {
                                      height: 40,
                                      align: 'center',
                                      backgroundColor: {
                                          image: weatherIcons.Sunny
                                      }
                                  },
                                  Cloudy: {
                                      height: 40,
                                      align: 'center',
                                      backgroundColor: {
                                          image: weatherIcons.Cloudy
                                      }
                                  },
                                  Showers: {
                                      height: 40,
                                      align: 'center',
                                      backgroundColor: {
                                          image: weatherIcons.Showers
                                      }
                                  }
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                            },
                      },
                      series: [{
                          name: 'City Alpha',
                          type: 'bar',
                          data: [165, 170, 30],
                          label: seriesLabel,
                          markPoint: {
                              symbolSize: 1,
                              symbolOffset: [0, '50%'],
                              label: {
                                  normal: {
                                      formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                                      backgroundColor: 'rgb(242,242,242)',
                                      borderColor: '#aaa',
                                      borderWidth: 1,
                                      borderRadius: 4,
                                      padding: [4, 10],
                                      lineHeight: 26,
                                      shadowBlur: 5,
                                      shadowColor: '#000',
                                      shadowOffsetX: 0,
                                      shadowOffsetY: 1,
                                      position: 'right',
                                      distance: 20,
                                      rich: {
                                          a: {
                                              align: 'center',
                                              color: '#000',
                                              fontSize: 18,
                                              textShadowBlur: 2,
                                              textShadowColor: '#000',
                                              textShadowOffsetX: 0,
                                              textShadowOffsetY: 1,
                                              textBorderColor: '#333',
                                              textBorderWidth: 2
                                          },
                                          b: {
                                              color: '#333'
                                          },
                                          c: {
                                              color: '#ff8811',
                                              textBorderColor: '#000',
                                              textBorderWidth: 1,
                                              fontSize: 22
                                          }
                                      }
                                  }
                              },
                              data: [{
                                  type: 'max',
                                  name: 'max days: '
                              },
                              {
                                  type: 'min',
                                  name: 'min days: '
                              }]
                          }
                      },
                      {
                          name: 'City Beta',
                          type: 'bar',
                          label: seriesLabel,
                          data: [150, 105, 110]
                      },
                      {
                          name: 'City Gamma',
                          type: 'bar',
                          label: seriesLabel,
                          data: [220, 82, 63]
                      }]
                  };

                  
                  myChart.setOption(option);
              },

              //WB世界发展
              rightChartstwo(param) {
                  let myChart = echarts.init(document.getElementById('rightChartstwo'));
                  // Generate data


                
                  myChart.setOption(option);
              },
              //  横向柱形图charts生成方法
              rightChartsthree(param) {
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('rightChartsthree'))

                  let option = rightChartsthree_option;
  

                    // Make dynamic data.
                    function random() {
                        return +(Math.random() * (maxData - 10)).toFixed(1);
                    }
                    setInterval(function () {
                        var dynamicData = [random(), random(), random(), random()];
                        myChart.setOption({
                            series: [{    
                                data: dynamicData.slice()
                            }, {
                                data: dynamicData.slice()
                            }]
                        })
                    }, 3000)
                  myChart.setOption(option);
              },

                            //  横向柱形图charts生成方法
              rightChartsfour(param) {
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('rightChartsfour'))
                  // 绘制图表
                  

                  myChart.setOption(option);
              },
              //  折线图charts生成方法
              leftChartstwo(param) {
                  // 基于准备好的dom，初始化echarts实例
                  var datas = [405, 11, 67, 234, 212, 113, 0];
                  let myChart = echarts.init(document.getElementById('leftChartstwo'))
                  // 绘制图表

                  var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
                  var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
                  var yMax = 500;
                  var dataShadow = [];

                  for (var i = 0; i < data.length; i++) {
                      dataShadow.push(yMax);
                  }

                  let option = {
                      // title: {
                      //     text: 'BMI运营风险'
                      // },
                      /*backgroundColor : '#1c3f82',*/
                      grid: {
                          left: '2%',
                          right: '2%',
                          top:'5%',
                          bottom: '2%',
                          containLabel: true
                        },
                      xAxis: {
                          data: dataAxis,
                          axisLabel: {
                              inside: true,
                              textStyle: {
                                  color: '#000'
                              }
                          },
                          axisTick: {
                              show: false
                          },
                          axisLine: {
                              show: false
                          },
                          z: 10
                      },
                      yAxis: {
                          axisLine: {
                              show: false
                          },
                          axisTick: {
                              show: false
                          },
                          splitLine:{
                             show: false
                          },
                          axisLabel: {
                              textStyle: {
                                  color: '#999'
                              }
                          }
                      },
                      dataZoom: [{
                          type: 'inside'
                      }],
                      series: [{ // For shadow
                          type: 'bar',
                          itemStyle: {
                              normal: {
                                  color: 'rgba(0,0,0,0.05)'
                              }
                          },
                          barGap: '-100%',
                          barCategoryGap: '40%',
                          data: dataShadow,
                          animation: false
                      },
                      {
                          type: 'bar',
                          itemStyle: {
                              normal: {
                                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                      offset: 0,
                                      color: '#83bff6'
                                  },
                                  {
                                      offset: 0.5,
                                      color: '#188df0'
                                  },
                                  {
                                      offset: 1,
                                      color: '#188df0'
                                  }])
                              },
                              emphasis: {
                                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                      offset: 0,
                                      color: '#2378f7'
                                  },
                                  {
                                      offset: 0.7,
                                      color: '#2378f7'
                                  },
                                  {
                                      offset: 1,
                                      color: '#83bff6'
                                  }])
                              }
                          },
                          data: data
                      }]
                  };

                  // Enable data zoom when user click bar.
                  var zoomSize = 6;
                  myChart.on('click',
                  function(params) {
                      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                      myChart.dispatchAction({
                          type: 'dataZoom',
                          startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                          endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                      });
                  });
                  myChart.setOption(option);
              },
              worldConfigure() {
                      let myChart = echarts.init(document.getElementById('worldMap'))
                      myChart.setOption({
                          tooltip: {},
                          visualMap: {
                              min: 0,
                              max: this.maxValue,
                              left: 'left',
                              top: 'bottom',
                              text: ['高', '低'],
                              seriesIndex: [1],
                              inRange: {
                                  // color: ['#e0ffff', '#006edd']
                                  color: ['#066bd1','#006edd']
                              },
                              calculable: true
                          },
                          geo: {
                              map: 'world',
                              roam: true,
                              label: {
                                  normal: {
                                      // show: true,
                                      textStyle: {
                                          color: 'rgba(0,0,0,0.4)'
                                      }
                                  }
                              },
                              itemStyle: {
                                  normal: {
                                      borderColor: 'rgba(0, 0, 0, 0.2)'
                                  },
                                  emphasis: {
                                      areaColor: null,
                                      shadowOffsetX: 0,
                                      shadowOffsetY: 0,
                                      shadowBlur: 20,
                                      borderWidth: 0,
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                                  }
                              },
                              nameMap: {
                                  Afghanistan: '阿富汗',
                                  Singapore: '新加坡',
                                  Angola: '安哥拉',
                                  Albania: '阿尔巴尼亚',
                                  // 'United Arab Emirates': '阿联酋',
                                  Argentina: '阿根廷',
                                  Armenia: '亚美尼亚',
                                  // 'French Southern and Antarctic Lands':
                                  //     '法属南半球和南极领地',
                                  Australia: '澳大利亚',
                                  Austria: '奥地利',
                                  Azerbaijan: '阿塞拜疆',
                                  Burundi: '布隆迪',
                                  Belgium: '比利时',
                                  Benin: '贝宁',
                                  // 'Burkina Faso': '布基纳法索',
                                  Bangladesh: '孟加拉国',
                                  Bulgaria: '保加利亚',
                                  // 'The Bahamas': '巴哈马',
                                  // 'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
                                  Belarus: '白俄罗斯',
                                  Belize: '伯利兹',
                                  Bermuda: '百慕大',
                                  Bolivia: '玻利维亚',
                                  Brazil: '巴西',
                                  Brunei: '文莱',
                                  Bhutan: '不丹',
                                  Botswana: '博茨瓦纳',
                                  // 'Central African Republic': '中非共和国',
                                  Canada: '加拿大',
                                  Switzerland: '瑞士',
                                  Chile: '智利',
                                  China: '中国',
                                  // 'Ivory Coast': '象牙海岸',
                                  Cameroon: '喀麦隆',
                                  // 'Democratic Republic of the Congo': '刚果民主共和国',
                                  // 'Republic of the Congo': '刚果共和国',
                                  Colombia: '哥伦比亚',
                                  'Costa Rica': '哥斯达黎加',
                                  Cuba: '古巴',
                                  'Northern Cyprus': '北塞浦路斯',
                                  Cyprus: '塞浦路斯',
                                  'Czech Republic': '捷克共和国',
                                  Germany: '德国',
                                  Djibouti: '吉布提',
                                  Denmark: '丹麦',
                                  'Dominican Republic': '多明尼加共和国',
                                  Algeria: '阿尔及利亚',
                                  Ecuador: '厄瓜多尔',
                                  Egypt: '埃及',
                                  Eritrea: '厄立特里亚',
                                  Spain: '西班牙',
                                  Estonia: '爱沙尼亚',
                                  Ethiopia: '埃塞俄比亚',
                                  Finland: '芬兰',
                                  Fiji: '斐',
                                  'Falkland Islands': '福克兰群岛',
                                  France: '法国',
                                  Gabon: '加蓬',
                                  'United Kingdom': '英国',
                                  Georgia: '格鲁吉亚',
                                  Ghana: '加纳',
                                  Guinea: '几内亚',
                                  Gambia: '冈比亚',
                                  'Guinea Bissau': '几内亚比绍',
                                  Greece: '希腊',
                                  Greenland: '格陵兰',
                                  Guatemala: '危地马拉',
                                  'French Guiana': '法属圭亚那',
                                  Guyana: '圭亚那',
                                  Honduras: '洪都拉斯',
                                  Croatia: '克罗地亚',
                                  Haiti: '海地',
                                  Hungary: '匈牙利',
                                  Indonesia: '印度尼西亚',
                                  India: '印度',
                                  Ireland: '爱尔兰',
                                  Iran: '伊朗',
                                  Iraq: '伊拉克',
                                  Iceland: '冰岛',
                                  Israel: '以色列',
                                  Italy: '意大利',
                                  Jamaica: '牙买加',
                                  Jordan: '约旦',
                                  Japan: '日本',
                                  Kazakhstan: '哈萨克斯坦',
                                  Kenya: '肯尼亚',
                                  Kyrgyzstan: '吉尔吉斯斯坦',
                                  Cambodia: '柬埔寨',
                                  Kosovo: '科索沃',
                                  Kuwait: '科威特',
                                  Laos: '老挝',
                                  Lebanon: '黎巴嫩',
                                  Liberia: '利比里亚',
                                  Libya: '利比亚',
                                  'Sri Lanka': '斯里兰卡',
                                  Lesotho: '莱索托',
                                  Lithuania: '立陶宛',
                                  Luxembourg: '卢森堡',
                                  Latvia: '拉脱维亚',
                                  Morocco: '摩洛哥',
                                  Moldova: '摩尔多瓦',
                                  Madagascar: '马达加斯加',
                                  Mexico: '墨西哥',
                                  Macedonia: '马其顿',
                                  Mali: '马里',
                                  Myanmar: '缅甸',
                                  Montenegro: '黑山',
                                  Mongolia: '蒙古',
                                  Mozambique: '莫桑比克',
                                  Mauritania: '毛里塔尼亚',
                                  Malawi: '马拉维',
                                  Malaysia: '马来西亚',
                                  Namibia: '纳米比亚',
                                  'New Caledonia': '新喀里多尼亚',
                                  Niger: '尼日尔',
                                  Nigeria: '尼日利亚',
                                  Nicaragua: '尼加拉瓜',
                                  Netherlands: '荷兰',
                                  Norway: '挪威',
                                  Nepal: '尼泊尔',
                                  'New Zealand': '新西兰',
                                  Oman: '阿曼',
                                  Pakistan: '巴基斯坦',
                                  Panama: '巴拿马',
                                  Peru: '秘鲁',
                                  Philippines: '菲律宾',
                                  'Papua New Guinea': '巴布亚新几内亚',
                                  Poland: '波兰',
                                  'Puerto Rico': '波多黎各',
                                  'North Korea': '北朝鲜',
                                  Portugal: '葡萄牙',
                                  Paraguay: '巴拉圭',
                                  Qatar: '卡塔尔',
                                  Romania: '罗马尼亚',
                                  Russia: '俄罗斯',
                                  Rwanda: '卢旺达',
                                  'Western Sahara': '西撒哈拉',
                                  'Saudi Arabia': '沙特阿拉伯',
                                  Sudan: '苏丹',
                                  'South Sudan': '南苏丹',
                                  Senegal: '塞内加尔',
                                  'Solomon Islands': '所罗门群岛',
                                  'Sierra Leone': '塞拉利昂',
                                  'El Salvador': '萨尔瓦多',
                                  Somaliland: '索马里兰',
                                  Somalia: '索马里',
                                  'Republic of Serbia': '塞尔维亚',
                                  Suriname: '苏里南',
                                  Slovakia: '斯洛伐克',
                                  Slovenia: '斯洛文尼亚',
                                  Sweden: '瑞典',
                                  Swaziland: '斯威士兰',
                                  Syria: '叙利亚',
                                  Chad: '乍得',
                                  Togo: '多哥',
                                  Thailand: '泰国',
                                  Tajikistan: '塔吉克斯坦',
                                  Turkmenistan: '土库曼斯坦',
                                  'East Timor': '东帝汶',
                                  'Trinidad and Tobago': '特里尼达和多巴哥',
                                  Tunisia: '突尼斯',
                                  Turkey: '土耳其',
                                  'United Republic of Tanzania': '坦桑尼亚',
                                  Uganda: '乌干达',
                                  Ukraine: '乌克兰',
                                  Uruguay: '乌拉圭',
                                  'United States': '美国',
                                  Uzbekistan: '乌兹别克斯坦',
                                  Venezuela: '委内瑞拉',
                                  Vietnam: '越南',
                                  Vanuatu: '瓦努阿图',
                                  'West Bank': '西岸',
                                  Yemen: '也门',
                                  'South Africa': '南非',
                                  Zambia: '赞比亚',
                                  Korea: '韩国',
                                  Tanzania: '坦桑尼亚',
                                  Zimbabwe: '津巴布韦',
                                  Congo: '刚果',
                                  'Central African Rep.': '中非',
                                  Serbia: '塞尔维亚',
                                  'Bosnia and Herz.': '波黑',
                                  'Czech Rep.': '捷克',
                                  'W. Sahara': '西撒哈拉',
                                  'Lao PDR': '老挝',
                                  'Dem.Rep.Korea': '朝鲜',
                                  'Falkland Is.': '福克兰群岛',
                                  'Timor-Leste': '东帝汶',
                                  'Solomon Is.': '所罗门群岛',
                                  Palestine: '巴勒斯坦',
                                  'N. Cyprus': '北塞浦路斯',
                                  Aland: '奥兰群岛',
                                  'Fr. S. Antarctic Lands': '法属南半球和南极陆地',
                                  Mauritius: '毛里求斯',
                                  Comoros: '科摩罗',
                                  'Eq. Guinea': '赤道几内亚',
                                  'Guinea-Bissau': '几内亚比绍',
                                  'Dominican Rep.': '多米尼加',
                                  'Saint Lucia' : '圣卢西亚',
                                  Dominica: '多米尼克',
                                  'Antigua and Barb.': '安提瓜和巴布达',
                                  'U.S. Virgin Is.': '美国原始岛屿',
                                  Montserrat: '蒙塞拉特',
                                  Grenada: '格林纳达',
                                  Barbados: '巴巴多斯',
                                  Samoa: '萨摩亚',
                                  Bahamas: '巴哈马',
                                  'Cayman Is.': '开曼群岛',
                                  'Faeroe Is.': '法罗群岛',
                                  'IsIe of Man': '马恩岛',
                                  Malta: '马耳他共和国',
                                  Jersey: '泽西',
                                  'Cape Verde': '佛得角共和国',
                                  'Turks and Caicos Is.': '特克斯和凯科斯群岛',
                                  'St. Vin. and Gren.': '圣文森特和格林纳丁斯'
                              }
                          },
                          series: [
                              {
                                  type: 'scatter',
                                  coordinateSystem: 'geo'
                              },
                              {
                                  name: '启动次数',
                                  type: 'map',
                                  geoIndex: 0,
                                  data: this.worldData
                              }
                          ]
                      })
                  },
              //  全球地图生成方法
              map() {
                  /**
           * 显示点的坐标
           */
                  var geoCoordMap = {
                      'china': [130.0823, 28.2568],
                      'Botswana': [4.895168, 52.370216],
                      'Canada': [ - 130.895168, 70.2312],
                      'Brazil': [ - 50.895168, -20.2312]
                  }
                  /**
           * 所在点对应数据
           * 上面数据添加修改后务必这里添加修改，value可不用
           */
                  var data = [{
                      id: 1,
                      name: 'china',
                      value: 10
                  },
                  {
                      id: 2,
                      name: 'Botswana',
                      value: 28397.812
                  },
                  {
                      id: 3,
                      name: 'Canada'
                  },
                  {
                      id: 4,
                      name: 'Brazil'
                  }]
                  //  生成出线方法
                  function formtGCData(geoData, data, srcNam, dest) {
                      var tGeoDt = []
                      if (dest) {
                          for (var i = 0; i < data.length; i++) {
                              if (srcNam !== data[i].name) {
                                  tGeoDt.push({
                                      coords: [geoData[srcNam], geoData[data[i].name]]
                                  })
                              }
                          }
                      } else {
                          for (var j = 0; j < data.length; j++) {
                              if (srcNam !== data[j].name) {
                                  tGeoDt.push({
                                      coords: [geoData[data[j].name], geoData[srcNam]]
                                  })
                              }
                          }
                      }
                      return tGeoDt
                  }
                  //  生成进线方法
                  function formtVData(geoData, data, srcNam) {
                      var tGeoDt = []
                      for (var i = 0; i < data.length; i++) {
                          var tNam = data[i].name
                          if (srcNam !== tNam) {
                              tGeoDt.push({
                                  name: tNam,
                                  value: geoData[tNam]
                              })
                          }
                      }
                      tGeoDt.push({
                          name: srcNam,
                          value: geoData[srcNam],
                          symbolSize: 8,
                          itemStyle: {
                              normal: {
                                  color: 'red',
                                  borderColor: '#000'
                              }
                          }
                      }) 
                      return tGeoDt
                  }

           //        var planePath = 'arrow';
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('worldMap'))
                  // 绘制图表
                  let option_english = {
                      title: {  
                          sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',  
                          left: 'center',  
                          top: 'top'
                      },
                      grid: {
                          left: '1%',
                          right: '1%',
                          top:'1%',
                          bottom: '1%',
                          containLabel: true
                        },
                      // legend:{
                      //     data:["中文","english"]
                      // },
                      dataRange: {
                          show: false,
                          //  调色板显示与否
                          min: 0,
                          max: 1000000,
                          text: ['High', 'Low'],
                          realtime: true,
                          calculable: true,
                          color:['#066bd1','yellow','#088bfd']
                          // color: ['orangered', 'yellow', 'lightskyblue'] //  生成地图颜色以及发散点颜色
                      },
                      tooltip: {
                          trigger: 'item'
                      },
                      geo: {
                          map: 'world',
                          label: {
                              emphasis: {
                                  show: false
                              }
                          },
                          roam: false,
                          silent: true,
                          itemStyle: {
                              normal: {
                                  areaColor: '#37376e',
                                  borderColor: '#000'
                              },
                              emphasis: {
                                  areaColor: '#2a333d'
                              }
                          }
                      },
                      series: [{        
                          type: 'map',
                          mapType: 'world',
                          zoom: 1.2,
                          mapLocation: {
                              y: 100
                          },
                          itemStyle: {  
                              emphasis: {
                                  label: {
                                      show: true
                                  }
                              }
                          },
                          // 对应生成地图颜色板块数据
                          data: [{
                              name: 'Afghanistan',
                              value: 28397.812
                          },
                          {
                              name: 'Angola',
                              value: 19549.124
                          },
                          {
                              name: 'Albania',
                              value: 3150.143
                          },
                          {
                              name: 'United Arab Emirates',
                              value: 8441.537
                          },
                          {
                              name: 'Argentina',
                              value: 40374.224
                          },
                          {
                              name: 'Armenia',
                              value: 2963.496
                          },
                          {
                              name: 'French Southern and Antarctic Lands',
                              value: 268.065
                          },
                          {
                              name: 'Australia',
                              value: 22404.488
                          },
                          {
                              name: 'Austria',
                              value: 8401.924
                          },
                          {
                              name: 'Azerbaijan',
                              value: 9094.718
                          },
                          {
                              name: 'Burundi',
                              value: 9232.753
                          },
                          {
                              name: 'Belgium',
                              value: 10941.288
                          },
                          {
                              name: 'Benin',
                              value: 9509.798
                          },
                          {
                              name: 'Burkina Faso',
                              value: 15540.284
                          },
                          {
                              name: 'Bangladesh',
                              value: 151125.475
                          },
                          {
                              name: 'Bulgaria',
                              value: 7389.175
                          },
                          {
                              name: 'The Bahamas',
                              value: 66402.316
                          },
                          {
                              name: 'Bosnia and Herzegovina',
                              value: 3845.929
                          },
                          {
                              name: 'Belarus',
                              value: 9491.07
                          },
                          {
                              name: 'Belize',
                              value: 308.595
                          },
                          {
                              name: 'Bermuda',
                              value: 64.951
                          },
                          {
                              name: 'Bolivia',
                              value: 716.939
                          },
                          {
                              name: 'Brazil',
                              value: 195210.154
                          },
                          {
                              name: 'Brunei',
                              value: 27.223
                          },
                          {
                              name: 'Bhutan',
                              value: 716.939
                          },
                          {
                              name: 'Botswana',
                              value: 1969.341
                          },
                          {
                              name: 'Central African Republic',
                              value: 4349.921
                          },
                          {
                              name: 'Canada',
                              value: 34126.24
                          },
                          {
                              name: 'Switzerland',
                              value: 7830.534
                          },
                          {
                              name: 'Chile',
                              value: 17150.76
                          },
                          {
                              name: 'China',
                              value: 62191.161
                          },
                          {
                              name: 'Ivory Coast',
                              value: 60508.978
                          },
                          {
                              name: 'Cameroon',
                              value: 20624.343
                          },
                          {
                              name: 'Democratic Republic of the Congo',
                              value: 62191.161
                          },
                          {
                              name: 'Republic of the Congo',
                              value: 3573.024
                          },
                          {
                              name: 'Colombia',
                              value: 46444.798
                          },
                          {
                              name: 'Costa Rica',
                              value: 4669.685
                          },
                          {
                              name: 'Cuba',
                              value: 11281.768
                          },
                          {
                              name: 'Northern Cyprus',
                              value: 1.468
                          },
                          {
                              name: 'Cyprus',
                              value: 1103.685
                          },
                          {
                              name: 'Czech Republic',
                              value: 10553.701
                          },
                          {
                              name: 'Germany',
                              value: 83017.404
                          },
                          {
                              name: 'Djibouti',
                              value: 834.036
                          },
                          {
                              name: 'Denmark',
                              value: 5550.959
                          },
                          {
                              name: 'Dominican Republic',
                              value: 10016.797
                          },
                          {
                              name: 'Algeria',
                              value: 37062.82
                          },
                          {
                              name: 'Ecuador',
                              value: 15001.072
                          },
                          {
                              name: 'Egypt',
                              value: 78075.705
                          },
                          {
                              name: 'Eritrea',
                              value: 5741.159
                          },
                          {
                              name: 'Spain',
                              value: 46182.038
                          },
                          {
                              name: 'Estonia',
                              value: 1298.533
                          },
                          {
                              name: 'Ethiopia',
                              value: 87095.281
                          },
                          {
                              name: 'Finland',
                              value: 5367.693
                          },
                          {
                              name: 'Fiji',
                              value: 860.559
                          },
                          {
                              name: 'Falkland Islands',
                              value: 49.581
                          },
                          {
                              name: 'France',
                              value: 63230.866
                          },
                          {
                              name: 'Gabon',
                              value: 1556.222
                          },
                          {
                              name: 'United Kingdom',
                              value: 62066.35
                          },
                          {
                              name: 'Georgia',
                              value: 4388.674
                          },
                          {
                              name: 'Ghana',
                              value: 24262.901
                          },
                          {
                              name: 'Guinea',
                              value: 10876.033
                          },
                          {
                              name: 'Gambia',
                              value: 1680.64
                          },
                          {
                              name: 'Guinea Bissau',
                              value: 10876.033
                          },
                          {
                              name: 'Equatorial Guinea',
                              value: 696.167
                          },
                          {
                              name: 'Greece',
                              value: 11109.999
                          },
                          {
                              name: 'Greenland',
                              value: 56.546
                          },
                          {
                              name: 'Guatemala',
                              value: 14341.576
                          },
                          {
                              name: 'French Guiana',
                              value: 231.169
                          },
                          {
                              name: 'Guyana',
                              value: 786.126
                          },
                          {
                              name: 'Honduras',
                              value: 7621.204
                          },
                          {
                              name: 'Croatia',
                              value: 4338.027
                          },
                          {
                              name: 'Haiti',
                              value: 9896.4
                          },
                          {
                              name: 'Hungary',
                              value: 10014.633
                          },
                          {
                              name: 'Indonesia',
                              value: 240676.485
                          },
                          {
                              name: 'India',
                              value: 12054.648
                          },
                          {
                              name: 'Ireland',
                              value: 4467.561
                          },
                          {
                              name: 'Iran',
                              value: 240676.485
                          },
                          {
                              name: 'Iraq',
                              value: 30962.38
                          },
                          {
                              name: 'Iceland',
                              value: 318.042
                          },
                          {
                              name: 'Israel',
                              value: 7420.368
                          },
                          {
                              name: 'Italy',
                              value: 60508.978
                          },
                          {
                              name: 'Jamaica',
                              value: 2741.485
                          },
                          {
                              name: 'Jordan',
                              value: 6454.554
                          },
                          {
                              name: 'Japan',
                              value: 127352.833
                          },
                          {
                              name: 'Kazakhstan',
                              value: 15921.127
                          },
                          {
                              name: 'Kenya',
                              value: 40909.194
                          },
                          {
                              name: 'Kyrgyzstan',
                              value: 5334.223
                          },
                          {
                              name: 'Cambodia',
                              value: 14364.931
                          },
                          {
                              name: 'South Korea',
                              value: 51452.352
                          },
                          {
                              name: 'Kosovo',
                              value: 97.743
                          },
                          {
                              name: 'Kuwait',
                              value: 2991.58
                          },
                          {
                              name: 'Laos',
                              value: 6395.713
                          },
                          {
                              name: 'Lebanon',
                              value: 4341.092
                          },
                          {
                              name: 'Liberia',
                              value: 3957.99
                          },
                          {
                              name: 'Libya',
                              value: 6040.612
                          },
                          {
                              name: 'Sri Lanka',
                              value: 20758.779
                          },
                          {
                              name: 'Lesotho',
                              value: 2008.921
                          },
                          {
                              name: 'Lithuania',
                              value: 3068.457
                          },
                          {
                              name: 'Luxembourg',
                              value: 507.885
                          },
                          {
                              name: 'Latvia',
                              value: 2090.519
                          },
                          {
                              name: 'Morocco',
                              value: 31642.36
                          },
                          {
                              name: 'Moldova',
                              value: 103.619
                          },
                          {
                              name: 'Madagascar',
                              value: 21079.532
                          },
                          {
                              name: 'Mexico',
                              value: 117886.404
                          },
                          {
                              name: 'Macedonia',
                              value: 507.885
                          },
                          {
                              name: 'Mali',
                              value: 13985.961
                          },
                          {
                              name: 'Myanmar',
                              value: 51931.231
                          },
                          {
                              name: 'Montenegro',
                              value: 620.078
                          },
                          {
                              name: 'Mongolia',
                              value: 2712.738
                          },
                          {
                              name: 'Mozambique',
                              value: 23967.265
                          },
                          {
                              name: 'Mauritania',
                              value: 3609.42
                          },
                          {
                              name: 'Malawi',
                              value: 15013.694
                          },
                          {
                              name: 'Malaysia',
                              value: 28275.835
                          },
                          {
                              name: 'Namibia',
                              value: 2178.967
                          },
                          {
                              name: 'New Caledonia',
                              value: 246.379
                          },
                          {
                              name: 'Niger',
                              value: 15893.746
                          },
                          {
                              name: 'Nigeria',
                              value: 159707.78
                          },
                          {
                              name: 'Nicaragua',
                              value: 5822.209
                          },
                          {
                              name: 'Netherlands',
                              value: 16615.243
                          },
                          {
                              name: 'Norway',
                              value: 4891.251
                          },
                          {
                              name: 'Nepal',
                              value: 26846.016
                          },
                          {
                              name: 'New Zealand',
                              value: 4368.136
                          },
                          {
                              name: 'Oman',
                              value: 2802.768
                          },
                          {
                              name: 'Pakistan',
                              value: 173149.306
                          },
                          {
                              name: 'Panama',
                              value: 3678.128
                          },
                          {
                              name: 'Peru',
                              value: 29262.83
                          },
                          {
                              name: 'Philippines',
                              value: 93444.322
                          },
                          {
                              name: 'Papua New Guinea',
                              value: 6858.945
                          },
                          {
                              name: 'Poland',
                              value: 38198.754
                          },
                          {
                              name: 'Puerto Rico',
                              value: 3709.671
                          },
                          {
                              name: 'North Korea',
                              value: 1.468
                          },
                          {
                              name: 'Portugal',
                              value: 10589.792
                          },
                          {
                              name: 'Paraguay',
                              value: 6459.721
                          },
                          {
                              name: 'Qatar',
                              value: 1749.713
                          },
                          {
                              name: 'Romania',
                              value: 34126.24
                          },
                          {
                              name: 'Russia',
                              value: 21861.476
                          },
                          {
                              name: 'Rwanda',
                              value: 10836.732
                          },
                          {
                              name: 'Western Sahara',
                              value: 514.648
                          },
                          {
                              name: 'Saudi Arabia',
                              value: 27258.387
                          },
                          {
                              name: 'Sudan',
                              value: 35652.002
                          },
                          {
                              name: 'South Sudan',
                              value: 9940.929
                          },
                          {
                              name: 'Senegal',
                              value: 12950.564
                          },
                          {
                              name: 'Solomon Islands',
                              value: 526.447
                          },
                          {
                              name: 'Sierra Leone',
                              value: 5751.976
                          },
                          {
                              name: 'El Salvador',
                              value: 6218.195
                          },
                          {
                              name: 'Somaliland',
                              value: 9636.173
                          },
                          {
                              name: 'Somalia',
                              value: 9636.173
                          },
                          {
                              name: 'Republic of Serbia',
                              value: 3573.024
                          },
                          {
                              name: 'Suriname',
                              value: 524.96
                          },
                          {
                              name: 'Slovakia',
                              value: 5433.437
                          },
                          {
                              name: 'Slovenia',
                              value: 2054.232
                          },
                          {
                              name: 'Sweden',
                              value: 9382.297
                          },
                          {
                              name: 'Swaziland',
                              value: 1193.148
                          },
                          {
                              name: 'Syria',
                              value: 7830.534
                          },
                          {
                              name: 'Chad',
                              value: 11720.781
                          },
                          {
                              name: 'Togo',
                              value: 6306.014
                          },
                          {
                              name: 'Thailand',
                              value: 66402.316
                          },
                          {
                              name: 'Tajikistan',
                              value: 7627.326
                          },
                          {
                              name: 'Turkmenistan',
                              value: 5041.995
                          },
                          {
                              name: 'East Timor',
                              value: 10016.797
                          },
                          {
                              name: 'Trinidad and Tobago',
                              value: 1328.095
                          },
                          {
                              name: 'Tunisia',
                              value: 10631.83
                          },
                          {
                              name: 'Turkey',
                              value: 72137.546
                          },
                          {
                              name: 'United Republic of Tanzania',
                              value: 44973.33
                          },
                          {
                              name: 'Uganda',
                              value: 33987.213
                          },
                          {
                              name: 'Ukraine',
                              value: 46050.22
                          },
                          {
                              name: 'Uruguay',
                              value: 3371.982
                          },
                          {
                              name: 'United States of America',
                              value: 34126.24
                          },
                          {
                              name: 'Uzbekistan',
                              value: 27769.27
                          },
                          {
                              name: 'Venezuela',
                              value: 236.299
                          },
                          {
                              name: 'Vietnam',
                              value: 89047.397
                          },
                          {
                              name: 'Vanuatu',
                              value: 236.299
                          },
                          {
                              name: 'West Bank',
                              value: 13.565
                          },
                          {
                              name: 'Yemen',
                              value: 22763.008
                          },
                          {
                              name: 'South Africa',
                              value: 51452.352
                          },
                          {
                              name: 'Zambia',
                              value: 13216.985
                          },
                          {
                              name: 'Zimbabwe',
                              value: 13076.978
                          }]
                      }]
                  };
                  myChart.setOption(option_english);
                  //  横向柱形图数据change
                  myChart.on('click', (param) =>{
                      console.log("myChart   param==="+param);
                      var country_info = document.getElementById("country_list");
                      var name = param.data.name.toString();
                      var info = country_info.innerText;
                      if(info.indexOf(name) < 0)
                      {
                          country_info.innerText += "  "+name;
                      }
                      let option = {
                      // title: {
                      //     text: 'BMI 国家风险折线图'
                      // },
                      grid: {
                          left: '2%',
                          right: '2%',
                          top:'5%',
                          bottom: '2%',
                          containLabel: true
                        },
                      legend: {
                          data: [{
                                  name: 'china',
                                  // 强制设置图形为圆。
                                  icon: 'bar',
                                  // 设置文本为红色
                                  textStyle: {
                                      color: '798ab1'
                                  }
                                  },
                                ],
                          // data: ['china', 'Russia','china01','china02','china03','china04','china05'],
                          textStyle :{
                            color : '#798ab1'
                          }
                      },
                      xAxis: {
                          type: 'category',
                          data: ['Mon', 'Tue', 'Wed', 'Thu'],
                          axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#798ab1'
                            }
                           },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                          },
                          splitLine:{
                             show : false
                          }
                      },
                      yAxis: {
                          type: 'value',
                          axisLabel: {
                              textStyle: {
                                  color: '#798ab1'
                                },
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#18468f'
                              }
                          },
                          splitLine:{
                              show:false
                          }
                      },
                      series: [{
                          data: [20, 32, 10, 34],
                          type: 'line',
                          name: 'china',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#ff0000',
                                  width: 1
                                  // type: 'solid'
                              }
                          }
                        },{
                          data: [10, 22, 40, 24],
                          type: 'line',
                          name: 'Russia',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          }
                      },{
                          data: [40, 22, 40, 24],
                          type: 'line',
                          name: 'china01',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      },{
                          data: [10, 22, 40, 24],
                          type: 'line',
                          name: 'china02',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      },{
                          data: [10, 22, 40, 24],
                          type: 'line',
                          name: 'china02',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      },{
                          data: [10, 22, 40, 24],
                          type: 'line',
                          name: 'china03',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      },{
                          data: [10, 22, 40, 24],
                          type: 'line',
                          name: 'china04',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      },{
                          data: [10, 22, 40, 24],
                          type: 'line',
                          name: 'china05',
                          textStyle:{
                             normal : {
                               color : '#066bd1'
                             }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#088BFD',
                                  width: 1
                                  // type: 'solid'
                              }
                          },
                      }]
                  };
                  var leftChartsone  = echarts.init(document.getElementById('leftChartsone'));
                  leftChartsone.setOption(option);

                      // this.radarData.forEach((item, index) =>{
                      //     if (param.data.name.toLowerCase() === item.name.toLowerCase()) {
                      //         // this.rightChartsthree(item)
                      //     }
                      // })
                      // //  纵向柱形图数据change
                      // this.bar.forEach((item, index) =>{
                      //     if (param.data.name.toLowerCase() === item.name.toLowerCase()) {
                      //         // this.drawLine(item)
                      //     }
                      // })
                      // //  折线图数据change
                      // this.pie.forEach((item, index) =>{
                      //     if (param.data.name.toLowerCase() === item.name.toLowerCase()) {
                      //         // this.rightBottomRightCharts(item)
                      //     }
                      // })
                  })
                  // china双击事件
                  // myChart.on('dblclick', (param)=>{
                  //     if (param.data.name.toLowerCase() === 'china') {
                  //         this.$router.push('/map')
                  //     }
                  // })
              }
          },
          mounted() {
              // this.$refs.worldMap.style.height = window.innerHeight + 'px'
            var country_list = document.getElementById("country_list");
            country_list.stop();
            console.log("mounted  + window.innerHeight  ===" + window.innerHeight);
            // console.log("mounted  + window.innerWidth  ===" + window.innerWidth);
            this.$refs.leftChartsone.style.height = 143 + 'px';
            this.$refs.leftChartstwo.style.height = 188+ 'px';
            this.$refs.leftChartsthree.style.height = 188 + 'px';
            this.$refs.leftChartsfour.style.height = 178 + 'px';
            this.$refs.worldMap.style.height = 528 + 'px';
            this.$refs.rightChartsone.style.height = 143 + 'px';
            this.$refs.rightChartstwo.style.height = 188 + 'px';
            this.$refs.rightChartsthree.style.height = 188 + 'px';
            this.$refs.rightChartsfour.style.height = 178 + 'px'; 
            // this.drawLine(); 
            this.leftChartsone();
            this.leftChartstwo();
            this.leftChartsthree();
            this.leftChartsfour();
            this.rightChartsone();
            this.rightChartstwo();
            this.rightChartsthree();
            this.rightChartsfour();
            this.map();
            // this.worldConfigure();
            let self  = this;
            window.onresize = function temp() {
              console.log("mounted  + window.innerHeight  ===" + window.innerHeight);
                 console.log("mounted  + window.innerWidth  ===" + window.innerWidth);
              // self.drawLine(); 
              // self.rightChartsthree();
              // self.rightChartsfour(); 
              // self.leftChartsone();
              // self.rightChartstwo();
              // self.leftChartsthree();
              // self.leftChartsfour();
              // self.rightBottomRightCharts();
              self.map();
            };
          }
      } 
  </script>
