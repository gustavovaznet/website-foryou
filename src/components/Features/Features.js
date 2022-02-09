//FEATURES COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Info from "../GlobalComponents/Info";
import DesignCard from "../Design/DesignCard";
import FeatureIcon from "../../assets/feature-01.png";
import FeatureIconTwo from "../../assets/feature-02.png";
import FeatureIconThree from "../../assets/feature-03.png";
import FeatureIconFour from "../../assets/feature-04.png";
import FeatureIconFive from "../../assets/feature-05.png";
import FeatureIconSix from "../../assets/feature-06.png";

//FEATURES
const Features = () => (
  <section css={styles} className="features">
    <Info infoTitle="Recursos Especiais" infoSubTitle="Confira alguns recursos especiais que só o nosso app oferece:" />
    <Container>
      <DesignCard cardImg={FeatureIcon} cardTitle="Material Exclusivo" />
      <DesignCard cardImg={FeatureIconTwo} cardTitle="Recursos Ilimitados" />
      <DesignCard cardImg={FeatureIconThree} cardTitle="Suporte Via Chat" />
      <DesignCard cardImg={FeatureIconFour} cardTitle="Acesso do Mundo Todo" />
      <DesignCard cardImg={FeatureIconFive} cardTitle="100% Customizável" />
      <DesignCard cardImg={FeatureIconSix} cardTitle="100% Responsivo" />
    </Container>
  </section>
);

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    padding: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .designCard {
      padding: 40px 36px;
    }
  }
`;

export default Features;
