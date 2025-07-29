import { FunctionComponent } from "preact";

/*En este componente muestro la portada del proyecto con un botón para iniciar el proceso*/

const Portada: FunctionComponent = () => {
    return (
        <div class="portada-container">
            <h1 class="portada-title">
                ¿ESTÁS PREPARADO PARA MEJORAR EN LA GESTIÓN DE PROYECTOS TECNOLÓGICOS?
            </h1>
            <form action="/inicio">
                <button type="submit" class="portada-button">EMPEZAR</button>
            </form>
        </div>
    );
};

export default Portada;


