"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from "next/image";
import styled from "styled-components";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.from(".hero-text h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".hero-text p", {
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
      ease: "power2.out",
    });

    gsap.from(".phone-images img", {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
      stagger: 0.3,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <ReactLenis root>
      <Header>
        <Logo>TG Wireless</Logo>
        <Nav>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
          <Button className="header-btn blue">Become a Member</Button>
          <Button className="header-btn green">Wholesale Login</Button>
        </Nav>
      </Header>
      <Hero>
        <HeroText className="hero-text">
          <h1>Trusted Partner for Wholesale Cell Phones</h1>
          <p>Reliable wholesale cell phones at unbeatable prices, backed by trust and quality service.</p>
        </HeroText>
        <Button className="hero-btn">Explore Products</Button>
        <PhoneImages className="phone-images">
          <Image src="/iphone.png" alt="iPhone" width={150} height={250} />
          <Image src="/google-pixel.png" alt="Google Pixel" width={190} height={280} />
          <Image src="/samsung.png" alt="Samsung" width={150} height={250} />
        </PhoneImages>
      </Hero>
    </ReactLenis>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &.blue {
    background: #007bff;
    color: white;
  }
  &.green {
    background: #28a745;
    color: white;
  }
`;

const Hero = styled.section`
  text-align: center;
  padding: 60px 20px;
`;

const HeroText = styled.div`
  max-width: 600px;
  margin: 0 auto;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: #555;
  }
`;

const PhoneImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  img {
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
