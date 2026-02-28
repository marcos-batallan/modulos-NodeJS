import path from 'path';

//Aquí defino la ruta para un arxhivo de ejemplo
const filePath = './data/example.txt';

//Aquí obtengo el directorio base
const dirName = path.dirname (filePath);
console.log ('Directorio base:', dirName);

//Aquí obtengo el nombre del archivo sin extensión
const baseName = path.basename (filePath, '.txt');
console.log ('Nombre del archivo:', baseName);

// Aquí obtengo la extensión del archivo
const extName = path.extname (filePath);
console.log ('Extensión del archivo:', extName);

//Aquí creo una ruta unida
const newPath = path.join ('/user', 'docs', 'newfile.txt');
console.log ('Nueva ruta:', newPath);