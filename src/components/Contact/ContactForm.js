//CONTACT FORM COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

//CONTACT FORM
const ContactForm = () => (
  <div css={styles} className="contactForm">
    <div>
      <input type="text" placeholder="Seu nome" />
      <input type="email" placeholder="Seu email" />
    </div>
    <input type="text" placeholder="Assunto" />
    <textarea placeholder="Sua mensagem..." cols="30" rows="6"></textarea>
    <Button btnTitle="Enviar" />
  </div>
);

//STYLES
const styles = css`
  width: 100%;
  max-width: 730px;
  div {
    display: flex;
    justify-content: space-between;
    input {
      width: 48%;
    }
  }
  input,
  textarea {
    margin-bottom: 24px;
    padding: 12px 20px;
    width: 100%;
    border: none;
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    border-radius: 4px;
    resize: none;
    color: #555;
    &::placeholder {
      color: #555;
    }
  }
`;

export default ContactForm;
