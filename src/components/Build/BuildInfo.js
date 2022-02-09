//BUILDINFO COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

//BUILDINFO
const BuildInfo = ({ buildTitle, buildDescription }) => (
  <div css={styles} className="buildInfo">
    <h2>{buildTitle}</h2>
    <p>
      {buildDescription}
    </p>
    <Button btnTitle="Saiba Mais" />
  </div>
);

//STYLES
const styles = css`
  color: #fff;
  width: 100%;
  max-width: 550px;
  h2 {
    font-size: 40px;
    line-height: 1;
  }
  p {
    margin: 30px 0 38px 0;
    font-size: 15px;
    line-height: 1.7;
  }
`;

export default BuildInfo;
