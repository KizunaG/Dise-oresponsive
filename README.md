Esta aplicación fue desarrollada como parte de la Tarea 4: Implementación de Diseño Responsivo.
El objetivo fue crear una interfaz adaptable a diferentes tamaños de pantalla, utilizando React con TypeScript y el framework de estilos Bootstrap 5.

El sitio presenta un encabezado con menú de navegación, un contenido principal con título y descripción, una sección con tres tarjetas informativas, y un pie de página con enlaces a redes sociales.
Todo el diseño es completamente responsivo para móviles, tabletas y computadoras de escritorio.

Tecnologías Utilizadas

React 19 + TypeScript

Bootstrap 5

Vite

React Icons (para iconos sociales)

CSS Responsivo con clases utilitarias y breakpoints de Bootstrap

Estructura de Componentes
src/
 ├── components/
 │   ├── Header.tsx      → Encabezado con menú hamburguesa
 │   ├── Main.tsx        → Contenido principal con título y descripción
 │   ├── Section.tsx     → Sección con tres tarjetas informativas
 │   └── Footer.tsx      → Pie de página con redes sociales
 ├── App.tsx             → Componente principal
 ├── main.tsx            → Punto de entrada (con Bootstrap)
 ├── index.css           → Estilos personalizados

📱 Diseño Responsivo
Dispositivos móviles (≤600px)

El menú se convierte en un menú hamburguesa.

Las tarjetas se apilan en una sola columna.

Se ajustan fuentes y márgenes para mejorar legibilidad.

Tabletas (601px - 1024px)

Las tarjetas se muestran en dos columnas.

Espaciado y texto adaptados para una visualización equilibrada.

Computadoras de escritorio (>1024px)

Las tarjetas se organizan en tres columnas.

Diseño base optimizado para pantallas grandes.

Página implementada: https://kizunag.github.io/Dise-oresponsive/
