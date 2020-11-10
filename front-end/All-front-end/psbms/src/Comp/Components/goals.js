import { List} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import  './../Styles/goals.css';

const data = [
  {
    Goal: 'Secure the Job', Info: 'Have Multiple Offers', Count: 10
  },
  {
    Goal: 'Invest for the future', Info: 'Buy stock on the low, sell on the high', Count: 20
  },
  {
    Goal: 'Pay Subscriptions',Info: 'Spotify, HBO Max, Netflix', Count: 30
  },
  {
    Goal: 'Cook A Meal Once A Week',Info: 'Got to save up for the McChicken', Count: 40
  },];


function Goals() {
    return (
        <div className="goals">
          <h1 className="bet">Goals</h1>
            <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item className="item">
                <List.Item.Meta title={item.Goal}/>
                <List.Item.Meta className = "task" description={item.Info}/>
            </List.Item>
            )}/>
    </div>
  );
}
  
export default Goals;