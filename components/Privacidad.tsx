import { FunctionComponent } from "preact";

/* En este componente muestro la información sobre la privacidad en la página web */

const Privacidad: FunctionComponent = () => {
    return (
        <div class="privacidad-container">
            <h1 class="privacidad-title">Política de Privacidad</h1>
            <p class="privacidad-text">
                Esta página no recopila, almacena ni comparte ningún dato personal.
                La información introducida en el formulario se utiliza exclusivamente para generar resultados en tiempo real.
                Una vez se abandona la página, todos los datos se eliminan automáticamente y no se conservan en ningún sistema.
                No se realiza ningún seguimiento, análisis ni almacenamiento de la actividad del usuario.
            </p>
        </div>
    );
};

export default Privacidad;
