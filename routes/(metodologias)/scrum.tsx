/*Muestro toda la información de la metodología SCRUM */
/*Emoticonos sacados de la página: https://emojipedia.org/ */

const Page = () => {
  return (
    <div class="scrum-container">
      <h1 class="scrum-title">¿Qué es Scrum?</h1>

      <p class="scrum-intro">
        Scrum es la más ampliamente adoptada a nivel de desarrollo de software. Destaca en potenciar la velocidad, calidad y flexibilidad.
        Los equipos se organizan para conseguir eficiencia en sus objetivos y entregas de alta calidad. Se caracteriza por tener roles como:
        <strong> Development Team</strong>, <strong> Product Owner</strong>, <strong> Scrum Master</strong> y otros. Además de diferentes artefactos
        para supervisar el proceso de principio a fin y su transparencia.
      </p>

      <h2 class="scrum-subtitle">Eventos principales del marco Scrum:</h2>
      <ul class="scrum-list">
        <li>
          <strong>Sprint:</strong> Ciclo con un conjunto de tareas/objetivos con una duración entre una semana y cuatro semanas, al final de él se realizan los entregables incrementales.
        </li>
        <li>
          <strong>Sprint Planning:</strong> Define el objetivo del sprint y revisa los elementos a desarrollar.
        </li>
        <li>
          <strong>Daily Scrum:</strong> Reuniones diarias del equipo para compartir logros, tareas del día y obstáculos.
        </li>
        <li>
          <strong>Sprint Review:</strong> Revisión del incremento del proyecto, que puede llevar a modificaciones en el backlog.
        </li>
        <li>
          <strong>Retrospectiva de Sprint:</strong> Reunión para mejorar relaciones del equipo, procesos y herramientas utilizadas.
        </li>
      </ul>

      <div class="scrum-links">
        <h3>📘 Más información en:</h3>
        <ul>
          <li>
            <a
              href="https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía oficial de Scrum 2020 (scrumguides.org)
            </a>
          </li>
          <li>
            <a
              href="https://www.europeanscrum.org/uploads/2/4/5/1/24513648/guía_scrum_oficial.2024.v1.0_-_europeanscrum.org.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía oficial de Scrum 2024 (europeanscrum.org)
            </a>
          </li>
        </ul>
      </div>

      <div class="scrum-empresas">
        <h3>🏢 Empresas que utilizan Scrum:</h3>
        <div class="empresas-grid">
          <div class="empresa">
            <img src="/images/Logo.png" alt="Mutua Madrileña" />
            <span>Mutua Madrileña</span>
          </div>
          <div class="empresa">
            <img src="/images/ING.png" alt="ING" />
            <span>ING</span>
          </div>
          <div class="empresa">
            <img src="/images/Spotify.png" alt="Spotify" />
            <span>Spotify</span>
          </div>
          <div class="empresa">
            <img src="/images/bbva-logo.png" alt="BBVA" />
            <span>BBVA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

