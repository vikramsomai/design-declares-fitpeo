// pages/Latest/ArticlePage.jsx
import { useParams } from "react-router-dom";
import { latestData } from "../../data/latestData";
import { slugify } from "../../utils/slugify";
import "./Article.css";
import Header from "../../components/Header/Header";

export default function Article() {
  const { slug } = useParams();

  const article = latestData.find((item) => slugify(item.title) === slug);

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className="article-container">
      <header className="header">
        <Header />
      </header>

      {/* Main Content */}
      <main className="main-content-article">
        <div className="article-header">
          <h1 className="article-title">{article.title}</h1>

          <div className="article-meta">
            <span className="badge">{article.category}</span>
            <span className="badge">{article.chapter}</span>
            <span className="date">
              {article.date} {article.time}
            </span>
            <button className="share-btn">Share Article</button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hero-section">
          <div className="hero-image-container">
            <img
              src={article.image}
              alt="Books with sustainability text overlay"
              className="hero-image"
            />
          </div>
        </div>

        <div className="article-content">
          <div className="content-section">
            <h2 className="section-title">{article.description}</h2>

            <div className="content-text">
              <p>
                This case study explores the integration of the Design Declares
                Ireland initiative into the curriculum of the BA Graphic Design
                programme at the National College of Art and Design (NCAD),
                Dublin. It aims to prepare students not only to become competent
                designers but also to become ethically aware practitioners.
              </p>

              <p>
                The <em>Design Practices</em> module is delivered annually to
                second-year Graphic Design students within the School of Design.
                The module introduces the historical, theoretical, cultural, and
                professional contexts of design practice and aims to enable
                students to apply creative methodologies for the documentation
                and presentation of work.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h3 className="subsection-title">
              Kicking off the module with Creative Activism
            </h3>

            <div className="content-text">
              <p>
                The integration of Design Declares Eight Acts of Emergency
                framework into NCAD's Design Practices module marks an
                ambitious, exploratory first step toward a more sustainable and
                responsive design curriculum. As we continue to iterate and
                develop the module, our focus remains on equipping students with
                the tools, values, and frameworks necessary to navigate and
                shape a complex, interdependent world.
              </p>

              <p>
                By embedding sustainability not as a siloed topic but as a
                foundational mindset, we hope our evolving model offers a useful
                case study for others seeking to integrate sustainability
                meaningfully within creative education; flexible, reflective,
                and open to ongoing transformation.
              </p>

              <ul className="content-list">
                <li>
                  Collect feedback, reflect and adapt iterations of the
                  Educators Toolkit.
                </li>
              </ul>
            </div>
          </div>

          <div className="article-footer">
            <button className="share-btn">Share Article</button>
          </div>
        </div>
      </main>
    </div>
  );
}
