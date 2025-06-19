import "./About.css";

import Header from "../../components/Header/Header";
import { teamMembers } from "../../data/teamMembers";
import { AnimatedSection } from "../../components/AnimatedSection";

export default function About() {
  return (
    <div className="page-container">
      <Header />
      <section className="content-section">
        <div className="container-about">
          <div className="grid grid-2">
            <div className="sticky-container">
              <AnimatedSection animation="slideRight" delay={400}>
                <div className="about-left">
                  <h2 className="heading-lg">About Design Declares</h2>
                </div>
              </AnimatedSection>
            </div>

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
                <p className="text-xl">
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
              <div className="about-content-grid">
                <div className="column">
                  <AnimatedSection animation="slideUp" delay={200}>
                    <p className="text-base">
                      Together, we sit at the very beginning of the creative
                      process. The tools we use and the choices we make can
                      influence society’s behaviour, change economies and
                      challenge everything that’s come before.
                    </p>
                  </AnimatedSection>
                </div>
                <div className="column">
                  <AnimatedSection animation="slideUp" delay={200}>
                    <p className="text-base">
                      Because design, whether it’s a product, a piece of
                      packaging or an exhibition space, has impact. It’s up to
                      us whether that impact is harmful or healing. We’re glad
                      you’re here. Let’s get to work.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
              <AnimatedSection animation="scaleIn" delay={1200}>
                <button className="btn">Declare Emergency Now</button>
              </AnimatedSection>
              <div className="about-content-grid">
                <div className="column">
                  <AnimatedSection animation="slideUp" delay={200}>
                    <ul className="text-base">
                      <li>Design Declares is free.</li>
                      <li>
                        ‘Design’ to us means industrial, digital, graphic,
                        communication and service design.
                      </li>
                      <li>
                        Design Declares offers support to all its signatories
                        through shared best practice, resources and insights,
                        all found in the Toolkit.
                      </li>
                      <li>
                        Our signatories use the clarity of the 8 Acts of
                        Emergency as a way to start meaningful conversations and
                        actions in collaboration with colleagues, collaborators
                        and clients.
                      </li>
                    </ul>
                  </AnimatedSection>
                </div>
                <div className="column">
                  <AnimatedSection animation="slideUp" delay={200}>
                    <ul className="text-base">
                      <li>
                        We welcome declarations from companies with an office
                        and/or employing at least one full-time designer, and
                        from practising freelance designers who are registered
                        as self-employed in the UK. All signatories will be
                        named and published on this site.
                      </li>
                      <li>
                        As a collective voice, we will liaise with other
                        industry organisations and networks, constructively
                        engaging with government, clients and design media.
                      </li>
                    </ul>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ marginTop: "12rem" }}>
        <div className="container-about">
          <div className="grid grid-2">
            <div className="sticky-container">
              <AnimatedSection animation="slideRight">
                <div>
                  <h2 className="heading-lg">Global Partnerships</h2>
                </div>
              </AnimatedSection>
            </div>
            <div className="space-y">
              <AnimatedSection animation="slideUp" delay={200}>
                <p className="text-xl">
                  We invite our colleagues from across the design industry to
                  join us in declaring an emergency, and starting to take urgent
                  action.*
                </p>
              </AnimatedSection>

              <div className="about-content-grid">
                <div className="column">
                  <AnimatedSection animation="slideUp" delay={200}>
                    <p className="text-base">
                      The acts of emergency above are the first (big) steps. As
                      we all commit to this work, we must also commit to doing
                      it in a way that is genuinely inclusive and equitable.
                    </p>
                    <p className="text-base">
                      It doesn’t matter where on the journey you are. What
                      matters is that you’re here, and you’re ready to do the
                      work. Because there is no design on a dead planet.
                    </p>
                  </AnimatedSection>
                </div>
                <div className="column">
                  <p className="text-base">
                    *We are actively seeking partnerships to expand Design
                    Declares around the world. If that sounds like something
                    you’re interested in, please get in touch.
                  </p>
                  <p className="text-base">
                    Join our list of global partners...
                  </p>
                  <p></p>
                </div>
              </div>

              <AnimatedSection animation="scaleIn" delay={800}>
                <button className="btn">Get in Touch</button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section" style={{ marginTop: "12rem" }}>
        <div className="container-about">
          <div className="grid grid-2">
            <div className="sticky-container">
              <AnimatedSection animation="slideRight">
                <div>
                  <h2 className="heading-lg" style={{ fontSize: "2rem" }}>
                    The Designers Behind Design Declares UK
                  </h2>
                </div>
              </AnimatedSection>
            </div>

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
                  <img src="brand/brand1.svg" style={{ height: "30px" }} />
                  <img src="brand/brand2.svg" style={{ height: "20px" }} />
                  <img src="brand/brand6.svg" style={{ height: "50px" }} />
                </div>

                <div className="partner-column">
                  <img src="brand/brand3.svg" style={{ height: "35px" }} />
                  <img src="brand/brand4.svg" style={{ height: "26px" }} />
                  <img src="brand/brand5.svg" style={{ height: "55px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="content-section"
        style={{ marginTop: "15rem", marginBottom: "13rem" }}
      >
        <div className="container-about ">
          <div className="team-container team-group">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="heading-lg">Steering Group</h2>
              </div>
            </AnimatedSection>

            <div className="team-images">
              {teamMembers.map((team, index) => {
                return (
                  <div className="team-card" key={index}>
                    <img src={team.image} />
                    <div className="team-name" style={{ fontSize: "1.2rem" }}>
                      {team.name}
                    </div>
                    <div className="team-company">{team.company}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
