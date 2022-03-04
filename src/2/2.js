import {p35a} from '../3.5a/3.5.js';
import imagen from '../assets/Base.jpg';

let imag = document.createElement("img")
imag.src = imagen;

let text = document.createElement("div")
text.innerHTML = "<p>\n" +
    "                <i>“Porque tan serio Ken?”</i> pregunto Michael jocosamente por el intercomunicador.<br>\n" +
    "                “Finalmente llegaste Michael, llevo 20 minutos extras cubriendo la puerta sin poder rotar”<br>\n" +
    "                <i>“Tranquilo mi amigo, déjame entrar y en unos 2 minutos llego a suplirte”</i>\n" +
    "            </p>\n" +
    "            <p>\n" +
    "                Notas que sus papeles brillan por su ausencia\n" +
    "            </p>\n"

let button = document.createElement("a")



window.onload = function (){
    document.body.innerHTML = "<header class=\"animate__animated animate__bounce\">El dia de la reunion<hr></header>\n" +
        "    <div id=\"imagen\" class=\"animate__animated animate__pulse\"></div>\n" +
        "    <div id=\"texto\"></div>\n" +
        "    <div class=\"container\">\n" +
        "        <div class=\"row\">\n" +
        "            <div id = \"but1\" class=\"col\"></div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <script id=\"codigo\" src=\"2.js\"></script>\n" +
        "    <footer class=\"animate__animated animate__flip\">Jose Pablo Monzon 20309</footer>"

    document.getElementById('imagen').appendChild(imag)
    document.getElementById('texto').appendChild(text)

    button.innerHTML = "<a onclick=p35a >Dejar entrar a michael</a>"
    document.getElementById('but1').appendChild(button.cloneNode(true))
}
