import React from 'react';
import { Button,Input } from 'antd';
import styles from './Chat.module.css'
import otherIcon from '../../assets/image/other.png';
import meIcon from '../../assets/image/me.png';

const clientId = Date.now();
const socket = new WebSocket("ws://127.0.0.1:8081/");
socket.onopen = function(event) {}
socket.onclose = function(event) {}
socket.onerror = function(event) {
  console.log("error:", event);
}

export default function Chat(props) {
  const { TextArea } = Input;
  const [historyMessage,putMessage] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [showChatWindow, openChatWindow] = React.useState(false);

  // historyMessage.push({id: 1, style: 'other', message: '3333333'})
  // historyMessage.push({id: 2, style: 'me', message: '222222222'})

  socket.onmessage = function(event) {
    console.log(event.data)
    render('other', event.data)
  }
  const li = historyMessage.map(item=>{
    let userMessage
    if(item.style === 'other') {
      userMessage  = (
        <li className={styles.other} key={item.id}>
          <img src={otherIcon}></img>
          <span className={styles.text}>{item.message}</span>
        </li>
      )
    }else if(item.style === 'me'){
      userMessage  = (
        <li className={styles.me} key={item.id}>
          <span className={styles.text}>{item.message}</span>
          <img src={meIcon}/>
        </li>
      )
    }

    return (
        <>{userMessage}</>
    )
  })

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
    render('me', message)
    socket.send(JSON.stringify({
      clientId,
      message
    }))

    setMessage('')
  }

  const ChatWindow = () => {
    return <div className={styles.chat}>
      <div className={styles.chatHeader}>Welcome to chat!</div>
      <div id={"chat"} className={styles.chatContent}>
        <ul>
          {li}
        </ul>
      </div>
      <div className={styles.chatInput}>
        <TextArea rows={3} value={message} onChange={e=> setMessage(e.target.value)}/>
      </div>
      <div className={styles.chatFooter}>
        <button className={styles.sendBtn} onClick={onSend}>Send</button>
      </div>
    </div>
  }
  const ButtonTip = () => {
    return <Button className={styles.openBtn} onClick={()=>{openChatWindow(true)}} type="primary" danger>
      Online Chat
    </Button>
  }

  let content = showChatWindow ? <ChatWindow /> : <ButtonTip/>
  return (
      <>
        {content}
      </>
  )
}




