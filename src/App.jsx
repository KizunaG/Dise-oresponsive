import React from 'react'

export default function App() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">

      {/* 🟣 Encabezado */}
      <header className="bg-primary text-white text-center py-4 shadow-sm">
        <h1 className="fw-bold">Diseño Responsivo con React</h1>
        <p className="lead mb-0">Tarea 4 – Ejemplo de interfaz adaptable</p>
      </header>

      {/* 🟢 Contenido principal */}
      <main className="flex-grow-1 container my-5">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="https://picsum.photos/400/200?1" className="card-img-top" alt="Ejemplo 1" />
              <div className="card-body">
                <h5 className="card-title">Diseño Flexible</h5>
                <p className="card-text">
                  Este sitio se adapta automáticamente a pantallas pequeñas, medianas y grandes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="https://picsum.photos/400/200?2" className="card-img-top" alt="Ejemplo 2" />
              <div className="card-body">
                <h5 className="card-title">Bootstrap 5</h5>
                <p className="card-text">
                  Se utiliza el sistema de rejilla de Bootstrap (Grid) para organizar las secciones.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src="https://picsum.photos/400/200?3" className="card-img-top" alt="Ejemplo 3" />
              <div className="card-body">
                <h5 className="card-title">Diseño Moderno</h5>
                <p className="card-text">
                  Este ejemplo demuestra el uso de componentes y estilos responsivos con React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 🟡 Pie de página */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>
          © 2025 - Desarrollado por <strong>Tu Nombre Aquí</strong> — Tarea 4 React Responsivo
        </small>
      </footer>

    </div>
  )
}
