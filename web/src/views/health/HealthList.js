import React from 'react';
import {findList} from "../../api";
import {Modal, Table, Tag} from 'antd';
import HealthForm from './HealthForm'
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
    {title: 'Stature', dataIndex: 'stature', key: 'stature',},
    {title: 'Weight', dataIndex: 'weight', key: 'weight',},
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

          <Modal title="Health Report" visible={this.state.isModalVisible} onCancel={()=>{this.setState({isModalVisible:false});}}>
            <div className={styles.report}>
              <table border="1" style={{
                borderCollapse: 'collapse',
                width:'100%'
              }}>
                <tr>
                  <th>Name</th>
                  <th>{this.state.record.name}</th>
                  <th>1</th>
                  <th>1</th>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{this.state.record.age}</td>
                  <td>Sex</td>
                  <td>{this.state.record.sex}</td>
                </tr>
                <tr>
                  <td>Smoke</td>
                  <td>{this.state.record.smoke}</td>
                  <td>Stature</td>
                  <td>{this.state.record.stature}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{this.state.record.weight}</td>
                  <td>Cholesterol</td>
                  <td>{this.state.record.cholesterol}</td>
                </tr>
              </table>
            </div>
          </Modal>
        </>
    )
  }
}
