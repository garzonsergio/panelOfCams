import React from "react";
import "./DcpPlay.css";
import Pause from "../assets/img/pause.svg";
import Play from "../assets/img/play_arrow.svg";
import { DcpContext } from "../DcpContext";

function DcpPlay() {
  return (
    <DcpContext.Consumer>
      {({ play, playFunction }) => (
        <div className="bottonsMovements">
          <button className="play-button" onClick={() => playFunction()}>
            {play ? (
              <img className="pause-icon" src={Pause} alt="pausa" />
            ) : (
              <img className="play-icon" src={Play} alt="reproducir" />
            )}
          </button>

          <p>{play}</p>
        </div>
      )}
    </DcpContext.Consumer>
  );
}

export { DcpPlay };
