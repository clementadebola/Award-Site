import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Link from 'next/link';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo>
          NUESA<span>Awards</span>
          </Logo>
          
          <NavMenu>
            <Link href="#categories">
              <Button outlined>Categories</Button>
            </Link>
            <Link href="#tickets">
              <Button secondary>Buy Ticket</Button>
            </Link>
          </NavMenu>
          
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            ☰
          </MobileMenuButton>
        </HeaderContent>
      </div>
      
      {mobileMenuOpen && (
        <MobileMenu isOpen={mobileMenuOpen}>
          <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
          <Link href="#categories" onClick={() => setMobileMenuOpen(false)}>
            <Button outlined>Categories</Button>
          </Link>
          <Link href="#tickets" onClick={() => setMobileMenuOpen(false)}>
            <Button secondary>Buy Ticket</Button>
          </Link>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: ${props => props.theme.gradients.header};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light};
  cursor: pointer;
  
  span {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.gradients.header};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 200;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.light};
  font-size: 1.5rem;
  cursor: pointer;
`;
