import imagen from '../assets/Base.jpg';
import {pindex} from "../index";
import {p35a} from "../3.5a/3.5";
import {p1} from "../1/1";
import {p3a} from "../3a/3a";

export function p2 (){
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
        "                <i>“Porque tan serio Ken?”</i> pregunto Michael jocosamente por el intercomunicador.<br>\n" +
        "                “Finalmente llegaste Michael, llevo 20 minutos extras cubriendo la puerta sin poder rotar”<br>\n" +
        "                <i>“Tranquilo mi amigo, déjame entrar y en unos 2 minutos llego a suplirte”</i>\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                Notas que sus papeles brillan por su ausencia\n" +
        "            </p>\n" +
        "        </div>  \n" +
        "\n" +
        " <div class=\"container\">\n" +
        "                <div class=\"row\">\n" +
        "                    <div class=\"col\">\n" +
        "                        <button id=\"anti\"> Dejar entrar a michael</button>\n" +
        "                    </div>\n" +
        "                    <div class=\"col\">\n" +
        "                        <button id=\"web\"> No dejar entrar </button>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "        <footer>\n" +
        "            <hr>\n" +
        "            Jose Pablo Monzon 20309\n" +
        "        </footer>\n"

    document.getElementById('img').src = imagen
    document.getElementById('anti').onmousedown = function () { p3a()}
    document.getElementById('web').onmousedown = function () { p1()};
}
