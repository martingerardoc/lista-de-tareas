const facturas = [
    { id: 1, numeroFactura: "F001", descripcion: "Compra de muebles de oficina", estado: "pagada", fecha: "12-10-2023" },
    { id: 2, numeroFactura: "F002", descripcion: "Suscripción a servicio de internet", estado: "pendiente", fecha: "05-02-2024" },
    { id: 3, numeroFactura: "F003", descripcion: "Reparación de equipo de cómputo", estado: "pagada", fecha: "18-03-2024" },
    { id: 4, numeroFactura: "F004", descripcion: "Compra de papelería", estado: "pendiente", fecha: "02-04-2024" },
    { id: 5, numeroFactura: "F005", descripcion: "Pago de servicios públicos", estado: "pagada", fecha: "11-04-2024" },
    { id: 6, numeroFactura: "F006", descripcion: "Mantenimiento de software", estado: "pendiente", fecha: "15-04-2024" },
    { id: 7, numeroFactura: "F007", descripcion: "Compra de licencias de software", estado: "pagada", fecha: "23-11-2023" },
    { id: 8, numeroFactura: "F008", descripcion: "Servicios de diseño gráfico", estado: "pendiente", fecha: "10-01-2024" },
    { id: 9, numeroFactura: "F009", descripcion: "Capacitación en seguridad informática", estado: "pagada", fecha: "27-02-2024" },
    { id: 10, numeroFactura: "F010", descripcion: "Compra de equipos de oficina", estado: "pendiente", fecha: "13-03-2024" },
    { id: 11, numeroFactura: "F011", descripcion: "Compra de material de oficina", estado: "pendiente", fecha: "18-04-2024" },
    { id: 12, numeroFactura: "F012", descripcion: "Pago de renta de local comercial", estado: "pagada", fecha: "23-04-2024" },
    { id: 13, numeroFactura: "F013", descripcion: "Servicios de limpieza", estado: "pendiente", fecha: "25-04-2024" },
    { id: 14, numeroFactura: "F014", descripcion: "Mantenimiento de equipos de aire acondicionado", estado: "pagada", fecha: "27-04-2024" },
    { id: 15, numeroFactura: "F015", descripcion: "Compra de insumos médicos", estado: "pendiente", fecha: "30-04-2024" }
];



/**
 * @description Dentro  de una funcion llamada todos: itera el array facturas e  imprime en consola cada uno de los objetos que se encuentran dentro del array. 
 */
/* import { facturas } from "./utilities.js"; */

function traerTodos() {
    tabla.innerHTML = ""
    for (let i = 0; i < facturas.length; i++) {
        const element = facturas[i]
        /* console.log(facturas[i]); */
        /* console.log(element) */
        agregarFila(element)
    }
}
/* Todos() */

/**
* @description Dentro  de una funcion llamada pendientes: itera el array facturas e  imprime en consola cada uno de los objetos cuyo estado sea igual a pendiente 
*/
 function traerPendientes() {
    tabla.innerHTML = ""
    for (let i = 0; i < facturas.length; i++) {
        const element = facturas[i];
        if (element.estado === "pendientes") {
            /* console.log(element) */
            agregarFila(element)
        }
    }
}
/* traerPendientes() */
/**
* @description Dentro  de una funcion llamada pagadas: itera el array facturas e  imprime en consola cada uno de los objetos cuyo estado sea igual a pagadas 
*/
 function traerPagadas() {
    tabla.innerHTML = ""
    for (let i = 0; i < facturas.length; i++) {
        const element = facturas[i];
        if (element.estado === "pagadas") {
            /* console.log(element) */
            agregarFila(element)
        }
    }
}

/* traerPagadas() */

/**
 * @description En el html encontraras un  ul que contiene tres li.  A cada uno de esos li agregaras un escuchador de evento click y utilizaras las fuciones creadas en los pasos anteriores.
 *  
 */

let todos = document.querySelector("#todos")
let pendientes = document.querySelector("#pendientes")
let pagadas = document.querySelector("#pagadas")

todos.addEventListener("click", traerTodos)
pendientes.addEventListener("click", traerPendientes)
pagadas.addEventListener("click", traerPagadas)

/**
 * @description Este punto constara de varias partes:
 * 1. Utiliza querySelector para seleccionar el tbody del table en el html;
 * 2. En el html encontraras un table que contiene un thead y un tbody. Copia el primer elemento tr del tbody;
 * 3. En el js crea una funcion llamada fila que reciba un objeto como parametro. Dentro de la funcion crea una variable llamada template_fila y asignale utilizando comillas invertidas el valor copiado en el paso 1.
 * Utiliza ${value} para reemplazar los valores del objeto en el template.
 * 4. Utiliza innerHTML para agregar la fila al tbody del table. Recuerda utilizar += para agregar la fila al final del tbody.
 */

let tabla = document.querySelector("#tabla")

