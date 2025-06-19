import { AnimatedSection } from "../../components/AnimatedSection";
import { useParams } from "react-router-dom";
import { latestData } from "../../data/latestData";
import { slugify } from "../../utils/slugify";
import "./Article.css";
import Header from "../../components/Header/Header";

export default function Article() {
  const { slug } = useParams();
  const article = latestData.find((item) => slugify(item.title) === slug);

  if (!article) return <h2>Article not found</h2>;

  return (
    <div className="article-container">
      <Header />

      <main className="main-content-article">
        <div className="article-header">
          <AnimatedSection animation="slideUp" delay={200}>
            <h1 className="article-title">{article.title}</h1>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={200}>
            <div className="article-meta">
              <span className="chip">{article.category}</span>
              <span className="chip">{article.chapter}</span>
              <span className="date">
                {article.date} {article.time}
              </span>
              <button className="share-btn">Share Article</button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="slideUp" delay={200}>
          <div className="hero-image-container">
            <img
              src={article.image}
              alt={article.title}
              className="hero-image"
            />
          </div>
        </AnimatedSection>

        <div className="article-content">
          <AnimatedSection animation="slideUp" delay={300}>
            <h2 className="section-title-about">{article.description}</h2>
          </AnimatedSection>

          {/* Dynamically render the content blocks */}
          {article.content?.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <AnimatedSection
                    animation="slideUp"
                    delay={300 + index * 50}
                    key={index}
                  >
                    <h3 className="content-heading">{block.value}</h3>
                  </AnimatedSection>
                );

              case "text":
                return (
                  <AnimatedSection
                    animation="slideUp"
                    delay={300 + index * 50}
                    key={index}
                  >
                    <p className="content-text">{block.value}</p>
                  </AnimatedSection>
                );

              case "image":
                return (
                  <AnimatedSection
                    animation="slideUp"
                    delay={300 + index * 50}
                    key={index}
                  >
                    <div className="hero-image-container">
                      <img
                        src={block.value}
                        alt={block.caption || "article"}
                        className="hero-image"
                      />
                      {block.caption && (
                        <p className="image-caption">{block.caption}</p>
                      )}
                    </div>
                  </AnimatedSection>
                );

              case "quote":
                return (
                  <AnimatedSection
                    animation="slideUp"
                    delay={300 + index * 50}
                    key={index}
                  >
                    <blockquote className="content-quote">
                      “{block.value}”
                    </blockquote>
                  </AnimatedSection>
                );

              case "list":
                return (
                  <AnimatedSection
                    animation="slideUp"
                    delay={300 + index * 50}
                    key={index}
                  >
                    <ul className="article-content-list">
                      {block.value.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </AnimatedSection>
                );

              default:
                return null;
            }
          })}

          <div className="article-footer">
            <button className="share-btn">Share Article</button>
          </div>
        </div>
      </main>
    </div>
  );
}
