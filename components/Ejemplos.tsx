import { FunctionComponent } from "preact";

/* Creo un array con la información de las empresas (nombre, logo y descripción) */

const empresas = [
  {
    nombre: "Spotify",
    logo: "/images/Spotify.png",
    descripcion:
      'Ha creado un modelo de equipos o "Squads", basado en Scrum y Kanban, adaptando así las metodologías a su cultura organizativa, "Modelo Spotify", y lo aplica en la gestión de sus proyectos tecnológicos. Divide la organización en "tribus" y "escuadrones" autónomos que trabajan en diferentes aspectos del producto fomentando la autonomía, entregas rápidas de valor y mejora continua.',
  },
  {
    nombre: "BBVA",
    logo: "/images/bbva-logo.png",
    descripcion:
      "BBVA adoptó un enfoque ágil basado en Scrum para el desarrollo de soluciones tecnológicas internas como, por ejemplo, la Plataforma Gravity, plataforma desarrollada para la migración de su sistema bancario central a la nube y potencia la alineación negocio-tecnología, consiguiendo una reducción de tiempos de entrega y mejorando la calidad del software.",
  },
  {
    nombre: "Airbnb",
    logo: "/images/Airbnb.png",
    descripcion:
      "Startup tecnológica que ha implementado XP para fomentar una cultura de innovación y mejora continua.",
  },
  {
    nombre: "Dropbox",
    logo: "/images/Dropbox.png",
    descripcion:
      "Aplica Scrum en sus proyectos ahora muy enfocados en el uso de inteligencia artificial, permitiendo la gestión efectiva de equipos y la entrega continua de soluciones de IA. También se emplea junto con prácticas Lean en el desarrollo de sus productos digitales. Ejemplos: Google Maps y Google Ads.",
  },
  {
    nombre: "Mutua Madrileña",
    logo: "/images/Logo.png",
    descripcion:
      "Aplicó Lean Startup y obtuvo una validación de su proyecto y midió el interés de su público objetivo antes de lanzar su producto. Posteriormente lanzó su MVP que era la plataforma en la nube de almacenamiento y gestión de archivos que después fue adaptada a las necesidades y demandas de los consumidores.",
  },
    {
    nombre: "CaixaBank",
    logo: "/images/CaixaBank.png",
    descripcion:
      "Ha potenciado su filial CaixaBank Tech, especializada en el desarrollo de servicios financieros digitales. Esta unidad aplica metodologías ágiles en proyectos clave como: Arquitectura híbrida en la nube, Aplicaciones de inteligencia artificial y analítica de datos, Exploración de tecnologías disruptivas como la computación cuántica.",
  },
];


/* Recorro el array mostrando una tarjeta por cada empresa */

const Ejemplos: FunctionComponent = () => {
  return (
    <div class="ejemplos-container">
      <h1 class="ejemplos-title">Empresas que Aplican Metodologías Ágiles en Proyectos Tecnológicos</h1>
      <div class="ejemplos-grid">
        {empresas.map((empresa) => (
          <div class="ejemplo-card" key={empresa.nombre}>
            <img src={empresa.logo} alt={empresa.nombre} class="ejemplo-logo" />
            <div>
              <h3>{empresa.nombre}</h3>
              <p>{empresa.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ejemplos;
