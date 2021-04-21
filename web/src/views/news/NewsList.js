import React, { useContext } from 'react'
import News from './News'
import { NewsContext } from './NewsContext'
import { Row, Col } from 'antd';
import { Space, Button } from 'antd';

const NewsList = () => {
    const { data } = useContext(NewsContext)
    console.log(data)
    return (
            <Row>
                {data.articles.slice(0, 8).map(news => (
                    <Col span={6}>
                        <News news={news} />
                    </Col>
                ))
                }</Row>
    )
}

export default NewsList
