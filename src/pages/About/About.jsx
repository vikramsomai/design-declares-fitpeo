import { useState, useEffect, useRef } from "react";
import "./about.css";
import { teamMembers } from "../../data/teamMembers";
function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
} = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasIntersected]);

  return {
    ref,
    isIntersecting: triggerOnce ? hasIntersected : isIntersecting,
  };
}

function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
}) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const getAnimationClasses = () => {
    const baseClasses = "transition-base";

    if (!isIntersecting) {
      switch (animation) {
        case "slideUp":
          return `${baseClasses} slide-up-hidden`;
        case "slideLeft":
          return `${baseClasses} slide-left-hidden`;
        case "slideRight":
          return `${baseClasses} slide-right-hidden`;
        case "scaleIn":
          return `${baseClasses} scale-hidden`;
        default:
          return `${baseClasses} fade-hidden`;
      }
    }

    switch (animation) {
      case "slideUp":
        return `${baseClasses} slide-up-visible`;
      case "slideLeft":
        return `${baseClasses} slide-left-visible`;
      case "slideRight":
        return `${baseClasses} slide-right-visible`;
      case "scaleIn":
        return `${baseClasses} scale-visible`;
      default:
        return `${baseClasses} fade-visible`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Staggered List Component
function StaggeredList({ children, className = "", staggerDelay = 100 }) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-30px",
  });

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`stagger-item ${
            isIntersecting ? "stagger-visible" : "stagger-hidden"
          }`}
          style={{
            transitionDelay: isIntersecting
              ? `${index * staggerDelay}ms`
              : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// Main About Page Component
export default function About() {
  const featureList1 = [
    "Design Declares is free.",
    "'Design' to us means industrial, digital, graphic, communication and service design.",
    "Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.",
    "Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.",
  ];

  const featureList2 = [
    "We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.",
    "As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.",
  ];

  const partnerLogos1 = [
    <div key="0" className="partner-logo">
      <div className="partner-logo-icon"></div>
      <span className="partner-logo-text">design for life</span>
    </div>,
    <div key="1">
      <span className="partner-logo-large">morrama</span>
    </div>,
    <div key="2" className="partner-logo-badge">
      <span>thomas.matthews</span>
      <br />
      <span>communication design</span>
    </div>,
  ];

  const partnerLogos2 = [
    <div key="3">
      <span className="partner-logo-large">Driftime®</span>
    </div>,
    <div key="4">
      <span className="partner-logo-medium">studiowood™</span>
    </div>,
    <div key="5" className="partner-logo-badge-lg">
      <span>URGE</span>
    </div>,
  ];

  return (
    <div className="page-container">
      {/* Geometric Grid Pattern */}
      <div className="background-pattern">
        <svg
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="diagonal"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 120 L 120 0"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
              <path
                d="M 0 0 L 120 120"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <section className="content-section">
        <div className="container-about">
          <div className="grid grid-2">
            <AnimatedSection animation="slideRight" delay={400}>
              <div>
                <h2 className="heading-lg">About Design Declares</h2>
              </div>
            </AnimatedSection>

            <div className="space-y">
              <AnimatedSection animation="slideUp" delay={600}>
                <h3 className="heading-xl">
                  Climate breakdown has begun. And business as usual is not an
                  option.
                </h3>
              </AnimatedSection>

              <AnimatedSection animation="fadeIn" delay={800}>
                <p className="text-xl">
                  That's why we started Design Declares.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeIn" delay={1000}>
                <p className="text-base">
                  Inspired by a global declaration movement sounding the alarm
                  in industries everywhere, we're an industry-recognised
                  initiative representing the fears, hopes and commitment to
                  action of a growing group of designers, design studios,
                  agencies and institutions.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="scaleIn" delay={1200}>
                <button className="btn">See Global Declarations</button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="content-section">
        <div className="container-about">
          <div className="grid grid-2">
            <AnimatedSection animation="slideRight">
              <div className="space-y">
                <p className="text-base">
                  Together, we sit at the very beginning of the creative
                  process. The tools we use and the choices we make can
                  influence society's behaviour, change economies and challenge
                  everything that's come before.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft" delay={200}>
              <div className="space-y">
                <p className="text-base">
                  Because design, whether it's a product, a piece of packaging
                  or an exhibition space, has impact. It's up to us whether that
                  impact is harmful or healing.
                </p>

                <p className="text-base">
                  We're glad you're here. Let's get to work.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            animation="scaleIn"
            delay={400}
            className="mt-12 text-center"
          >
            <button className="btn">Declare Emergency Now</button>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section">
        <div className="container-about">
          <div className="grid grid-2">
            <div className="space-y">
              <StaggeredList staggerDelay={150}>
                {featureList1.map((text, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-bullet"></span>
                    <span className="text-base">{text}</span>
                  </div>
                ))}
              </StaggeredList>
            </div>

            <div className="space-y">
              <StaggeredList staggerDelay={150}>
                {featureList2.map((text, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-bullet"></span>
                    <span className="text-base">{text}</span>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnerships Section */}
      <section className="content-section">
        <div className="container-about">
          <div className="grid grid-2">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="heading-lg">Global Partnerships</h2>
              </div>
            </AnimatedSection>

            <div className="space-y">
              <AnimatedSection animation="slideUp" delay={200}>
                <p className="text-xl">
                  We invite our colleagues from across the design industry to
                  join us in declaring an emergency, and starting to take urgent
                  action.*
                </p>
              </AnimatedSection>

              <div className="space-y">
                <AnimatedSection animation="fadeIn" delay={400}>
                  <p className="text-base">
                    The acts of emergency above are the first (big) steps. As we
                    all commit to this work, we must also commit to doing it in
                    a way that is genuinely inclusive and equitable.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={600}>
                  <p className="text-base">
                    It doesn't matter where on the journey you are. What matters
                    is that you're here, and you're ready to do the work.
                    Because there is no design on a dead planet.
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="scaleIn" delay={800}>
                <button className="btn">Get in Touch</button>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={1000}>
                <div className="pt-8">
                  <p className="text-sm mb-12">
                    *We are actively seeking partnerships to expand Design
                    Declares around the world. If that sounds like something
                    you're interested in, please get in touch.
                  </p>
                  <p className="text-sm mb-12">
                    Join our list of global partners...
                  </p>
                  <div>
                    <span className="link">UK</span>
                    <span className="link">Ireland</span>
                    <span className="link">Brazil</span>
                    <span className="link">Australia</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container-about">
          <div className="grid grid-2">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="heading-lg">
                  The Designers Behind Design Declares UK
                </h2>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection animation="fadeIn" delay={200}>
                <p className="text-base mb-12">
                  Inspired by the global emergency declaration movement
                  demanding accountability and action across industries, Design
                  Declares is the initiative of a multidisciplinary group of
                  design professionals and agencies who all believe in the power
                  of design to change things.
                </p>
              </AnimatedSection>

              <div className="partner-grid">
                <div className="partner-column">
                  <StaggeredList staggerDelay={200}>
                    {partnerLogos1}
                  </StaggeredList>
                </div>

                <div className="partner-column">
                  <StaggeredList staggerDelay={200}>
                    {partnerLogos2}
                  </StaggeredList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steering Group Section */}
      <section className="content-section">
        <div className="container-about">
          <div className="grid grid-2">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="heading-lg">Steering Group</h2>
              </div>
            </AnimatedSection>

            <div className="grid-team">
              <StaggeredList staggerDelay={150}>
                {teamMembers.map((person, index) => (
                  <div key={index} className="team-member">
                    <div className="team-photo">
                      <img
                        src={person.image || "/placeholder.svg"}
                        alt={person.name}
                      />
                    </div>
                    <h3 className="team-name">{person.name}</h3>
                    <p className="team-company">{person.company}</p>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </div>
        </div>
      </section>

      {/* Orange accent at bottom */}
      <AnimatedSection animation="slideUp" className="orange-accent" />
    </div>
  );
}
