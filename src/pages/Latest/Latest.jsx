import { AnimatedSection } from "../../components/AnimatedSection";
import { useState } from "react";
import { latestData } from "../../data/latestData";
import "./Latest.css";
import Header from "../../components/Header/Header";

const categories = ["All", "Events", "Case Studies", "Updates", "Perspective"];
const chapters = ["All", "DI UK", "DI Ireland", "DI Australia"];

export default function Latest() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedChapter, setSelectedChapter] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleCategoryChange = (category) => {
    if (category !== selectedCategory) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedCategory(category);
        setAnimationKey((prev) => prev + 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const handleChapterChange = (chapter) => {
    if (chapter !== selectedChapter) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedChapter(chapter);
        setAnimationKey((prev) => prev + 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const filteredData = latestData.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    const chapterMatch =
      selectedChapter === "All" || item.chapter === selectedChapter;
    return categoryMatch && chapterMatch;
  });

  return (
    <div className="latest-container-section" style={{ marginTop: "0rem" }}>
      <div className="main-content">
        <Header />

        <div className="content-grid">
          <div className="sidebar">
            <div className="filter-section">
              <h2 className="filter-title">Categories</h2>
              <div className="filter-chips">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`chip ${
                      selectedCategory === category ? "chip-active" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h2 className="filter-title">View by Chapter</h2>
              <div className="filter-chips">
                {chapters.map((chapter) => (
                  <button
                    key={chapter}
                    onClick={() => handleChapterChange(chapter)}
                    className={`chip ${
                      selectedChapter === chapter ? "chip-active" : ""
                    }`}
                  >
                    {chapter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="content-area">
            <div
              key={animationKey}
              className={`content-list ${
                isAnimating ? "content-fade-out" : "content-fade-in"
              }`}
            >
              {filteredData.length === 0 ? (
                <div className="no-content">
                  <p>No content found for the selected filters.</p>
                </div>
              ) : (
                filteredData.map((item, index) => (
                  <AnimatedSection animation="slideUp" delay={200}>
                    <div
                      key={`${item.id}-${animationKey}`}
                      className="content-card"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="card-image-container">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          style={{ width: "400px" }}
                          className="card-image"
                        />
                      </div>

                      {/* Content */}
                      <div className="card-content">
                        {/* Tags */}
                        <div className="card-tags">
                          <span className="tag">{item.category}</span>
                          <span className="tag">{item.chapter}</span>
                          <span className="date-time">
                            {item.date}, {item.time}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="card-title">{item.title}</h3>

                        {/* Description */}
                        <p className="card-description">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
