import React from 'react';
import {save} from "../../api";
import {Button, Col, Form, Input, Modal, Row, Radio,Space, PageHeader,InputNumber} from "antd";
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import './Health.css'

export default function HealthForm(props) {
  const searchForm = {
    test:'dddddd'
  }
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm(); // FormInstance

  const search = () => {
    props.loadTable(searchForm)
  }
  const showModal = () => {
    form.resetFields()
    setIsModalVisible(true);
  };

  const onSubmit = async () => {
    const formData = {
      url: props.api.action
    }
    Object.assign(formData, form.getFieldsValue(true))
    setIsModalVisible(false);
    const res = await save(formData)
    console.log(res)
    props.loadTable() // refresh table
  };

  const onClose = () => {
    setIsModalVisible(false);
  };

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  };

  return (
      <>
        <PageHeader className="site-page-header" title="Health Data" subTitle="Input condition to query your health report"/>
        <Form name="advanced_search" className="search-form">
          <Row gutter={24}>
            <Col span={8} key={1}>
              <Form.Item name="" label="Report No">
                <Input placeholder=""/>
              </Form.Item>
            </Col>

            <Col span={8} style={{textAlign: 'right',}}>
              <Space>
                <Button type="primary" icon={<SearchOutlined />} onClick={search}>Query Report</Button>
                <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>Add</Button>
              </Space>
            </Col>
          </Row>
        </Form>

        <Modal title="Health Data" visible={isModalVisible} okText="Start Analysis" onOk={onSubmit} onCancel={onClose}>
          <Form form={form} {...layout} name="basic">

            <Form.Item label="Name" name="name" rules={[{required: true, message: 'Please input!'}]}>
              <Input />
            </Form.Item>
            <Form.Item name="sex" label="Sex">
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Age" name="age" rules={[{ type: 'number', min: 0, max: 99 }]}>
              <InputNumber />
            </Form.Item>
            <Form.Item label="Eyesight" name="eyesight" rules={[{required: true, message: 'Please input!'}]}>
              <Input style={{ width: 100 }}/>
            </Form.Item>
            <Form.Item label="Stature(cm)" name="stature" rules={[{required: true, message: 'Please input!'}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Weight(kg)" name="weight" rules={[{required: true, message: 'Please input!'}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Blood Pressure" name="bloodPressure" rules={[{required: true, message: 'Please input!'}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Blood Glucose" name="bloodGlucose" rules={[{required: true, message: 'Please input!'}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Blood Fat" name="bloodFat" rules={[{required: true, message: 'Please input!'}]}>
              <Input />
            </Form.Item>
            <Form.Item label="Cholesterol" name="cholesterol" rules={[{required: true, message: 'Please input!'}]}>
              <Input />
            </Form.Item>

          </Form>
        </Modal>
      </>

  )
}
