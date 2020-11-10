import { List, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import  './../Styles/goals.css';

const data = [
  {
    Goal: 'Microsoft', Info: 'Bought at $43.50 per', Count: 10
  },
  {
    Goal: 'Amazon', Info: 'Bought at $43.50 per', Count: 20
  },
  {
    Goal: 'Google', Info: 'Bought at $43.50 per', Count: 30
  },
  {
    Goal: 'American Express', Info: 'Bought at $43.50 per', Count: 40
  },];


function Inventory() {
    return (
        <div className="goals">
          <h1 className="bet">Stock</h1>
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item className="item">
                <List.Item.Meta title={item.Goal}/>
                <List.Item.Meta className = "task" description={item.Info}/>
                <Button className="decrease">Dec</Button>
                <List.Item.Meta  className = "itemcount" description={item.Count}/>
                <Button className="increase">Inc</Button>
            </List.Item>
            )}/>
    </div>
  );
}
  
export default Inventory;