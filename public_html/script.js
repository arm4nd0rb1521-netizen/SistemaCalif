// creamos la funcion para mostrar todos los alumnos creados en la lista
function mostrarAlumnos() {
    // obtenemos el div de resultados para mostrar los resultados valga la redondancia
    let contenedor = document.getElementById("resultado");

// validamos que haya algun alumno registrado en la lista (la lista está declarada más abajo jeje)
    if (listaAlumnos.length === 0) {
        // mostramos un mensaje en el contenedor
        contenedor.innerHTML = "No hay alumnos registrados todavía.";
        // si no hay alumnos registrados el programa no avanza con este return
        return;
    }

// declaramos esta variable para ir modelando nuestro mensaje de resultados
    let htmlCompleto = "";


// esta es una funcion de JS, la cual recorre el arreglo, es como cuando recorremos el arreglo con un ciclo pero en una funcion
// por cada alumno en la lista obtenemos el objeto "alumno" y su indice
    listaAlumnos.forEach((alumno, indice) => {
        // creamos una variable para el mensaje personalizado segun el promedio
        let mensaje = "";
        // creamos un mensaje para el mensaje final y saber si está aprobado o reprobado
        let estado = "APROBADO";

// si el promedio es menor a 6 el estado es reprobado y el mensaje es "vete e la 11"
        if (alumno.promedio <= 5.9) {
            estado = "REPROBADO";
            mensaje = "VETE A LA 11";
            // creamos estos else if para los demas mensajes personalizados segun el promedio
        } else if (alumno.promedio <= 6.4) {
            mensaje = "DATE DE BAJA";
        } else if (alumno.promedio <= 6.9) {
            mensaje = "PIENSA EN CONTA";
        } else if (alumno.promedio <= 7.9) {
            mensaje = "BIEN";
        } else if (alumno.promedio <= 8.9) {
            mensaje = "MUY BIEN";
        } else if (alumno.promedio <= 10) {
            mensaje = "EXCELENTE";
        }

//  el mensaje del contenedor agrega directamente sobre el html lo siguiente:
// un div con un estilo especial para darle una mejor vista a nuestro mensaje
// todos los datos del alumno
// el metodo alumno.promedio.toFIxed(2) sirve para redondear decimales, en este caso solo 2 decimales
        htmlCompleto += `
            <div style="margin-bottom: 20px; padding: 10px; border-left: 4px solid #333;">
                <strong>Alumno #${indice + 1}:</strong> ${alumno.nombre}<br>
                <strong>Edad:</strong> ${alumno.edad}<br>
                <strong>Promedio:</strong> ${alumno.promedio.toFixed(2)}<br><br>
                ${estado}<br><br>
                ${mensaje}
            </div>
            <hr>
        `;
        // todo esto se repite por cada alumno registrado en la lista
    });

// agregamos al html nuestra parte del mensaje que está arriba pero ya completa
    contenedor.innerHTML = htmlCompleto;
}

// este metodo es para limpiar todos los campos
function limpiar() {
    // obtienes todos los elemetos de nuestro formulario y los dejamos en blanco
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";
}

// ahora si, aqui está la lista declarada jeje, debería ir hasta arriba pero ya que
const listaAlumnos= [];

// el metodo para agregar más alumnos
function agregar() {
    
    // obtenemos todos los valores del formulario
    const nombreAlu= document.getElementById("nombre").value;
    const edadAlu= parseInt(document.getElementById("edad").value);
    
    // las calificaciones las dejamos en un arreglo
    const calificacionesAlu= [
        Number(document.getElementById("calificacion1").value),
        Number (document.getElementById("calificacion2").value),
        Number (document.getElementById("calificacion3").value),
        Number (document.getElementById("calificacion4").value)
    ];
    
    // validamos que todos los datos estén llenos
    if (
    nombreAlu === "" ||
    isNaN(edadAlu) ||
    // este metodo sirve para ver si algun elemento del arreglo contiene algo, en este caso
    // si alguna calificacion está vacía o no tiene valor (osea la dejaron en blanco)
    calificacionesAlu.includes(NaN) 
    ) {

// si alguno falta mostramos el mensaje en el div de resultados
    document.getElementById("resultado").innerHTML =
        "Por favor, completa todos los datos.";

    return;
    }
    
    // sacamos el promedio
    let promedioAlu = (calificacionesAlu[0] + calificacionesAlu[1] + calificacionesAlu[2] + calificacionesAlu[3]) / 4;
    
    // creamos el objeto alumno para almacenar todos los dato en una sola variable
    const nuevoAlumno = {
        nombre: nombreAlu,
        edad: edadAlu,
        promedio: promedioAlu
    };
    
    // agregamos el objeto alumno en la lista
    listaAlumnos.push(nuevoAlumno);
    
    // mostramos un mensaje en el contenedor para saber que lo hicimos bien y limpiamos el formulario
    document.getElementById("resultado").innerHTML = `Alumno ${nombreAlu} guardado con éxito`;
    limpiar(); 
}