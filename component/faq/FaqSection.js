"use client";
import { faqData } from "@/data/Data";
import React, { useState } from "react";

const FaqSection = ({ img }) => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionBtn = (itemId) => {
    setOpenAccordion((prevState) => (prevState === itemId ? null : itemId));
  };
  return (
    <section className="tf__faq mt_100 pt_95 xs_pt_100 pb_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__faq_img">
              <img src={img} alt="faqs" className="img-fluid w-100" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__faq_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Episodio de podcast</h5>
                <h2>BiLingüismo y emprendimiento social:</h2>
              </div>
              <p className="description">
                La educación que transforma siloé - Lilieydy Manrique del Colegio la Fontaine.{" "}
              </p>
              <div className="tf__faq_accordion">
                <iframe src="https://open.spotify.com/embed/episode/2LPYJckpaWa0fd8efRarvR?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <div className="accordion" id="accordionExample">

                  {faqData.map((item) => (
                    <div
                      className={`accordion-item ${item.color}`}
                      key={item.id}
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button ${openAccordion === item.id ? "" : "collapsed"
                            }`}
                          onClick={() => handleAccordionBtn(item.id)}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${openAccordion === item.id ? "show" : ""
                          }`}
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
