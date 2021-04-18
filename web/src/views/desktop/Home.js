import React, { Fragment } from 'react';
import { Layout, Menu, Breadcrumb, Button, Row, Col, message } from 'antd';
import { ContactsOutlined, CalendarOutlined, MedicineBoxOutlined, HistoryOutlined, CoffeeOutlined, UserOutlined, MessageOutlined, LogoutOutlined, LaptopOutlined, LineChartOutlined, ExperimentOutlined, ProfileOutlined } from '@ant-design/icons';
import HealthList from "../health/HealthList";
import Covid from "../covid/Covid";
import Chat from "../chat/Chat"
import NewsList from "../news/NewsList"
import { NewsContextProvider } from '../news/NewsContext'
import styles from './Home.module.css';
import logo from '../../assets/image/logo.png';
import svg from '../../assets/image/s.svg'
import Line from "../chart/Line"
import UserList from "../user/UserList"
import LifeHealthList from "../life/LifeHealthList"
import Calender from "../calender/Calender"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {} //state management
    this.nickname = sessionStorage.getItem("nickname")
    this.usertype = sessionStorage.getItem("usertype")
    this.token = localStorage.getItem("token")

    if (!this.token) { // no login
      this.props.history.push("/login")
    }
  }

  menuItemOnClick(event) {
    this.setState({ menuKey: event.key }) // rerender
  }

  logoutClick = (event) => {
    sessionStorage.clear()
    localStorage.clear()
    this.props.history.push("/login")
  }

  getPage() {
    if (this.state.menuKey == 'menu1') {
      return (
        <HealthList />
      )
    } else if (this.state.menuKey == 'menu2') {
      return (
        <Covid />
      )
    } else if (this.state.menuKey == 'menu3') {
      return (
        <Chat />
      )
    } else if (this.state.menuKey == 'menu4') {
      return (
        <NewsList />
      )
    } else if (this.state.menuKey == 'menu5') {
      return (
        <UserList />
      )
    } else if (this.state.menuKey == 'menu6') {
      return (
        <Line />
      )

    } else if (this.state.menuKey == 'menu7') {
      return (
        <LifeHealthList />
      )

    } else if (this.state.menuKey == 'menu8') {
      return (
        <Calender />
      )

    } else {
      return (
        <Fragment>

          <span className={styles.text}>Welcome To Use Student Health Management System. </span>
          {/* svg pic */}
          <img src={svg} alt="svg" />
        </Fragment>
      )

    }
  }
  userManageMenu() {
    const type = sessionStorage.getItem("usertype")
    if (type === 'admin') {
      return (
        <Menu.Item key="menu5" icon={<ContactsOutlined />} onClick={this.menuItemOnClick.bind(this)}>
          User Manage
        </Menu.Item>
      )
    } else {
      return <></>
    }
  }
  render() {
    return (
      <NewsContextProvider>
        <div>
          <Layout className={styles.page}>
            <Header className={styles.header}>
              {/* <Menu theme="dark"> */}
              <Row >
                <Col span={5} offset={19}>
                  <span style={{ color: '#fff', fontWeight: '600' }}>Welcome {this.nickname}({this.usertype})</span>
                  <Button icon={<LogoutOutlined />} style={{ color: '#fff', fontWeight: '600' }} type="link" onClick={this.logoutClick.bind(this)}>Exit</Button>
                </Col>
              </Row>
              {/* </Menu> */}
            </Header>
            <Layout>
              <Sider width={220} >
                <Menu
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" icon={<LaptopOutlined />} title="Health Care Center">
                    <Menu.Item key="menu1" icon={<ExperimentOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Body health
                    </Menu.Item>
                    <Menu.Item key="menu7" icon={<CoffeeOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Life health
                    </Menu.Item>
                    <Menu.Item key="menu6" icon={<HistoryOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Health tracking
                    </Menu.Item>
                    <Menu.Item key="menu3" icon={<MessageOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Doctor Contact
                    </Menu.Item>
                    <Menu.Item key="menu4" icon={<ProfileOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Health news
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<MedicineBoxOutlined />} title="Covid-19 Center">
                    <Menu.Item key="menu2" icon={<LineChartOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      COVID-19 Analysis
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu key="sub3" icon={<UserOutlined />} title="Life Center">
                    <Menu.Item key="menu8" icon={<CalendarOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Calendar
                    </Menu.Item>
                    {this.userManageMenu()}
                    {/* <Menu.Item key="menu7" onClick={this.menuItemOnClick.bind(this)}>option8</Menu.Item> */}
                  </SubMenu>


                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                {/*<Breadcrumb style={{margin: '16px 0'}}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>*/}
                <Content className="site-layout-background" className={styles.fullscreen}>
                  {this.getPage()}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </NewsContextProvider >
    );
  }
}
