'use client';
import styled from 'styled-components';
import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';
import Card from '@/components/common/Card';

const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Header title="Admin Dashboard" />
        <Cards>
          <Card title="Total Payment" amount="₦500,000" link="/admin/payments" />
          <Card title="Categories" amount="8" link="/admin/categories" />
          <Card title="Contestants" amount="24" link="/admin/contestants" />
        </Cards>
      </Main>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  background: #f0f2f5;
  padding: 2rem;
  overflow-y: auto;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;
