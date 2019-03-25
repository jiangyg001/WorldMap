var leftoneOption = {
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
            }