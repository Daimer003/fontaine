import React from "react";

const CategorySection = () => {
  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>EDUCACIÓN DE CALIDAD</h5>
              <h2>BiLingüismo: Preescolar, Primaria y Bachillerato</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category" >
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Preescolar</h3>
                <p>Inscripciones 2024 Sede Belisario.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Primaria</h3>
                <p>Inscripciones 2024 Sede Belisario.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category">
              <div className="tf__single_category_icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Bachillerato</h3>
                <p>Inscripciones 2024 Sede Lido.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
