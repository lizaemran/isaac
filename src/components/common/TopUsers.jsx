import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const TopUsers = ({ badge, revenue, user, avatar, revenuePerMonthHeading, revenuePerMonth, revenuePercentage, ordersPerMonthHeading, ordersPerMonth, ordersPercentage }) => {
  return (
    <div className="px-2 py-2 bg-white" style={styles.userCard}>
      <div style={styles.badge}>
        <p className="m-0" style={styles.badgeText}>{badge}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="d-flex justify-content-center align-items-center">
          <img src={avatar} alt="avatar" style={styles.avatar} />
          <p style={styles.user}>{user}</p>
        </div>
        <div style={styles.revenue}>
          <p>{revenue}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex flex-column">
          <p className="m-0" style={styles.subheading}>{revenuePerMonthHeading}</p>
          <p className="d-flex justify-content-between align-content-items m-0">
            <span style={styles.revenuePerMonth}>{revenuePerMonth}</span>
            <span style={revenuePercentage > 10 ? styles.increment : styles.decrement}>{revenuePercentage > 10 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}{revenuePercentage}</span>
          </p>
        </div>
        <div className="col-6 d-flex flex-column">
          <p className="m-0" style={styles.subheading}>{ordersPerMonthHeading}</p>
          <p className="d-flex justify-content-between align-content-items m-0">
            <span style={styles.revenuePerMonth}>{ordersPerMonth}</span>
            <span style={ordersPercentage > 10 ? styles.increment : styles.decrement}>{ordersPercentage > 10 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}{ordersPercentage}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dCard: {
    boxShadow: "3px 0px 10px #00000029",
    margin: "0.35rem",
    backgroundColor: "white",
    padding: "1rem 2rem",
  },
  icon: {
    color: "#6DBCDB",
    fontSize: "1.8rem",
  },
  title: {
    color: "#6DBCDB",
    fontSize: "10px",
    fontWeight: "700",
  },
  avatar: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  },
  subheading: {
    color: "gray",
    fontSize: "7px",
    fontWeight: "700",
  },
  increment: {
    color: 'green',
    fontSize: "10px",
    fontWeight: "700",
  },
  decrement: {
    color: 'red',
    fontSize: "10px",
    fontWeight: "700",
  },
  revenuePerMonth: {
    fontSize: "12px",
    fontWeight: "700",
    
  },
  user: {
    fontSize: "12px",
    fontWeight: "600",
    margin: 0,
    paddingLeft: '5px'
  },
  userCard: {
    width: '21.75rem',
    borderRadius: '5px',
    position: 'relative'
  },
  badge: {
    background: "linear-gradient(180deg, #FF9500 0%, #FFD45E 100%)",
    width: 'fit-content',
    position: 'absolute',
    top: 0, 
    left: 0,
  },
  badgeText: {
    fontSize: '8px',
    fontWeight: '700',
    padding: '0.25rem 0.45rem',
    color: 'white'
  },
  revenue: {
    marginRight: '6rem'
  }
};

export default TopUsers;
