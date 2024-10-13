let libro = {
    titulo: "Nacidos de la bruma",
    autor: "Brandon Sanderson",
    año: 2006,

    esAntiguo: function () {
        const anioActual = new Date().getFullYear();
        const aniosLibro = anioActual - this.año;

        let esAntiguo = aniosLibro > 10;
        console.log(`El libro "${this.titulo}" es antiguo: ${esAntiguo}`);
    }
};
export default libro;