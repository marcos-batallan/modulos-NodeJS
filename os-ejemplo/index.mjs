import os from 'os';

//Aquí obtengo la arquitectura del sistema
console.log ('Arquitectura:', os.arch());

//Aquí obtengo el tipo de sistema operativo
console.log ('Plataforma:', os.platform());

//Aquí obtengo la cantidad total de memoria
console.log ('Memoria total;', os.totalmem());

//Aquí obtengo la cantidad de memoria libre
console.log ('Memoria libre:', os.freemem());

//Aquí obtengo la información del CPU
console.log ('Información de la CPU:', os.cpus());