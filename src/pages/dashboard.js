import CausesPage from "@/components/CausesPage/CausesPage";
import ColumnChart from "@/components/ColumnChart/ColumnChart";
import ExpenseChart from "@/components/ExpenseChart/ExpenseChart";
import Feeds from "@/components/Feeds/Feed";
import Layout from "@/components/Layout/Layout";
import LineChart from "@/components/LineChart/LineChart";
import PageHeader from "@/components/PageHeader/PageHeader";
import PieChart from "@/components/PieChart/PieChart";
import Stats from "@/components/Stats/Stats";
import Tables from "@/components/Tables/Tables";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const Dashboard = () => {
  const [flag, setFlag] = useState('first');
  const [donations, setDonations] = useState([]);
  const donationTableHeader = ['Doner', 'Cause', 'Date', 'Amount'];

  useEffect(()=>{
    fetchDonation();
  },[]);

  const fetchDonation = async() => {
    const response = await axios.get('http://localhost:4000/api/donation');
    console.log("🚀 ~ fetchDonation ~ response:", response?.data)
    setDonations(response?.data);
  }


  return (
    <Layout pageTitle="Causes">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={{ minHeight: "80vh" }}>
          <Col
            sm={2}
            style={{
              width: "15.6%",
              borderRight: "1px solid #80808036",
              paddingRight: "0px",
            }}
          >
            <Nav variant="tabs"  className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" onClick={()=> setFlag('first')} style={{backgroundColor: flag === 'first' ? '#15c8a0' : 'white' }} >Donation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" onClick={()=> setFlag('second')}  style={{backgroundColor: flag === 'second' ? '#15c8a0' : 'white' }} >Expense</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8} style={{ width: "83%" }}>
            <Tab.Content style={{ height: "100%" }}>
              <Tab.Pane eventKey="first">
                <Stats />
                <Row className="flex justify-content-around">
                  <ExpenseChart />
                  <Feeds />
                </Row>
                <Row >
                  <Col lg="12">
                    <Tables data = {donations} headers={donationTableHeader} type='donation' />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Row className="flex justify-content-around my-2">
              <ColumnChart />
              <PieChart />
              </Row>
              <Row >
                  <Col lg="12">
                    <Tables />
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Layout>
  );
};

export default Dashboard;
