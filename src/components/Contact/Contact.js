//CONTACT COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import ContactOverlay from "./ContactOverlay";
import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";
import ContactWrap from "./ContactWrap";
import Footer from "./Footer";

//CONTACT
const Contact = () => (
  <section css={styles} className="contact" id="contact">
    <ContactOverlay />
    <Info infoTitle="Entre em Contato" />
    <Container>
      <ContactDesc />
      <ContactForm />
    </Container>
    <ContactWrap />
    <Footer />
  </section>
);

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0 0 0;
  position: relative;
  .info {
    position: relative;
    color: #fff;
  }
  .container {
    position: relative;
    padding: 80px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export default Contact;
