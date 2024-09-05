"use client";
import React from "react";
import { useFontaineContext } from "@/context/FontainerContext";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";

const NavigationSection = ({ position, btnPosition, navRef }) => {
  const { isMobileNavOpen } = useFontaineContext();
  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <a href="/home" className="nav-link">
            Inicio <i className="fa"></i>
          </a>
        </li>
        <li className="nav-item">
          <Navlink href="#">Nosotros</Navlink>
        </li>
        <li className="nav-item">
          <Navlink href="#">Programas</Navlink>
        </li>
        {/* <li className="nav-item">
          <Navlink href="/blog">blog</Navlink>
        </li> */}
        <li className="nav-item">
          <a className="nav-link">
            Nuestro colegio <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            {/* <li>
              <SubNavlink href="#">
                courses details
              </SubNavlink>
            </li> */}
            <li>
              <SubNavlink href="/team">Equipo fundador</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/">Modelo educativo de vida</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/">Día de Inglés</SubNavlink>
            </li>
            <li>
              <SubNavlink href="#">Media</SubNavlink>
            </li>
            <li>
              <SubNavlink href="#">Historia de vida</SubNavlink>
            </li>
            <li>
              <SubNavlink href="#">Perfil de nuestras familias</SubNavlink>
            </li>
            <li>
              <SubNavlink href="#">
                Conoce nuestra casa
              </SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Navlink href="#">Conectemos</Navlink>
        </li>
        {btnPosition ? null : (
          <li className="nav-item">
            <a className="nav-link common_btn" href="#">
              DONAR
            </a>
          </li>
        )}
      </ul>
      {btnPosition ? (
        <a className="common_btn_2 ms-auto" href="#">
          Donar
        </a>
      ) : null}
    </div>
  );
};

export default NavigationSection;
