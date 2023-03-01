import React from "react";
import { TbArrowsDownUp } from "react-icons/tb";
const ActiveOrders = ({ tableHeading, tableRowsData }) => {
  return (
    <div>
      <h4>Active Orders</h4>
      <table className="table bg-white">
        <thead>
          <tr>
            {tableHeading.map((tblh) => (
              <th key={tblh} style={styles.headings} scope="col">
                {tblh}
                <TbArrowsDownUp style={styles.icon} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRowsData.map((tblr) => (
            <tr key={tblr} scope="row">
              <td scope="row">
                <span
                  className="p-2"
                  style={
                    tblr.type === "Squad"
                      ? styles.typeStyle1
                      : styles.typeStyle2
                  }
                >
                  {tblr.type}
                </span>
              </td>
              <td scope="row" style={styles.orderNo}>
                {tblr.orderNo}
              </td>
              <td scope="row" style={styles.customerData}>
                <img
                  src={tblr.avatar}
                  alt={tblr.avatar}
                  style={styles.avatar}
                />
                <span className="d-flex flex-column">
                  <span style={styles.cName}>{tblr.cName}</span>
                  <span style={styles.cAddress}>{tblr.cAddress}</span>
                  <span style={styles.cContact}>{tblr.cContact}</span>
                </span>
              </td>
              <td scope="row" style={styles.orderNo}>
                {tblr.zip}
              </td>
              <td scope="row" style={styles.orderNo}>
                {tblr.orderTime}
              </td>
              <td scope="row">
                <img
                  src={tblr.vendor}
                  alt={tblr.vendor}
                  style={styles.vendor}
                />
              </td>
              <td scope="row" style={styles.orderNo}>
                {tblr.rider}
              </td>
              <td scope="row">
                <span className="py-1 px-4" style={styles.amount}>{tblr.orderAmount}</span>
              </td>
              <td scope="row">
                {tblr.performance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  headings: {
    color: "#CE364E",
    fontSize: "14px",
  },
  icon: {
    fontSize: "0.75rem",
    color: "gray",
    marginLeft: "5px",
  },
  typeStyle1: {
    borderRadius: "30px",
    backgroundColor: "#FFF27B",
    color: "gray",
    fontSize: "10px",
    fontWeight: "700",
  },
  typeStyle2: {
    borderRadius: "30px",
    backgroundColor: "#FFAFB1",
    color: "red",
    fontSize: "10px",
    fontWeight: "700",
  },
  orderNo: {
    fontSize: "12px",
    fontWeight: "700",
  },
  avatar: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    marginRight: "5px",
  },
  vendor: {
    height: "30px",
    width: "30px",
  },
  customerData: {
    display: "flex",
    alignItems: "center",
  },
  cAddress: {
    fontSize: "8px",
    color: "gray",
  },
  cName: {
    fontSize: "11px",
    fontWeight: "700",
    color: "black",
  },
  cContact: {
    fontSize: "8px",
    color: "gray",
  },
  amount: {
    borderRadius: "30px",
    backgroundColor: "#82F89D",
    color: "green",
    fontSize: "10px",
    fontWeight: "700",
  },
};

export default ActiveOrders;
