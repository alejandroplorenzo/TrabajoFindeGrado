import { FunctionComponent } from "preact";

type OpcionMetodologia = {
  nombre: string;
  url: string;
};

/* Array con las opciones de metodologías y su url a la información */

const opciones: OpcionMetodologia[] = [
  { nombre: "SCRUM", url: "/scrum" },
  { nombre: "KANBAN", url: "/kanban" },
  { nombre: "XP", url: "/xp" },
  { nombre: "LEAN", url: "/lean" },
];

/*Recorre el array y va mostrando los enlaces a las metodologías*/

const OpcionesMetodologia: FunctionComponent = () => {
  return (
    <div class="opciones-container">
      {opciones.map((opcion) => (
        <a
          key={opcion.url}
          href={opcion.url}
          class="opcion-card"
        >
          {opcion.nombre}
        </a>
      ))}
    </div>
  );
};

export default OpcionesMetodologia;

