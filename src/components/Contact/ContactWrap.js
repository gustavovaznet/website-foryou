//CONTACT WRAP COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import playStoreImg from '../../assets/flag-01.png';
import appStoreImg from '../../assets/flag-02.png';

//CONTACT WRAP
const ContactWrap = () => (
  <div css={styles} className="contactWrap">
    <div className="desc">
      <p>
        O melhor app para aprender/ensinar idiomas. Inglês, espanhol, francês...etc, não importa qual idioma, você
        poderá aprender ou ensinar qualquer idioma que quiser. Baixe o nosso app e comece praticar já.
      </p>
      <div className="flags">
        <img src={playStoreImg} alt="PlayStore" className="play-store" />
        <img src={appStoreImg} alt="AppStore" className="app-store" />
      </div>
    </div>
    <div className="socialIcons">
      <div className="circle">
        <i className="fab fa-facebook-f"></i>
      </div>
      <div className="circle">
        <i className="fab fa-instagram"></i>
      </div>
      <div className="circle">
        <i className="fab fa-twitter"></i>
      </div>
      <div className="circle">
        <i className="fab fa-google-plus-g"></i>
      </div>
      <div className="circle">
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
  </div>
);

//STYLES
const styles = css`
  width: 100%;
  max-width: 1140px;
  padding: 60px 0;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .desc {
    width: 100%;
    max-width: 500px;
    color: #fff;
    p {
      font-size: 15px;
      line-height: 1.8;
    }
  }
  .flags{
    display: flex;
    margin-top: 20px;
    cursor: pointer;
  }
  .play-store{
    margin-right: 20px;
    width: 120px;
  }
  .app-store{
    width: 120px;
  }
  .socialIcons {
    display: flex;
    align-items: center;
    .circle {
      background: #f26d21;
      cursor: pointer;
      width: 35px;
      height: 35px;
      border-radius: 50px;
      margin-left: 10px;
      display: flex;
      transition: background 400ms ease-in-out;
      &:hover {
        background: #fff;
        i {
          color: #2f83e8;
        }
      }
      i {
        transition: color 400ms ease-in-out;
        margin: auto;
        color: #fff;
      }
    }
  }
`;

export default ContactWrap;
