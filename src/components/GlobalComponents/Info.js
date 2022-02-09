//INFO COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//INFO
const Info = ({ infoTitle, infoSubTitle }) => (
  <div css={styles} className="info">
    <h2>{infoTitle}</h2>
    <p>
      {infoSubTitle}
    </p>
  </div>
);

//STYLES
const styles = css`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: #515656;
  h2 {
    font-size: 28px;
    font-weight: 600;
    position: relative;
  }
  p {
    font-size: 14px;
    line-height: 1.8;
    margin: 14px 0 0 0;
  }
`;

export default Info;
