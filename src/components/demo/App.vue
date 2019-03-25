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
 import leftChartsone_option from '../data/china_leftChartsone.vue'
 import leftChartstwo_option from '../data/china_leftChartstwo.vue'
 import leftChartsthree_option from '../data/china_leftChartsthree.vue'
 import leftChartsfour_option from '../data/china_leftChartsfour.vue'
 import rightChartsone_option from '../data/china_rightChartsone.vue'
 import rightChartstwo_option from '../data/china_rightChartstwo.vue'
 import rightChartsthree_option from '../data/china_rightChartsthree.vue'
 import rightChartsfour_option  from '../data/china_rightChartsfour.vue'
 import center_world_Map_option from '../data/china_center_world_Map.vue'

 import Russia_leftChartsone_option from '../data/Russia_leftChartsone.vue'
 import Russia_leftChartstwo_option from '../data/Russia_leftChartstwo.vue'
 import Russia_leftChartsthree_option from '../data/Russia_leftChartsthree.vue'
 import Russia_leftChartsfour_option from '../data/Russia_leftChartsfour.vue'
 import Russia_rightChartsone_option from '../data/Russia_rightChartsone.vue'
 import Russia_rightChartstwo_option from '../data/Russia_rightChartstwo.vue'
 import Russia_rightChartsthree_option from '../data/Russia_rightChartsthree.vue'
 import Russia_rightChartsfour_option from '../data/Russia_rightChartsfour.vue'
 import Russia_center_world_Map_option from '../data/Russia_center_world_Map.vue'


 // var Chartslist = [ leftChartsone_option,leftChartstwo_option,leftChartsthree_option,leftChartsfour_option];
 export default {
          name:'demo',
           data() {
             //clientHeight: '600px'
             return {

             }
          },
          methods: {

              //BMI 国家风险折线图
              leftChartsone(param) {
                  let myChart = echarts.init(document.getElementById('leftChartsone'));
                  let option = Boolean(param) ? param : leftChartsone_option;
                  myChart.setOption(option, true);
              },
              
              // 折线图charts生成方法
              leftChartstwo(param)
               {
                  let myChart = echarts.init(document.getElementById('leftChartstwo'));
                  let option = leftChartstwo_option;
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
              //WB世界发展
              leftChartsthree(param) {
                   let myChart = echarts.init(document.getElementById('leftChartsthree'));
                   let option = leftChartsthree_option;
                   myChart.setOption(option, true);
              },

               
              //WB世界发展
              leftChartsfour(param) {
                  let myChart = echarts.init(document.getElementById('leftChartsfour'));
                  let option = leftChartsfour_option;
                  myChart.setOption(option);
              },
              
              //纵向柱形图charts生成方法
              rightChartsone(param) {
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('rightChartsone'));
                  let option = rightChartsone_option;
                  myChart.setOption(option);
              },
              //WB世界发展
              rightChartstwo(param) {
                  let myChart = echarts.init(document.getElementById('rightChartstwo'));

                  let option = rightChartstwo_option;
                    
                  myChart.setOption(option);
              },
              //横向柱形图charts生成方法
              rightChartsthree(param) {
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('rightChartsthree'))
                  
                  let option = rightChartsthree_option;
                    // Make dynamic data.
                    var maxData = 2000;

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

              //横向柱形图charts生成方法
              rightChartsfour(param) {
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('rightChartsfour'))
                  // 绘制图表
                   var pathSymbols = {
                    reindeer: 'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.734-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684,0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.182-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.281,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.775-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.351c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135,0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.836,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.862 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.422-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186,1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.269 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.022-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
                    plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
                    train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
                    ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
                    car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z'
                };
                  let option = rightChartsfour_option;
                  myChart.setOption(option);
              },
              //  全球地图生成方法
              map() {
                  
                   //选中的国家的移动的效果
                   function Mobile_effect(name)
                   {
                      var country_info = document.getElementById("country_list");
                      // var name = param.data.name.toString();
                      var info = country_info.innerText;
                      if(info.indexOf(name) < 0)
                      {
                          country_info.innerText += "  "+name;
                      }
                      if(info.length >40){
                        country_info.start();
                      }else{
                         country_info.stop();
                      }
                   }


                   function addCuntry_key(param,Chartslist) {
                        //添加左边第一个图的

                       function addleftone(list) {
                         for (var i = 0; i < list.length; i++) {
                              var key = list[i].key;
                              // console.log("jiangyg --------------");
                              if(key=="leftone")
                              {
                                  var data = list[i].data;
                                  var series = data.series;
                                  for (var k = 0; k < series.length; k++) {
                                           var temp_data = series[k];
                                            Chartslist[i].data.series.push(temp_data);
                                  }
                                  if(series.length >0)
                                  {
                                        //刷新最左上的图表
                                        window.vue.leftChartsone();
                                  }
                              }
                           

                         }
                       }
                       switch(param)
                       {
                          case  'Russia':
                            var Russia_list = [
                                      {key : "leftone", data :  Russia_leftChartsone_option},
                                      {key : "lefttwo" , data :  Russia_leftChartstwo_option},
                                      {key : "leftthree", data:  Russia_leftChartsthree_option},
                                      {key : "leftfour",  data:  Russia_leftChartsfour_option},
                                      {key : "rightone", data :  Russia_rightChartsone_option},
                                      {key : "righttwo", data :  Russia_rightChartstwo_option},
                                      {key : "rightThree", data : Russia_rightChartsthree_option},
                                      {key : "rightfour", data : Russia_rightChartsfour_option}
                                     ];
                               addleftone(Russia_list)
                           break;
                       }
                   }

           //        var planePath = 'arrow';
                  // 基于准备好的dom，初始化echarts实例
                  let myChart = echarts.init(document.getElementById('worldMap'))
                  // 绘制图表
                  // let option_english = {
                  //     title: {  
                  //         sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',  
                  //         left: 'center',  
                  //         top: 'top'
                  //     },
                  //     grid: {
                  //         left: '1%',
                  //         right: '1%',
                  //         top:'1%',
                  //         bottom: '1%',
                  //         containLabel: true
                  //       },
                  //     // legend:{
                  //     //     data:["中文","english"]
                  //     // },
                  //     dataRange: {
                  //         show: false,
                  //         //  调色板显示与否
                  //         min: 0,
                  //         max: 1000000,
                  //         text: ['High', 'Low'],
                  //         realtime: true,
                  //         calculable: true,
                  //         color:['#066bd1','yellow','#088bfd']
                  //         // color: ['orangered', 'yellow', 'lightskyblue'] //  生成地图颜色以及发散点颜色
                  //     },
                  //     tooltip: {
                  //         trigger: 'item'
                  //     },
                  //     geo: {
                  //         map: 'world',
                  //         label: {
                  //             emphasis: {
                  //                 show: false
                  //             }
                  //         },
                  //         roam: false,
                  //         silent: true,
                  //         itemStyle: {
                  //             normal: {
                  //                 areaColor: '#37376e',
                  //                 borderColor: '#000'
                  //             },
                  //             emphasis: {
                  //                 areaColor: '#2a333d'
                  //             }
                  //         }
                  //     },
                  //     series: [{        
                  //         type: 'map',
                  //         mapType: 'world',
                  //         zoom: 1.2,
                  //         mapLocation: {
                  //             y: 100
                  //         },
                  //         itemStyle: {  
                  //             emphasis: {
                  //                 label: {
                  //                     show: true
                  //                 }
                  //             }
                  //         },
                  //         // 对应生成地图颜色板块数据
                  //         data: [{
                  //             name: 'Afghanistan',
                  //             value: 28397.812
                  //         },
                  //         {
                  //             name: 'Angola',
                  //             value: 19549.124
                  //         },
                  //         {
                  //             name: 'Albania',
                  //             value: 3150.143
                  //         },
                  //         {
                  //             name: 'United Arab Emirates',
                  //             value: 8441.537
                  //         },
                  //         {
                  //             name: 'Argentina',
                  //             value: 40374.224
                  //         },
                  //         {
                  //             name: 'Armenia',
                  //             value: 2963.496
                  //         },
                  //         {
                  //             name: 'French Southern and Antarctic Lands',
                  //             value: 268.065
                  //         },
                  //         {
                  //             name: 'Australia',
                  //             value: 22404.488
                  //         },
                  //         {
                  //             name: 'Austria',
                  //             value: 8401.924
                  //         },
                  //         {
                  //             name: 'Azerbaijan',
                  //             value: 9094.718
                  //         },
                  //         {
                  //             name: 'Burundi',
                  //             value: 9232.753
                  //         },
                  //         {
                  //             name: 'Belgium',
                  //             value: 10941.288
                  //         },
                  //         {
                  //             name: 'Benin',
                  //             value: 9509.798
                  //         },
                  //         {
                  //             name: 'Burkina Faso',
                  //             value: 15540.284
                  //         },
                  //         {
                  //             name: 'Bangladesh',
                  //             value: 151125.475
                  //         },
                  //         {
                  //             name: 'Bulgaria',
                  //             value: 7389.175
                  //         },
                  //         {
                  //             name: 'The Bahamas',
                  //             value: 66402.316
                  //         },
                  //         {
                  //             name: 'Bosnia and Herzegovina',
                  //             value: 3845.929
                  //         },
                  //         {
                  //             name: 'Belarus',
                  //             value: 9491.07
                  //         },
                  //         {
                  //             name: 'Belize',
                  //             value: 308.595
                  //         },
                  //         {
                  //             name: 'Bermuda',
                  //             value: 64.951
                  //         },
                  //         {
                  //             name: 'Bolivia',
                  //             value: 716.939
                  //         },
                  //         {
                  //             name: 'Brazil',
                  //             value: 195210.154
                  //         },
                  //         {
                  //             name: 'Brunei',
                  //             value: 27.223
                  //         },
                  //         {
                  //             name: 'Bhutan',
                  //             value: 716.939
                  //         },
                  //         {
                  //             name: 'Botswana',
                  //             value: 1969.341
                  //         },
                  //         {
                  //             name: 'Central African Republic',
                  //             value: 4349.921
                  //         },
                  //         {
                  //             name: 'Canada',
                  //             value: 34126.24
                  //         },
                  //         {
                  //             name: 'Switzerland',
                  //             value: 7830.534
                  //         },
                  //         {
                  //             name: 'Chile',
                  //             value: 17150.76
                  //         },
                  //         {
                  //             name: 'China',
                  //             value: 62191.161
                  //         },
                  //         {
                  //             name: 'Ivory Coast',
                  //             value: 60508.978
                  //         },
                  //         {
                  //             name: 'Cameroon',
                  //             value: 20624.343
                  //         },
                  //         {
                  //             name: 'Democratic Republic of the Congo',
                  //             value: 62191.161
                  //         },
                  //         {
                  //             name: 'Republic of the Congo',
                  //             value: 3573.024
                  //         },
                  //         {
                  //             name: 'Colombia',
                  //             value: 46444.798
                  //         },
                  //         {
                  //             name: 'Costa Rica',
                  //             value: 4669.685
                  //         },
                  //         {
                  //             name: 'Cuba',
                  //             value: 11281.768
                  //         },
                  //         {
                  //             name: 'Northern Cyprus',
                  //             value: 1.468
                  //         },
                  //         {
                  //             name: 'Cyprus',
                  //             value: 1103.685
                  //         },
                  //         {
                  //             name: 'Czech Republic',
                  //             value: 10553.701
                  //         },
                  //         {
                  //             name: 'Germany',
                  //             value: 83017.404
                  //         },
                  //         {
                  //             name: 'Djibouti',
                  //             value: 834.036
                  //         },
                  //         {
                  //             name: 'Denmark',
                  //             value: 5550.959
                  //         },
                  //         {
                  //             name: 'Dominican Republic',
                  //             value: 10016.797
                  //         },
                  //         {
                  //             name: 'Algeria',
                  //             value: 37062.82
                  //         },
                  //         {
                  //             name: 'Ecuador',
                  //             value: 15001.072
                  //         },
                  //         {
                  //             name: 'Egypt',
                  //             value: 78075.705
                  //         },
                  //         {
                  //             name: 'Eritrea',
                  //             value: 5741.159
                  //         },
                  //         {
                  //             name: 'Spain',
                  //             value: 46182.038
                  //         },
                  //         {
                  //             name: 'Estonia',
                  //             value: 1298.533
                  //         },
                  //         {
                  //             name: 'Ethiopia',
                  //             value: 87095.281
                  //         },
                  //         {
                  //             name: 'Finland',
                  //             value: 5367.693
                  //         },
                  //         {
                  //             name: 'Fiji',
                  //             value: 860.559
                  //         },
                  //         {
                  //             name: 'Falkland Islands',
                  //             value: 49.581
                  //         },
                  //         {
                  //             name: 'France',
                  //             value: 63230.866
                  //         },
                  //         {
                  //             name: 'Gabon',
                  //             value: 1556.222
                  //         },
                  //         {
                  //             name: 'United Kingdom',
                  //             value: 62066.35
                  //         },
                  //         {
                  //             name: 'Georgia',
                  //             value: 4388.674
                  //         },
                  //         {
                  //             name: 'Ghana',
                  //             value: 24262.901
                  //         },
                  //         {
                  //             name: 'Guinea',
                  //             value: 10876.033
                  //         },
                  //         {
                  //             name: 'Gambia',
                  //             value: 1680.64
                  //         },
                  //         {
                  //             name: 'Guinea Bissau',
                  //             value: 10876.033
                  //         },
                  //         {
                  //             name: 'Equatorial Guinea',
                  //             value: 696.167
                  //         },
                  //         {
                  //             name: 'Greece',
                  //             value: 11109.999
                  //         },
                  //         {
                  //             name: 'Greenland',
                  //             value: 56.546
                  //         },
                  //         {
                  //             name: 'Guatemala',
                  //             value: 14341.576
                  //         },
                  //         {
                  //             name: 'French Guiana',
                  //             value: 231.169
                  //         },
                  //         {
                  //             name: 'Guyana',
                  //             value: 786.126
                  //         },
                  //         {
                  //             name: 'Honduras',
                  //             value: 7621.204
                  //         },
                  //         {
                  //             name: 'Croatia',
                  //             value: 4338.027
                  //         },
                  //         {
                  //             name: 'Haiti',
                  //             value: 9896.4
                  //         },
                  //         {
                  //             name: 'Hungary',
                  //             value: 10014.633
                  //         },
                  //         {
                  //             name: 'Indonesia',
                  //             value: 240676.485
                  //         },
                  //         {
                  //             name: 'India',
                  //             value: 12054.648
                  //         },
                  //         {
                  //             name: 'Ireland',
                  //             value: 4467.561
                  //         },
                  //         {
                  //             name: 'Iran',
                  //             value: 240676.485
                  //         },
                  //         {
                  //             name: 'Iraq',
                  //             value: 30962.38
                  //         },
                  //         {
                  //             name: 'Iceland',
                  //             value: 318.042
                  //         },
                  //         {
                  //             name: 'Israel',
                  //             value: 7420.368
                  //         },
                  //         {
                  //             name: 'Italy',
                  //             value: 60508.978
                  //         },
                  //         {
                  //             name: 'Jamaica',
                  //             value: 2741.485
                  //         },
                  //         {
                  //             name: 'Jordan',
                  //             value: 6454.554
                  //         },
                  //         {
                  //             name: 'Japan',
                  //             value: 127352.833
                  //         },
                  //         {
                  //             name: 'Kazakhstan',
                  //             value: 15921.127
                  //         },
                  //         {
                  //             name: 'Kenya',
                  //             value: 40909.194
                  //         },
                  //         {
                  //             name: 'Kyrgyzstan',
                  //             value: 5334.223
                  //         },
                  //         {
                  //             name: 'Cambodia',
                  //             value: 14364.931
                  //         },
                  //         {
                  //             name: 'South Korea',
                  //             value: 51452.352
                  //         },
                  //         {
                  //             name: 'Kosovo',
                  //             value: 97.743
                  //         },
                  //         {
                  //             name: 'Kuwait',
                  //             value: 2991.58
                  //         },
                  //         {
                  //             name: 'Laos',
                  //             value: 6395.713
                  //         },
                  //         {
                  //             name: 'Lebanon',
                  //             value: 4341.092
                  //         },
                  //         {
                  //             name: 'Liberia',
                  //             value: 3957.99
                  //         },
                  //         {
                  //             name: 'Libya',
                  //             value: 6040.612
                  //         },
                  //         {
                  //             name: 'Sri Lanka',
                  //             value: 20758.779
                  //         },
                  //         {
                  //             name: 'Lesotho',
                  //             value: 2008.921
                  //         },
                  //         {
                  //             name: 'Lithuania',
                  //             value: 3068.457
                  //         },
                  //         {
                  //             name: 'Luxembourg',
                  //             value: 507.885
                  //         },
                  //         {
                  //             name: 'Latvia',
                  //             value: 2090.519
                  //         },
                  //         {
                  //             name: 'Morocco',
                  //             value: 31642.36
                  //         },
                  //         {
                  //             name: 'Moldova',
                  //             value: 103.619
                  //         },
                  //         {
                  //             name: 'Madagascar',
                  //             value: 21079.532
                  //         },
                  //         {
                  //             name: 'Mexico',
                  //             value: 117886.404
                  //         },
                  //         {
                  //             name: 'Macedonia',
                  //             value: 507.885
                  //         },
                  //         {
                  //             name: 'Mali',
                  //             value: 13985.961
                  //         },
                  //         {
                  //             name: 'Myanmar',
                  //             value: 51931.231
                  //         },
                  //         {
                  //             name: 'Montenegro',
                  //             value: 620.078
                  //         },
                  //         {
                  //             name: 'Mongolia',
                  //             value: 2712.738
                  //         },
                  //         {
                  //             name: 'Mozambique',
                  //             value: 23967.265
                  //         },
                  //         {
                  //             name: 'Mauritania',
                  //             value: 3609.42
                  //         },
                  //         {
                  //             name: 'Malawi',
                  //             value: 15013.694
                  //         },
                  //         {
                  //             name: 'Malaysia',
                  //             value: 28275.835
                  //         },
                  //         {
                  //             name: 'Namibia',
                  //             value: 2178.967
                  //         },
                  //         {
                  //             name: 'New Caledonia',
                  //             value: 246.379
                  //         },
                  //         {
                  //             name: 'Niger',
                  //             value: 15893.746
                  //         },
                  //         {
                  //             name: 'Nigeria',
                  //             value: 159707.78
                  //         },
                  //         {
                  //             name: 'Nicaragua',
                  //             value: 5822.209
                  //         },
                  //         {
                  //             name: 'Netherlands',
                  //             value: 16615.243
                  //         },
                  //         {
                  //             name: 'Norway',
                  //             value: 4891.251
                  //         },
                  //         {
                  //             name: 'Nepal',
                  //             value: 26846.016
                  //         },
                  //         {
                  //             name: 'New Zealand',
                  //             value: 4368.136
                  //         },
                  //         {
                  //             name: 'Oman',
                  //             value: 2802.768
                  //         },
                  //         {
                  //             name: 'Pakistan',
                  //             value: 173149.306
                  //         },
                  //         {
                  //             name: 'Panama',
                  //             value: 3678.128
                  //         },
                  //         {
                  //             name: 'Peru',
                  //             value: 29262.83
                  //         },
                  //         {
                  //             name: 'Philippines',
                  //             value: 93444.322
                  //         },
                  //         {
                  //             name: 'Papua New Guinea',
                  //             value: 6858.945
                  //         },
                  //         {
                  //             name: 'Poland',
                  //             value: 38198.754
                  //         },
                  //         {
                  //             name: 'Puerto Rico',
                  //             value: 3709.671
                  //         },
                  //         {
                  //             name: 'North Korea',
                  //             value: 1.468
                  //         },
                  //         {
                  //             name: 'Portugal',
                  //             value: 10589.792
                  //         },
                  //         {
                  //             name: 'Paraguay',
                  //             value: 6459.721
                  //         },
                  //         {
                  //             name: 'Qatar',
                  //             value: 1749.713
                  //         },
                  //         {
                  //             name: 'Romania',
                  //             value: 34126.24
                  //         },
                  //         {
                  //             name: 'Russia',
                  //             value: 21861.476
                  //         },
                  //         {
                  //             name: 'Rwanda',
                  //             value: 10836.732
                  //         },
                  //         {
                  //             name: 'Western Sahara',
                  //             value: 514.648
                  //         },
                  //         {
                  //             name: 'Saudi Arabia',
                  //             value: 27258.387
                  //         },
                  //         {
                  //             name: 'Sudan',
                  //             value: 35652.002
                  //         },
                  //         {
                  //             name: 'South Sudan',
                  //             value: 9940.929
                  //         },
                  //         {
                  //             name: 'Senegal',
                  //             value: 12950.564
                  //         },
                  //         {
                  //             name: 'Solomon Islands',
                  //             value: 526.447
                  //         },
                  //         {
                  //             name: 'Sierra Leone',
                  //             value: 5751.976
                  //         },
                  //         {
                  //             name: 'El Salvador',
                  //             value: 6218.195
                  //         },
                  //         {
                  //             name: 'Somaliland',
                  //             value: 9636.173
                  //         },
                  //         {
                  //             name: 'Somalia',
                  //             value: 9636.173
                  //         },
                  //         {
                  //             name: 'Republic of Serbia',
                  //             value: 3573.024
                  //         },
                  //         {
                  //             name: 'Suriname',
                  //             value: 524.96
                  //         },
                  //         {
                  //             name: 'Slovakia',
                  //             value: 5433.437
                  //         },
                  //         {
                  //             name: 'Slovenia',
                  //             value: 2054.232
                  //         },
                  //         {
                  //             name: 'Sweden',
                  //             value: 9382.297
                  //         },
                  //         {
                  //             name: 'Swaziland',
                  //             value: 1193.148
                  //         },
                  //         {
                  //             name: 'Syria',
                  //             value: 7830.534
                  //         },
                  //         {
                  //             name: 'Chad',
                  //             value: 11720.781
                  //         },
                  //         {
                  //             name: 'Togo',
                  //             value: 6306.014
                  //         },
                  //         {
                  //             name: 'Thailand',
                  //             value: 66402.316
                  //         },
                  //         {
                  //             name: 'Tajikistan',
                  //             value: 7627.326
                  //         },
                  //         {
                  //             name: 'Turkmenistan',
                  //             value: 5041.995
                  //         },
                  //         {
                  //             name: 'East Timor',
                  //             value: 10016.797
                  //         },
                  //         {
                  //             name: 'Trinidad and Tobago',
                  //             value: 1328.095
                  //         },
                  //         {
                  //             name: 'Tunisia',
                  //             value: 10631.83
                  //         },
                  //         {
                  //             name: 'Turkey',
                  //             value: 72137.546
                  //         },
                  //         {
                  //             name: 'United Republic of Tanzania',
                  //             value: 44973.33
                  //         },
                  //         {
                  //             name: 'Uganda',
                  //             value: 33987.213
                  //         },
                  //         {
                  //             name: 'Ukraine',
                  //             value: 46050.22
                  //         },
                  //         {
                  //             name: 'Uruguay',
                  //             value: 3371.982
                  //         },
                  //         {
                  //             name: 'United States of America',
                  //             value: 34126.24
                  //         },
                  //         {
                  //             name: 'Uzbekistan',
                  //             value: 27769.27
                  //         },
                  //         {
                  //             name: 'Venezuela',
                  //             value: 236.299
                  //         },
                  //         {
                  //             name: 'Vietnam',
                  //             value: 89047.397
                  //         },
                  //         {
                  //             name: 'Vanuatu',
                  //             value: 236.299
                  //         },
                  //         {
                  //             name: 'West Bank',
                  //             value: 13.565
                  //         },
                  //         {
                  //             name: 'Yemen',
                  //             value: 22763.008
                  //         },
                  //         {
                  //             name: 'South Africa',
                  //             value: 51452.352
                  //         },
                  //         {
                  //             name: 'Zambia',
                  //             value: 13216.985
                  //         },
                  //         {
                  //             name: 'Zimbabwe',
                  //             value: 13076.978
                  //         }]
                  //     }]
                  // };

                  let option_english = center_world_Map_option;
                  myChart.setOption(option_english);
                  //  横向柱形图数据change
                  myChart.on('click', (param) =>{
                     
                      let country_key = param.data.name.toString();
                      var Chartslist =[
                            {key : "leftone", data :   leftChartsone_option},
                            {key : "lefttwo" , data :  leftChartstwo_option},
                            {key : "leftthree", data:  leftChartsthree_option},
                            {key : "leftfour",  data:  leftChartsfour_option},
                            {key : "rightone", data :  rightChartsone_option},
                            {key : "righttwo", data :  rightChartstwo_option},
                            {key : "rightThree", data : rightChartsthree_option},
                            {key : "rightfour", data : rightChartsfour_option}
                          ];
                      Mobile_effect(country_key);
                      switch(country_key)
                      {
                           case "Russia":
                              addCuntry_key("Russia",Chartslist);
                           break;
                      }
                      
                  // var leftChartsone  = echarts.init(document.getElementById('leftChartsone'));
                  // leftChartsone.setOption(option);

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
