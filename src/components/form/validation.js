export const validate = (create) => {

    const errors = {}


    if (create.nombre.length < 3) errors.nombre = "Ingrese un nombre"

    if (create.dificultad === "") errors.dificultad = "Ingrese una dificultad"

    if (create.duracion === "") errors.duracion = "Ingrese una descripcion"

    if (create.temporada === "") errors.temporada = "Ingrese una temporada"

    if (create.descripcion === "") errors.descripcion = "Ingrese una descripcion"
    return errors
};