/*Muestro toda la información de la metodología KANBAN */
/*Emoticonos sacados de la página: https://emojipedia.org/ */

const Page = () => {
  return (
    <div class="kanban-container">
      <h1 class="kanban-title">¿Qué es Kanban?</h1>

      <p class="kanban-intro">
        La esencia de Kanban es el tablero de trabajo en columnas: <strong>Trabajo Pendiente</strong>, <strong>Trabajo en Progreso</strong> y <strong>Trabajo Terminado</strong>. 
        Actualmente se suele añadir una columna de <strong>Pendiente de revisión</strong> antes de dar la tarea por finalizada. 
        Cada tarea se representa con tarjetas de diferente color y se traslada de una columna a otra según su progreso.
      </p>

      <p class="kanban-intro">
        Kanban utiliza un enfoque incremental, no basado en iteraciones. No se inicia una nueva tarea hasta que la actual se completa, fomentando así la mejora continua. 
        Se supervisa el progreso y la gestión eficiente de las tareas basándose en principios como la garantía de calidad, la reducción del desperdicio, la mejora continua y la flexibilidad.
      </p>

      <h2 class="kanban-subtitle">Fases típicas de implementación:</h2>
      <ul class="kanban-list">
        <li>Conocimiento de la metodología por parte del equipo.</li>
        <li>Inicio con componentes que tienen problemas para su resolución.</li>
        <li>Implementación en los diferentes componentes una vez resueltos los problemas principales.</li>
        <li>Revisión y reajuste de las fases cuando se necesite, manteniendo la secuencia de tareas.</li>
      </ul>

      <p class="kanban-note">
        Kanban se basa en el <strong>límite de trabajo en curso (WIP limits)</strong>, que restringe la cantidad de trabajo en cada etapa del flujo. 
        Aplica métricas como el <strong>tiempo de ciclo</strong>, pero no define roles específicos. Es principalmente una metodología de gestión visual de tareas, centrada en la flexibilidad y la mejora continua.
      </p>

      <p class="kanban-note">
        Kanban también es usado en empresas que manejan otras metodologías ágiles.
      </p>

      <div class="kanban-links">
        <h3>📘 Más información en:</h3>
        <ul>
          <li>
            <a
              href="https://resources.kanban.university/wp-content/uploads/2021/08/The-Official-Kanban-Guide_Spanish_A4.pdf"
              target="_blank" /*Abre una página nueva*/
              rel="noopener noreferrer" /*Seguridad y privacidad*/
            >
              Guía oficial de Kanban (kanban.university)
            </a>
          </li>
        </ul>
      </div>

      <div class="kanban-empresas">
        <h3>🏢 Empresas que utilizan Kanban:</h3>
        <div class="empresas-grid">
          <div class="empresa">
            <img src="/images/Toyota.png" alt="Toyota" />
            <span>Toyota</span>
          </div>
          <div class="empresa">
            <img src="/images/Boeing.png" alt="Boeing" />
            <span>Boeing</span>
          </div>
          <div class="empresa">
            <img src="/images/Logo.png" alt="Mutua Madrileña" />
            <span>Mutua Madrileña</span>
          </div>
          <div class="empresa">
            <img src="/images/Starbucks.png" alt="Starbucks" />
            <span>Starbucks</span>
          </div>
          <div class="empresa">
            <img src="/images/Zara.png" alt="Zara" />
            <span>Zara</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
