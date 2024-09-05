"use client";
import React from "react";
import BlogSlider from "../slider/BlogSlider";

const BlogSection = () => {
  return (
    <div className="tf__blog mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>LOGROS</h5>
              <h2>Triunfos Colectivos: Celebrando Momentos de Felicidad.</h2>
            </div>
          </div>
        </div>
        {/* <BlogSlider /> */}
      </div>
    </div>
  );
};

export default BlogSection;
