let palabrasAgregadas = ["HTML", "CSS", "CODE", "DEV", "ORACLE"];
let palabraSeleccionada = "";
let palabra = document.getElementById("textAreaMensaje");
let tablero = document.getElementById("horca").getContext("2d");
let letras = [];
let errores = 6;
function IniciarJuego()
{
    OcultarElementos();
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
    
}
function SeleccionarPalabra()
{
    let palabraSecreta = palabrasAgregadas[Math.floor(Math.random() * palabrasAgregadas.length)];
    palabraSeleccionada = palabraSecreta;
    console.log(palabraSeleccionada)
}
function OcultarElementos()
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("horca").style.display = "block";
}
