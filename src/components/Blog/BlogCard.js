//BLOGCARD COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from '../GlobalComponents/Button';

//BLOG CARD
const BlogCard = ({ blogImg, blogTitle, blogUser, blogDate, blogContent }) => (
  <div css={styles} className="blogCard">
    <img src={blogImg} alt="blog" />
    <div className="desc">
      <h3>{blogTitle}</h3>
      <div className="permits">
        <a href="#/">
          <i className="far fa-user"></i>{blogUser}
        </a>
        <a href="#/">
          <i className="far fa-calendar"></i>{blogDate}
        </a>
      </div>
      <p>{blogContent}</p>
      <Button btnTitle="Leia Mais" />
    </div>
  </div>
);

//STYLES
const styles = css`
  width: 100%;
  max-width: 360px;
  background: #fff;
  box-shadow: 10px 15px 50px -10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  .desc {
    padding: 38px 24px;
    color: #333;
    h3 {
      font-size: 19px;
      font-weight: 500;
    }
    .permits {
      padding: 8px 0 32px 0;
      a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
        font-weight: 400;
        margin-right: 24px;
        transition: color 300ms ease-in-out;
        &:hover {
          color: #000;
        }
        i {
          margin-right: 8px;
        }
      }
    }
    p {
      font-size: 15px;
      color: #515656;
      line-height: 1.8;
    }
  }
`;

export default BlogCard;
