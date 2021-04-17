import React from 'react';
import {findList, removeById} from "../../api";
import {Modal, Table, Button, Space} from 'antd';
import UserForm from './UserForm';
import styles from './User.module.css'


export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: {},
      userData: null
    }
  }

  componentDidMount() {
    this.loadTable()
  }

  // 使用arrow function，避免this作用域null
  loadTable = async (params = {}) => {
    params.url = '/sys/user/list'
    const res = await findList(params)
    console.log(res)
    this.setState(res);
  }

  async onRemoveRecord(_id) {
    await removeById('/sys/user', _id)
    this.loadTable()
  }
  onEdit(record){
    // send to child
    this.setState({
      userData: record
    })
  }

  columns = [
    {title: 'Id', render: (text, record, index) => `${index + 1}`},
    {title: 'Type', dataIndex: 'type', key: 'type'},
    {title: 'Nick Name', dataIndex: 'nickname', key: 'name'},
    {title: 'Username', dataIndex: 'username', key: 'username',},
    {
      title: 'Action', render: (record) => (
          <Space>
            <Button type="primary" size="small" onClick={()=>{this.onEdit(record)}}>Edit</Button>
            <Button type="primary" danger size="small" onClick={e => {this.onRemoveRecord(record._id)}}>Remove</Button>
          </Space>
      ),
    },
  ];

  render() {
    return (
        <>
          <UserForm loadTable={this.loadTable} userData={this.state.userData}/>
          <Table rowKey="_id" columns={this.columns} dataSource={this.state.data} pagination={{pageSize: 7}}/>
        </>
    )
  }
}
