//NAVLOGO COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import logoImg from '../../assets/logo.svg';

//NAVLOGO
const NavLogo = () => <img src={logoImg} alt="Logo" css={styles} />;

//STYLES
const styles = css`
  width: 200px;
`;

export default NavLogo;
