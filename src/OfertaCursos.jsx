import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';
import './OfertaCursos.css'; 

const cursos = [
  {
    titulo: 'Caporales',
    descripcion: 'Danza enérgica y vistosa de La Paz.',
    imagen: '/capo.jpg',
    precio: '150 Bs/mes',
  },
  {
    titulo: 'Morenada',
    descripcion: 'Tradicional danza de Oruro con trajes pesados.',
    imagen: '/more.jpg',
    precio: '120 Bs/mes',
  },
  {
    titulo: 'Tobas',
    descripcion: 'Danza guerrera del oriente boliviano.',
    imagen: '/to.jpg',
    precio: '130 Bs/mes',
  },
];

function Oferta() {
  const [showModal, setShowModal] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const handleShow = (curso) => {
    setCursoSeleccionado(curso);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCursoSeleccionado(null);
  };

  return (
    <div className="container py-4">
      {cursos.map((curso, index) => (
        <Card className="mb-3 custom-card" key={index}>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src={curso.imagen} alt={curso.titulo} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{curso.titulo}</Card.Title>
                <Card.Text>{curso.descripcion}</Card.Text>
                <Button className="custom-button" onClick={() => handleShow(curso)}>
                  Ver precio
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Precio del Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cursoSeleccionado && (
            <>
              <p><strong>{cursoSeleccionado.titulo}</strong></p>
              <p>Precio: {cursoSeleccionado.precio}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Oferta;
