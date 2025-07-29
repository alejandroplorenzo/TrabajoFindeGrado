import { PageProps } from "$fresh/server.ts";

/*Muestra el encabezado y el pie de página*/

export default function Layout({ Component, route }: PageProps) {
  /*Si estoy en la ruta /, se muestra solo el contenido del componente sin encabezado ni pie de página.*/
  const isPortada = route === "/";

  if (isPortada) {
    return <Component />;
  }

  return (
    <div class="layout-container">
      <header>
        <a href="/inicio">INICIO</a>
        <a href="/formulario">FORMULARIO</a>
        <a href="/ejemplos">EJEMPLOS IMPLANTACIÓN</a>
        <div class="dropdown">
          <button class="dropbtn">METODOLOGÍAS</button>
          <div class="dropdown-content">
            <a href="/scrum">SCRUM</a>
            <a href="/kanban">KANBAN</a>
            <a href="/xp">XP</a>
            <a href="/lean">LEAN</a>
          </div>
        </div>
      </header>
      <main>
        <Component />
      </main>
      <footer>
        <span>Copyright © 2025 TFG Alejandro Pérez Lorenzo </span>
        <span> | </span>
        <a href="/privacidad">Política de Privacidad</a>
      </footer>

    </div>
  );
}





