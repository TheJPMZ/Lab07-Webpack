import Imagen from '../assets/entrada.jpg';
import {pindex} from "../index";
import {p35a} from "../3.5a/3.5";
import {p1} from "../1/1";

export function p3a (){
    document.body.innerHTML = "\n" +
        "        <header>\n" +
        "            El dia de la reunion\n" +
        "            <hr>\n" +
        "        </header>\n" +
        "\n" +
        "        \n" +
        "        <div>\n" +
        "            <figure>\n" +
        "                <img id='img'>\n" +
        "            </figure>\n" +
        "        </div>\n" +
        "\n" +
        "        <div>\n" +
        "            <p>\n" +
        "                Dejas entrar a Michael.<br>\n" +
        "                Finalmente vas a poder cambiar de turno, mientras tanto, debes seguir atendiendo la puerta, un trabajo bastante sencillo pero aburrido. No hay muchas personas el dia de hoy.<br>\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                Esta calma no duraria mucho, la reunion se avecina.\n" +
        "            </p>\n" +
        "        </div>\n" +
        "\n" +
        " <div class=\"container\">\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col\">\n" +
        "                        <button id=\"anti\"> Distraerse</button>\n" +
        "                    </div>\n" +
        "                    <div class=\"col\">\n" +
        "                        <button id=\"web\"> Prestar atencion</button>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "        <footer>\n" +
        "            <hr>\n" +
        "            Jose Pablo Monzon 20309\n" +
        "        </footer>\n" +
        "\n"


    document.getElementById('img').src = Imagen;
    document.getElementById('anti').onmousedown = function () {p35a()}
    document.getElementById('web').onmousedown = function () {p1()};
}
