import { useRef } from "react";
import "./Contact.css";
import Header from "../../components/Header/Header";

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const fields = form.querySelectorAll("input, select, textarea");

    for (let field of fields) {
      if (!field.checkValidity()) {
        const group = field.closest(".form-group");
        if (group) group.classList.add("error");

        field.focus();
        return; // Stop at first invalid field
      } else {
        const group = field.closest(".form-group");
        if (group) group.classList.remove("error");
      }
    }

    alert("Form submitted successfully!");
    form.reset();
  };

  return (
    <div>
      <Header />
      <section className="contact-section">
        <div className="contact-header">
          <h1 className="contact-title">Contact</h1>
        </div>
        <div className="contact-container">
          <h2 className="contact-heading">Send Us A Message</h2>
          <form
            className="form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name">Name:*</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="team">Team to contact:*</label>
              <select id="team" name="team" required>
                <option value="">Select team</option>
                <option value="ireland">D! Ireland</option>
                <option value="uk">D! UK</option>
                <option value="brasil">D! Brasil</option>
                <option value="australia">D! Australia</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="enquiry">Enquiry type:*</label>
              <select id="enquiry" name="enquiry" required>
                <option value="">Choose enquiry type</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Please write your message here."
                required
              ></textarea>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">
                I would like to receive newsletter updates.
              </label>
            </div>

            <div className="form-links">
              <a href="/" className="privacy-link">
                View our Privacy Policy
              </a>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
