import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

/* Array con las 20 preguntas y sus 4 posibles respuestas */
const questions = [
  {
    text: "¿Cuál es la prioridad principal de tu proyecto?",
    options: [
      "a) Entregar valor rápidamente",
      "b) Mejorar la calidad del producto",
      "c) Adaptarse a cambios frecuentes",
      "d) Optimizar el flujo de trabajo",
    ],
  },
  {
    text: "¿Cómo es la estructura de tu equipo?",
    options: [
      "a) Equipos pequeños y multifuncionales",
      "b) Equipos grandes con roles especializados",
      "c) Equipos distribuidos geográficamente",
      "d) Equipos que trabajan en tareas repetitivas",
    ],
  },
  {
    text: "¿Qué nivel de documentación prefieres?",
    options: [
      "a) Mínima, solo lo esencial",
      "b) Detallada y exhaustiva",
      "c) Moderada, suficiente para guiar el trabajo",
      "d) Flexible, según las necesidades del proyecto",
    ],
  },
  {
    text: "¿Cómo manejas los cambios en los requisitos?",
    options: [
      "a) Los cambios son bienvenidos en cualquier momento",
      "b) Los cambios se gestionan cuidadosamente y se planifican",
      "c) Los cambios se revisan periódicamente",
      "d) Los cambios se minimizan para mantener la estabilidad",
    ],
  },
  {
    text: "¿Cuál es tu enfoque en la gestión de tareas?",
    options: [
      "a) Iteraciones cortas y frecuentes",
      "b) Planificación detallada y controlada",
      "c) Revisión y ajuste continuo",
      "d) Visualización y gestión del flujo de trabajo",
    ],
  },
  {
    text: "¿Cómo es de importante la retroalimentación del cliente?",
    options: [
      "a) Es continua y esencial",
      "b) Se recoge en puntos clave del proyecto",
      "c) Se obtiene al final de cada fase",
      "d) Se considera solo si es crítica",
    ],
  },
  {
    text: "¿Cómo se toman las decisiones en tu equipo?",
    options: [
      "a) De forma colaborativa y diaria",
      "b) Por líderes técnicos o expertos",
      "c) A través de reuniones periódicas",
      "d) Basadas en métricas y eficiencia",
    ],
  },
  {
    text: "¿Cuál es la frecuencia en la entrega de producto?",
    options: [
      "a) Cada 1-2 semanas",
      "b) Cada mes o más",
      "c) Según se completan tareas",
      "d) Cuando se optimiza el flujo",
    ],
  },
  {
    text: "¿Qué importancia das a la mejora continua?",
    options: [
      "a) Es parte del ciclo de trabajo",
      "b) Se revisa al final del proyecto",
      "c) Se analiza en retrospectivas",
      "d) Se mide con indicadores de eficiencia",
    ],
  },
  {
    text: "¿Qué herramientas usas para gestionar el trabajo?",
    options: [
      "a) Tableros Scrum o similares",
      "b) Herramientas de control de calidad",
      "c) Kanban digital o físico",
      "d) Sistemas de gestión Lean",
    ],
  },
  {
    text: "¿Cómo se gestiona la calidad del producto?",
    options: [
      "a) Con pruebas frecuentes y automatizadas",
      "b) Con revisiones exhaustivas y pruebas manuales",
      "c) Con revisión continua del flujo",
      "d) Con eliminación de desperdicios y errores",
    ],
  },
  {
    text: "¿Qué nivel de autonomía tiene tu equipo?",
    options: [
      "a) Muy autónomo, se autoorganiza",
      "b) Depende de roles definidos",
      "c) Tiene autonomía parcial",
      "d) Sigue procesos estandarizados",
    ],
  },
  {
    text: "¿Cómo de predecible es tu entorno de trabajo?",
    options: [
      "a) Muy cambiante",
      "b) Relativamente estable",
      "c) Cambia con frecuencia moderada",
      "d) Altamente estructurado",
    ],
  },
  {
    text: "¿Qué valoras más en el desarrollo?",
    options: [
      "a) Velocidad y entrega continua",
      "b) Calidad y buenas prácticas",
      "c) Flexibilidad y adaptabilidad",
      "d) Eficiencia y reducción de desperdicio",
    ],
  },
  {
    text: "¿Cómo se planifican los proyectos?",
    options: [
      "a) En sprints o ciclos cortos",
      "b) Con planificación detallada inicial",
      "c) Con planificación continua",
      "d) Con enfoque en flujo y capacidad",
    ],
  },
  {
    text: "¿Cómo de importante es la colaboración diaria?",
    options: [
      "a) Fundamental",
      "b) Moderada",
      "c) Según necesidad",
      "d) Solo en puntos clave",
    ],
  },
  {
    text: "¿Cómo se mide el éxito del proyecto?",
    options: [
      "a) Por entregas frecuentes y valor entregado",
      "b) Por calidad técnica y satisfacción del cliente",
      "c) Por capacidad de adaptación",
      "d) Por eficiencia y reducción de tiempos",
    ],
  },
  {
    text: "¿Cómo de importante es la visibilidad del trabajo?",
    options: [
      "a) Alta, con tableros visibles",
      "b) Moderada, con reportes",
      "c) Alta, con flujo visual",
      "d) Alta, con métricas de rendimiento",
    ],
  },
  {
    text: "¿Cuál es la frecuencia en la comunicación con los stakeholders?",
    options: [
      "a) Muy frecuente",
      "b) En puntos clave",
      "c) Según cambios importantes",
      "d) Según entregas planificadas",
    ],
  },
  {
    text: "¿Cómo es de importante la estandarización de procesos?",
    options: [
      "a) Poco importante",
      "b) Muy importante",
      "c) Moderadamente importante",
      "d) Esencial para la eficiencia",
    ],
  },
];

