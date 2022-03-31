import React from "react";
import "./DcpFooter.css";
import { socialMedia } from "./socialMedia.js";
import { webpages } from "./socialMedia.js";

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
        </div>
        <div className="twitter-users">
          <a href="https://twitter.com/Areametropol">@areametropol</a>
          <a href="https://twitter.com/siatamedellin">@siatamedellin</a>
        </div>

        <div className="websites-container">
          <span>
            <img className="mediaImage" src={webpages[0].icon} />
            <a href="www.metropol.gov.co">www.metropol.gov.co</a>
          </span>
          <a href="www.siata.gov.co">www.siata.gov.co</a>
        </div>
        <div className="contact-container">
          <ul>
            <li>Carrera 48A # 10Sur-123 - Sede Investigación y desarrollo</li>
            <li>Calle 50 # 71-147 - Torre SIATA</li>
            <li>Teléfono: 4038870 </li>
            <li>contacto@siata.gov.co</li>
            <li>Desarrollado por SIATA I 2022 - 2025</li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}

export { DcpFooter };
