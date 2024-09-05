import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  loading="lazy"
                  src="images/img-donar.webp"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <h4>Donar</h4>
                  <p>
                    Estamos construyendo un auditorio, salón de juegos y 4 salones para recibir 40 estudiantes más en el año 2020. Puedes apoyarnos hoy donando $10 dólares.
                    ¡Nuestros 170 estudiantes te lo agradecen!
                  </p>
                </div>
                <a
                  href="https://vaki.co/es/vaki/eI7rXv8aePZXK0Z0Rn2v?utm_source=copy&utm_medium=vaki-page&utm_campaign=v4"
                  target="_blank"
                  className="flex-column common_btn btn-waki gap-10">
                  <p>Vaki</p>
                  <img
                    src="images/icon-waki.webp"
                    alt="icono waki"
                    className="img-waki"
                  />

                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>QUIÉNES SOMOS</h5>
                <h2>Colegio La Fontaine</h2>
              </div>
              <p>
                Colegio La Fontaine es una institución educativa de preescolar y primaria fundada en el año 2016 con el sueño de brindar a niños y niñas de la Comuna 20 de Cali la oportunidad de acceder a educación de alta calidad a bajo costo dentro de su propio territorio y al alcance de los ingresos económicos de las familias...{" "}
              </p>
              <ul>
                <li><strong>BIENESTAR</strong> - APRENDER A SER</li>
                <li><strong>CALIDAD</strong> - APRENDER A HACER </li>
                <li><strong>INNOVACIÓN </strong>- APRENDER A CONOCER</li>
                <li><strong>COMUNIDAD</strong> - APRENDER A CONVIVIR</li>
              </ul>
              <Link href="#" className="common_btn">
                Sobre Más
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12 col-md-12 col-lg-6 wow  fadeInRight">
            <div className="tf__about_img">
              <img
                src="images/quienes-somos-min.webp"
                alt="about"
                className="w-100 .about"
              />
              <div className="text">
                <i className="far fa-check-circle"></i>
                <h3>183k+</h3>
                <p>Complete Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
