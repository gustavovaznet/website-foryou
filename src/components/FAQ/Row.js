//ROW COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import RowHeading from "./RowHeading";
import RowContent from "./RowContent";

//ROW
const Row = ({ rowTitle, rowDescription }) => {
  const [isOpened, setIsOpened] = useState(false);
  //RETURN
  return (
    <div css={styles} className="row">
      <RowHeading
        rowTitle={rowTitle}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
      <RowContent 
        isOpened={isOpened} 
        rowDescription={rowDescription}
      />
    </div>
  );
};

//STYLES
const styles = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export default Row;
