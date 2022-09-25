let palabrasAgregadas = ["HTML", "CSS", "CODE", "DEV", "ORACLE"];
let palabraSeleccionada = "";
let palabra = document.getElementById("textAreaMensaje");
let tablero = document.getElementById("horca").getContext("2d");
let letras = [];
let errores = 6;
function IniciarJuego()
{
    AlternarElementosNuevoJuego();
    SeleccionarPalabra();
    DibujarCanvas();
    DibujarGuiones();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        if(ComprobarLetras(letra) && palabraSeleccionada.includes(letra))
        {
            for(let i = 0; i<palabraSeleccionada.length; i++)
            {
                if(palabraSeleccionada[i] == letra)
                {
                    EscribirLetraCorrecta(i);
                }
            }
        }
        else
        {
            MostrarLetraIncorrecta(letra);
            EscribirLetraIncorrecta(letra, errores);
            DibujarMuñeco();
        }
    }
}
function MostrarLetraIncorrecta()
{
    errores -= 1;
    console.log(errores);
}
function ComprobarLetras(key)
{
    let estado = false;
    if((key >= 65 && letras.indexOf(key)) || (key <= 90 && letras.indexOf(key)))
    {
        letras.push(key);
        console.log(key);
        return estado;
    }
    else
    {
        estado = true;
        console.log(key);
        return estado;
    }
}
function AgregarPalabra()
{
    AlternarElementosNuevaPalabra();
}
function SeleccionarPalabra()
{
    let palabraSecreta = palabrasAgregadas[Math.floor(Math.random() * palabrasAgregadas.length)];
    palabraSeleccionada = palabraSecreta;
    console.log(palabraSeleccionada)
}
function AlternarElementosNuevoJuego()
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("horca").style.display = "block";
    document.getElementById("btnNuevoJuego").style.display = "inline";
    document.getElementById("btnRendirse").style.display = "inline";
    document.getElementById("agregandoPalabra").style.display = "none";

}
function MenuPrincipal() 
{
    document.getElementById("menuPrincipal").style.display = "inline";
    document.getElementById("horca").style.display = "none";
    document.getElementById("btnNuevoJuego").style.display = "none";
    document.getElementById("btnRendirse").style.display = "none";
}
function AlternarElementosNuevaPalabra()
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("agregandoPalabra").style.display ="block";
}
function GuardarYJugar()
{
    let palabraAgregada = document.getElementById("textAreaAgregarPalabra").value.toUpperCase();
    palabrasAgregadas.push(palabraAgregada);
    console.log(palabrasAgregadas);
    IniciarJuego();
}