window.onload = function () {

    const body = document.body;

    body.innerHTML = "<header>\n" +
        "    Jose Pablo Monzon 20309\n" +
        "    <hr>\n" +
        "</header>\n" +
        "\n" +
        "<label class='a'>Oxigeno:</label> <progress value=\"80\" max=\"100\"> 80% </progress>\n" +
        "\n" +
        "<div>\n" +
        "    <figure>\n" +
        "        <img src=\"entrada.jpg\" alt='Entrada'>\n" +
        "            <figcaption>Entrada vista desde la camara de registro</figcaption>\n" +
        "    </figure>\n" +
        "</div>\n" +
        "\n" +
        "<div>\n" +
        "    <p>\n" +
        "        \"Coloque su documentacion en el recipiente morado por favor\", le indicas a la persona que acaba de ingresar.\n" +
        "    </p>\n" +
        "    <p>\n" +
        "        Hoy es un día tranquilo en el recinto de seguridad SSP, Space Security Prisión, tu como es lo usual te encuentras trabajando en tu turno de guarda de seguridad, el día de hoy tienes el deber de asegurar que las personas que ingresen a las instalaciones tengan la autorización correcta. Al estar en las instalaciones de máxima seguridad solamente personas con una autorización de nivel 4 o mayor pueden entrar. <br> Hay cosas que el público general no debe conocer.\n" +
        "    </p>\n" +
        "</div>\n"

    let boton = document.createElement("button")
    boton.onmousedown = function myFunction(){
        let name = prompt("Ingrese el nombre de usuario que desea filtrar (dejar en blanco para mostrar todo):","LUDWING");
        if (name!=null){
            refresh(name)
        } else {
            refresh()
        }
    };

    window.onload = function () {
        document.body.append(boton)
    }

}