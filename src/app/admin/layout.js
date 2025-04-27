'use client';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Sidebar />
      <div style={{ width: '100%' }}>
        <Header />
        <Content>{children}</Content>
      </div>
    </Main>
  );
};

export default Layout;
