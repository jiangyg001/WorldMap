<script type="text/javascript">

 export default {
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
                  }
</script>   