const FormularioI: FunctionComponent = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  /* Función que srive para que cuando el usuario selecciona una opción, se guarde en answers y se avanza a la siguiente pregunta. */

  const handleAnswer = (option: string) => {
    setAnswers([...answers, option]);
    setCurrent(current + 1);
  };

  /* Función que sirve para contar el número veces que se ha elegido cada letra */
  const countLetters = () => {
    const count: { a: number; b: number; c: number; d: number } = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
    };
    answers.forEach((ans) => {
      const letter = ans[0] as 'a' | 'b' | 'c' | 'd';
      count[letter]++;
    });
    return count;
  };

  /* Función que sirve para determinar qué letra ha sido la más seleccionada y devolver la metodlogía más adecuada con un enlace a más información */

  const getRecommendation = () => {
    const count = countLetters();
    const max = Object.entries(count).reduce((a, b) => (a[1] > b[1] ? a : b));
    switch (max[0]) {
      case "a":
        return {
          message: "Scrum: Ideal si buscas entregas rápidas, equipos autoorganizados y ciclos cortos.",
          link: "/scrum",
          label: "SCRUM",
        };
      case "b":
        return {
          message: "XP (Extreme Programming): Recomendado si priorizas calidad técnica, buenas prácticas y documentación.",
          link: "/xp",
          label: "XP",
        };
      case "c":
        return {
          message: "Kanban: Perfecto si necesitas flexibilidad, adaptación continua y visibilidad del flujo.",
          link: "/kanban",
          label: "KANBAN",
        };
      case "d":
        return {
          message: "Lean: Adecuado si tu enfoque está en la eficiencia, reducción de desperdicios y mejora del flujo.",
          link: "/lean",
          label: "LEAN",
        };
      default:
        return {
          message: "No se pudo determinar una recomendación clara.",
          link: "/",
          label: "Inicio",
        };
    }
  };

  const recommendation = getRecommendation();

  /* Recorro todas las preguntas permitiendote marcar una respuesta y finalmente te muestra el resultado */
  return (
    <div class="formulario-container">
      {current < questions.length ? (
        <div>
          <h2>Pregunta {current + 1} de {questions.length}</h2>
          {/* Muestro la pregunta actual */}
          <p>{questions[current].text}</p>
          {/* Recorro las opcines de respuesta disponibles y las muestro como botones para seleccionar */}
          <ul class="formulario-opciones">
            {questions[current].options.map((opc) => (
              <li key={opc}>
                <button type="button" class="formulario-boton" onClick={() => handleAnswer(opc)}>
                  {opc}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /*Muestro el resultado de la encuesta con el enlace para ver más información de la metododología ágil */
        <div>
          <h2>Resultado</h2>
          <p class="resultado">{recommendation.message}</p>
          <a href={recommendation.link} class="formulario-boton">
            Ver Información de {recommendation.label}
          </a>
        </div>
      )}
    </div>
  );
};

export default FormularioI;


