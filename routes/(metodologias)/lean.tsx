/*Muestro toda la información de la metodología Lean */
/*Emoticonos sacados de la página: https://emojipedia.org/ */

const Page = () => {
  return (
    <div class="lean-container">
      <h1 class="lean-title">¿Qué es Lean?</h1>

      <p class="lean-intro">
        Lean se considera una síntesis de buenas prácticas y principios que ayudan a mejorar la calidad del software más que una metodología en sí. 
        Se podría considerar una filosofía, pero también se aplica a la gestión de procesos. Sus pilares son la aportación de valor al cliente, 
        la reducción del despilfarro y el trabajo con procesos flexibles.
      </p>

      <h2 class="lean-subtitle">Principios fundamentales de Lean:</h2>
      <ul class="lean-list">
        <li>Optimizar el todo</li>
        <li>Eliminar desperdicios</li>
        <li>Calidad en la construcción</li>
        <li>Aprendizaje constante</li>
        <li>Entrega rápida</li>
        <li>Todo el mundo debe involucrarse</li>
        <li>Mejora continua</li>
      </ul>

      <p class="lean-note">
        Muchas empresas adoptan principios de Lean o usan Lean Startup, aunque también emplean otras metodologías ágiles como Scrum o XP según los departamentos.
      </p>

      <div class="lean-links">
        <h3>📘 Más información en:</h3>
        <ul>
          <li>
            <a
              href="https://www.europeanscrum.org/uploads/2/4/5/1/24513648/gui%CC%81a_lean_oficial_2024.v1.0_-_europeanscrum.org.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía Lean oficial 2024 (europeanscrum.org)
            </a>
          </li>
        </ul>
      </div>

      <div class="lean-empresas">
        <h3>🏢 Empresas que aplican Lean:</h3>
        <div class="empresas-grid">
          <div class="empresa">
            <img src="/images/ApplePay.png" alt="Apple" />
            <span>Apple (EasyPay)</span>
          </div>
          <div class="empresa">
            <img src="/images/Dropbox.png" alt="Dropbox" />
            <span>Dropbox</span>
          </div>
          <div class="empresa">
            <img src="/images/Euromaster.png" alt="Euromaster" />
            <span>Euromaster</span>
          </div>
          <div class="empresa">
            <img src="/images/Byhours.png" alt="ByHours" />
            <span>ByHours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
