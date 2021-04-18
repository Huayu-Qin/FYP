import React from 'react';
import { Table, Row, Col, Divider, BackTop } from 'antd';
import { loadModules, setDefaultOptions } from 'esri-loader';
import styles from './Covid.module.css'
import { findList } from "../../api";

import shouldDo1Img from '../../assets/image/should-do-i-1-1.png';
import shouldDo2Img from '../../assets/image/should-do-i-1-2.png';
import shouldDo3Img from '../../assets/image/should-do-i-1-3.png';
import shouldDo4Img from '../../assets/image/should-do-i-1-4.png';
import shouldNo1Img from '../../assets/image/should-no-i-1-1.png';
import shouldNo2Img from '../../assets/image/should-no-i-1-2.png';
import shouldNo3Img from '../../assets/image/should-no-i-1-3.png';
import shouldNo4Img from '../../assets/image/should-no-i-1-4.png';
import hw1Img from '../../assets/image/hw-i-1-1.png';
import hw2Img from '../../assets/image/hw-i-1-2.png';
import hw3Img from '../../assets/image/hw-i-1-3.png';
import hw4Img from '../../assets/image/hw-i-1-4.png';


//backup button 
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
// https://covid-19.geohive.ie/datasets/4779c505c43c40da9101ce53f34bb923_0/geoservice?geometry=-24.929%2C51.417%2C8.448%2C55.966&orderBy=PopulationCensus16&selectedAttribute=ConfirmedCovidCases
const statBox1 = { background: '#fff4f4', padding: '8px 0', height: '110px', borderRadius: '5px' };
const statBox2 = { background: '#fef7ff', padding: '8px 0', height: '110px', borderRadius: '5px' };
const statBox3 = { background: '#f1f5ff', padding: '8px 0', height: '110px', borderRadius: '5px' };
const statBox4 = { background: '#f3f6f8', padding: '8px 0', height: '110px', borderRadius: '5px' };
export default class Report extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dataSource: [],
      countryNum: 0,
      populationNum: 0,
      confirmedCaseNum: 0
    }
  }

  async fetchJson() {
    const res = await findList({
      url: 'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
    })

    let countryNum = res.features.length
    let populationNum = 0, confirmedCaseNum = 0
    const dataSource = res.features.map(feature => {
      populationNum += feature.attributes.PopulationCensus16
      confirmedCaseNum += feature.attributes.ConfirmedCovidCases
      return feature.attributes
    })

    // this will rerender the view with new data
    this.setState({
      dataSource,
      countryNum,
      populationNum,
      confirmedCaseNum
    })
  }

  mapInit() {
    const options = {
      url: 'https://js.arcgis.com/4.14/init.js',
      css: 'https://js.arcgis.com/4.14/esri/themes/light/main.css' //
    };

    setDefaultOptions({ css: true })
    loadModules([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer",
      "esri/widgets/Legend"], options)
      .then(([Map, MapView, FeatureLayer, Legend]) => {

        let map = new Map({
          basemap: 'osm'
        });

        var featureLayer = new FeatureLayer({
          title: "Region",
          url: "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/ArcGIS/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0",
          renderer: {
            type: "simple",
            symbol: {
              type: "simple-marker",
              size: 6,
              color: [24, 202, 197, 0.9],
              outline: {  // autocasts as new SimpleLineSymbol()
                width: 0.5,
                color: "black"
              }
            },
            visualVariables: [
              {
                type: "size",
                field: 'ConfirmedCovidCases',
                minDataValue: 600,
                maxDataValue: 85672,
                minSize: 3,
                maxSize: 20,
                legendOptions: {
                  title: "ConfirmedCases"
                },
              }
            ]
          }
        });
        map.add(featureLayer, 0) // 0 layer

        let view = new MapView({
          container: "map",
          map: map,
          center: [-8.8367, 53.3168],
          zoom: 7
        })

        view.ui.add(
          new Legend({
            view: view
          }),
          "top-left"
        );

        this.fetchJson()

      })
      .catch(err => {
        console.error('Error to attach map', err);
      })
  }

  componentDidMount() {
    this.mapInit()
  }

  render() {
    return (
      <div className={styles.page}>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          {/*left chart*/}
          <div>
            <div>
              <Row gutter={8}>
                <Col className="gutter-row" span={8}>
                  <div style={statBox1}>
                    <div style={{ color: '#be2121', fontSize: '32px', fontWeight: '600' }}>{this.state.countryNum}</div>
                    <div style={{ color: '#222', fontSize: '20px', fontWeight: '500' }}>City</div>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div style={statBox2}>
                    <div style={{ color: '#ae3ac6', fontSize: '32px', fontWeight: '600' }}>{this.state.populationNum}</div>
                    <div style={{ color: '#222', fontSize: '20px', fontWeight: '500' }}>Population</div>
                  </div>
                </Col>
                <Col className="gutter-row" span={8}>
                  <div style={statBox3}>
                    <div style={{ color: '#4e8be6', fontSize: '32px', fontWeight: '600' }}>{this.state.confirmedCaseNum}</div>
                    <div style={{ color: '#222', fontSize: '20px', fontWeight: '500' }}>Confirmed Cases</div>
                  </div>
                </Col>
                {/*<Col className="gutter-row" span={6}>
                    <div style={statBox4}>
                      <div style={{color: '#e57631', fontSize: '32px', fontWeight: '600'}}>201023</div>
                      <div style={{color: '#222', fontSize: '20px', fontWeight: '500'}}>ddd</div>
                    </div>
                  </Col>*/}
              </Row>
            </div>
            <div className={styles.table}>
              <Table dataSource={this.state.dataSource} columns={[
                {
                  title: 'CityName',
                  dataIndex: 'CountyName',
                  key: 'CountyName',
                },
                {
                  title: 'PopulationOfCiity',
                  dataIndex: 'PopulationCensus16',
                  key: 'PopulationCensus16',
                },
                {
                  title: 'ConfirmedCases',
                  dataIndex: 'ConfirmedCovidCases',
                  key: 'ConfirmedCovidCases',
                },
                {
                  title: 'PopulationProportionOfIrelandCity',
                  dataIndex: `PopulationProportionCovidCases`,
                  key: 'PopulationProportionCovidCases',
                },
              ]} size={"small"} />
            </div>
          </div>

          {/*right chart*/}
          <div id="map" style={{ marginLeft: '20px', width: '700px', height: '600px', border: 'solid' }}></div>
        </div>

        <Divider>Our Main Precaution</Divider>

        {/*prevent fuction*/}
        <Row gutter={26}>
          <Col span={12}>
            <div className={styles.precautionLeftTitle}>Things you should do</div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldDo1Img} />
              </span>
              <span className={styles.suggestText}>
                Clean hands can reduce the risk of virus transfer. Wash your hands regularly with an alcohol-based hand sanitizer.
                </span>
            </div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldDo2Img} />
              </span>
              <span className={styles.suggestText}>
                Wearing a mask can significantly reduce the probability of transmission. When it is necessary to go to public places, wearing the mask correctly and changing it after 3-4 hours can effectively prevent the spread of the virus.
                </span>
            </div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldDo3Img} />
              </span>
              <span className={styles.suggestText}>
                Avoid direct contact with strangers. Keep a distance from other people in public places to reduce the risk of infection and disinfect common items.
                </span>
            </div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldDo4Img} />
              </span>
              <span className={styles.suggestText}>
                Cover yourself with your sleeve or use a tissue when coughing or sneezing. Dispose of tissues in a closed bin immediately after use and then wash your hands.
                </span>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.precautionRightTitle}>Things you shouldn't do</div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldNo1Img} />
              </span>
              <span className={styles.suggestText}>
                Do not touch at random. Do not touch objects in public places or animals.
                </span>
            </div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldNo2Img} />
              </span>
              <span className={styles.suggestText}>
                Don't shy away from seeking medical attention. When you are unwell, contact your doctor for a prompt diagnosis to protect your safety and the safety of others.
                </span>
            </div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldNo3Img} />
              </span>
              <span className={styles.suggestText}>
                Don't gather and bunch up. Try to avoid gathering, do not attend unnecessary parties and keep the number of participants to 10 or less.
                </span>
            </div>
            <div className={styles.dobox}>
              <span className={styles.icon}>
                <img src={shouldNo4Img} />
              </span>
              <span className={styles.suggestText}>
                Do not touch with unclean hands. Don't touch your mouth, eyes or nose with unclean hands and open windows often for good health management.
                </span>
            </div>

          </Col>
        </Row>

        <Divider>4 Step Hand Wash</Divider>
        {/*4 step wash hand*/}
        <Row gutter={30}>
          <Col span={6}>
            <div className={styles.handWash}>
              <span className={styles.icon}>
                <img src={hw1Img} />
              </span>
              <div>USE SOAP</div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.handWash}>
              <span className={styles.icon}>
                <img src={hw2Img} />
              </span>
              <div>PALM TO PALM</div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.handWash}>
              <span className={styles.icon}>
                <img src={hw3Img} />
              </span>
              <div>FINGERS INTERLACED</div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.handWash}>
              <span className={styles.icon}>
                <img src={hw4Img} />
              </span>
              <div>RINSE HANDS</div>
            </div>
          </Col>
        </Row>
        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
      </div>

    )
  }
}
