function DibujarCanvas()
{
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    tablero.fillRect(0,0,1160,300);
    tablero.beginPath();
    tablero.moveTo(480,200);
    tablero.lineTo(680,200);
    tablero.stroke();
    tablero.closePath();
}
function DibujarGuiones()
{
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    let ancho = 400/palabraSeleccionada.length;
    for(let i = 0; i < palabraSeleccionada.length; i++)
    {
        tablero.moveTo(400 + (ancho * i), 250);
        tablero.lineTo(450 + (ancho * i), 250);
    }
    tablero.stroke();
    tablero.closePath();
}
function EscribirLetraCorrecta(index)
{
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#8A3871";

    let ancho = 400 / palabraSeleccionada.length;
    tablero.fillText(palabraSeleccionada[index], 410 + (ancho * index), 240);
    tablero.stroke();
}
function EscribirLetraIncorrecta(letra, errorsLeft)
{
    tablero.font = 'bold 20px Inter';
    tablero.lineWidth = 1;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#8A3871";

    let ancho = 400 / palabraSeleccionada.length;
    tablero.fillText(letra, 280 + (40 * (10 - errorsLeft)), 290, 40);
    tablero.stroke();
}