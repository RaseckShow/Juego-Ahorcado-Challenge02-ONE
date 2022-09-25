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

    tablero.beginPath();
    tablero.moveTo(530,200);
    tablero.lineTo(530,20);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(530,20);
    tablero.lineTo(620,20);
    tablero.stroke();
    tablero.closePath();

    tablero.beginPath();
    tablero.moveTo(620,20);
    tablero.lineTo(620,50);
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
function DibujarMuñeco()
{
    switch(errores)
    {
        case 5: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#8A3871";
            
                tablero.beginPath();
                tablero.arc(620,70,20,0,(2 * 3.14));
                tablero.stroke();
                tablero.closePath();
            break;
        case 4: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#8A3871";
        
                tablero.beginPath();
                tablero.moveTo(620,90);
                tablero.lineTo(620,150);
                tablero.stroke();
                tablero.closePath();
            break;
        case 3: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#8A3871";
    
                tablero.beginPath();
                tablero.moveTo(620,150);
                tablero.lineTo(600,180);
                tablero.stroke();
                tablero.closePath();
            break;
        case 2: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#8A3871";
        
                tablero.beginPath();
                tablero.moveTo(620,150);
                tablero.lineTo(640,180);
                tablero.stroke();
                tablero.closePath();
            break;
        case 1: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#8A3871";
        
                tablero.beginPath();
                tablero.moveTo(620,100);
                tablero.lineTo(600,130);
                tablero.stroke();
                tablero.closePath();
            break;
        default: tablero.lineWidth = 5;
                tablero.lineCap = "round";
                tablero.lineJoin = "round";
                tablero.fillStyle = "#F3F5F6";
                tablero.strokeStyle = "#8A3871";

                tablero.beginPath();
                tablero.moveTo(620,100);
                tablero.lineTo(640,130);
                tablero.stroke();
                tablero.closePath();
                tablero.lineWidth = 3;
                // Ojo Izquierdo
                tablero.beginPath();
                tablero.moveTo(610,65);
                tablero.lineTo(615,70);
                tablero.stroke();
                tablero.closePath();
                tablero.beginPath();
                tablero.moveTo(615,65);
                tablero.lineTo(610,70);
                tablero.stroke();
                tablero.closePath();
                // Ojo Derecho
                tablero.beginPath();
                tablero.moveTo(625,65);
                tablero.lineTo(630,70);
                tablero.stroke();
                tablero.closePath();
                tablero.beginPath();
                tablero.moveTo(630,65);
                tablero.lineTo(625,70);
                tablero.stroke();
                tablero.closePath();
                // Boca
                tablero.beginPath();
                tablero.arc(620,80,5,0,3.14,true);
                tablero.stroke();
                tablero.closePath();
            break;            
    }    
}
