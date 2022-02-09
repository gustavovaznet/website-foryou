//BOTTOM NAV LINK COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//BOTTOM NAV LINK
const BottomNavLink = ({ handleActive, type, activeLink, setHidden, setDescription }) => (
  <a css={styles} href="#/" className={type === activeLink ? 'active' : ''} onClick={() => {handleActive(type); setHidden(true)}}>
    { setDescription }
  </a>
);

//STYLES
const styles = css`
  text-decoration: none;
  padding: 30px 0;
  color: #fff;
  font-weight: 600;
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: 100%;
      border: 2px solid #f26d21;
    }
  }
  a {
    font-weight: 800;
  }
`;

export default BottomNavLink;
