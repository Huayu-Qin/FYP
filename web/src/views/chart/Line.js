import React from 'react';
import * as echarts from 'echarts'
import { Row, Col, Tabs, Radio, Space, Divider } from 'antd';
import { findList } from "../../api";
import styles from './Line.module.css'

const { TabPane } = Tabs;

export default class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
    // search data
    const res = await findList({
      url: '/health/report',
      username: sessionStorage.getItem("username")
    })

    let xAxisData = [], seriesBMI = [], seriesHeartDisease = [], seriesBloodPressure = []
    if (res.code == 0) {
      res.data.forEach(x => {

        xAxisData.push(x.create_time.split("T")[0].split("2021-")[1])
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
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' }
            ]
          }
        },
        {
          name: 'High Blood Pressure',
          type: 'line',
          data: seriesBloodPressure,
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' }
            ]
          }
        },
        {
          name: 'Heart Disease',
          type: 'line',
          data: seriesHeartDisease,
          markPoint: {
            data: [
              { name: 'lowest weekly', value: -2, xAxis: 1, yAxis: -1.5 }
            ]
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' }
            ]
          }
        }
      ]
    })
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Row>
          <Col span={18}>
            <div id="bar" style={{ width: ' 100%', height: '650px' }}></div>
          </Col>
          <Col span={6}>
            <div className={styles}>
              <Tabs type="card" style={{ textAlign: 'justify' }}>
                <TabPane tab="BMI" key="1">
                  <Divider orientation="center">Advice</Divider>
                  <p>Prepare electronic scales at home. Always keep an eye on your weight changes and urge yourself to maintain a healthy weight.</p>
                  <Divider />
                  <p>Prepare food according to a balanced diet. Strictly control the intake of fats and sugars and ensure adequate intake of milk with vegetables and fruits.</p>
                  <Divider />
                  <p>Do aerobic exercise every week. Do one hour of aerobic exercise every day, at least five days a week.</p>
                </TabPane>
                <TabPane tab="HBP" key="2">
                  <Divider orientation="center">Reason</Divider>
                  <p>Frequent consumption of high-calorie foods significantly increases the incidence of coronary heart disease.</p>
                  <p>Smoking is a major risk factor for coronary heart disease, and smokers are much more likely to develop the disease than non-smokers.</p>
                  <Divider orientation="center">Symptoms</Divider>
                  <p>chest tightness</p>
                  <p>Shortness of breath and dizziness</p>
                  <Divider orientation="center">Advice</Divider>
                  <p> Reduce salt intake. The recommended daily salt intake is no more than 6 grams per person.</p>
                  <Divider />
                  <p> Balance your diet. Eat more fresh vegetables, fruits, fish and soya products, especially those containing potassium ions, to help regulate blood pressure.</p>
                  {/* <Divider /> */}
                  {/* <p> Stop smoking and limit alcohol consumption. Tobacco contributes directly to atherosclerosis and long-term smoking increases the incidence of cardiovascular disease. Alcohol needs to be controlled in terms of daily intake.</p> */}
                </TabPane>
                <TabPane tab="Coronary heart disease" key="3">
                  <Divider orientation="center">Advice</Divider>
                  <p>Take care of the cold and keep warm. The indoor temperature should not be lower than 18 degrees Celsius in winter</p>
                  <Divider />
                  <p>Take a nap to prevent it. Nap time should be about 1 hour. Do not eat fatty food before going to bed to increase the burden on the heart and blood.</p>
                  <Divider />
                  <p>Adjust the structure of your diet. Drink plenty of boiled water during the cold season and eat light foods such as fruit and fish that are easy to digest and rich in nutrients.</p>
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div >
    )
  }
}