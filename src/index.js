    import {p1} from './1/1.js';


    export function pindex(){

        document.body.innerHTML = "" +
            "        <header>\n" +
            "            El dia de la reunion\n" +
            "            <hr>\n" +
            "        </header>\n" +
            "\n" +
            "        <div >\n" +
            "            <h1 class=\"animate__animated animate__pulse\"> El dia de la reunion</h1>\n" +
            "            <h2> Por Jose Pablo Monzon 20309</h2>\n" +
            "            <hr>\n" +
            "        </div>  \n" +
            "\n" +
            "        <div>\n" +
            "\n" +
            "            <div style=\"text-align: center\">\n" +
            "                En esta historia tomas el rol de un guardia de seguridad dentro de la\n" +
            "                base <i>Starlight</i> de la compania de seguridad y contencion <b>SSP - Space Security Prision</b>.\n" +
            "                El dia de hoy es un dia especial, ya que se va a llevar a cabo una reunion muy importante. <br>\n" +
            "                Por lo que debes mantener los ojos bien abiertos, pues en este mundo el peligro puede entrar por la puerta.\n" +
            "            </div>\n" +
            "            <article>\n" +
            "                <h2>Quien eres tu?</h2>\n" +
            "                <p>Kenneth N. Johnson, guardia especial de <span style=\"color:rgb(255, 0, 255)\">NIVEL 4</span> dentro de las instalaciones SSP. Llevas media decada trabajando en el lugar. \n" +
            "                    Tu rotacion actual te puso en el puesto del guardia de la puerta, debes asegurarte que todo el que entre por esa puerta\n" +
            "                    <b>sea quien dice ser </b> y este correctamente autorizado. \n" +
            "                </p>\n" +
            "            </article>\n" +
            "\n" +
            "            <div class=\"container\">\n" +
            "                <div class=\"row\">\n" +
            "                    <div class=\"col\">\n" +
            "                        <button id=\"anti\"> Pagina antigua</button>\n" +
            "                    </div>\n" +
            "                    <div class=\"col\">\n" +
            "                        <button id=\"web\"> Webpack</button>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    <hr>\n" +
            "\n" +
            "    <div>\n" +
            "        <details>\n" +
            "            <summary>\n" +
            "                UX Design\n" +
            "            </summary>\n" +
            "            <p>\n" +
            "                La interaccion con los usuarios es sumamente importante ya que al realizar un servicio para este usuario de manera especializada teniendo en cuenta sus necesidades se puede ahorrar mucho tiempo y dinero que de otra manera se perderia.\n" +
            "\n" +
            "            </p>\n" +
            "            <p>\n" +
            "                Como demuestran en el video si tenemos una mala experiencia del usuario nuestros clientes se pueden frustrar y abandonar nuestro servicio lo que significa perdidas potenciales para nosotros. \n" +
            "            </p>\n" +
            "        </details>\n" +
            "    </div>\n" +
            "\n" +
            "    <footer>\n" +
            "        Jose Pablo Monzon 20309\n" +
            "    </footer>"

        document.getElementById('anti').onmousedown = function () { alert("http://52.7.129.145:3301/") }
        document.getElementById('web').onmousedown = function () { p1()};


    }

    pindex()