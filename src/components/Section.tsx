import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

export default function Section() {
  const cards = [
    {
      title: 'Interfaz Adaptativa',
      text: 'El contenido se reacomoda dinámicamente según el tamaño de la pantalla.',
      img: 'https://picsum.photos/400/200?random=1',
    },
    {
      title: 'Uso de Bootstrap',
      text: 'El framework permite usar clases responsivas sin escribir media queries manuales.',
      img: 'https://picsum.photos/400/200?random=2',
    },
    {
      title: 'React + TypeScript',
      text: 'Garantiza seguridad en tipos y escalabilidad del proyecto.',
      img: 'https://picsum.photos/400/200?random=3',
    },
  ]

  return (
    <section id="servicios" className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          {cards.map((card, i) => (
            <Col key={i} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
