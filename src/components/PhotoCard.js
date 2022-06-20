import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const PhotoCard = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <img className="gal-img" src={item.hdurl} onClick={() => setShow(true)} />

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="gal-explain">
            <img src={item.hdurl} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.explanation}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PhotoCard;
