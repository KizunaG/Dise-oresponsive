import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-white py-4 mt-auto">
      <Container className="text-center">
        <p>© 2025 - Desarrollado por <strong>Tu Nombre</strong></p>
        <div className="d-flex justify-content-center gap-3 fs-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white">
            <FaTwitter />
          </a>
        </div>
      </Container>
    </footer>
  )
}
