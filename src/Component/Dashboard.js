import React from "react";
import styled from "styled-components";
import Graph from "./Graph";

const DashboardMain = styled.div`
  background: #e7e7e7; /* Light gray background */
  height: 100vh;
  padding: 30px;
`;

const CompanyMetrices = styled.div`
  margin-bottom: 30px;
  text-align: left; /* Align heading and metrics to the left */
`;

const Container4 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  background: #ffffff; /* Lighter gray for dashboard containers */
  padding: 20px;
  width: 25%; /* Narrower width */
  margin-right: 15px; /* Add a margin to create a gap between containers */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  position: relative; /* Position relative for positioning pseudo-element */

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10px; /* Width of the color strip */
    background: #41bf99; /* Color of the strip */
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 18px; /* Slightly smaller font size */
  padding-bottom: 15px;
`;

const Value = styled.div`
  font-size: 16px; /* Slightly smaller font size */
  color: black;
  margin-right: 10px; /* Add spacing for values */
  font-weight: 500; /* Slightly lighter font weight */
`;

const Info = styled.div`
  font-size: 16px; /* Smaller font size for info */
  color: black;
  margin-top: 20px;
  font-weight: 500; /* Slightly lighter font weight */
`;

const ValueR = styled.div`
  font-size: 16px;
  color: red;
  font-weight: 500;
`;

const ValueG = styled.div`
  font-size: 16px;
  color: #41bf99;
  font-weight: 500;
`;

const GraphContainer = styled.div`
  display: flex; /* Position charts side-by-side */
  justify-content: space-between; /* Distribute available space */
`;

function Dashboard() {
  return (
    <DashboardMain>
      <CompanyMetrices>
        <Text>Company Metrics</Text>
        <Container4>
          <Container>
            {/* <Color></Color> */}
            <ValueG>$406,411.29</ValueG>
            <Info>Total Revenue</Info>
          </Container>
          <Container>
            <Value>$620</Value>
            <Info>Total Jobs Avg</Info>
          </Container>
          <Container>
            <Value>655</Value>
            <Info>Tickets Created</Info>
          </Container>
          <Container>
            <Value>735</Value>
            <Info>Tickets Scheduled</Info>
          </Container>
        </Container4>
        <Container4>
          <Container>
            <ValueR>$110,448.8</ValueR>
            <Info>Outstanding Amount</Info>
          </Container>
          <Container>
            <Value>105</Value>
            <Info>Memberships Sold</Info>
          </Container>
          <Container>
            <Value>436</Value>
            <Info>Jobs Completed</Info>
          </Container>
          <Container>
            <Value>65</Value>
            <Info>Total Canceled</Info>
          </Container>
        </Container4>
      </CompanyMetrices>
      <GraphContainer>
        <Graph></Graph>
      </GraphContainer>
    </DashboardMain>
  );
}

export default Dashboard;