function agregarFila(obj) {
    let template_fila;
    if (obj.estado === "pagadas") {
        template_fila = `<tr>
                    <td>${obj.id}</td>
                    <td>${obj.numeroFactura}</td>
                    <td>${obj.descripcion}</td>
                    <td class= "text-[#00ce00]">${obj.estado}</td>
                    <td>${obj.fecha}</td>
                    <td><button class="delete" id=${obj.id}>Del</button></td>
                </tr>`
    } else {
        template_fila = `<tr>
                    <td>${obj.id}</td>
                    <td>${obj.numeroFactura}</td>
                    <td>${obj.descripcion}</td>
                    <td class= "text-[#ff0000]">${obj.estado}</td>
                    <td>${obj.fecha}</td>
                </tr>`
    }
    tabla.innerHTML += template_fila; 
}

/*  agregarFila(facturas[2]) */


/** 7
 * @description Este punto constara de varias partes:
 * 1. Utiliza querySelector para seleccionar el boton con id addContactBtn;
 * 2. Utiliza querySelector para seleccionar modal con id modal;
 * 3. Utiliza querySelector para seleccionar el boton con la clase close en el modal;
 * 4. Crea una funcion llamada toggleModal que agregue o quite la clase hidden al modal.
 * 5. Agrega un escuchador de evento click al boton con id addContactBtn que ejecute la funcion toggleModal.
 * 6. Agrega un escuchador de evento click al boton con la clase close que ejecute la funcion toggleModal.
 */

let addContactBtn = document.querySelector("#addContactbtn")
let modal = document.querySelector("#modal")
let closeModal = document.querySelector("#closeModal")

function toggleModal() {
    modal.classList.toggle("hidden")
}

addContactBtn.addEventListener("click", toggleModal)
closeModal.addEventListener("click", toggleModal)
contactForm.addEventListener("submit" , agregarFactura)

/**
 * @description Este punto constara de varias partes:
 * 1. Utiliza querySelector para llamar el formulario que se encuentra dentro del modal.
 * 2. Crea una funcion llamada agregarFactura que reciba un evento (e) como parametro.
 * 3. Crea una instancia de FormData y pasale como parametro el formulario.
 * 4. Utiliza el metodo get para obtener el valor de cada uno de los inputs del formulario.
 * 5. Crea un objeto con las propiedades que se encuentran en el formulario
 * 6. Agrega el objeto creado al array facturas
 * 7. Ejecuta la funcion todos que creaste en el paso 1.
 * 8. Cierra el modal.
 * 9. Resetea el formulario.
 * 10. Agrega un escuchador de evento submit al formulario que llamará a la función agregarFactura.
 * Nota: No olvides prevenir el comportamiento por defecto del formulario.
 */

let contactForm = document.querySelector("#contactForm")

function agregarFactura(e) {
    e.preventDefault()
    const formulario = new FormData(contactForm)
    let nuevoID = facturas.length > 0 ? facturas[facturas.length - 1].id + 1 : 1
    let nuevaFactura = {
        id: nuevoID,
        numeroFactura: formulario.get("factura"),
        descripcion: formulario.get("descripcion"),
        estado: formulario.get("estado"),
        fecha: formulario.get("fecha")
    }

    facturas.push(nuevaFactura)
    traerTodos()
    toggleModal()

    /* Resetear un formulario */

     contactForm.reset()/* Limpia todos los campos del formulario */
}
/* Un escuchador de eventos va por fuera */
contactForm.addEventListener("submit", agregarFactura) 

/** 09
 * @description Este punto constara de varias partes:
 * 1. En el diseño original encontraras que hay diferencias en los colores de las facturas dependiendo de su estado. para las facturas pendientes el color es #ff0000 y para las facturas pagadas el color es #00ce00.
 * 2. Dentro de la funcion llamada agregarFila encuentra alguna forma de lograr que el color de la fila cambie dependiendo del estado de la factura.
 * Ideas: podrias utilizar dos templates para mostrar una u otra dependiendo del estado. Tambien podrias utilizar un if y una varialbe para definir el color en una variable independiente.
 */



/** 11-
  * @description: Este punto constara de varias partes:
  * 1. Crea una función llamada eliminar facturas que reciba un parametro llamado id
  * 2. Dentro de la función eliminar facturas, itera el array facturas y elimina el objeto cuyo id sea igual al id que se recibe como parametro.
  * Nota: Para eliminar un objeto de un array puedes utilizar el método filter o splice. Si utilizas el metodo splice, tambien necesitaras utilizar el metodo findIndex.
  */

/* function eliminarFacturas(id) {
    facturas = facturas.filter(factura => factura.id !== id)
    traerTodos()
}

tabla.addEventListener("click", function (e) {
    let elemento = e.target
    if (elemento.classList.contains("delete")) {
        let idFacturaEliminada = Number(e.target.id)
        eliminarFacturas(idFacturaEliminada)
    }

})

Todos() */

/* Editar me permitiria poder modificar cualquiera de las facturas */