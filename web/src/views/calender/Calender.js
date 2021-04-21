import { Calendar, Badge } from 'antd';
import React from 'react'

export default function Calender(props) {
    const getListData = (value) => {
        let listData;
        switch (value.date()) {

            case 15:
                listData = [

                    { content: 'Remember to diagnose your health every month ' },

                ];
                break;
            default:
        }
        return listData || [];
    }

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge color="#87d068" text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    const getMonthData = (value) => {
        if (value.month() === 5) {
            return "Remember to have a physical examination every year";
        }
    }

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>

            </div>
        ) : null;
    }


    return (

        // <div style={{ height: '100%' }}>
        <Calendar  dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        // </div>

    );

}