import { Card, Drawer } from 'antd';

const { Meta } = Card;
import React, { useState } from 'react'

const News = (props) => {
    const [showDrawer, setShowDrawer] = useState(false)
    // const [visible, setVisible] = useState(false)
    const { news } = props
    // console.log(news)
    
    const onClose = () => {
        setShowDrawer(false)
      };
    return (
        <>
            <Card
                onClick={() => { setShowDrawer(!showDrawer) }}
                hoverable
                style={{ width: 300, marginTop: 30 }}
                cover={
                    <img
                        height="200"
                        alt="example"
                        src={news.urlToImage ? news.urlToImage : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                    />
                }
            >
                <Meta
                    description={news.title}
                />
            </Card>
            {showDrawer ? <Drawer
               title="Content"
               placement="bottom"
               onClose={onClose}
               visible={showDrawer}
               getContainer={false}
               style={{ position: 'absolute' }}
            >
                <p>{news.content}</p>
                <span>source: </span><a href={news.url}>{news.source.name ? news.source.name : "source"}</a>
            </Drawer> : <></>}
        </>
    )
}

export default News

