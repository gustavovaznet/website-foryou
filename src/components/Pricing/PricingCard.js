//PRICING CARD COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

//PRICING CARD
const PricingCard = ({ pricingTitle, pricingTag, pricingOne, pricingTwo, pricingThree }) => (
  <div css={styles} className="pricingCard">
    <div className="cardOverlay">
      <i className="fas fa-crown"></i>
    </div>
    <h2>{pricingTitle}</h2>
    <div className="pricingMenu">
      <p>
        <span>{pricingTag}</span>/Month
      </p>
      <p>{pricingOne}</p>
      <p>{pricingTwo}</p>
      <p>{pricingThree}</p>
    </div>
    <Button btnTitle="Saiba Mais" />
  </div>
);

//STYLES
const styles = css`
  background: #fff;
  width: 100%;
  max-width: 350px;
  text-align: center;
  padding: 46px;
  border-radius: 4px;
  position: relative;
  border: 1px solid transparent;
  .cardOverlay {
    display: none;
  }
  &:nth-child(2) {
    transform: scale(1.1);
    position: relative;
    .cardOverlay {
      position: absolute;
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 96px;
      border-radius: 0 0 50% 50%;
      height: 30px;
      background: #55a2be;
      color: #fff;
      display: flex;
      justify-content: center;
      i {
        padding: 6px 0 0 0;
        font-size: 12px;
      }
    }
  }
  h2 {
    color: #515656;
    font-weight: 500;
    padding-bottom: 20px;
  }
  .pricingMenu {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 30px 0;
    p {
      margin: 12px 0;
      font-size: 15px;
      color: #515656;
      span {
        font-weight: 600;
      }
    }
  }
`;

export default PricingCard;
