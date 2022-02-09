//CONTAINER COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//CONTAINER
const Container = ({ children, hidden }) => {
  //RETURN
  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " container"}>
      {children}
    </div>
  );
};

//STYLES
const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export default Container;
