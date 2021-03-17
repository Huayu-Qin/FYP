import React from 'react';
import {Layout, Menu, Breadcrumb, Button, Row, Col} from 'antd';
import {MessageOutlined, LogoutOutlined, LaptopOutlined, LineChartOutlined,ExperimentOutlined} from '@ant-design/icons';
import HealthList from "../health/HealthList";
import Report from "../report/Report";
import Chat from "../chat/Chat"
import styles from './Home.module.css';
import logo from '../../assets/image/logo.png';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {} //状态管理
  }

  menuItemOnClick(event) {
    this.setState({menuKey: event.key}) // rerender
  }

  logoutClick = (event) => {
    this.props.history.push("/login")
  }

  getPage() {
    if (this.state.menuKey == 'menu1') {
      return (
          <HealthList />
      )
    } else if (this.state.menuKey == 'menu2'){
      return (
          <Report />
      )
    }else if (this.state.menuKey == 'menu3'){
      return (
          <Chat />
      )
    }else{
      return <span className={styles.text}>Welcome To Use Health Management System</span>
    }
  }

  render() {
    return (
        <div>
          <Layout className={styles.page}>
            <Header className={styles.header}>
              <Row>
                <Col span={3} offset={21}>
                  <span style={{color:'#fff', fontWeight:'600'}}>Welcome~</span>
                  <Button icon={<LogoutOutlined />} style={{color:'#fff', fontWeight:'600'}} type="link" onClick={this.logoutClick.bind(this)}>Exit</Button>
                </Col>
              </Row>
            </Header>
            <Layout>
              <Sider width={220} >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                  <SubMenu key="sub1" icon={<LaptopOutlined/>} title="Menu">
                    <Menu.Item key="menu1" icon={<ExperimentOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Health Check
                    </Menu.Item>
                    <Menu.Item key="menu2" icon={<LineChartOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      COVID-19 Analysis
                    </Menu.Item>
                    <Menu.Item key="menu3" icon={<MessageOutlined />} onClick={this.menuItemOnClick.bind(this)}>
                      Online Service
                    </Menu.Item>
                  </SubMenu>
                  {/*<SubMenu key="sub2" icon={<UserOutlined/>} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>*/}
                </Menu>
              </Sider>
              <Layout style={{padding: '0 24px 24px'}}>
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
    );
  }
}
