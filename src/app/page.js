"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() =>{
    const ScrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];


     
  }, []);


  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <=3; i++){
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/img-${2 * i - 1}.jpg`} alt=""></img>
          </div>
          <div className="card card-right">
          <img src={`/img-${2 * i}.jpg`} alt=""></img>
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <ReactLenis root>
        <section className="hero">
          <div className="img">
            <img src="/logo.jpg" />
          </div>
        </section>
        <section className="main">
          <div className="main-content">
          <div className="logo">
            <img src="/logo.jpg" />
          </div>
          <div className="copy">
            <div className="line">
              <p>Delve into coding without clutter.</p>
            </div>
            <div className="line">
              <p>One subscription. Endless web design.</p>
            </div>
            <div className="line">
              <p>Take the fast lane to mastery.</p>
            </div>

          </div>
          <div className="btn">
              <button>Get Pro</button>
            </div>

         
          </div>
          {generateRows()}
        </section>
        <section className="footer">
          <Link href="#">Link in description</Link>

        </section>
      </ReactLenis>
    </>
  );
}
