import React from "react";
import "./DcpFooter.css";
import { socialMedia } from "./socialMedia.js";

function DcpFooter() {
  return (
    <React.Fragment>
      <footer>
        <div className="social-media-container">
          <span>
            {socialMedia.map((media) => (
              <a
                className="media-logo-container"
                key={media.name}
                href={media.link}
              >
                <img className="mediaImage" src={media.icon} />
              </a>
            ))}
          </span>
          <div className="twitterUsers">
            <p>@areametropol</p>
            <p>@siatamedellin</p>
          </div>
        </div>
        <div className="websites-container">
          <span>
            <img src="#" />
            <p>www.metropol.gov.co</p>
          </span>
          <p>www.siata.gov.co</p>
        </div>
        <span>
          <p>Desarrollado por SIATA I 2022 - 2025</p>
        </span>
      </footer>
    </React.Fragment>
  );
}

export { DcpFooter };
