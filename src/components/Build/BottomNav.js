//BOTTOM NAV COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import BottomNavLink from "./BottomNavLink";

//BOTTOM NAV
const BottomNav = ({ handleActive, activeLink, setHidden }) => {
  //RETURN
  return (
    <div css={styles} className="bottomNav">
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="first"
        setHidden={setHidden}
        setDescription="Para Trabalhar"
      />
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="second"
        setHidden={setHidden}
        setDescription="Para Estudar"
      />
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="third"
        setHidden={setHidden}
        setDescription="Para Customizar"
      />
      <BottomNavLink
        handleActive={handleActive}
        activeLink={activeLink}
        type="fourth"
        setHidden={setHidden}
        setDescription="Design Incrível"
      />
    </div>
  );
};

//STYLES
const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f3f3f3;
`;

export default BottomNav;
