import React from 'react';
import {findList} from "../../api";
import {bmiProposal,heartDiseaseProposal,bloodPressureProposal} from "./TextUtil"
import {Modal, Table, Tag} from 'antd';
import HealthForm from './HealthForm';
import styles from './Health.module.css'
import dayjs from 'dayjs'

export default class HealthList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      record:{}
    }

    this.api = {
      action:'/tb/health/report',
    }
  }

  componentDidMount(){
    this.loadTable()
  }

  // 使用arrow function，避免this作用域null
  loadTable = async (params = {}) => {
    params.url = this.api.action
    const res = await findList(params)
    console.log(res)
    this.setState(res);
  }
  columns = [
    {title: 'Report No', dataIndex: '_id', key: '_id',render: (text, record, index) => (
          <>
            <Tag color="green" key={text}>
              <a onClick={()=>{this.setState({isModalVisible:true, record});}}>{text}</a>
            </Tag>
          </>
      )
    },
    {title: 'Name', dataIndex: 'name',key: 'name'},
    {title: 'Age', dataIndex: 'age', key: 'age',},
    {title: 'Sex', dataIndex: 'sex', key: 'sex',},
    {title: 'Smoke', dataIndex: 'smoke', key: 'smoke',},
    {title: 'Stature(cm)', dataIndex: 'stature', key: 'stature',},
    {title: 'Weight(kg)', dataIndex: 'weight', key: 'weight',},
    {title: 'High Blood Pressure', dataIndex: 'high_blood_pressure', key: 'high_blood_pressure',},
    {title: 'Low Blood Pressure', dataIndex: 'low_blood_pressure', key: 'low_blood_pressure',},
    {title: 'Cholesterol', dataIndex: 'cholesterol', key: 'cholesterol',},
    {title: 'HDL-C', dataIndex: 'hdlc', key: 'hdlc',},
    {title: 'SBP', dataIndex: 'sbp', key: 'sbp',},
    {title: 'Create Time', dataIndex: 'create_time', key: 'create_time',render: state => (
          <>
              {
                dayjs(state).format('YYYY-MM-DD HH:mm:ss')
              }
          </>
      ),
    },
  ];

  render() {
    return (
        <>
          <HealthForm api={this.api} loadTable={this.loadTable}/>
          <Table rowKey="_id" columns={this.columns} dataSource={this.state.data}/>

          <Modal width={800} style={{top:20}} title="" visible={this.state.isModalVisible} onCancel={()=>{this.setState({isModalVisible:false});}}>
            <div className={styles.report}>
              <h1 className={styles.center}>Student Health Report</h1>
              <table border="1" style={{
                borderCollapse: 'collapse',
                width:'100%',
                border:'solid',
                textAlign:'center',
                backgroundColor:'rgb(241,248,255)'
              }}>
                <tr>
                  <th>Name</th>
                  <td colSpan={3}>{this.state.record.name}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>{this.state.record.age}</td>
                  <th>Sex</th>
                  <td>{this.state.record.sex}</td>
                </tr>
                <tr>
                  <th>Smoke</th>
                  <td>{this.state.record.smoke}</td>
                  <th>Stature</th>
                  <td>{this.state.record.stature}cm</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{this.state.record.weight}kg</td>
                  <th>Cholesterol</th>
                  <td>{this.state.record.cholesterol}</td>
                </tr>
                <tr>
                  <th>High Blood Pressure</th>
                  <td>{this.state.record.high_blood_pressure}</td>
                  <th>Low Blood Pressure</th>
                  <td>{this.state.record.low_blood_pressure}</td>
                </tr>
                <tr>
                  <th>HDL-C</th>
                  <td>{this.state.record.hdlc}</td>
                  <th>SBP</th>
                  <td>{this.state.record.sbp}</td>
                </tr>
              </table>

              {/*bmi分析*/}
              <div className={styles.analysis}>
                <div className={styles.title}>BMI Analysis</div>
                <div className={styles.body}>
                  <div>
                    <span className={styles.dot}></span>
                    <span className={styles.text}>BMI:{this.state.record.bmi}</span>
                  </div>
                  <div style={{display:'flex'}}>
                    <table border="0" style={{borderCollapse: 'collapse', width:'50%', textAlign:'center',}}>
                      <tr style={{background: 'rgb(141,216,248)'}}>
                        <th>Body Type</th>
                        <th>BMI Scope</th>
                      </tr>
                      <tr style={{background: 'rgb(204,204,204)'}}>
                        <td>thinnish</td>
                        <td>10 ~ 18.4</td>
                      </tr>
                      <tr style={{background: 'rgb(102,204,0)'}}>
                        <td>Normal</td>
                        <td>18.5 ~ 23.9</td>
                      </tr>
                      <tr style={{background: 'rgb(255,255,0)'}}>
                        <td>Overweight</td>
                        <td>24.0 ~ 27.9</td>
                      </tr>
                      <tr style={{background: 'rgb(255,153,0)'}}>
                        <td>Fat</td>
                        <td>28.0 ~ 32.0</td>
                      </tr>
                    </table>
                    <span style={{marginLeft:'30px', width:'50%',wordBreak:'break-all'}}>{bmiProposal(this.state.record.bmi)}</span>
                  </div>
                </div>
              </div>

              {/*冠心病分析*/}
              <div className={styles.analysis}>
                <div className={styles.title}>Heart Disease Analysis</div>
                <div className={styles.body}>
                  <div>
                    <span className={styles.dot}></span>
                    <span className={styles.text}>Total score:{this.state.record.heartDiseaseScore}</span>
                  </div>
                  <div style={{display:'flex'}}>
                    <table border="0" style={{borderCollapse: 'collapse', width:'50%', textAlign:'center',}}>
                      <tr style={{background: 'rgb(141,216,248)'}}>
                        <th>Total score</th>
                        <th>Risk</th>
                      </tr>
                      <tr style={{background: 'rgb(204,204,204)'}}>
                        <td>0~4</td>
                        <td>1%</td>
                      </tr>
                      <tr style={{background: 'rgb(102,204,0)'}}>
                        <td>5~6</td>
                        <td>2%</td>
                      </tr>
                      <tr style={{background: 'rgb(255,255,0)'}}>
                        <td>7~16</td>
                        <td>3%~25%</td>
                      </tr>
                      <tr style={{background: 'rgb(255,153,0)'}}>
                        <td>27+</td>
                        <td>30%+</td>
                      </tr>
                    </table>
                    <span style={{marginLeft:'30px', width:'50%',wordBreak:'break-all'}}>{heartDiseaseProposal(this.state.record.heartDiseaseScore)}</span>
                  </div>
                </div>
              </div>

              {/*高血压分析*/}
              <div className={styles.analysis}>
                <div className={styles.title}>Blood Pressure Analysis</div>
                <div className={styles.body}>
                  <div>
                    <span className={styles.dot}></span>
                    <span className={styles.text}>Blood Pressure:{this.state.record.low_blood_pressure}~{this.state.record.high_blood_pressure}</span>
                  </div>
                  <div style={{display:'flex'}}>
                    <table border="0" style={{borderCollapse: 'collapse', width:'50%', textAlign:'center',}}>
                      <tr style={{background: 'rgb(141,216,248)'}}>
                        <th>Normal Scope</th>
                        <th>Result</th>
                      </tr>
                      <tr style={{background: 'rgb(204,204,204)'}}>
                        <td>60~90</td>
                        <td>Low Blood Pressure Normal</td>
                      </tr>
                      <tr style={{background: 'rgb(102,204,0)'}}>
                        <td>120~150</td>
                        <td>High Blood Pressure Normal</td>
                      </tr>
                    </table>
                    <span style={{marginLeft:'30px', width:'50%',wordBreak:'break-all'}}>{bloodPressureProposal(this.state.record.bmi)}</span>
                  </div>
                </div>
              </div>

            </div>

          </Modal>
        </>
    )
  }
}
