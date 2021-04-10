import React from 'react';
import {findList} from "../../api";
import {Modal, Table, Tag} from 'antd';
import UserForm from './UserForm';
import styles from './User.module.css'


export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      record:{}
    }
  }

  componentDidMount(){
    this.loadTable()
  }

  // 使用arrow function，避免this作用域null
  loadTable = async (params = {}) => {
    params.url = '/sys/user/list'
    const res = await findList(params)
    console.log(res)
    this.setState(res);
  }
  columns = [
    {title: 'Id', render:(text,record,index) => `${index+1}` },
    {title: 'Type', dataIndex: 'type',key: 'type'},
    {title: 'Nick Name', dataIndex: 'nickname',key: 'name'},
    {title: 'Username', dataIndex: 'username', key: 'username',},

  ];

  render() {
    return (
        <>
          <UserForm loadTable={this.loadTable}/>
          <Table rowKey="_id" columns={this.columns} dataSource={this.state.data} pagination={ {pageSize: 7} }/>
        </>
    )
  }
}
