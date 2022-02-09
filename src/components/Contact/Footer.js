//FOOTER COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//FOOTER
const Footer = () => (
  <div css={styles} className="footer">
    <p>
      foryou app 2021 &copy; Todos os direitos reservados
    </p>
  </div>
);

//STYLES
const styles = css`
  width: 100%;
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
  position: relative;
  p {
    font-size: 15px;
    font-weight: 300;
  }
`;

export default Footer;
