"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import styled from "styled-components";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 30,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".hero-btn", {
      opacity: 0,
      y: 20,
      delay: 0.8,
      duration: 1,
      ease: "back.out(1.4)",
    });

    gsap.from(".phone-image", {
      opacity: 0,
      y: 100,
      rotationX: 15,
      rotationY: (i) => [10, 0, -10][i],
      scale: 0.8,
      stagger: 0.2,
      duration: 1.8,
      ease: "power2.out",
      onComplete: () => {
        
        

        gsap.to(".phone-image", {
          y: "-15px",
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.3,
            from: "center",
          },
        });
      },
    });

  }, []);

  return (
    <ReactLenis root>
      <HeaderSection>
        <LogoContainer>
          <LogoIcon>🔌</LogoIcon>
          <Logo>TG wireless</Logo>
        </LogoContainer>
        <SearchBox>
          <SearchInput type="text" placeholder="Search our Products..." />
          <SearchButton>🔍</SearchButton>
        </SearchBox>
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Contact Us</NavLink>
          <NavLink href="#">Blog</NavLink>
        </Nav>
        <ButtonContainer>
          <Button className="blue">Become a Member</Button>
          <Button className="green">Wholesale Login</Button>
        </ButtonContainer>
      </HeaderSection>

      <TrustBadge>
        <TrustIcon>🏆</TrustIcon>
        <span>Chosen by 6,400+ Satisfied Clients</span>
      </TrustBadge>

      <HeroSection ref={heroRef}>
        <HeroBox>
          <HeroTitle className="hero-title">
            Trusted Partner for <br />
            Wholesale Cell Phones
          </HeroTitle>
          <HeroSubtitle className="hero-subtitle">
            Reliable wholesale cell phones at unbeatable prices,
            <br />
            backed by trust and quality service.
          </HeroSubtitle>
          <HeroButton className="hero-btn">Explore Products</HeroButton>
        </HeroBox>

        <PhoneShowcase>
          <PhoneContainer>
            <Phone className="phone-image">
              <Image
                src="/phone-images.png"
                alt="Blue iPhone"
                width={700}
                height={500}
                priority
              />
            </Phone>     
          </PhoneContainer>
          <CertificationBadge>
            <CheckIcon>✓</CheckIcon>
            <BadgeText>PhoneCheck Certified</BadgeText>
          </CertificationBadge>
        </PhoneShowcase>

        <BrandsSection>
          <BrandsTitle>Brands We Carry</BrandsTitle>
          <BrandLogos>
            <BrandLogo>Verizon</BrandLogo>
            <BrandLogo>Apple</BrandLogo>
            <BrandLogo>Samsung</BrandLogo>
            <BrandLogo>Google</BrandLogo>
            <BrandLogo>Motorola</BrandLogo>
          </BrandLogos>
        </BrandsSection>
      </HeroSection>
    </ReactLenis>
  );
}

// Styled Components
const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

const Logo = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #333;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 0 15px;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  padding: 8px 10px;
  font-size: 14px;
  width: 180px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.2s;

  &:hover {
    color: #007bff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &.blue {
    background: #1e88e5;
    color: white;
  }

  &.green {
    background: #4caf50;
    color: white;
  }
`;

const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #666;
`;

const TrustIcon = styled.span`
  font-size: 16px;
`;

const HeroSection = styled.section`
  padding: 30px 40px 60px;
  position: relative;
`;

const HeroBox = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const HeroTitle = styled.h1`
  font-size: 58px;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 15px;
  line-height: 1.2;
  background: linear-gradient(to right, #1a237e, #0d47a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));
`;

const HeroSubtitle = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const HeroButton = styled.button`
  background: #06960BFF;
  color: white;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PhoneShowcase = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0 80px;
  margin: 20px auto 40px;
  overflow: hidden;
  max-width: 1200px;
  width: 100%;
`;

const PhoneContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
`;

const Phone = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  
  img {
    width: 100%;
    height: auto;
    max-width: 700px;
    object-fit: contain;
    object-position: top;
    
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  /* Apply mask gradient to create fade-out effect */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: 10;
    pointer-events: none;
  }
`;

const CloudEffect = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 150px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.6) 30%,
    rgba(255, 255, 255, 0) 70%
  );
  filter: blur(20px);
  z-index: 0;
`;

const ShadowEffect = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 20px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  filter: blur(10px);
  z-index: 0;
  transform: translateY(15px);
`;

const CertificationBadge = styled.div`
  position: absolute;
  right: 10%;
  top: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 2;
`;

const CheckIcon = styled.div`
  width: 25px;
  height: 25px;
  background: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 5px;
  font-weight: bold;
`;

const BadgeText = styled.div`
  font-size: 10px;
  text-align: center;
  color: #4caf50;
  font-weight: 600;
`;

const BrandsSection = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const BrandsTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #666;
  margin-bottom: 15px;
`;

const BrandLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const BrandLogo = styled.div`
  color: #888;
  font-weight: 500;
`;
