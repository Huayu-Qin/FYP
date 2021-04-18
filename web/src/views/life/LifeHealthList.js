import React from 'react';
import { findList } from "../../api";
import { TotalProposal, TotalHeaderProposal, TotalPicProposal } from "./TextUtil"
import { Modal, Table, Tag } from 'antd';
import LifeHealthForm from './LifeHealthForm';
import styles from './LifeHealth.module.css'
import dayjs from 'dayjs'
import meal3 from "../../assets/image/meal3.jpg"
import meal2 from "../../assets/image/meal2.jpg"
import meal1 from "../../assets/image/meal1.jpg"
import food1 from "../../assets/image/food1.jpg"
import food2 from "../../assets/image/food2.jpg"
import food3 from "../../assets/image/food3.jpg"
import sport1 from "../../assets/image/sport1.jpg"
import sport2 from "../../assets/image/sport2.jpg"
import sport3 from "../../assets/image/sport3.jpg"
import sleep1 from "../../assets/image/sleep1.jpg"
import sleep2 from "../../assets/image/sleep2.jpg"

export default class HealthList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            record: {}
        }

        this.api = {
            action: '/Lifehealth/report',
        }
    }

    componentDidMount() {
        this.loadTable()
    }


    loadTable = async (params = {}) => {
        params.url = this.api.action
        params.username = sessionStorage.getItem("username")
        const res = await findList(params)
        console.log(res)
        this.setState(res);
    }
    columns = [
        { title: 'Id', render: (text, record, index) => `${index + 1}` },
        {
            title: 'Report No', dataIndex: '_id', key: '_id', render: (text, record, index) => (
                <>
                    <Tag color="green" key={text}>
                        <a onClick={() => { this.setState({ isModalVisible: true, record }); }}>{text}</a>
                    </Tag>
                </>
            )
        },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age', },
        { title: 'Sex', dataIndex: 'sex', key: 'sex', },
        // {title: 'Smoke', dataIndex: 'smoke', key: 'smoke',},
        // {title: 'Stature(cm)', dataIndex: 'stature', key: 'stature',},
        // {title: 'Weight(kg)', dataIndex: 'weight', key: 'weight',},
        // {title: 'High Blood Pressure', dataIndex: 'high_blood_pressure', key: 'high_blood_pressure',},
        // {title: 'Low Blood Pressure', dataIndex: 'low_blood_pressure', key: 'low_blood_pressure',},
        // {title: 'Cholesterol', dataIndex: 'cholesterol', key: 'cholesterol',},
        // {title: 'HDL-C', dataIndex: 'hdlc', key: 'hdlc',},
        // {title: 'SBP', dataIndex: 'sbp', key: 'sbp',},
        {
            title: 'Create Time', dataIndex: 'create_time', key: 'create_time', render: state => (
                <>
                    {
                        dayjs(state).format('YYYY-MM-DD HH:mm:ss')
                    }
                </>
            ),
        },
    ];



    render() {
        return (
            <>
                <LifeHealthForm api={this.api} loadTable={this.loadTable} />
                <Table rowKey="_id" columns={this.columns} dataSource={this.state.data} pagination={{ pageSize: 7 }} />

                <Modal width={800} style={{ top: 20 }}
                    visible={this.state.isModalVisible}
                    onCancel={() => { this.setState({ isModalVisible: false }); }}
                    onOk={() => { this.setState({ isModalVisible: false }); }}
                >
                    <div className={styles.report}>
                        <h1 className={styles.center}>Student Life Health Report</h1>
                        <table border="1" style={{
                            borderCollapse: 'collapse',
                            width: '100%',
                            border: 'solid',
                            textAlign: 'center',
                            backgroundColor: 'rgb(241,248,255)'
                        }}>
                            <tr>
                                <th>Name</th>
                                <td colSpan={3}>{this.state.record.name}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{this.state.record.age}</td>
                                <th>Sex</th>
                                <td>{this.state.record.sex}</td>
                            </tr>
                            <tr>
                                <th>Have Breakfast</th>
                                <td>{this.state.record.breakfast}</td>
                                <th>Bed Time</th>
                                <td>{this.state.record.bed_time}.00</td>
                            </tr>
                            <tr>
                                <th>Have Lunch</th>
                                <td>{this.state.record.lunch}</td>
                                <th>Full Sleep Time</th>
                                <td>{this.state.record.sleep_time}h</td>
                            </tr>
                            <tr>
                                <th>Have Dinner</th>
                                <td>{this.state.record.dinner}</td>
                                <th>Everyday Sport Time</th>
                                <td>{this.state.record.sport_time}h</td>
                            </tr>
                            <tr>
                                <th>Diet preference</th>
                                <td>{this.state.record.meal}</td>
                                <th>Watch Screen Time</th>
                                <td>{this.state.record.screen_time}h</td>
                            </tr>
                        </table>

                        
                        <div className={styles.analysis}>
                            <div className={styles.title}>Life Analysis</div>
                            <div className={styles.body}>
                                {/* <div>
                                    <span className={styles.text}>
                                        <span>BMI:</span>
                                        <span className={styles.red}>{this.state.record.bmi}</span>
                                    </span>
                                </div> */}
                                <div style={{ display: 'flex' }}>
                                    {/* <span style={{ marginLeft: '30px', width: '50%', wordBreak: 'break-all' }}>{TotalProposal( this.state.record.total_sleep_score, this.state.record.total_sport_score, this.state.record.total_meal_score)}</span> */}
                                    <div style={{ display: 'flex', justifyContent: 'space-around', justifyItems: 'center' }}>
                                        <table border="0" style={{ width: '50%', textAlign: 'justify', }}>
                                            <td>
                                                <tr style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <span style={{ wordBreak: 'normal' }} className={styles.head}>{TotalHeaderProposal(this.state.record.total_sleep_score, this.state.record.total_sport_score, this.state.record.total_meal_score, this.state.record.meal_score)}</span>
                                                </tr>
                                                <tr>
                                                    <span style={{ wordBreak: 'normal', }}>{TotalProposal(this.state.record.total_sleep_score, this.state.record.total_sport_score, this.state.record.total_meal_score, this.state.record.meal_score)}</span>
                                                </tr>
                                            </td>
                                        </table>
                                        <img src={TotalPicProposal(this.state.record.total_sleep_score, this.state.record.total_sport_score, this.state.record.total_meal_score, this.state.record.meal_score, meal1, meal2, meal3, food1, food2, food3, sport1, sport2, sport3, sleep1, sleep2)} width="250" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </Modal>
            </>
        )
    }
}
