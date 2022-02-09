//BUTTON COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//BUTTON
const Button = ({ btnTitle }) => (
  <a css={styles} className="btn" href="#/">
    {btnTitle}
  </a>
);

//STYLES
const styles = css`
  padding: 11px 34px;
  color: #fff;
  background: #f26d21;
  border-radius: 50px;
  transition: background 600ms ease-in-out, color 600ms ease-in-out;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  margin: 24px 0 0 0;
  &:hover {
    background: #2f83e8;
    color: #fff;
  }
`;

export default Button;
