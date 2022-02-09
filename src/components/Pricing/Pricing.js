//PRICING COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";

//PRICING
const Pricing = () => (
  <section css={styles} className="pricing">
    <Info infoTitle="Nossos Planos" />
    <Container>
      <PricingCard pricingTitle="Básico" pricingTag="R$ 99,90" pricingOne="1h Conversação/Mês" pricingTwo="Suporte via Chat" pricingThree="Aulas de Inglês" />
      <PricingCard pricingTitle="Padrão" pricingTag="R$ 199,90" pricingOne="4h Conversação/Mês" pricingTwo="Suporte 24/7" pricingThree="Aulas de Inglês e Espanhol" />
      <PricingCard pricingTitle="Ilimitado" pricingTag="R$ 399,90" pricingOne="8h Conversação/Mês" pricingTwo="Suporte Completo" pricingThree="Aulas para Qualquer Idioma" />
    </Container>
  </section>
);

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #56a9c6;
  .info {
    color: #fff;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
`;

export default Pricing;
