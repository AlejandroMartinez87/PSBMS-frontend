import { Calendar, Badge } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './../Styles/calendar.css';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'success', content: 'Payment of $45.30.' },
        { type: 'success', content: 'Payment of $45.30.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'Funds are low' },
        { type: 'success', content: 'Payment of $45.30.' },
        { type: 'error', content: 'you dont use a credit card, invalid payment' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'Funds are low' },
        { type: 'success', content: 'Payment of $45.30.' },
        { type: 'error', content: 'you dont use a credit card, invalid payment' },
        { type: 'error', content: 'you dont use a credit card, invalid payment' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

function CalendarDone() {
  return (
    <div className="background">
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>, MountNode
    </div>
  );
}

export default CalendarDone;