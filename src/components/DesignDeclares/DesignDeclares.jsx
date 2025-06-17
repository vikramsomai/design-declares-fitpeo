import { useEffect, useRef, useState } from "react";
import "./DesignDeclares.css"; // Import your CSS styles
import {
  ukSignatories,
  globalSupporters,
} from "../../data/DesignDeclareData.js";

export default function DesignDeclares() {
  const [ukCount, setUkCount] = useState(0);
  const [globalCount, setGlobalCount] = useState(0);
  const [isUkVisible, setIsUkVisible] = useState(false);
  const [isGlobalVisible, setIsGlobalVisible] = useState(false);
  const ukCounterRef = useRef(null);
  const globalCounterRef = useRef(null);

  // Counting animation function
  const animateCount = (start, end, duration, callback) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);

      callback(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Intersection Observer setup
  useEffect(() => {
    const ukObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isUkVisible) {
          setIsUkVisible(true);
          animateCount(0, 513, 2000, setUkCount);
        }
      },
      { threshold: 0.5 }
    );

    const globalObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isGlobalVisible) {
          setIsGlobalVisible(true);
          animateCount(0, 661, 2000, setGlobalCount);
        }
      },
      { threshold: 0.5 }
    );

    if (ukCounterRef.current) ukObserver.observe(ukCounterRef.current);
    if (globalCounterRef.current)
      globalObserver.observe(globalCounterRef.current);

    return () => {
      ukObserver.disconnect();
      globalObserver.disconnect();
    };
  }, [isUkVisible, isGlobalVisible]);

  return (
    <div className="container-declares">
      {/* Main Content */}
      <main className="main">
        <div className="content-wrapper">
          <section className="section">
            <div className="section-header">
              <div ref={ukCounterRef} className="counter">
                #{ukCount}
              </div>
              <div className="section-title">
                <span>Signatories and counting in</span>

                <span className="badge">D! UK</span>
              </div>
            </div>

            <div className="signatories-grid">
              {ukSignatories.map((signatory, index) => (
                <a
                  key={index}
                  href={signatory.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signatory-link"
                >
                  {signatory.name}
                </a>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <div ref={globalCounterRef} className="counter">
                #{globalCount}
              </div>
              <h2 className="section-subtitle">Global Supporters</h2>
            </div>

            <div className="supporters-grid">
              {Object.entries(globalSupporters).map(([country, supporters]) => (
                <div key={country} className="country-group">
                  <h3 className="country-title">{country}</h3>
                  {supporters.map((supporter, index) => (
                    <a
                      key={index}
                      href={supporter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="supporter-link"
                    >
                      {supporter.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
