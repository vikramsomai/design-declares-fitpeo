import "./Footer.css";
import "../Button/Button";

function Footer({ menuOpen }) {
  return (
    <footer className={`footer ${menuOpen ? "blurred" : ""}`}>
      <div className="footer-columns">
        <div className="footer-title">
          <h1>
            DESIGN
            <br />
            DECLARES
          </h1>
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Sign up to the D! Newsletter</h3>
          <div className="form-group-footer">
            <label htmlFor="email">Email:*</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="checkbox-box">
            <input type="checkbox" id="footer-checkbox" />
            <p>
              I would like to be added to the Design Declares! newsletter and
              receive further updates.
            </p>
            <div className="footer-button">
              <button
                className="footer-btn"
                style={{ padding: "1rem 2rem", borderRadius: "30px" }}
              >
                Subscribe
              </button>
            </div>
          </div>

          <a href="#" className="privacy-policy">
            View our Privacy Policy
          </a>
        </div>
      </div>

      <div className="footer-note">
        <p>
          This website has been built following low-carbon principles of web
          development and hosted using serverless computing, by only allocating
          energy when needed and on demand.
          <a href="#">Learn more about our carbon footprint.</a>.<br />
        </p>
        <p>
          Empowered by <a href="#">Driftime®</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
