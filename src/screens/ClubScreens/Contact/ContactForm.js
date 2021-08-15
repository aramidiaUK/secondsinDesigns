import React, { useState } from "react";
import CustomCheckbox from "../../../components/CheckboxDesign/CustomCheckbox";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";

const ContactForm = () => {
  const [subject, setSubject] = useState({
    name: "general",
    label: "General Enquiry"
  });
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState("");
  return (
    <div className="contact__content-reach">
      <div className="contact__content-reach-content">
        <div className={`news-content`}>
          <header className={`news-content-header`}>
            <h1>
              Contact Us
              <span>Reach Out</span>
            </h1>
          </header>
        </div>
        <div className="formArea">
          <form>
            <CustomSelect
              labelText={"Enquiry"}
              labelFor="enquiry"
              options={[
                { name: "general", label: "General Enquiry" },
                { name: "sponsorship", label: "Sponsoship" },
                { name: "opportunity", label: "Opportunity" },
                { name: "partnership", label: "Partnership" }
              ]}
              selectedState={subject}
              setSelectedState={setSubject}
            />
            <div className="form-group textarea">
              <label>Message details</label>
              <textarea
                className="text-contact form-text-entry"
                placeholder="Send us a message..."
                value={message}
                onChange={e => setMessage(e.currentTarget.value)}
              />
            </div>
            <div className="form-group">
              <CustomCheckbox
                setLabelState={setTerms}
                labelState={terms}
                labelText={[
                  <span className="checkbox-text">
                    Please confirm you have kept within{" "}
                    <strong>SecondsIn communication guidlines</strong>
                  </span>
                ]}
                labelId={"terms"}
              />
            </div>
            <div className="form-group">
              <button type={'submit'}className="btn" style={{width: '100%'}}>Send</button>
            </div>
          </form>
        </div>
        <address className="contact-address">
          <h1>Emirates Stadium</h1>
          <h2>Highbury Drive</h2>
          <h3>N1 9PU</h3>
          <a href="/" title="link">
            View Map
          </a>
        </address>
      </div>
    </div>
  );
};

export default ContactForm;
