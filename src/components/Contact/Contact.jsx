import React, { useMemo, useState } from "react";
import "./Contact.css";

/** Simple country code select (flag + dial code). Extend as needed. */
const COUNTRY_CODES = [
  { code: "+91", label: "India", flag: "🇮🇳" },
  { code: "+1", label: "USA", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+61", label: "Australia", flag: "🇦🇺" },
];

const MailIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 8.234V20h16V8.234l-7.4 5.55a2 2 0 0 1-2.2 0L4 8.234Z"/>
  </svg>
);

const PhoneIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.27.2 2.47.57 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z"/>
  </svg>
);

export default function Contact() {
  const [activeTab, setActiveTab] = useState("quote"); // 'quote' | 'partner'
  const [message, setMessage] = useState("");
  const [partnerMessage, setPartnerMessage] = useState("");
  const msgLimit = 1000;

  const tabs = useMemo(
    () => [
      { id: "quote", label: "Get Info" },
      { id: "partner", label: "Referral" },
    ],
    []
  );

  return (
    <section className="ct-section" aria-labelledby="ct-title">
      <div className="ct-wrap">
        {/* LEFT: Title & intro copy */}
        <div className="ct-left">
          {activeTab === "partner" ? (
            <>
              {/* Split title: Together sits to the right of Better */}
              <h1 id="ct-title" className="ct-title ct-title--split" aria-label="Everything's Better Together">
                <span className="ct-titleLeft">Explore it together</span>
                <span className="ct-titleRight">over a cup of tea</span>
              </h1>
              <p className="ct-lead">
                Share a brief note about your referral or partnership idea—we'll review and get back quickly with next steps.
              </p>

              {/* Contact info block */}
              <div className="ct-contacts" aria-label="Contact details">
                <div className="ct-contactItem">
                  <div className="ct-icon" aria-hidden="true"><MailIcon /></div>
                  <div className="ct-contactText">
                    <span className="ct-contactLabel">Email Us</span>
                    <a className="ct-contactValue" href="mailto:connect@connectrader.com">connect@connectrader.com</a>
                  </div>
                </div>

                <div className="ct-contactItem">
                  <div className="ct-icon" aria-hidden="true"><PhoneIcon /></div>
                  <div className="ct-contactText">
                    <span className="ct-contactLabel">Call Us</span>
                    <a className="ct-contactValue" href="tel:+12534005949">+1 (253) 400-5949</a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 id="ct-title" className="ct-title">
                Elevate Digital
                <br /> Innovation
              </h1>
              <p className="ct-lead">
                Share a few details about your needs—our team will respond with tailored guidance and a clear plan.
              </p>

              {/* Contact info block */}
              <div className="ct-contacts" aria-label="Contact details">
                <div className="ct-contactItem">
                  <div className="ct-icon" aria-hidden="true"><MailIcon /></div>
                  <div className="ct-contactText">
                    <span className="ct-contactLabel">Email Us</span>
                    <a className="ct-contactValue" href="mailto:connect@connectrader.com">connect@connectrader.com</a>
                  </div>
                </div>

                <div className="ct-contactItem">
                  <div className="ct-icon" aria-hidden="true"><PhoneIcon /></div>
                  <div className="ct-contactText">
                    <span className="ct-contactLabel">Call Us</span>
                    <a className="ct-contactValue" href="tel:+12534005949">+1 (253) 400-5949</a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT: Tabs + Forms */}
        <div className="ct-right">
          <nav className="ct-tabs" role="tablist" aria-label="Contact form tabs">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeTab === t.id}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                className={`ct-tab ${activeTab === t.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(t.id)}
                type="button"
              >
                {t.label}
              </button>
            ))}
          </nav>

          {/* GET INFO */}
          {activeTab === "quote" && (
            <form
              id="panel-quote"
              role="tabpanel"
              aria-labelledby="tab-quote"
              className="ct-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="ct-grid">
                <div className="ct-field">
                  <label htmlFor="q-first">First Name*</label>
                  <input id="q-first" placeholder="Enter first name" required />
                </div>

                <div className="ct-field">
                  <label htmlFor="q-last">Last Name</label>
                  <input id="q-last" placeholder="Enter last name" />
                </div>

                <div className="ct-field">
                  <label htmlFor="q-email">Email*</label>
                  <input
                    id="q-email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="q-phone">Phone Number*</label>
                  <div className="ct-phone">
                    <select
                      className="ct-phoneCode"
                      aria-label="Country code"
                      defaultValue="+91"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      id="q-phone"
                      className="ct-phoneInput"
                      type="tel"
                      placeholder="Your number"
                      required
                      inputMode="numeric"
                    />
                  </div>
                </div>

                <div className="ct-field ct-field--full">
                  <div className="ct-labelRow">
                    <label htmlFor="q-msg">Tell Us More</label>
                    <span className="ct-counter">
                      {message.length}/{msgLimit}
                    </span>
                  </div>
                  <textarea
                    id="q-msg"
                    placeholder="Brief about your project"
                    maxLength={msgLimit}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={7}
                  />
                </div>
              </div>

              <button className="ct-submit" type="submit">
                Send Enquiry <span aria-hidden="true">→</span>
              </button>
            </form>
          )}

          {/* REFERRAL / PARTNERSHIP */}
          {activeTab === "partner" && (
            <form
              id="panel-partner"
              role="tabpanel"
              aria-labelledby="tab-partner"
              className="ct-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="ct-grid">
                <div className="ct-field">
                  <label htmlFor="p-first">First Name*</label>
                  <input id="p-first" placeholder="Enter first name" required />
                </div>

                <div className="ct-field">
                  <label htmlFor="p-last">Last Name</label>
                  <input id="p-last" placeholder="Enter last name" />
                </div>

                <div className="ct-field">
                  <label htmlFor="p-email">Email*</label>
                  <input
                    id="p-email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="p-phone">Phone Number*</label>
                  <div className="ct-phone">
                    <select
                      className="ct-phoneCode"
                      aria-label="Country code"
                      defaultValue="+91"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      id="p-phone"
                      className="ct-phoneInput"
                      type="tel"
                      placeholder="Your number"
                      required
                      inputMode="numeric"
                    />
                  </div>
                </div>

                <div className="ct-field ct-field--full">
                  <label htmlFor="p-company">Company Name</label>
                  <input
                    id="p-company"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="ct-field ct-field--full">
                  <div className="ct-labelRow">
                    <label htmlFor="p-msg">Tell Us More</label>
                    <span className="ct-counter">
                      {partnerMessage.length}/{msgLimit}
                    </span>
                  </div>
                  <textarea
                    id="p-msg"
                    placeholder="We'd love to hear more"
                    maxLength={msgLimit}
                    value={partnerMessage}
                    onChange={(e) => setPartnerMessage(e.target.value)}
                    rows={7}
                  />
                </div>
              </div>

              <button className="ct-submit" type="submit">
                Send Enquiry <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}