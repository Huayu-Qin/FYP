import React from 'react';
import {findList} from "../../api";
import {Table, Tag} from 'antd';
import HealthForm from './HealthForm'
import './Health.css'
import dayjs from 'dayjs'

export default class HealthList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
    {title: 'Report No', dataIndex: '_id', key: '_id',},
    {title: 'Name', dataIndex: 'name',key: 'name',render: state => (
          <>
            <Tag color="green" key={state}>
              {state.toUpperCase()}
            </Tag>
          </>
      ),
    },
    {title: 'Age', dataIndex: 'age', key: 'age',},
    {title: 'Stature', dataIndex: 'stature', key: 'stature',},
    {title: 'Weight', dataIndex: 'weight', key: 'weight',},
    {title: 'Blood Pressure', dataIndex: 'blood_pressure', key: 'blood_pressure',},
    {title: 'Blood Glucose', dataIndex: 'blood_glucose', key: 'blood_glucose',},
    {title: 'Blood Fat', dataIndex: 'blood_fat', key: 'blood_fat',},
    {title: 'Diagnosis', dataIndex: 'diagnosis', key: 'diagnosis',},
    {title: 'Proposal', dataIndex: 'proposal', key: 'proposal',},
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
        </>
    )
  }
}
