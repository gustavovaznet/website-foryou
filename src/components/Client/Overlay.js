//OVERLAY COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//OVERLAY
const Overlay = () => <div css={styles} className="overlay"></div>;

//STYLES
const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.9;
  background: #53adce;
`;

export default Overlay;
