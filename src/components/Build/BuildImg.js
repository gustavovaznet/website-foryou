//BUILIMG COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//BUILDIMG
const BuildImg = ({img, imgTwo}) => (
  <div css={styles} className="buildImg">
    <img src={img} alt="screen" />
    <img src={imgTwo} alt="screen" />
  </div>
);

//STYLES
const styles = css`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  img{
    &:first-of-type{
      transform: translateY(-40px);
    }
  }
`;

export default BuildImg;
