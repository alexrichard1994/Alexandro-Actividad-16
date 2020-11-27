function Usuario (nombre, correo, edad, comentario){
    this.nombre = nombre;
    this.correo = correo;
    this.edad = edad;
    this.comentario = comentario;
}

const usuario1 = new Usuario("Jorge", "jorgelopez@hotmail.com", 24, "Muy buen sitio web!");

const usuario2 = new Usuario("Pedro", "pedrolopez@hotmail.com", 29, "Le falta preparacion a la pagina.");

const usuario3 = new Usuario("Roberto", "robertolopez@hotmail.com", 32, "Se ve bien.");

const datos = [usuario1, usuario2, usuario3]

console.table(datos)
