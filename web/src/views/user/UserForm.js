import React, {useEffect} from 'react';
import {save} from "../../api";
import {Button, Col, Form, Input, Modal, Row, Radio,Space, PageHeader,message} from "antd";
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './User.module.css'


export default function UserForm(props) {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [form] = Form.useForm(); // FormInstance

  const search = (values) => {
    props.loadTable(values)
  }
  const showModal = () => {
    form.resetFields()
    setModalVisible(true);
  };

  useEffect(()=>{
    if(props.userData != null){
      form.setFieldsValue(props.userData);
      setModalVisible(true);
    }

  }, [props.userData]);

  const onClose = () => {
    setModalVisible(false);
  };

  const onSubmit = async () => {
    try {
      const data = await form.validateFields();
      const formData = {
        url: '/sys/user',
      }
      Object.assign(formData, data)

      const res = await save(formData)
      if(res.code == 0){
        message.success("Save success");
        props.loadTable() // refresh table
      }
      onClose()

    } catch (errorInfo) {

    }
  };



  const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };

  return (
      <>
        <PageHeader className="site-page-header" title="User List" subTitle=""/>
        <Form name="advanced_search" className={styles.searchForm} onFinish={search}>
          <Row gutter={6}>
            <Col span={10} key={1} offset={1}>
              <Form.Item name="nickname" label="Nick Name">
                <Input style={{ width: 200 }}/>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Space>
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>Search</Button>
                <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>Add</Button>
              </Space>
            </Col>
          </Row>
        </Form>

        <Modal title="User Info" visible={modalVisible} okText="OK" onOk={onSubmit} onCancel={onClose}>
          <Form form={form} {...layout} name="basic" >

            <Form.Item label="Username" name="_id" hidden={true}>
              <Input />
            </Form.Item>
            <Form.Item name="type" label="User Type" initialValue={"admin"} rules={[{required: true, message: 'Please input!'}]}>
              <Radio.Group>
                <Radio value="admin">Admin</Radio>
                <Radio value="user">User</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Username" name="username" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 200 }}/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required: true, message: 'Please input!'}]}>
              <Input.Password style={{ width: 200 }}/>
            </Form.Item>
            <Form.Item label="Nick Name" name="nickname" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 200 }}/>
            </Form.Item>
          </Form>
        </Modal>
      </>

  )
}