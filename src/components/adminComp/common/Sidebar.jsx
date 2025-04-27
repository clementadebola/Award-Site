'use client';
import Link from 'next/link';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;
  height: 100vh;
  background: #1e1f2f;
  color: white;
  padding-top: 20px;
  position: fixed;
  left: 0;
  top: 0;
`;

const NavItem = styled.div`
  margin: 20px;
  
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #7f5af0;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavItem>
        <Link href="/admin">Dashboard</Link>
      </NavItem>
      <NavItem>
        <Link href="/admin/categories">Manage Categories</Link>
      </NavItem>
      <NavItem>
        <Link href="/admin/contestants">Manage Contestants</Link>
      </NavItem>
      <NavItem>
        <Link href="/admin/payments">Payments Monitor</Link>
      </NavItem>
    </SidebarContainer>
  );
};

export default Sidebar;
