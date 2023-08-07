var dom = document.getElementById('container');
        var myChart = echarts.init(dom, 'light', {
            renderer: 'svg',
            useDirtyRect: false
        });
        var app = {};

        var option;

        const data = $data
        const dates = data.map(item => item[0]);
        const series1 = data.map(item => item[1]);
        const series2 = data.map(item => item[2]);

        /// put the option here
        option = {

          title: {
            text: 'Stacked Line'
          },

          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['data1', 'data2']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },

          toolbox: {
            feature: {
              saveAsImage: {},
            }
          },

            xAxis: {
              type: 'category',
              data: dates
            },
            yAxis: {
              type: 'value'
            },

            series: [{
              name: 'data1',
              type: 'line',
              stack: 'stack',
              data: series1,
              label: {
                show: true,
                position: 'bottom',
                textStyle: {
                  fontSize: 14
                }
              }
            },
            {
              name: 'data2',
              type: 'line',
              stack: 'stack',
              data: series2,
              label: {
                show: true,
                position: 'bottom',
                textStyle: {
                  fontSize: 14
                }
              }
            }]
            
          };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);