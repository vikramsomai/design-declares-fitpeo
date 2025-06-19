import "./Home.css";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import StepCard from "../../components/StepCard/StepCard";
import { stepsData } from "../../data/setpData";
import { useEffect, useState } from "react";
import Chips from "../../components/Chips/Chips";
import DesignDeclares from "../../components/DesignDeclares/DesignDeclares";
import EmergencyDeclarationForm from "../../components/EmergencyDeclarationForm/EmergencyDeclarationForm";
import { AnimatedSection } from "../../components/AnimatedSection";

function Home() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hideCompletely, setHideCompletely] = useState(false);

  useEffect(() => {
    // Start fading out after 1 second
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    // Remove from DOM after fade-out completes (e.g., after 0.8s)
    const hideTimer = setTimeout(() => {
      setHideCompletely(true);
    }, 1800); // 1000ms + 800ms fade duration

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              {!hideCompletely && (
                <span
                  style={{ display: "flex", letterSpacing: "6px" }}
                  className={`hero-line d-logo ${fadeOut ? "fade-out" : ""}`}
                >
                  <AnimatedSection animation="slideUp" delay={200}>
                    D
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={900}>
                    !
                  </AnimatedSection>
                </span>
              )}
              <AnimatedSection animation="slideUp" delay={2000}>
                <span className="hero-line">DESIGN</span>
                <span className="hero-line">DECLARES</span>
                <span className="text-brand-red hero-line">UK</span>
              </AnimatedSection>
            </h1>
          </div>

          <div className="hero-right">
            <AnimatedSection animation="slideUp" delay={3000}>
              <div>
                <p>
                  Design Declares is a growing group of designers, design
                  studios, agencies and institutions here to declare a climate
                  and ecological emergency. As part of the global declaration
                  movement, we commit to harnessing the tools of our industry to
                  reimagine, rebuild and heal our world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-one" style={{ marginTop: "16rem" }}>
        <div className="left">
          <h2>This is Breakdown</h2>
        </div>
        <div className="right">
          <p className="right-description">
            The science is settled. We are in an emergency of climate and
            nature. The world is past breaking point; the breakdown has begun...
          </p>
          <div className="accordion-container" style={{ marginTop: "3rem" }}>
            <AnimatedSection animation="slideUp" delay={200}>
              <Accordion title="The Role of Design">
                <>
                  <div>
                    As designers working within an industry that relies on
                    production and powers global consumption, we must
                    acknowledge that we have had a role in bringing us to where
                    we are now, and that we have an important role in what comes
                    next.
                  </div>
                  <div>
                    Because designers are makers. We make ideas real. We
                    generate solutions. We build the world – dreaming up new
                    futures and bringing them to life in ways that are
                    beautiful, vital and impossible to resist. It’s not quite
                    magic, but it feels like it.
                  </div>
                </>
              </Accordion>
            </AnimatedSection>
            <Accordion title="Time for Change">
              <>
                <div>
                  Together with our clients, partners and colleagues across the
                  supply chain, we are daring to reimagine the way we create
                  every product, service, campaign and designed solution we put
                  out into the world. This means measuring and actively reducing
                  the greenhouse gas emissions and resource use linked to our
                  designs.
                </div>
                <div>
                  It means introducing principles of sustainability, circularity
                  and - ultimately - regenerative design into our practice to
                  recapture and repurpose resources and materials. And it means
                  acting systemically - seeing the bigger picture and working
                  with others to sharpen design’s incredible capacity to
                  influence and accelerate climate repair and justice.
                </div>
              </>
            </Accordion>

            <Accordion title="Act with Urgency">
              <>
                <div>
                  We know all we need to make this a reality. The information,
                  the guidance, the inspiration and solutions are there. What
                  design needs now is action - meaningful steps that can begin
                  to connect what we know to what we do.
                </div>
                <div>
                  This is the most important brief of our lives. Join us as we
                  begin to design a climate-positive future.
                </div>
              </>
            </Accordion>
          </div>
          <div className="button" style={{ marginTop: "3rem" }}>
            <Button name="View our D! Intro Video" />
          </div>
        </div>
      </section>

      <section className="section-two" style={{ marginTop: "16rem" }}>
        <div className="left">
          <h2>Donate to D!</h2>
        </div>
        <div className="right">
          <AnimatedSection animation="slideUp" delay={200}>
            <p style={{ fontSize: "1.5rem" }}>
              Design Declares is a CIC and would not exist without our dedicated
              team of co-steers, volunteers, and our passionate community
              working towards change in the creative industry. Your support can
              go a long way, and helps us too continue the valuable work needed
              in tackling the climate crises. If you believe in the work we do,
              please consider a small donation to help us on our journey for a
              more equitable and just planet.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={400}>
            <div className="donation-btn">
              <Button name="Donate £10" />
              <Button name="Donate £20" />
              <Button name="Donate £50" />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-two" style={{ marginTop: "16rem" }}>
        <div className="left">
          <h2>8 Acts of Emergency</h2>
        </div>
        <div className="right">
          <p style={{ fontSize: "1.5rem" }}>
            What does it take to Declare? It’s accepting we are in an emergency
            of climate and nature, and a commitment to do something about it.
            Here are eight places to start:
          </p>
          <div className="emergency-container">
            {stepsData.map((step, idx) => (
              <StepCard
                key={idx}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-two declarartion-section"
        id="declaration"
        style={{ marginTop: "8rem" }}
      >
        <div className="left">
          <h2>Declare Emergency Now</h2>
        </div>
        <div className="right">
          <p style={{ fontSize: "1.5rem", marginBottom: "4rem" }}>
            Design Declares is open to individuals and institutions working in
            industrial, digital, graphic, communication and service design. To
            declare here, you must be a company with an office in the UK
            employing at least one full-time designer. We also welcome
            declarations from practising freelance designers who are registered
            as self-employed in the UK, and global supporters from other
            countries. All declarations will be named and published on this
            site.
          </p>
          <EmergencyDeclarationForm />
        </div>
      </section>
      <section className="section-two" style={{ marginTop: "14rem" }}>
        <div className="left">
          <h2>Latest</h2>
        </div>
        <div className="right">
          <AnimatedSection animation="scaleIn" delay={400}>
            <div className="latest-container-section" id="latest-content">
              <div className="latest-card">
                <div className="status">
                  <Chips name="Events" />
                  <Chips name="D! UK" />
                  <p>24.04.2025, 03 PM:30</p>
                </div>
                <div className="description">
                  <p>
                    SD4P Collective: How can Service Design drive meaningful
                    sustainability impact
                  </p>
                </div>
              </div>
              <div className="latest-card">
                <div
                  className="description"
                  style={{ alignSelf: "center", marginTop: "60px" }}
                >
                  <p style={{ fontSize: "1rem" }}>
                    Recap: SD4P Collective working session – 28th March 2025
                    Read story
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={1200}>
            <div className="latest-container-section" id="latest-content">
              <div className="latest-card">
                <div className="status">
                  <Chips name="Events" />
                  <Chips name="D! UK" />
                  <p>24.04.2025, 03 PM:30</p>
                </div>
                <div className="description">
                  <p>
                    SD4P Collective: How can Service Design drive meaningful
                    sustainability impact
                  </p>
                </div>
              </div>
              <div className="latest-card">
                <div
                  className="description "
                  id="right-part"
                  style={{ alignSelf: "center", marginTop: "60px" }}
                >
                  <p>
                    Recap: SD4P Collective working session – 28th March 2025
                    Read story
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <div style={{ marginTop: "80px", marginLeft: "20px" }}>
            <Button name="See all the latest" />
          </div>
        </div>
      </section>
      <section className="section-two" style={{ marginTop: "16rem" }}>
        <div className="left">
          <h2>The Design Declares Newsletter and Toolkit</h2>
        </div>
        <div className="right">
          <AnimatedSection animation="scaleIn" delay={400}>
            <img
              src="image1.webp"
              alt="Toolkit and Newsletter"
              style={{ height: "auto", margin: "0px", width: "100%" }}
            />
            <p style={{ marginTop: "2rem" }}>
              Subscribe to the Design Declares UK newsletter to receive the
              latest news and updates. By signing up you will also gain access
              to The Design Declares Toolkit, a live and evolving Notion site
              co-created with our community. It is filled with the latest
              resources and methods to help you on your journey to
              climate-positive design.
            </p>
            <p>
              Every signatory to Design Declares will receive an access link to
              the Toolkit. If you are unable to declare emergency quite yet, you
              can still access the Toolkit - just register below. Email:*
            </p>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email:*</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-checkbox" style={{ marginTop: "2rem" }}>
                <input type="checkbox" id="email" name="email" required />
                <p style={{ fontSize: "0.8rem" }}>
                  I would like to be added to the Design Declares! newsletter
                  and receive further updates.
                </p>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  marginTop: "2rem",
                }}
              >
                <a href="#" style={{ color: "#fff" }}>
                  View our Privacy Policy
                </a>
              </p>
            </div>
            <button
              name="Subscribe"
              style={{ marginTop: "40px" }}
              type="submit"
              className="subscribe-btn"
            >
              Subscribe
            </button>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-two">
        <DesignDeclares />
      </section>
    </>
  );
}

export default Home;
