import { List, Avatar } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import  './../Styles/npc.css';

const data = [
  {
    Goal: 'How To Not Be Broke', Info: 'Make the racks'
  },
  {
    Goal: 'Ant Design Title 2', Info: 'Make the racks'
  },
  {
    Goal: 'Ant Design Title 3',Info: 'Make the racks'
  },
  {
    Goal: 'Ant Design Title 4',Info: 'Make the racks'
  },
];


function Goals() {
    return (
        <div className="goals">
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={item.Goal}
                description={item.Info}/>
            </List.Item>
            )}/>
    </div>
  );
}
  
export default Goals;