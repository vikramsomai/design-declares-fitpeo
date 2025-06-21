import { useState } from "react";
import "../EmergencyDeclarationForm/EmergencyDeclarationForm.css";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
export default function EmergencyDeclarationForm() {
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    individualName: "",
    institutionName: "",
    teamName: "",
    website: "",
    country: "United Kingdom",
    discipline: "",
    email: "",
    reason: "",
    dataConsent: false,
    newsletterConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
    validateField(field, formData[field]);
  };

  const validateField = (field, value) => {
    let error = "";

    if (typeof value === "string" && field !== "reason" && !value.trim()) {
      error = `${field} is required`;
    }

    if (field === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) {
      error = "Please enter a valid email address";
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return !error;
  };

  const validateForm = () => {
    for (const field of Object.keys(formData)) {
      const value = formData[field];
      const isFieldValid = validateField(field, value);

      if (!isFieldValid) {
        setTouched((prev) => ({ ...prev, [field]: true }));

        const inputEl = document.querySelector(`[name="${field}"]`);
        if (inputEl) {
          inputEl.focus();
          inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        return false; // stop after first error
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", { selectedType, ...formData });
      // Submit form logic here
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">I am Declaring Emergency</h1>

        <form onSubmit={handleSubmit} className="declaration-form">
          {/* Declaration Type Selection */}
          <div className="checkbox-group">
            <div className="checkbox-row">
              <label
                className={`checkbox-label ${
                  selectedType === "business" ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedType === "business"}
                  onChange={() => handleTypeChange("business")}
                />
                <span className="checkbox-custom"></span>
                As a business
              </label>

              <label
                className={`checkbox-label ${
                  selectedType === "individual" ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedType === "individual"}
                  onChange={() => handleTypeChange("individual")}
                />
                <span className="checkbox-custom"></span>
                As an individual
              </label>

              <label
                className={`checkbox-label ${
                  selectedType === "institution" ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedType === "institution"}
                  onChange={() => handleTypeChange("institution")}
                />
                <span className="checkbox-custom"></span>
                As a public institution
              </label>
              <label
                className={`checkbox-label ${
                  selectedType === "team" ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedType === "team"}
                  onChange={() => handleTypeChange("team")}
                />
                <span className="checkbox-custom"></span>
                As a team or department
              </label>
            </div>
          </div>

          <div className="form-fields">
            {/* Business Name Field - Only show when business type selected */}
            {selectedType === "business" && (
              <div className="form-group visible">
                <label htmlFor="name" style={{ width: "250px" }}>
                  Business Name:*
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={(e) =>
                    handleInputChange("businessName", e.target.value)
                  }
                  onBlur={() => handleBlur("businessName")}
                  className={`form-input ${
                    touched.businessName && errors.businessName ? "error" : ""
                  }`}
                />
                {touched.businessName && errors.businessName && (
                  <div className="error-message">{errors.businessName}</div>
                )}
              </div>
            )}

            {/* Individual Name Field - Only show when individual type selected */}
            {selectedType === "individual" && (
              <div className="form-group visible">
                <label htmlFor="individual" style={{ width: "250px" }}>
                  Individual Name:*
                </label>
                <input
                  type="text"
                  name="individualName"
                  value={formData.individualName}
                  onChange={(e) =>
                    handleInputChange("individualName", e.target.value)
                  }
                  onBlur={() => handleBlur("individualName")}
                  className={`form-input ${
                    touched.individualName && errors.individualName
                      ? "error"
                      : ""
                  }`}
                />
                {touched.individualName && errors.individualName && (
                  <div className="error-message">{errors.individualName}</div>
                )}
              </div>
            )}

            {selectedType === "institution" && (
              <div className="form-group visible">
                <label htmlFor="individual" style={{ width: "280px" }}>
                  Institution Name:*
                </label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={(e) =>
                    handleInputChange("institutionName", e.target.value)
                  }
                  onBlur={() => handleBlur("institutionName")}
                  className={`form-input ${
                    touched.institutionName && errors.institutionName
                      ? "error"
                      : ""
                  }`}
                />
                {touched.institutionName && errors.institutionName && (
                  <div className="error-message">{errors.institutionName}</div>
                )}
              </div>
            )}

            {/* Team Name Field - Only show when team type selected */}
            {selectedType === "team" && (
              <div className="form-group visible">
                <label htmlFor="individual" style={{ width: "250px" }}>
                  Team Name:*
                </label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) =>
                    handleInputChange("teamName", e.target.value)
                  }
                  onBlur={() => handleBlur("teamName")}
                  className={`form-input ${
                    touched.teamName && errors.teamName ? "error" : ""
                  }`}
                />
                {touched.teamName && errors.teamName && (
                  <div className="error-message">{errors.teamName}</div>
                )}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="" style={{ width: "80px" }}>
                Website:*
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                onBlur={() => handleBlur("website")}
                className={`form-input ${
                  touched.website && errors.website ? "error" : ""
                }`}
              />
              {touched.website && errors.website && (
                <div className="error-message">{errors.website}</div>
              )}
            </div>

            <CustomDropdown
              label="Country"
              name="country"
              required={true}
              options={[
                "Afghanistan",
                "Albania",
                "Algeria",
                "Andorra",
                "Angola",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bhutan",
                "Bolivia",
                "Bosnia and Herzegovina",
                "Botswana",
                "Brazil",
                "Brunei",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Colombia",
                "Comoros",
                "Congo (Congo-Brazzaville)",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Cyprus",
                "Czech Republic",
                "Democratic Republic of the Congo",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Eswatini",
                "Ethiopia",
                "Fiji",
                "Finland",
                "France",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Greece",
                "Grenada",
                "Guatemala",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Honduras",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran",
                "Iraq",
                "Ireland",
                "Israel",
                "Italy",
                "Ivory Coast",
                "Jamaica",
                "Japan",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Kuwait",
                "Kyrgyzstan",
                "Laos",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Mauritania",
                "Mauritius",
                "Mexico",
                "Micronesia",
                "Moldova",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "North Korea",
                "North Macedonia",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestine",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Poland",
                "Portugal",
                "Qatar",
                "Romania",
                "Russia",
                "Rwanda",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Korea",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Sweden",
                "Switzerland",
                "Syria",
                "Taiwan",
                "Tajikistan",
                "Tanzania",
                "Thailand",
                "Timor-Leste",
                "Togo",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Vatican City",
                "Venezuela",
                "Vietnam",
                "Yemen",
                "Zambia",
                "Zimbabwe",
              ]}
            />

            <CustomDropdown
              label="Discipline"
              name="Discipline"
              required={true}
              options={[
                "Communication Design",
                "Digital Design",
                "Service Design",
                "Product Design",
              ]}
            />
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="" style={{ width: "70px" }}>
                Email:*
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                className={`form-input ${
                  touched.email && errors.email ? "error" : ""
                }`}
              />
              {touched.email && errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            {/* Reason Textarea */}
            <div className="field-container visible">
              <textarea
                placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                value={formData.reason}
                onChange={(e) => handleInputChange("reason", e.target.value)}
                onBlur={() => handleBlur("reason")}
                className={`form-textarea ${
                  touched.reason && errors.reason ? "error" : ""
                }`}
                rows={6}
              />
              {touched.reason && errors.reason && (
                <div className="error-message">{errors.reason}</div>
              )}
            </div>

            {/* Consent Checkboxes */}
            <div className="consent-section visible">
              <label
                className={`consent-label ${
                  touched.dataConsent && errors.dataConsent ? "error" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.dataConsent}
                  onChange={(e) =>
                    handleInputChange("dataConsent", e.target.checked)
                  }
                  onBlur={() => handleBlur("dataConsent")}
                />
                <span className="checkbox-custom"></span>
                <span className="consent-text">
                  I consent for my data to be used for the purpose of the
                  Declaration, and for my name and reason for joining to be used
                  in the promotion of the Declaration on this site and across
                  our social channels.
                </span>
              </label>
              {touched.dataConsent && errors.dataConsent && (
                <div className="error-message">{errors.dataConsent}</div>
              )}

              <label className="consent-label">
                <input
                  type="checkbox"
                  className="checkbox-custom"
                  checked={formData.newsletterConsent}
                  onChange={(e) =>
                    handleInputChange("newsletterConsent", e.target.checked)
                  }
                />
                <span className="checkbox-custom"></span>
                <span className="consent-text">
                  I would like to be added to the Design Declares! newsletter
                  and receive further updates.
                </span>
              </label>
            </div>

            <div className="privacy-link visible">
              <a href="#" className="privacy-link-text">
                View our Privacy Policy
              </a>
            </div>

            <div className="submit-section visible">
              <button type="submit" className="submit-button" id="submit-btn">
                Declare Emergency Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
