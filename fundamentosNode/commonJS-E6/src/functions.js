const getTitle = () => 'Esta es una práctica de node JS'
const getAuthor = (autor) => `El autor de la práctica es ${autor}`


//Exportación anterior CommonJS
module.exports = {
    getTitle,
    getAuthor
};

// exportación E6
/*
    export const getTitle = () => 'Esta es una práctica de node JS'
    export const getAuthor = (autor) => `El autor de la práctica es ${autor}`
*/