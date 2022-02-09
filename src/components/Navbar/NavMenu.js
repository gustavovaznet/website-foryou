//NAV MENU COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
//LINK
import Link from "./NavLink";

//NAVMENU
const NavMenu = () => (
  <div css={styles} className="menu">
    <Link linkTitle="Home" />
    <Link linkTitle="Info" />
    <Link linkTitle="App" />
    <Link linkTitle="Planos" />
    <Link linkTitle="FAQ" />
    <Link linkTitle="Clientes" />
    <Link linkTitle="Blog" />
    <Link linkTitle="Contato" />
  </div>
);

//STYLES
const styles = css`
  display: flex;
`;

export default NavMenu;
