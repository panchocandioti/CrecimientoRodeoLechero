import React, { useState } from 'react'
import IngresoDatos from './IngresoDatos';
import ImagotipoBlanco from "../Media/Imagotipo BLANCO.png";
import LogoSaltoAgro from "../Media/LogoSaltoAgro.png"
import LogoUNLFCA from "../Media/logo-UNL-FCA.png";

function Presentacion() {

    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true);
    const [comenzar, setComenzar] = useState(false);
    const [mostrarGeneralidades, setMostrarGeneralidades] = useState(false);
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [mostrarSecuencia, setMostrarSecuencia] = useState(false);
    const [mostrarTerminos, setMostrarTerminos] = useState(false);
    const [mostrarRegistro, setMostrarRegistro] = useState(false);


    const manejarOnClick1 = () => {
        setMostrarInstrucciones(!mostrarInstrucciones);
    };

    const manejarOnclick2 = () => {
        setMostrarInstrucciones(false);
        setComenzar(true);
    };

    const manejarOnClick3 = () => {
        setMostrarGeneralidades(!mostrarGeneralidades);
    };

    const manejarOnClick4 = () => {
        setMostrarResultados(!mostrarResultados);
    };

    const manejarOnClick5 = () => {
        setMostrarSecuencia(!mostrarSecuencia);
    };

    const manejarOnClick6 = () => {
        setMostrarTerminos(!mostrarTerminos);
    };

    const manejarOnClick7 = () => {
        setMostrarRegistro(!mostrarRegistro);
    };

    return (
        <div>
            <header className="App-header">
                <a href='https://milecheria.ar' target="_blank" rel="noopener noreferrer">
                    <img src={ImagotipoBlanco} id="MiLecheria" alt='LogoMiLecheria.ar'></img></a>
                <br></br>
                <h1>CRECIMIENTO DEL RODEO LECHERO</h1>
            </header>
            {mostrarInstrucciones && (<div className="seccion">
                <h2>Instrucciones:</h2>
                <div id="instrucciones">
                    <button onClick={manejarOnClick3} className='mostrar'>
                        {mostrarGeneralidades === true ? "Generalidades y objetivos ˄ " : "Generalidades y objetivos ˅ "}
                    </button>
                    {mostrarGeneralidades && (<div className='contenido-instrucciones'>
                        <p>Durante un ciclo anual un rodeo lechero crece cuando las vacas adultas que finalizan su vida útil (muerte y/o rechazo) son menos que las vacas nuevas (vaquillonas de reemplazo) que inician su vida productiva, finalizando el período con más vacas adultas que al comienzo.
                            Esto debería lograrse como resultado de la dinámica propia del rodeo (crecimiento genuino) sin recurrir a compra de vacas y/o vaquillonas.</p>

                        <p>Objetivos de esta aplicación:</p>
                        <ul>
                            <li>Calcular el crecimiento genuino del rodeo lechero</li>
                            <li>Simular su evolución a cinco años</li>
                            <li>Evaluar cómo impactan determinados cambios en los parámetros del rodeo sobre la evolución del mismo</li>
                            <li>Comparar los escenarios alternativos con la situación original</li>
                            <li>Despertar interés por la enorme oportunidad que supone el crecimiento del rodeo lechero</li>
                            <li>Contribuir a la comprensión de los parámetros/procesos relacionados</li>
                            <li>Ofrecer una herramienta de cuantificación para uso didáctico y aplicación práctica</li>
                        </ul>

                        <p>El ingreso de parámetros está dividido en dos formularios: "Cálculo de bajas anuales y vida útil de vacas adultas" y "Cálculo de reposición anual efectiva". Debe completarse el primero para acceder al segundo.
                            Para cada input puede consultarse una definición simplificada o un breve mensaje de ayuda. Los valores ingresados pueden cambiarse en cualquier momento.</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick4} className='mostrar'>
                        {mostrarResultados === true ? "Resultados que se obtienen ˄ " : "Resultados que se obtienen ˅ "}
                    </button>
                    {mostrarResultados && (<div className='contenido-instrucciones'>
                        <ul>
                            <li>Porcentaje anual de bajas</li>
                            <li>Duración media estimada de las vacas</li>
                            <li>Porcentaje anual de reposición efectiva de corto y largo plazo</li>
                            <li>Gráfico comparando bajas con reposición de corto y largo plazo</li>
                            <li>Relación Reemplazos/Bajas (corto y largo plazo)</li>
                            <li>Crecimiento porcentual anual del rodeo (corto y largo plazo)</li>
                            <li>Gráfico de evolución comparada a cinco años (para tres estados diferentes del rodeo y partiendo del número de vacas elegido por el usuario)</li>
                            <li>Resumen de inputs y resultados (comparación de los tres estados)</li>
                        </ul>
                        <p>Los tres estados se inician por defecto con los valores de la primera simulación terminada. Esto ocurre tanto el gráfico de evolución comparada como en el resumen. Luego de hacer los cambios deseados cualquier situación simulada puede guardarse en cualquier estado visualizando su curva de evolución y sus valores en el resumen.</p>
                        <p>Se podrán descargar archivos PDF tanto del gráfico de evolución comparada como del resumen de inputs y resultados.</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick5} className='mostrar'>
                        {mostrarSecuencia === true ? "Secuencia de trabajo sugerida ˄ " : "Secuencia de trabajo sugerida ˅ "}
                    </button>
                    {mostrarSecuencia && (<div className='contenido-instrucciones'>
                        <ol>
                            <li>Diagnóstico (realidad actual) (Estado 1)</li>
                            <li>Detección de puntos críticos</li>
                            <li>¿Qué pasaría si...? (pruebas)</li>
                            <li>Selección de dos alternativas exitosas (Estados 2 y 3)</li>
                            <li>Análisis de los resultados y ajustes</li>
                            <li>Descarga versiones finales de gráfico de evolución comparada y resumen</li>
                        </ol>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick6} className='mostrar'>
                        {mostrarTerminos === true ? "Términos de uso ˄ " : "Términos de uso ˅ "}
                    </button>
                    {mostrarTerminos && (<div className='contenido-instrucciones'>
                        <p>Debido a la gran cantidad de variables involucradas en la selección de datos de entrada, la interpretación de resultados y las aplicaciones de esta herramienta en general, el usuario asume toda la responsabilidad por su uso.</p>
                        <p>El uso de esta aplicación es libre, gratuito e irrestricto para productores lecheros y estudiantes.</p>
                        <p>Su utilización para cualquier fin por parte de investigadores, desarrolladores, profesionales agropecuarios y cualquier otro usuario no especificado aquí, debe hacerse citando la fuente y respetando los derechos del autor.</p>
                    </div>)}
                    <br></br>
                    <button onClick={manejarOnClick7} className='mostrar'>
                        {mostrarRegistro === true ? "REGISTRARSE (opcional) ˄ " : "REGISTRARSE (opcional) ˅ "}
                    </button>
                    {mostrarRegistro && (<div className='contenido-instrucciones'>
                        <p>Regístrese para recibir notificaciones de actualizaciones y novedades de <b>MiLecheria.ar</b> haciendo click en el enlace. El formulario de registro se abrirá en otra ventana. Luego de registrarse regrese a esta ventana para continuar. <a href='https://forms.gle/Q12JUazDxuxbRSP7A' target="_blank" rel="noopener noreferrer">Formulario de registro.</a></p>
                    </div>)}
                </div>
            </div>)}
            <div>
                {comenzar === true && (<button className="button" onClick={manejarOnClick1}>
                    {mostrarInstrucciones === true ? "Ocultar instrucciones" : "Mostrar instrucciones"}
                </button>)}
                {comenzar === false && (<button className="comenzar" onClick={manejarOnclick2}>
                    Aceptar términos y <b>comenzar</b>
                </button>)}
            </div>
            {comenzar && (<div>
                <IngresoDatos />
            </div>)}
            <footer className='footer'>
                <div>
                    <p><b>Desarrollador:</b></p>
                    <p><b><a href='https://www.linkedin.com/in/francisco-candioti-0b167834/' target="_blank" rel="noopener noreferrer">Ing. Agr. EPL Francisco Candioti</a></b></p>
                    <hr></hr>
                    <p>Convenio Marco de Cooperación Técnico-Científica:</p>
                    <p><b>Universidad Nacional del Litoral - SALTO AGRO S.S.</b></p>
                </div>
                <div className='containerLogos'>
                    <div className='logos'>
                        <img src={LogoSaltoAgro} className='logo' alt='LogoSalto'></img>
                    </div>
                    <div className='logos'>
                        <img src={LogoUNLFCA} className='logo' alt='LogoUNLFCA'></img>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Presentacion