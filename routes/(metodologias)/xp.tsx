/*Muestro toda la información de la metodología XP */
/*Emoticonos sacados de la página: https://emojipedia.org/ */

const Page = () => {
  return (
    <div class="xp-container">
      <h1 class="xp-title">¿ Qué es XP (eXtreme Programming)?</h1>

      <p class="xp-intro">
        XP se centra en el desarrollo de software. Fue desarrollada por <strong>Kent Beck</strong> y hace énfasis en el seguimiento, la planificación y la adaptabilidad.
        Las características clave de XP incluyen un enfoque técnico riguroso, alta calidad del software y orientación a equipos pequeños y medianos.
      </p>

      <h2 class="xp-subtitle">Valores según Kent Beck:</h2>
      <ul class="xp-list">
        <li>
          <strong>Comunicación:</strong> Permite compartir conocimientos e ideas dentro del equipo.
        </li>
        <li>
          <strong>Sencillez:</strong> Motiva a que, sin perder el objetivo, las cosas se hagan de la forma más simple posible.
        </li>
        <li>
          <strong>Retroalimentación:</strong> Se realiza por parejas o miembros del equipo y resulta imprescindible para el seguimiento de los procesos y correcciones tempranas.
        </li>
        <li>
          <strong>Valor:</strong> Ayuda a reaccionar adecuadamente frente a los problemas al recibir o entregar información y críticas.
        </li>
        <li>
          <strong>Respeto:</strong> Es importante preocuparse y mostrar respeto por todos los implicados en el proyecto: compañeros, clientes, el proyecto y los usuarios generales.
        </li>
      </ul>

      <div class="xp-links">
        <h3>📘 Más información en:</h3>
        <ul>
          <li>
            <a
              href="https://github.com/rchavarria/blog-post-incubator/blob/master/published-book-notes/extreme-programming-explained-by-kent-beck.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notas del libro de Kent Beck (GitHub)
            </a>
          </li>
          <li>
            <a
              href="https://www.agilecyl.org/jccortizo/xp.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documento XP (agilecyl.org)
            </a>
          </li>
        </ul>
      </div>

      <div class="xp-empresas">
        <h3>🏢 Empresas que aplican XP:</h3>
        <div class="empresas-grid">
          <div class="empresa">
            <img src="/images/Spotify.png" alt="Spotify" />
            <span>Spotify</span>
          </div>
          <div class="empresa">
            <img src="/images/Google.png" alt="Google" />
            <span>Google</span>
          </div>
          <div class="empresa">
            <img src="/images/Amazon.png" alt="Amazon" />
            <span>Amazon</span>
          </div>
          <div class="empresa">
            <img src="/images/Apple.png" alt="Apple" />
            <span>Apple</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
