'use client';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background: #090b22;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Admin Dashboard</h2>
      <button onClick={() => alert('Logging out...')}>
        Logout
      </button>
    </HeaderContainer>
  );
};

export default Header;
