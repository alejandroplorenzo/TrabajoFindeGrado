import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import OpcionesMetodologia from "../components/OpcionesMetodologia.tsx";

/*Emoticonos sacados de la página: https://emojipedia.org/ */
/* Array con las noticias a incluir en el inicio */

const noticias = [
  {
    titulo: " 🔗 9 de cada 10 empresas españolas, en peligro por no incorporar metodologías ágiles",
    url: "https://www.silicon.es/9-de-cada-10-empresas-espanolas-en-peligro-por-no-incorporar-metodologias-agiles-2433805",
  },
  {
    titulo: " 🔗 El 70% de las empresas tendrán que implantar metodologías ágiles para mantener la competitividad",
    url: "https://www.muycomputerpro.com/2023/12/01/empresas-metodologias-agiles-compartitividad-voxel",
  },
  {
    titulo: " 🔗 Walmart y BBVA: Dos casos de empresas ágiles",
    url: "https://www.itmastersmag.com/transformacion-digital/walmart-y-bbva-dos-casos-de-empresas-agiles/",
  },
  {
    titulo: "🔗 8 de cada 10 compañías que aplican agilidad empresarial se decantan por Scrum",
    url: "https://www.revistacloudcomputing.com/2023/11/8-de-cada-10-companias-que-aplica-alguna-agilidad-empresarial-se-decanta-por-scrum/",
  },
];


const Inicio: FunctionComponent = () => {
  const [index, setIndex] = useState(0);

  /* Función para avanzar en las noticias, al hacer click se avanzan dos posiciones (noticias) en el array
  Uso el operador módulo (%) para que vuelva al inicio cuando llegamos al final del array de noticias */

  const avanzar = () => {
    setIndex((prev) => (prev + 2) % noticias.length);
  };

  /* Muestro 2 noticias a la vez */
  const noticiasVisibles = noticias.slice(index, index + 2);

  /* Muestro el título (Noticias Sobre Metodologías Ágiles)
    Muestro 2 títulos a la noticias con su url fuente
    El botón hace que se pueda ver las siguientes 2 noticias
    Incluyo el componente OpcionesMetodologia para poder acceder a cada metodología.
  */

  return (
    <div class="inicio-container">
      <h2 class="inicio-titulo">📰 Noticias Sobre Metodologías Ágiles</h2>
      <div class="noticias-grid">
        {noticiasVisibles.map((noticia) => (
          <a
            key={noticia.url}
            href={noticia.url}
            class="noticia-card"
          >
            <h3>{noticia.titulo}</h3>
          </a>
        ))}
      </div>
      <button class="siguiente-btn" onClick={avanzar}>
        ➡ Ver siguientes
      </button>
      <OpcionesMetodologia />
    </div>
  );
};

export default Inicio;

