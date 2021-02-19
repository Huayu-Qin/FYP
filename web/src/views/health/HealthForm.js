import React from 'react';
import {save} from "../../api";
import {Button, Col, Form, Input, Modal, Row, Radio,Space, PageHeader,InputNumber} from "antd";
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import styles from './Health.module.css'

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

  const renderResult = () => {
    let bmi = 100
    if (bmi >= 24 && bmi <= 27.9) { //过重
//       体重过重不仅影响人的外观，对身体还会产生严重的危害。其中比较严重的危害是高血压，因为当体内存在过多脂肪时，会存在大量的钠。这些钠会促使高血压的产生。除此之外，超标的体重还会导致糖尿病和胆结石等并发症。
// Being overweight not only affects a person's appearance, it can also have serious harmful effects on the body. One of the more serious dangers is high blood pressure, because when there is too much fat in the body, there is a lot of sodium present. This sodium can contribute to the development of high blood pressure. In addition to this, excess weight can lead to complications such as diabetes and gallstones.


//       1.在家中准备电子秤。时刻关注自己的体重变化，督促自己保持健康体重。
// 2.按照膳食平衡准备食物。严格控制油脂和糖类的摄入，保证蔬菜水果的牛奶的摄入充足。
// 3.每周进行有氧运动。每天进行一小时的有氧运动，一周进行至少五天。
// 1. Prepare electronic scales at home. Always keep an eye on your weight changes and urge yourself to maintain a healthy weight.
//       2. Prepare food according to a balanced diet. Strictly control the intake of fats and sugars and ensure adequate intake of milk with vegetables and fruits.
//       3. Do aerobic exercise every week. Do one hour of aerobic exercise every day, at least five days a week

    } else if (bmi >= 28) { // 肥胖
//       肥胖对人的影响十分巨大。肥胖会导致显著增加冠心病和心血管疾病的发病概率。肥胖还会导致青少年的生长发育异常，智力障碍，内分泌紊乱。同时，由于肥胖而产生的心理问题也导致了许多社会问题的发生。
// The effects of obesity on people are enormous. Obesity leads to a significant increase in the probability of developing coronary heart disease and cardiovascular disease. Obesity also leads to abnormal growth and development, mental retardation and endocrine disorders in adolescents. At the same time, the psychological problems that arise from obesity lead to many social problems

//       1.在专科医生的指导下进行规范的治疗。通过营养治疗和运动治疗辅助患者减肥。
// 2.严格控制能量摄入。日常饮食中以瘦肉和植物蛋白作为蛋白源，同时含有丰富的水果、蔬菜和膳食纤维。
// 3.改变饮食习惯。吃东西时细嚼慢咽，减慢营养物质吸收的速率。
// 4.运动治疗。制定合理的运动计划，通过持续的能量消耗减少脂肪的形成和蓄积。
// 1. Standardised treatment under the supervision of a specialist. Weight loss is assisted by nutritional therapy and exercise therapy.
//       2. Strict control of energy intake. Daily diet with lean meat and vegetable protein as a protein source and rich in fruits, vegetables and dietary fibre.
//       3. Change eating habits. Chew and swallow slowly to slow down the rate of nutrient absorption.
//       4. Exercise therapy. Develop a sensible exercise programme to reduce the formation and accumulation of fat through sustained energy expenditure.

    } else if(bmi <= 18.4){ // 偏瘦
      //这意味着身体没有获得所需的卡路里，而且可能错过了身体所需的关键维生素和营养素。体重过轻会导致生长发育问题（尤其是青少年）、骨骼脆弱、免疫系统功能减退、贫血、生育问题及许多其他并发症
      // This means that the body is not getting the calories it needs and may be missing out on key vitamins and nutrients that the body needs. Being underweight can lead to growth problems (especially in teenagers), weak bones, a weakened immune system, anaemia, fertility problems and many other complications

    //  解决方案
//       为了增加体重，我们需要耗费更多的卡路里，这意味着需要多吃。但是不健康的油炸食物并不会带来什么好处，下面是一些安全增重的建议：
// 1. 不要只考虑卡路里。尽量让大部分食物富含营养，多吃碳水化合物。
// 2.多餐。只要一天消耗的总热量是增加的，多餐可以帮助补充卡路里。
// 3.补充脂肪。可以在饮食中增加一些高热量坚果或在鸡蛋中加入额外的奶酪，以增加卡路里含量。
// 4.力量训练。通过力量训练形成肌肉来帮助增加体重，锻炼也可以增加食欲
//       5.避免含糖饮料。这些液体只有卡路里会阻止患者消耗其他健康的食物。可以喝有营养的饮料如纯牛奶

      //   In order to gain weight, we need to consume more calories, which means eating more. But unhealthy fried foods don't bring much benefit. Here are some suggestions for safe weight gain.
    //   1. Don't just think about calories. Try to make most foods rich in nutrients and eat more carbohydrates.
    //   2. Eat more meals. As long as the total number of calories consumed in a day is increased, multiple meals can help replenish calories.
    //   3. Supplement with fat. You can add some high calorie nuts to your diet or add extra cheese to your eggs to increase the calorie content.
    //   4. Strength training. Strength training builds muscle to help with weight gain and exercise can also increase appetite
    //   5. Avoid sugary drinks. These liquids have only calories and prevent the patient from consuming other healthy foods. Nutritious drinks such as plain milk can be consumed.

    }else { //正常
      // 恭喜您您的体重处于健康范围。达到从饮食中摄取的卡路里量和通过肢体活动消耗的卡路里量之间的平衡是至关重要的，也是您健康生活的保障
      // Congratulate yourself on being in a healthy weight range. Achieving a balance between the amount of calories you consume from your diet and the amount of calories you burn through physical activity is essential and guarantees you a healthy life

//       1.经常运动。运动会增加卡路里的消耗，提高食欲进而促进新陈代谢。
// 2.减少久坐不动的行为。久坐不动不仅会对身体造成一定的负担，同时会减缓新陈代谢。
// 3.合理饮食。拒绝暴饮暴食和过量摄入油炸食品是控制体重的最好方法。
// Congratulate yourself on being in a healthy weight range. Achieving a balance between the amount of calories you consume from your diet and the amount of calories you burn through physical activity is essential and guarantees you a healthy life. Here are some suggestions for maintaining your weight.
//       1. Exercise regularly. Exercise increases calorie consumption, increases appetite and thus boosts metabolism.
//       2. Reduce sedentary behaviour. Being sedentary not only puts a strain on your body but also slows down your metabolism.
//       3. Eat sensibly. The best way to control your weight is to avoid overeating and excessive consumption of fried foods

    }

    let heartDiseaseScore = 2

  }

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
      <>
        <PageHeader className="site-page-header" title="Health Data" subTitle="Input condition to query your health report"/>
        <Form name="advanced_search" className={styles.searchForm}>
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
            <Form.Item name="smoke" label="Smoke">
              <Radio.Group>
                <Radio value="Y">Yes</Radio>
                <Radio value="N">No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Age" name="age" rules={[{ type: 'number', min: 0, max: 99 }]}>
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
