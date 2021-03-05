import React from 'react';
import {save} from "../../api";
import {Button, Col, Form, Input, Modal, Row, Radio,Space, PageHeader,InputNumber} from "antd";
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './Health.module.css'

// 健康数据表单
export default function HealthForm(props) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm(); // FormInstance

  const search = (values) => {
    props.loadTable(values)
  }
  const showModal = () => {
    form.resetFields()
    setIsModalVisible(true);
  };

  const onSubmit = async () => {
    try {
      const data = await form.validateFields();
      const formData = {
        url: props.api.action
      }
      Object.assign(formData, data)
      setIsModalVisible(false);
      const res = await save(formData)
      console.log(res)
      props.loadTable() // refresh table
    } catch (errorInfo) {

    }
  };

  const onClose = () => {
    setIsModalVisible(false);
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
        <PageHeader className="site-page-header" title="Health Data" subTitle="Input condition to query your health report"/>
        <Form name="advanced_search" className={styles.searchForm} onFinish={search}>
          <Row gutter={24}>
            <Col span={6} key={1} offset={1}>
              <Form.Item name="_id" label="Report No">
                <Input placeholder=""/>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Space>
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>Query</Button>
                <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>Add</Button>
              </Space>
            </Col>
          </Row>
        </Form>

        <Modal title="Health Data" visible={isModalVisible} okText="Start Analysis" onOk={onSubmit} onCancel={onClose}>
          <Form form={form} {...layout} name="basic" >

            <Form.Item label="Name" name="name" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 200 }}/>
            </Form.Item>
            <Form.Item name="sex" label="Sex" initialValue={"male"} rules={[{required: true, message: 'Please input!'}]}>
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="smoke" label="Smoke" initialValue={"N"} rules={[{required: true, message: 'Please input!'}]}>
              <Radio.Group>
                <Radio value="Y">Yes</Radio>
                <Radio value="N">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Age" name="age" initialValue={18} rules={[{ type: 'number', min: 0, max: 99 }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="Stature(cm)" name="stature" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>
            <Form.Item label="Weight(kg)" name="weight" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>
            <Form.Item label="High Blood Pressure" name="highBloodPressure" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>
            <Form.Item label="Low Blood Pressure" name="lowBloodPressure" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>
            <Form.Item label="Cholesterol" name="cholesterol" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>
            <Form.Item label="HDL-C" name="hdlc" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>
            <Form.Item label="SBP" name="sbp" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>

          </Form>
        </Modal>
      </>

  )
}
