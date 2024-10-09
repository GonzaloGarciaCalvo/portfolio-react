import React, { useState } from 'react';


function CustomModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" fullscreen="md">
        <Modal.Body className='p-0'>
          <div className="boxPdf">
            <object className="pdf" data="cv-GonzaloGarciaCalvo2024.pdf"></object>
          </div>
        </Modal.Body>
        <div className="d-flex flex-row justify-content-center btnDescargar">
            <a href="cv-GonzaloGarciaCalvo2024.pdf" target="_blank" rel="noopener" className=" text-decoration-none">
                <p className="text-center my-2 fs-1 fw-bold">Descargar CV</p>
            </a>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal