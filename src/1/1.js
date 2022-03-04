import {p2} from '../2/2.js';
import Imagen from '../assets/entrada.jpg';

export function p1(){
    document.body.innerHTML = "" +
        "<header class=\"animate__animated animate__bounce\" >\n" +
        "    El dia de la reunion\n" +
        "    <hr>\n" +
        "</header>\n" +
        "<div class=\"animate__animated animate__pulse\">\n" +
        "    <figure>\n" +
        "        <img id='img' alt='Entrada'>\n" +
        "    </figure>\n" +
        "</div>\n" +
        "<div>\n" +
        "    <p>\n" +
        "        \"Coloque su documentacion en el recipiente morado por favor\", le indicas a la persona que acaba de ingresar.\n" +
        "    </p>\n" +
        "    <p>\n" +
        "        Hoy es un día tranquilo en el recinto de seguridad SSP, Space Security Prisión, tu como es lo usual te encuentras trabajando en tu turno de guarda de seguridad, el día de hoy tienes el deber de asegurar que las personas que ingresen a las instalaciones tengan la autorización correcta. Al estar en las instalaciones de máxima seguridad solamente personas con una autorización de nivel 4 o mayor pueden entrar. <br> Hay cosas que el público general no debe conocer.\n" +
        "    </p>\n" +
        "</div>\n" +
        "<form id='forma' method='get'>\n" +
        "       <button type='submit'> Continuar </button>\n" +
        "</form>\n" +
        "<footer>\n" +
        "<hr>\n" +
        "Jose Pablo Monzon 20309\n" +
        "</footer>";

    document.getElementById('img').src = imagen;
    document.getElementById('forma').action = 'p2';
}
