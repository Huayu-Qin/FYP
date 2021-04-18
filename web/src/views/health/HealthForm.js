import React from 'react';
import { save } from "../../api";
import { DatePicker, Button, Col, Form, Input, Modal, Row, Radio, Space, PageHeader, InputNumber, notification } from "antd";
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './Health.module.css'

const { RangePicker } = DatePicker;

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
// 

//notification
// const openNotificationWithIcon = type => {
//   notification[type]({
//     message: 'Notification Title',
//     description:
//       'Successfully enter the information! Please wait the system to analysis your body!'
//   });
// };
const key = `open${Date.now()}`;
const btn = (
  <Button type="primary" size="small" onClick={() => notification.close(key)}>
    Confirm
  </Button>
);



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
        url: props.api.action,
        username: sessionStorage.getItem("username")
      }
      Object.assign(formData, data)
      setIsModalVisible(false);
      const res = await save(formData)
      // notification[type]({
      //   message: 'Notification Title',
      //   description:
      //     'Successfully enter the information! Please wait the system to analysis your body!'
      // });

      notification.open({
        message: 'Health Analysis processing',
        description:
          'Successfully enter the information! Please wait the system to analysis your body!',
        btn,
        key,
        onClose: close,
      });

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
      span: 8,
    },
    wrapperCol: {
      span: 17,
    },
  };

  return (
    <>
      <PageHeader className="site-page-header" title="Health Data" subTitle="Input condition to calculate your body health" />
      <Form name="advanced_search" className={styles.searchForm} onFinish={search}>
        <Row gutter={6}>
          <Col span={10} key={1} offset={1}>
            <Form.Item name="createTimeArray" label="Time Scope">
              <RangePicker showTime />
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

      <Modal title="Health Data" visible={isModalVisible} okText="Start Analysis" onOk={onSubmit} onCancel={onClose} >
        <Form form={form} {...layout} name="basic" >

          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 200 }} />
          </Form.Item>
          <Form.Item name="sex" label="Sex" initialValue={"male"} rules={[{ required: true, message: 'Please input!' }]}>
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="smoke" label="Smoke" initialValue={"N"} rules={[{ required: true, message: 'Please input!' }]}>
            <Radio.Group>
              <Radio value="Y">Yes</Radio>
              <Radio value="N">No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Age" name="age" initialValue={18} rules={[{ type: 'number', min: 0, max: 99 }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Height(cm)" name="stature" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Weight(kg)" name="weight" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="systolic BloodPressure" name="highBloodPressure" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="diastolic BloodPressure" name="lowBloodPressure" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Cholesterol" name="cholesterol" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="High-density Lipoprotein">
          </Form.Item>
          <Form.Item label="Cholesterol(HDL-C)" name="hdlc" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Systolic pressure(SBP)" name="sbp" rules={[{ required: true, message: 'Please input!' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>

        </Form>
      </Modal>
    </>

  )
}
