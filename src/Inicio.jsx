import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Inicio.css';

function Inicio() {
  const danzas = [
    { titulo: 'Caporales (La Paz)', descripcion: 'La danza de caporales es una expresión artística que surgió en Bolivia a fines de la década de 1960. Es una fusión de influencias culturales que se popularizó rápidamente en el país. Los caporales se caracterizan por sus movimientos ágiles, sensuales y enérgicos, y su vestimenta distintiva. ' },
    { titulo: 'Morenada (Oruro)', descripcion: 'La morenada es una danza tradicional de Bolivia, originaria de las ciudades mineras, que representa el traslado de esclavos negros a las minas de Potosí durante la época colonial. Se caracteriza por trajes coloridos, música rítmica y máscaras que representan a los caporales y morenos. ' },
    { titulo: 'Cueca (Chuquisaca)', descripcion: 'La cueca boliviana es una expresión cultural y artística propia de Bolivia, un baile de parejas que refleja la alegría, la elegancia y la identidad del país. Se caracteriza por movimientos circulares, floreos y zapateado, acompañados de un pañuelo blanco. La música, vestimenta y coreografía varían según la región, creando una rica diversidad dentro de esta danza. ' },
    { titulo: 'Tobas (Pando)', descripcion: 'La danza de Tobas es una danza folclórica boliviana que tiene su origen en la ciudad de Oruro a inicios del siglo XX. Aunque su origen es urbano, esta danza se inspira en las etnias del Chaco y la Amazonía boliviana. Se caracteriza por una coreografía ágil que incluye saltos y un juego de pies, y a menudo se baila en importantes festivales como el Carnaval de Oruro y la Fiesta del Gran Poder. ' },
    { titulo: 'Chacarera (Tarija)', descripcion: 'La chacarera es una danza y ritmo folklórico tradicional del noroeste argentino, especialmente de la provincia de Santiago del Estero, y también se practica en el sur de Bolivia, principalmente en Tarija. Se caracteriza por ser una danza alegre y festiva, interpretada con guitarra, violín y bombo legüero. ' },
  ];

  return (
    <div  style={{ backgroundColor: '#f2861b', padding: '2rem', borderRadius: '12px' }}>
      <h2><center>Danzas de las Regiones de Bolivia</center></h2>
      <Accordion defaultActiveKey="0">
        {danzas.map((danza, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{danza.titulo}</Accordion.Header>
            <Accordion.Body>{danza.descripcion}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Inicio;
