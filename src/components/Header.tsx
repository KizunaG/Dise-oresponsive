import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
      <Navbar
        expand="md"
        variant="dark"
        sticky="top"
        className="py-3 shadow-sm"
        style={{
          background: 'linear-gradient(90deg, #6f42c1, #8b5cf6)',
        }}
      >
        <Container>
          {/* LOGO */}
          <Navbar.Brand href="#" className="fw-bold d-flex align-items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="Logo React"
              width="35"
              height="35"
              className="rounded-circle bg-white p-1"
            />
            <span>React Responsivo</span>
          </Navbar.Brand>

          {/* BOTÓN HAMBURGUESA */}
          <Navbar.Toggle aria-controls="main-navbar" className="border-0" />

          {/* LINKS */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link href="#inicio" className="text-white fw-semibold d-flex align-items-center gap-1">
                <FaHome /> Inicio
              </Nav.Link>
              <Nav.Link href="#servicios" className="text-white fw-semibold d-flex align-items-center gap-1">
                <FaInfoCircle /> Servicios
              </Nav.Link>
              <Nav.Link href="#contacto" className="text-white fw-semibold d-flex align-items-center gap-1">
                <FaEnvelope /> Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
