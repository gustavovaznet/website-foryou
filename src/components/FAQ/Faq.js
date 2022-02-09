//FAQ COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import Row from "./Row";

//FAQ
const Faq = () => {
  //RETURN
  return (
    <section css={styles} className="faq">
      <Info infoTitle="Dúvidas Frequentes" />
      <Container>
        <Row rowTitle="O app é somente para aulas de Inglês e Espanhol?" rowDescription="Não, você irá encontrar tutores que ensinam idiomas de todo o mundo." />
        <Row rowTitle="Consigo fazer uma aula experimental?" rowDescription="Sim, ao criar a sua conta no app você automaticamente ganhará uma aula grátis de 30 minutos." />
        <Row rowTitle="Posso começar a aprenser algum idioma do zero?" rowDescription="Sim, nosso app é feito tanto para quem quer aprender um idioma do zero quanto para quem quer melhorar suas habilidades." />
        <Row rowTitle="Quais são as formas de pagamento?" rowDescription="Possuímos várias formas de pagamento, dentre as mais populares estão cartão de crédito, pix e boleto bancário." />
      </Container>
    </section>
  );
};

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    max-width: 800px;
    padding: 60px 0;
  }
`;

export default Faq;
