import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterContainer>
      <div className="container">

        <FooterContent>
          <FooterSection>
            <h2 className="footer-title">NUESA Awards 2025</h2>
            <p className="footer-description">
              Celebrating excellence and talent across campus. Our annual awards recognize outstanding 
              achievements and contributions to campus life.
            </p>
    
            <SocialLinks>
              
            <SocialIcon href="#" aria-label="Facebook">
                f
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                X
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                i
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                in
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h3 className="footer-title">Quick Links</h3>
            <QuickLinks>
              <QuickLink href="#categories">Categories</QuickLink>
              <QuickLink href="#">Past Winners</QuickLink>
              <QuickLink href="#">Event Schedule</QuickLink>
              <QuickLink href="#">Nominations</QuickLink>
              <QuickLink href="#">Contact Us</QuickLink>
            </QuickLinks>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          © {new Date().getFullYear()} NUESA Awards. All rights reserved.
        </Copyright>
      </div>
      
      <BackToTop onClick={scrollToTop} aria-label="Back to top">
        ↑
      </BackToTop>
    </FooterContainer>
  );
};

export default Footer;


const FooterContainer = styled.footer`
  background: ${props => props.theme.gradients.footer};
  color: ${props => props.theme.colors.light};
  padding: 4rem 0 2rem;
  position: relative;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  .footer-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .footer-description {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 2rem;
    max-width: 500px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.light};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.dark};
    transform: translateY(-3px);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const QuickLink = styled.a`
  color: ${props => props.theme.colors.light};
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(5px);
  }
`;

const BackToTop = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  opacity: 0.7;
`;