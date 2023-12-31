import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, BarController, BarElement);

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #e7e7e7;
`;

const GraphContainer = styled.div`
  height: 350px; /* Set your desired height */
  width: 700px; /* Set your desired width */
  overflow: auto;
  background-color: #ffffff; /* Set your desired background color */
  margin: 0px; /* Set your desired margin */
  padding: 20px; /* Add padding to all sides */
  font-weight: 450;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a box shadow if desired */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #41bf99; /* Set your desired thumb color */
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* Set your desired track color */
    border-radius: 6px;
  }
`;

const Text = styled.div`
  flex-shrink: 0; /* Prevent the text from shrinking */
  font-weight: bold;
  font-size: 18px; /* Slightly smaller font size */
  padding-bottom: 15px;
`;

const Box = styled.div`
  margin-right: 20px; /* Add margin between the boxes */
`;

const Graph = () => {
  const data1 = {
    labels: [
      "Everett",
      "Seattle",
      "Lynnwood",
      "Bothell",
      "Mukilteo",
      "Edmonds",
    ],
    datasets: [
      {
        label: "Revenue by Job Location",
        data: [80000, 75000, 49000, 42500, 41000, 34000],
        backgroundColor: "#41bf99",
      },
    ],
  };

  const options1 = {
    scales: {
      x: {
        type: "linear",
        beginAtZero: false,
      },
      y: {
        type: "category",
        labels: [
          "Everett",
          "Seattle",
          "Lynnwood",
          "Bothell",
          "Mukilteo",
          "Edmonds",
        ],
      },
    },
    indexAxis: "y",
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    maintainAspectRatio: false,
    barPercentage: 0.5, // Adjust this value to control the width of the bars (80% of the available space)
    categoryPercentage: 0.9, // Adjust this value to control the gap between bars (10% gap between bars)
  };

  const data2 = {
    labels: [
      "Service Plumbing",
      "Bid Work HVAC",
      "Service HVAC",
      "Bid Work Plumbing",
      "HWT Replacement",
      "Mainteance",
      "Material Scale",
    ],
    datasets: [
      {
        label: "Another Dataset",
        data: [181000, 130000, 80000, 79000, 45000, 42000],
        backgroundColor: "#41bf99",
      },
    ],
  };

  const options2 = {
    scales: {
      x: {
        type: "linear",
        beginAtZero: false,
      },
      y: {
        type: "category",
        labels: [
          "Service Plumbing",
          "Bid Work HVAC",
          "Service HVAC",
          "Bid Work Plumbing",
          "HWT Replacement",
          "Mainteance",
          "Material Scale",
        ],
      },
    },
    indexAxis: "y",
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    maintainAspectRatio: false,
    barPercentage: 0.5,
    categoryPercentage: 0.9,
  };

  return (
    <Container>
      <Box>
        <Text>Revenue By Job Location</Text>
        <GraphContainer>
          <Bar data={data1} options={options1} />
          <h4>Revenue for November 2019</h4>
        </GraphContainer>
      </Box>
      <Box>
        <Text>Revenue By Job Type</Text>
        <GraphContainer>
          <Bar data={data2} options={options2} />
          <h4>Revenue for November 2019</h4>
        </GraphContainer>
      </Box>
    </Container>
  );
};

export default Graph;
