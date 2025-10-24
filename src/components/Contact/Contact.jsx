import React, { useMemo, useState } from "react";
import "./Contact.css";

/** Simple country code select (flag + dial code). Extend as needed. */
const COUNTRY_CODES = [
  { code: "+91", label: "India", flag: "🇮🇳" },
  { code: "+1", label: "USA", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+61", label: "Australia", flag: "🇦🇺" },
];

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
                <span className="ct-titleLeft">  Explore it together </span>
                <span className="ct-titleRight">over a cup of tea</span>
              </h1>
              <p className="ct-lead">
                 <p className="ct-lead">
                Please feel free to share your thoughts and we can discuss it
                over a cup of tea.
              </p>
              </p>
            </>
          ) : (
            <>
              <h1 id="ct-title" className="ct-title">
              Elevate Digital
                <br /> Innovation
              </h1>
              <p className="ct-lead">
                Please feel free to share your thoughts and we can discuss it
                over a cup of tea.
              </p>
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

          {/* GET A QUOTE */}
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

          {/* PARTNERSHIP */}
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