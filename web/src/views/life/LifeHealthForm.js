import React from 'react';
import { save } from "../../api";
import { DatePicker, Button, Col, Form, Input, Modal, Row, Radio, Space, PageHeader, InputNumber, notification } from "antd";
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './LifeHealth.module.css'

const { RangePicker } = DatePicker;

const close = () => {
    console.log(
        'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
};


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



export default function LifeHealthForm(props) {
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
            <PageHeader className="site-page-header" title="Life Health Data" subTitle="Input condition to predict your most serious health problem" />
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
                    <Form.Item label="Age" name="age" initialValue={18} rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="sex" label="Sex" initialValue={"male"} rules={[{ required: true, message: 'Please input!' }]}>
                        <Radio.Group>
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="breakfast" label="Breakfast" initialValue={"U"} rules={[{ required: true, message: 'Please input!' }]}>
                        <Radio.Group>
                            <Radio value="U">Everyday</Radio>
                            <Radio value="S">Sometimes</Radio>
                            <Radio value="N">None</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="lunch" label="Lunch" initialValue={"U"} rules={[{ required: true, message: 'Please input!' }]}>
                        <Radio.Group>
                            <Radio value="U">Everyday</Radio>
                            <Radio value="S">Sometimes</Radio>
                            <Radio value="N">None</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="dinner" label="Dinner" initialValue={"U"} rules={[{ required: true, message: 'Please input!' }]}>
                        <Radio.Group>
                            <Radio value="U">Everyday</Radio>
                            <Radio value="S">Sometimes</Radio>
                            <Radio value="N">None</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="meal" label="Diet preference" initialValue={"B"} rules={[{ required: true, message: 'Please input!' }]}>
                        <Radio.Group>
                            <Radio value="B">Vegetable and meat </Radio>
                            <Radio value="V">Vegetable</Radio>
                            <Radio value="M">meat</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Bed Time(24h)" name="bedTime" rules={[{ required: true, type: 'number', min: 0, max: 24 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Full Sleep Time(h)" name="sleepTime" rules={[{ required: true, type: 'number', min: 0, max: 24 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Watch Screen Time(h)" name="screenTime" rules={[{ required: true, type: 'number', min: 0, max: 24 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Everyday Sport Time(h)" name="sportTime" rules={[{ required: true, type: 'number', min: 0, max: 24 }]}>
                        <InputNumber />
                    </Form.Item>
                </Form>
            </Modal>
        </>

    )
}