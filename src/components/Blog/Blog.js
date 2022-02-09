//BLOG COMPONENT

//IMPORTING
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import BlogCard from "./BlogCard";
import BlogOneBg from "../../assets/blog-01.png";
import BlogTwoBg from "../../assets/blog-02.png";
import BlogThreeBg from "../../assets/blog-03.png";

//BLOG
const Blog = () => (
  <section css={styles} className="blog">
    <h1>Nosso Blog</h1>
    <Container>
      <BlogCard blogImg={BlogOneBg} blogTitle="Como Preparar Seu Home Office" blogUser="Admin" blogDate="25 de Julho" blogContent="A grande dúvida de todos na hora de montar o seu ambiente home office em casa..." />
      <BlogCard blogImg={BlogTwoBg} blogTitle="Estudando Sozinho" blogUser="Admin" blogDate="10 de Agosto" blogContent="Traçar um planejamento que te possibilite e te dê animo de alcançar seus objetivos estudando sozinho..." />
      <BlogCard blogImg={BlogThreeBg} blogTitle="Alcançando a Fluência" blogUser="Admin" blogDate="25 de Novembro" blogContent="Você é fluente em todos os idiomas que fala? Para alcançar de fato a fluência plena nos..." />
    </Container>
  </section>
);

//STYLES
const styles = css`
  width: 100%;
  padding: 120px 0;
  background: #f2fefe;
  .container {
    display: flex;
    justify-content: space-between;
  }
  h1{
    color: #515656;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export default Blog;
