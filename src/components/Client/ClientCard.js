//CLIENT CARD COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//CLIENT CARD
const ClientCard = ({ clientImg, clientName, clientTestimonial }) => (
  <div css={styles} className="clientCard">
    <img src={clientImg} alt="client" />
    <h2>{clientName}</h2>
    <p>{clientTestimonial}</p>
  </div>
);

//STYLES
const styles = css`
  color: #fff;
  width: 100%;
  h2 {
    margin: 14px 0 8px 0;
  }
  p {
    font-size: 15px;
  }
`;

export default ClientCard;
