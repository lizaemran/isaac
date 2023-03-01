import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./Views/Dashboard";
import TQM from "./Views/TQM";
import "./App.css"
function App() {
  return (
    <Layout>
      <Routes>
      <Route exact path="/" element=<Dashboard /> />
        <Route exact path="/tqm" element=<TQM /> />
      </Routes>
    </Layout>
  );
}

const styles = {
  sidebar: {
    width: "2rem",
    position: "fixed",
    top: "60px",
    height: "90vh",
    backgroundColor: "#283848",
    padding: "2rem",
  },
};

export default App;
