const log4js = require('log4js');

const logger = log4js.getLogger("app");
logger.level = "info";

logger.debug("Iniciando la app en modo de pruebas...");
logger.info("usuario a iniciado sesion **");
logger.warn("falta el archivo config de la app");
logger.error("No se pudo ejecutar la accion**");
logger.fatal("No se pudo iniciar la app.");

function sumar(x,y){
    return x+y;
}

let variable_mal_escrita = 0;

module.exports = sumar;