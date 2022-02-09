//BUILD COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Container from "../GlobalComponents/Container";
import BuildInfo from "./BuildInfo";
import BuildImg from "./BuildImg";
import BottomNav from "./BottomNav";
import ScreenOneImg from "../../assets/screen-01.png";
import ScreenTwoImg from "../../assets/screen-02.png";
import ScreenThreeImg from "../../assets/screen-03.png";
import ScreenFourImg from "../../assets/screen-04.png";
import ScreenSixImg from "../../assets/screen-06.png";

//BUILD
const Build = () => {
  //CONST'S
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("first");

  //HANDLE ACTIVE
  const handleActive = (type) => {
    if (type === "first") {
      setActiveLink("first");
    } else if (type === "second") {
      setActiveLink("second");
    } else if (type === "third") {
      setActiveLink("third");
    } else if (type === "fourth") {
      setActiveLink("fourth");
    }
  };

  //RETURN
  return (
    <div css={styles} className="build">
      <div className="wrapper">
        {activeLink === "first" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo 
              buildTitle="Fácil de Trabalhar"
              buildDescription="Se você é um tutor/professor e domina algum idioma, de maneira fácil e rapida pode 
              começar a trabalhar do conforto da sua casa, nossa plataforma dará todo o suporte necessário para
              você conseguir os seus primeiros alunos."
            />
            <BuildImg img={ScreenOneImg} imgTwo={ScreenTwoImg} />
          </Container>
        )}
        {activeLink === "second" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo 
              buildTitle="Fácil de Usar"
              buildDescription="Quer aprender um novo idioma ou quer melhorar suas habilidades com algum, nosso app vai
              te conectar com os melhores professores, através de aulas online você será capaz de aperfeiçoar as suas habilidades
              e se tornar fluente na lingua que desejar." 
            />
            <BuildImg img={ScreenThreeImg} imgTwo={ScreenFourImg} />
          </Container>
        )}
        {activeLink === "third" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo 
              buildTitle="Fácil de Customizar"
              buildDescription="O nosso app é 100% customizável, desenvolvemos essa função para permitir com que todos os nossos
              clientes possam tranformar seu ambiente do jeito que quiserem, deixando-os mais a vontade com essa opção que você pode usar
              para deixar o app na sua vibe."
            />
            <BuildImg img={ScreenSixImg} imgTwo={ScreenTwoImg} />
          </Container>
        )}
        {activeLink === "fourth" && (
          <Container hidden={hidden} setHidden={setHidden}>
            <BuildInfo 
              buildTitle="Design Moderno"
              buildDescription="Design moderno e arrojado, mesmo assim não perde a simplicidade, a cada tela uma nova e prazerosa
              experiência, esse é o foryou, o próprio nome mesmo fala, ele é feito pra todo mundo, mas em especial foi feito
              foryou!"
            />
            <BuildImg img={ScreenThreeImg} imgTwo={ScreenFourImg} />
          </Container>
        )}
      </div>
      <BottomNav
        handleActive={handleActive}
        activeLink={activeLink}
        setHidden={setHidden}
      />
    </div>
  );
};

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0;
  background: linear-gradient(to bottom, #75cbe7 0%, #138fc2 100%);
  .wrapper {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    overflow: hidden;
    .container {
      padding: 40px 0;
      display: flex;
      justify-content: space-between;
      opacity: 1;
      &.hidden {
        animation: toggle 1600ms ease-in-out;
        transform: translateX(0px);
      }
    }
  }
  @keyframes toggle {
    0% {
      opacity: 0;
      transform: translateX(1150px);
    }
    25% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export default Build;
