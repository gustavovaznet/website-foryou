//ROW CONTENT COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//ROW CONTENT
const RowContent = ({ isOpened, rowDescription }) => (
  <p css={styles} className={isOpened ? "" : "hidden"}>
    { rowDescription }
  </p>
);

//STYLES
const styles = css`
  padding: 0px 54px;
  font-size: 15px;
  color: #515656;
  height: 100px;
  transition: height 700ms ease-in-out;
  &.hidden {
    height: 0;
  }
`;

export default RowContent;
