import React from "react";
import "./DcpCameraGrid.css";
import { DcpCam } from "../DcpCam";
import { camsSiata } from "./ListOfCams";
import { DcpContext } from "../DcpContext";
import { Modal } from "../Modal";
import Close from "../assets/img/close.svg";

function DcpCameraGrid(props) {
  const { scrollId, openModal, setOpenModal } = React.useContext(DcpContext);
  return (
    <React.Fragment>
      <section className="cameras-grid-container" ref={scrollId}>
        {camsSiata
          .filter((cam) => cam.typeOfCam === props.typeCam)
          .map((cam) => (
            <DcpCam
              route={cam.route}
              key={cam.route}
              nameOfCam={cam.nameOfCam}
            />
          ))}
      </section>
      {/* Modal that shows images in front of the others */}
      {!!openModal && (
        <Modal>
          <section className="modal-container">
            <figure className="modal-picture-container">
              <img
                className="modal-picture"
                alt="imagen"
                src="https://siata.gov.co/ultimasFotosCamaras/ultimacam_FishEye_EAFIT.jpg?1654868879935"
              />
              <p>Nombre de Cámara</p>
            </figure>
            <img
              className="close-button"
              src={Close}
              alt="cerrar"
              onClick={() => setOpenModal(false)}
            />
          </section>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { DcpCameraGrid };
