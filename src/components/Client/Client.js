//CLIENT COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Slider from "infinite-react-carousel";
import Overlay from "./Overlay";
import Info from "../GlobalComponents/Info";
import Container from "../GlobalComponents/Container";
import ClientCard from "./ClientCard";
import ClientBg from "../../assets/bg-client.png";
import ClientOneBg from "../../assets/client-01.png";
import ClientTwoBg from "../../assets/client-02.png";
import ClientThreeBg from "../../assets/client-03.png";
import ClientFourBg from "../../assets/client-04.png";
import ClientFiveBg from "../../assets/client-05.png";
import ClientSixBg from "../../assets/client-06.png";
import LeftArrowIcon from "../../assets/arrow-left.png";
import RightArrowIcon from "../../assets/arrow-right.png";

//CLIENT
const Client = ({ clientImg, clientName }) => {
  //RETURN
  return (
    <div css={styles} className="client">
      <Overlay />
      <Info infoTitle="Depoimento dos Usuários" />
      <Container>
        <Slider autoplay autoplaySpeed={2000}>
          <ClientCard clientImg={ClientOneBg} clientName="Marco Aurélio" clientTestimonial="O melhor app para aprender um idioma!" />
          <ClientCard clientImg={ClientTwoBg} clientName="Mariana Duarte" clientTestimonial="Sensacional! Sem palavras para descrever o quão bom esse app é..." />
          <ClientCard clientImg={ClientThreeBg} clientName="Luzia Santana" clientTestimonial="Fantastico!!!" />
          <ClientCard clientImg={ClientFourBg} clientName="Nayara Oliveira" clientTestimonial="Graças a esse app melhorei muito o meu inglês e agora pretendo aprender francês por aqui." />
          <ClientCard clientImg={ClientFiveBg} clientName="Mario Fernandes" clientTestimonial="App nota 1000!!!" />
          <ClientCard clientImg={ClientSixBg} clientName="Lucas Souza" clientTestimonial="Muito bom mesmo, recomendo para qualquer um que goste de idiomas." />
        </Slider>
      </Container>
    </div>
  );
};

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0;
  position: relative;
  background: url('${ClientBg}') no-repeat center/cover;
  background-attachment: fixed;
  text-align: center;
  .info {
    color: #fff;
    position: relative;
  }
  .container {
    max-width: 800px;
    padding: 80px 0 0 0;
    .carousel-initialized,
    .carousel-initialized.scrolling .carousel-track {
      height: 340px;
    }

    .carousel-arrow {
      width: 50%;
    }

    .carousel-arrow.block.carousel-next {
      color: #fff;
      position: absolute;
      &::before {
        background: url('${RightArrowIcon}') no-repeat center/cover;
        position: absolute;
        bottom: 4px;
        left: 26px;
        transform: translateX(-50%);
        width: 32px;
        height: 32px;
      }
    }
    .carousel-arrow.block.carousel-prev {
      color: #fff;
      position: absolute;
      &::before {
        background: url('${LeftArrowIcon}') no-repeat center/cover;
        position: absolute;
        bottom: 4px;
        right: 26px;
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export default Client;
