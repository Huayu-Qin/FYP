import React from 'react';
import * as echarts from 'echarts'
import {findList} from "../../api";

export default class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
    // search data
    const res = await findList({
      url: '/tb/health/report',
      username: sessionStorage.getItem("username")
    })

    let xAxisData = [],seriesBMI = [], seriesHeartDisease = [],seriesBloodPressure = []
    if(res.code == 0){
      res.data.forEach(x=>{
        xAxisData.push(x.create_time)
        seriesBMI.push(x.bmi)
        seriesHeartDisease.push(x.heart_disease_score)
        seriesBloodPressure.push(x.high_blood_pressure)
      })
    }

    // init chart
    var myChart = echarts.init(document.getElementById('bar'));
    myChart.setOption({
      title: {
        text: 'Condition Advice',
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['BMI', 'High Blood Pressure', 'Heart Disease']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        }
      },
      series: [
        {
          name: 'BMI',
          type: 'line',
          data: seriesBMI,
          markPoint: {
            data: [
              {type: 'max', name: 'Max'},
              {type: 'min', name: 'Min'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: 'Avg'}
            ]
          }
        },
        {
          name: 'High Blood Pressure',
          type: 'line',
          data: seriesBloodPressure,
          markPoint: {
            data: [
              {type: 'max', name: 'Max'},
              {type: 'min', name: 'Min'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: 'Avg'}
            ]
          }
        },
        {
          name: 'Heart Disease',
          type: 'line',
          data: seriesHeartDisease,
          markPoint: {
            data: [
              {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: 'Avg'}
            ]
          }
        }
      ]
    })
  }

  render(){
    return (
        <div style={{padding:'20px'}}>
          <div id="bar" style={{width:'100%',height:'550px'}}></div>
        </div>
    )
  }
}
