//DESIGN COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import DesignCard from "./DesignCard";
import icon from "../../assets/service-01.png";
import iconTwo from "../../assets/service-02.png";
import iconThree from "../../assets/service-03.png";

//DESIGN
const Design = () => (
  <div css={styles} className="design">
    <h1>Vantagens do Nosso App</h1>
    <Container>
      <DesignCard cardImg={icon} cardTitle="Fácil de Usar" cardDescription="Nosso app é extremamente fácil de usar, com uma interface dinâmica e ao mesmo tempo muito moderna."/>
      <DesignCard cardImg={iconTwo} cardTitle="Design Moderno" cardDescription="Um app moderno e com diversas funções, tudo muito bem preparado especialmente para você."/>
      <DesignCard cardImg={iconThree} cardTitle="Fácil de Customizar" cardDescription="Um app extremamente dinâmico e customizável para permitir você deixar ele com a sua cara."/>
    </Container>
  </div>
);

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    display: flex;
    justify-content: space-between;
  }
  h1{
    color: #515656;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
`;

export default Design;
