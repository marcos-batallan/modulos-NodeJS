import fs from 'fs';

//Aquí leo un archivo de manera asíncrona
fs.readFile ('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log ('Contenido del archivo:', data);
});

//Aquí escribo un nuevo archivo
fs.writeFile ('./data/new-file.txt', 'Contenido nuevo', (err) => {
    if (err) throw err;
    console.log ('Archivo creado y escrito');
});

//Aquí renombre el archivo creado anteriormente
fs.rename ('./data/new-file.txt', './data/file-renamed.txt', (err) => {
    if (err) throw err;
    console.log ('Archivo renombrado');
});