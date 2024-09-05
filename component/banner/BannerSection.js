"use client";
import { useFontaineContext } from "@/context/FontainerContext";
import Link from "next/link";
import React from "react";

const BannerSection = () => {
  const { handleVideoShow } = useFontaineContext();
  return (
    <section className="tf__banner">
      <div className="dg__banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="tf__banner_text wow fadeInUp">
                <h5>Bienvenida a la escuela la Fontaine!</h5>
                <h1>
                  <span>Bilingüismo </span> para la Transformación Social
                </h1>
                <p>
                  Educación de alta calidad a bajo costo.
                </p>
                <ul className="d-flex flex-wrap align-items-center">
                  <li>
                    <Link className="common_btn" href="#">
                      Read More
                    </Link>
                  </li>
                  <li>
                    <a
                      className="venobox play_btn"
                      role="button"
                      onClick={handleVideoShow}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
