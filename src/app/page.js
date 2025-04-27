"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import styled from "styled-components";
import { theme } from "../app/styles/theme.js";
import { ThemeProvider } from "styled-components";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import CategoriesSection from "../components/CategoriesSection";
import Footer from "../components/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <ReactLenis root>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageContainer>
          <Header />
          <MainContent>
            <HeroSection />
            <CategoriesSection />
          </MainContent>

          <Footer />
        </PageContainer>
      </ThemeProvider>
    </ReactLenis>
  );
}

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.main`
  width: 100%;
  // padding-top: 80px;

  @media (max-width: 768px) {
    // padding-top: 70px;
  }
`;
