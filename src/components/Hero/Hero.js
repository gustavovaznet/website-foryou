//HERO COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Overlay from "./Overlay";
import Container from "../GlobalComponents/Container";
import Info from "./Info";
import Showcase from "./Showcase";
import heroBg from "../../assets/bg-parallax.png";
import mobileScreen from "../../assets/screen-02.png";
import mobileScreen2 from "../../assets/screen-04.png";
import mobileScreen3 from "../../assets/screen-05.png";

//HERO
const Hero = () => {
  const [img, setImage] = useState(mobileScreen);
  const [count, setCount] = useState(0);
  const images = [mobileScreen, mobileScreen2, mobileScreen3];
  const nextBg = () => {
    if (count >= images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setImage(images[count]);
  };

  const previousBg = () => {
    if (count === 0) {
      setCount(2);
    } else {
      setCount(count - 1);
    }
    setImage(images[count]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBg();
    }, 3000);
    return () => clearInterval(interval);
  });

  //RETURN
  return (
    <section css={styles} className="hero">
      <Overlay />
      <Container>
        <Info />
        <Showcase img={img} previousBg={previousBg} nextBg={nextBg} />
      </Container>
    </section>
  );
};

//STYLES
const styles = css`
  width: 100%;
  min-height: 100vh;
  background: url('${heroBg}') no-repeat center center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Hero;
