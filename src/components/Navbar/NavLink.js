//NAVLINK COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//LINK
const Link = ({ linkTitle }) => (
  <a css={styles} href="#/">
    {linkTitle}
  </a>
);

//STYLES
const styles = css`
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1rem;
  display: block;
  color: #fff;
  padding: 30px 12px;
  position: relative;
  border-top: 3px solid transparent;
  &:hover{
    color: #f26d21;
    transition: 0.2s;
  }
`;

export default Link;
