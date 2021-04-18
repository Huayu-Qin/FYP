import React, { useState } from 'react';
import { PageHeader, Drawer, Divider, Card, Avatar, Button, Form, Input, Col, Row, Space, Descriptions } from 'antd';
import styles from './Chat.module.css';
import otherIcon from '../../assets/image/other.png';
import meIcon from '../../assets/image/me.png';
import person1 from '../../assets/image/person1.png';
import person2 from '../../assets/image/person2.png';
import person3 from '../../assets/image/person3.png';



//card
const { Meta } = Card;
//draw
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const clientId = Date.now();
const socket = new WebSocket("ws://127.0.0.1:8081/");
socket.onopen = function (event) { }
socket.onclose = function (event) { }
socket.onerror = function (event) {
  console.log("error:", event);
}


export default function Chat(props) {
  //draw
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({
    email: "",
    number: "",
    name: "",
    specialist: "",
    message: "",
    experience: "",
    skills: ""
  })
//showDrawer
  const showDrawer = (identification) => {
    switch (identification) {
      case 0:
        const obj = {
          email: "jamesedu@mail.ie",
          number: "3530874321",
          name: "James",
          specialist: "Cardiovascular",
          message: "Coronary heart disease is worthy of students' attention. It is one of the most fatal diseases!",
          experience: "He has 12 years of experience in the industry and has treated many patients with cardiovascular diseases.",
          skills: "Have a lot of clinical experience."
        }
        setDetail(obj)
        break;
      case 1:
        const obj1 = {
          email: "graceedu@mail.ie",
          number: "3530873214",
          name: "Grace",
          specialist: "Hypertension",
          message: "Pay attention to your diet, and have a reasonable schedule. Prevent high blood pressure from me.",
          experience: "She has made significant progress in the research of hypertension, focusing on the treatment and prevention of hypertension.",
          skills: "She has a set of methods to treat high blood pressure."
        }
        setDetail(obj1)
        break;
      case 2:
        const obj2 = {
          email: "ellaedu@mail.ie",
          number: "3530871234",
          name: "Ella",
          specialist: "Cardiovascular",
          message: "When you have chest tightness and can't breathe, please contact your doctor for diagnosis in time to protect your health and stay away from coronary heart disease.",
          experience: "During her university studies, the topic of her research was prevention of coronary heart disease. She published many papers, practiced in the hospital, and participated in the treatment of patients with coronary heart disease.",
          skills: "She has a wealth of knowledge and experience reserves."
        }
        setDetail(obj2)
        break;
      default:
        return;
    }
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  //chat
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [historyMessage, putMessage] = React.useState([]);
  // const [message, setMessage] = React.useState("");
  const [showChatWindow, openChatWindow] = React.useState(false);
  // historyMessage.push({id: 1, style: 'other', message: '3333333'})
  // historyMessage.push({id: 2, style: 'me', message: '222222222'})

  socket.onmessage = function (event) {
    console.log(event.data)
    render('other', event.data)
  }
  const li = historyMessage.map(item => {
    let userMessage
    if (item.style === 'other') {
      userMessage = (
        <li className={styles.other} key={item.id}>
          <img src={otherIcon}></img>
          <span className={styles.text}>{item.message}</span>
        </li>
      )
    } else if (item.style === 'me') {
      userMessage = (
        <li className={styles.me} key={item.id}>
          <span className={styles.text}>{item.message}</span>
          <img src={meIcon} />
        </li>
      )
    }

    return (
      <>{userMessage}</>
    )
  })

  const onMessageInput = e => {
  }
  const scrollBottom = () => {
    const chatContentDiv = document.querySelector("#chat")
    chatContentDiv.scrollTop = chatContentDiv.scrollHeight
  }
  const render = (style, message) => {
    let m = {
      id: Date.now(),
      style,
      message
    }
    const a = [...historyMessage, m]
    putMessage(a)
  }
  const onSend = () => {
    scrollBottom()
    const message = form.getFieldValue('message')
    console.log(message)
    console.log(form.getFieldsValue())
    render('me', message)
    socket.send(JSON.stringify({
      clientId,
      message
    }))

    form.resetFields()
  }

  // const onClose = () => {
  //   setIsModalVisible(false);
  // };
  //Window for chat
  const ChatWindow = ({ showChatWindow }) => {
    return <div className={styles.chat}>
      <div className={styles.chatHeader}>Chatting with Doctor</div>
      <div id={"chat"} className={styles.chatContent}>
        <ul>
          {li}
        </ul>
      </div>
      <div className={styles.chatInput}>
        <Form form={form}>
          <Form.Item name="message" label="">
            <TextArea rows={3} />
          </Form.Item>

        </Form>
      </div>

      <div className={styles.chatFooter}>
        <button className={styles.backBtn} onClick={e => { openChatWindow(false) }}>Back</button>
        <button className={styles.sendBtn} onClick={onSend}>Send</button>

        {/* <button onClick={() => window.history.go(-1)}>Close</button> */}

      </div>

    </div>
  }
  //window for view
  const ButtonTip = () => {
    return <div className={styles.page}>
      <PageHeader
        className="site-page-header"
        title="Online Chatting"
        subTitle="You could select the suitable doctor to make a communication"
      />
      <Divider />
      <Space direction="horizontal" size="large">
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={person1}
            />
          }
          actions={[
            <Button className={styles.openBtn} onClick={() => { openChatWindow(true) }} type="primary" danger>
              Online Chat
        </Button>,
            <Button type="primary" onClick={() => showDrawer(0)}>
              View details
        </Button>
          ]}
        >
          <Meta
            avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>}
            title="James"
            description="Cardiovascular Specialist"
          />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={person2}
            />
          }
          actions={[
            <Button className={styles.openBtn} onClick={() => { openChatWindow(true) }} type="primary" danger>
              Online Chat
        </Button>,
            <Button type="primary" onClick={() => showDrawer(1)}>
              View Details
        </Button>
          ]}
        >
          <Meta
            avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>}
            title="Grace"
            description="Hypertension Specialist"
          />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={person3}
            />
          }
          actions={[
            <Button className={styles.openBtn} onClick={() => { openChatWindow(true) }} type="primary" danger>
              Online Chat
        </Button>,
            <Button type="primary" onClick={() => showDrawer(2)}>
              View Details
        </Button>
          ]}
        >
          <Meta
            avatar={<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>}
            title="Ella"
            description="Cardiovascular Specialist"
          />
        </Card>
      </Space>

      <Drawer
        width={640}
        title={detail.specialist}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >

        <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
          Specialist Introduction
          </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Full Name" content={detail.name} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="Waterford" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="Ireland" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Website" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content={detail.message}
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Qualification level</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Graduating Institution" content="University of London" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Professional experience" content={detail.experience} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content={detail.skills}
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content={detail.email} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content={detail.number} />
          </Col>
        </Row>
      </Drawer>


    </div>
  }

  let content = showChatWindow ? <ChatWindow /> : <ButtonTip />
  return (
    <>
      {content}
    </>
  )
}




