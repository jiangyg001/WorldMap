<script>
  import ecStat from 'echarts-stat'
  var data = [[1, 4862.4], [2, 5294.7], [3, 5934.5], [4, 7171.0], [5, 8964.4], [6, 10202.2], [7, 11962.5], [8, 14928.3], [9, 16909.2], [10, 18547.9], [11, 21617.8], [12, 26638.1], [13, 34634.4], [14, 46759.4], [15, 58478.1], [16, 67884.6], [17, 74462.6], [18, 79395.7]];

  // See https://github.com/ecomfe/echarts-stat
  var myRegression = ecStat.regression('exponential', data);

  myRegression.points.sort(function(a, b) {
      return a[0] - b[0];
  });
export default { 

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
</script>