import { EventEmitter } from "events";

//Aquí creo una instancia de EventEmitter
const emisor = new EventEmitter();

//Aquí defino un evento personalizado
emisor.on ('saludo', (nombre) => {
    console.log (`¡Hola, ${nombre}!`);
});

//Aquí emito el evento "saludo"
emisor.emit ('saludo', 'Mundo');