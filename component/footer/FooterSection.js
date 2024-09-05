import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
              <div className="tf__footer_logo_area">
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/logo-La-fontaine-blanco.svg"
                    alt="Fontaine"
                    className="img-fluid w-100"
                  />
                </Link>
                <p>
                  ¡Conéctate con nosotros en nuestras redes sociales para mantenerte al día con las últimas noticias y eventos del Colegio La Fontaine!
                </p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="https://www.facebook.com/colegiolafontainecali/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://x.com/lafontainecali?s=21" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/colegiolafontainecali/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
              <div className="tf__footer_content xs_mt_50">
                <h3>NOSOTROS</h3>
                <ul>
                  <li>
                    <Link href="/courses">Quiénes Somos</Link>
                  </li>
                  <li>
                    <Link href="/events">Nuestro porqué</Link>
                  </li>
                  <li>
                    <Link href="/about">Bilingüismo para la transformación social</Link>
                  </li>
                  <li>
                    <Link href="/contact">Nuestra historia</Link>
                  </li>
                  <li>
                    <Link href="/contact">Equipo fundador</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
              <div className="tf__footer_content xs_mt_30">
                <h3>NUESTRO COLEGIO</h3>
                <p>Calle 5 0este #D51-32 Belisario Caicedo, Santiago de Cali, Colombia</p>
                <p>
                  <span> Phone: +57 6023088017</span>
                  {/* <span>Fax: +8 846512 456 788</span> */}
                </p>
                <p>
                  <span>Email: colegiolafontainecali@gmail.com </span>
                  <span>Website: https://colegiolafontaine.edu.co/</span>
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-5 col-lg-4 col-lg-5">
              <div className="tf__footer_content xs_mt_45">
                <h3>Boletin informativo</h3>
                <p>
                  Descubre lo último en nuestro boletín informativo. Mantente actualizado con noticias, eventos y más. ¡Suscríbete ahora!
                </p>
                <form>
                  <input type="text" placeholder="Tu correo electrónico" />
                  <button>Enviar</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tf__copyright">
                <p>Copyright ©Fontaine all rights reserved.</p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/about">Acerca de</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
