import React from "react";

const DashboardCards = ({ icon, title, value }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={styles.dCard}>
      <div style={styles.icon}>{icon}</div>
      <div style={styles.title}>{title}</div>
      <div>{value}</div>
    </div>
  )
}

const styles = {
  dCard: {
    boxShadow: "3px 0px 10px #00000029",
    margin: "0.35rem 0.75rem  0.35rem  0",
    backgroundColor: 'white',
    padding: "1rem 2rem",
    borderRadius: '5px'
  },
  icon:{
    color: "#6DBCDB",
    fontSize: '1.8rem'
  },
  title:{
    color: "#6DBCDB",
    fontSize: '10px',
    fontWeight: '700'
  }
}

export default DashboardCards;