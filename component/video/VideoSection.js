"use client";
import { useFontaineContext } from "@/context/FontainerContext";
import React from "react";

const VideoSection = () => {
  const { handleVideoShow } = useFontaineContext();
  return (
    <section className="tf__video mt_100">
      <div className="tf__video_overlay pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto wow fadeInUp">
              <div className="tf__video_text">
                <a
                  className="venobox play_btn"
                  role="button"
                  onClick={handleVideoShow}
                >
                  <i className="fas fa-play"></i>
                </a>
                <h4>Lilibeydy Manrrique, premio Recon Colombia.</h4>
                <p>
                  Siloé como pesebre natural de Cali - Colegio La Fontaine
                </p>
                <a className="common_btn" href="#">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
