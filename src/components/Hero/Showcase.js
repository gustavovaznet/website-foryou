//SHOWCASE COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import mobileBg from "../../assets/mobile.png";

//SHOWCASE
const Showcase = ({img, previousBg, nextBg}) => (
  <div css={styles} className="showcase">
    <div className="imgWrap">
      <img src={img} alt='phone' />
    </div>
    <div className="controls">
      <i onClick={previousBg} className="fas fa-arrow-left fa-lg"></i>
      <span>/</span>
      <i onClick={nextBg} className="fas fa-arrow-right fa-lg"></i>
    </div>
  </div>
);

//STYLES
const styles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  max-width: 300px;
  .imgWrap {
    display: inline-block;
    padding: 56px 22px;
    align-self: flex-end;
    background: url('${mobileBg}') no-repeat scroll center center/auto 100%;
    img {
      display: block;
    }
  }
  .controls {
    padding: 30px 0 0 0;
    span {
      color: #fff;
      margin: 0 20px;
    }
    i {
      color: #fff;
      cursor: pointer;
    }
    i:hover{
      color: #f26d21;
      transition: 0.2s;
    }
  }
`;

export default Showcase;
