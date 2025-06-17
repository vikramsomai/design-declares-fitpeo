"use client";

import { useState, useRef, useEffect } from "react";
import "../EmergencyDeclarationForm/EmergencyDeclarationForm.css";

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
  const [dropdownOpen, setDropdownOpen] = useState({
    country: false,
    discipline: false,
  });

  const countryRef = useRef(null);
  const disciplineRef = useRef(null);

  // Countries and disciplines data
  const countries = [
    "United Kingdom",
    "United Arab Emirates",
    "Ukraine",
    "Uganda",
    "Tuvalu",
    "Turks and Caicos Islands",
    "Turkmenistan",
    "Turkey",
    "Tunisia",
    "Trinidad and Tobago",
    "Tonga",
    "Togo",
    "The Gambia",
  ];

  const disciplines = [
    "Communication Design",
    "Digital Design",
    "Service Design",
    "Product Design",
  ];

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
    const newErrors = {};
    let isValid = true;

    // Mark all fields as touched
    const newTouched = {};
    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
    });
    setTouched(newTouched);

    // Validate required fields
    if (!formData.website) {
      newErrors.website = "Website is required";
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
      isValid = false;
    }

    if (!formData.discipline) {
      newErrors.discipline = "Discipline is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.dataConsent) {
      newErrors.dataConsent = "You must consent to continue";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setDropdownOpen((prev) => ({ ...prev, country: false }));
      }

      if (
        disciplineRef.current &&
        !disciplineRef.current.contains(event.target)
      ) {
        setDropdownOpen((prev) => ({ ...prev, discipline: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            </div>

            <div className="checkbox-row">
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
              <div className="field-container visible">
                <input
                  type="text"
                  placeholder="Business Name:*"
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
            {selectedType === "individual" && (
              <div className="field-container visible">
                <input
                  type="text"
                  placeholder="Individual Name:*"
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

            {/* Institution Name Field - Only show when institution type selected */}
            {selectedType === "institution" && (
              <div className="field-container visible">
                <input
                  type="text"
                  placeholder="Institution Name:*"
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
              <div className="field-container visible">
                <input
                  type="text"
                  placeholder="Team Name:*"
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

            {/* Website Field - Always visible */}
            <div className="field-container visible">
              <input
                type="url"
                placeholder="Website:*"
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

            {/* Country Field - Custom dropdown */}
            <div className="field-container visible" ref={countryRef}>
              <div
                className={`custom-select ${
                  touched.country && errors.country ? "error" : ""
                }`}
                onClick={() =>
                  setDropdownOpen((prev) => ({
                    ...prev,
                    country: !prev.country,
                  }))
                }
              >
                <div className="select-selected">
                  Country:* {formData.country}
                </div>
                <div className="select-arrow"></div>
                {dropdownOpen.country && (
                  <div className="select-items">
                    {countries.map((country) => (
                      <div
                        key={country}
                        className={`select-item ${
                          formData.country === country ? "selected" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInputChange("country", country);
                          setDropdownOpen((prev) => ({
                            ...prev,
                            country: false,
                          }));
                        }}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {touched.country && errors.country && (
                <div className="error-message">{errors.country}</div>
              )}
            </div>

            {/* Discipline Field - Custom dropdown */}
            <div className="field-container visible" ref={disciplineRef}>
              <div
                className={`custom-select ${
                  touched.discipline && errors.discipline ? "error" : ""
                }`}
                onClick={() =>
                  setDropdownOpen((prev) => ({
                    ...prev,
                    discipline: !prev.discipline,
                  }))
                }
              >
                <div className="select-selected">
                  Discipline:* {formData.discipline || ""}
                </div>
                <div className="select-arrow"></div>
                {dropdownOpen.discipline && (
                  <div className="select-items">
                    {disciplines.map((discipline) => (
                      <div
                        key={discipline}
                        className={`select-item ${
                          formData.discipline === discipline ? "selected" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInputChange("discipline", discipline);
                          setDropdownOpen((prev) => ({
                            ...prev,
                            discipline: false,
                          }));
                        }}
                      >
                        {discipline}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {touched.discipline && errors.discipline && (
                <div className="error-message">{errors.discipline}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="field-container visible">
              <input
                type="email"
                placeholder="Email:*"
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

            {/* Privacy Policy Link */}
            <div className="privacy-link visible">
              <a href="#" className="privacy-link-text">
                View our Privacy Policy
              </a>
            </div>

            {/* Submit Button */}
            <div className="submit-section visible">
              <button type="submit" className="submit-button">
                Declare Emergency Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
