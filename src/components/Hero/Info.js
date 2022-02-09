//INFO COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

//INFO
const Info = () => (
  <div css={styles} className="info">
    <h1>
      Nunca Foi Tão Fácil e Prático <br /> Aprender Idiomas
    </h1>
    <p>
      Com o App <b>foryou</b> você pode se conectar e se comunicar com tutores nativos de qualquer idioma que desejar,
      além disso você conta também com acesso a nossos materiais online exclusivos. Clique no botão abaixo e confira!
    </p>
    <Button btnTitle="Saiba Mais" />
  </div>
);

//STYLES
const styles = css`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #fff;
    line-height: 1.2;
  }
  p {
    margin: 14px 0;
    color: #fff;
    font-size: 16px;
  }
`;

export default Info;
