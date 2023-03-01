import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import DashboardCards from "../components/common/DashboardCards";
import MonthlyEarnings from "../components/MonthlyEarnings";
import TopUsers from "../components/common/TopUsers";
import ActiveOrders from "../components/ActiveOrders";
import { HiEmojiHappy } from "react-icons/hi";

function Dashboard() {
  const dataCards = [
    <DashboardCards id='1' icon={<FaUsers />} title='CUSTOMERS' value='7340' />, 
    <DashboardCards id='12' icon={<FaUsers />} title='CUSTOMERS' value='7340' />,
    <DashboardCards id='13' icon={<FaUsers />} title='CUSTOMERS' value='7340' />,
    <DashboardCards id='14' icon={<FaUsers />} title='CUSTOMERS' value='7340' />,
    <DashboardCards id='15' icon={<FaUsers />} title='CUSTOMERS' value='7340' />,
    <DashboardCards id='16' icon={<FaUsers />} title='CUSTOMERS' value='7340' />,
    <DashboardCards id='17' icon={<FaUsers />} title='CUSTOMERS' value='7340' />,
    <DashboardCards id='18' icon={<FaUsers />} title='CUSTOMERS' value='7340' />
  ]
  const tableHeading = ['Type', 'Order#', 'Customer', 'Zip Code', 'Order Time', 'Vendors', 'Rider', 'Order Amount', 'Performance']
  const tableRowsData = [
    {type: 'Squad', orderNo : '123456', avatar: '/11@2x.png', cName: 'John Doe', cAddress: 'City ABC', cContact: '+1 80 87654367', zip: '12345', orderTime: '12:00', vendor: '/11@2x.png', rider: 'ABC XYZ', orderAmount: '$123', performance: <HiEmojiHappy style={{ fontSize: '1.5rem', color: '#82F89D'}} />},
    {type: 'Normal', orderNo : '123456', avatar: '/11@2x.png', cName: 'John Doe', cAddress: 'City ABC', cContact: '+1 80 87654367', zip: '12345', orderTime: '12:00', vendor: '/11@2x.png', rider: 'ABC XYZ', orderAmount: '$123', performance: <HiEmojiHappy style={{ fontSize: '1.5rem', color: '#82F89D'}} />},
    {type: 'Squad', orderNo : '123456', avatar: '/11@2x.png', cName: 'John Doe', cAddress: 'City ABC', cContact: '+1 80 87654367', zip: '12345', orderTime: '12:00', vendor: '/11@2x.png', rider: 'ABC XYZ', orderAmount: '$123', performance: <HiEmojiHappy style={{ fontSize: '1.5rem', color: '#82F89D'}} />}
  ]
  return (
    <div className="page">
      <div className="d-flex justify-content-between">
        <button style={styles.filterBtn}>Filter By</button>
        <Link to="/tqm">
          <button style={styles.tqmBtn}>TQM</button>
        </Link>
      </div>
      <div className="container m-0 mb-4">
        <div className="row">
          <div className="col-6 d-flex flex-wrap">
            {dataCards.map(d => <div key={d.id}>{d}</div>)}           
          </div>
          <div className="col-6 bg-white" style={styles.chart}>
          <MonthlyEarnings borderClr='#6DBCDB' dataCol={[100, 200, 300, 200, 100, 400, 200, 100, 230, 120, 340, 310]} labels = {['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']} />
          </div>
        </div>
      </div>
      <div className="container m-0 mb-4 d-flex">
        <div className="row">
          <div className="col">
          <TopUsers badge='Top Customer' revenue='$49,137' user={<small className="text-xs">Christina<br />Ambrosia</small>} avatar='/11@2x.png' revenuePerMonthHeading='REVENUE/MONTH' revenuePerMonth='$13469.80' revenuePercentage='12' ordersPerMonthHeading='PROCESSED ORDERS/ MONTH' ordersPerMonth='182' ordersPercentage='8' />
          </div>
          <div className="col">
          <TopUsers badge='Top Rider' revenue='$49,137' user={<small className="text-xs">Christina<br />Ambrosia</small>} avatar='/11@2x.png' revenuePerMonthHeading='REVENUE/MONTH' revenuePerMonth='$13469.80' revenuePercentage='12' ordersPerMonthHeading='PROCESSED ORDERS/ MONTH' ordersPerMonth='182' ordersPercentage='8' />
          </div>
          <div className="col">
          <TopUsers badge='Top Customer' revenue='$49,137' user={<small className="text-xs">Christina<br />Ambrosia</small>} avatar='/11@2x.png' revenuePerMonthHeading='REVENUE/MONTH' revenuePerMonth='$13469.80' revenuePercentage='12' ordersPerMonthHeading='PROCESSED ORDERS/ MONTH' ordersPerMonth='182' ordersPercentage='8' />
          </div>
        </div>
      </div>
      <div className="container m-0 mb-4">
      <ActiveOrders tableHeading={tableHeading} tableRowsData={tableRowsData} />
      </div>
    </div>
  );
}

const styles = {
  filterBtn: {
    padding: "0.45rem 0.9rem",
    outline: "none",
    border: "none",
    boxShadow: "3px 0px 10px #00000029",
    margin: "1rem",
  },
  tqmBtn: {
    padding: "0.45rem 4rem",
    backgroundColor: "#D72229",
    borderRadius: "100px",
    outline: "none",
    border: "none",
    boxShadow: "3px 0px 10px #00000029",
    margin: "1rem",
    color: "white",
  },
  chart: {
    boxShadow: "3px 0px 10px #00000029",
  },
};

export default Dashboard;
