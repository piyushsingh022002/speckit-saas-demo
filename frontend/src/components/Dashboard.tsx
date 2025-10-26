// src/components/Dashboard.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { TaskList } from './TaskList';

// Sidebar component
const Sidebar = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
`;

const DashboardContainer = styled.div`
  display: flex;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar>
        {/* Add links or filters for task categories here */}
        <h3>Task Filters</h3>
        {/* Example filters */}
        <ul>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </Sidebar>
      <MainContent>
        <h2>Task Tracker Dashboard</h2>
        <TaskList /> {/* Placeholder for task list */}
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
