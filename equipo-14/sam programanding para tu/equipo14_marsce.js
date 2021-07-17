var crear_triangulo = function(x,y,ancho,altura,color){

    // posicion para el circulo
    // x = 100;
    // y = 100;

    // color del circulo
    // color = 'rgb(252, 132, 3)';

    // creamos un elemento en la pagina, del tipo div
    var div = document.createElement('div');

    // asignando sus propiedades
    div.id = 'circulo'; // el nombre del div que estamos creando
    div.style.zIndex = '1'; // orden atras o adelanta
    div.style.position = 'absolute'; // absolute o relativa 
    div.style.left = x + 'px'; // posicion en eje left
    div.style.top = y + 'px';  // posicion en eje top  
    div.style.width = 0;  // ancho del triangulo  
    div.style.height = 0;  // altura del triangulo   
    div.style.borderLeft = '50px solid transparent';
    div.style.borderRight = '50px solid transparent';
    div.style.borderBottom = '100px solid ' + color; 

    // añadir este div al "cuerpo" de la pagina
    document.getElementsByTagName('body')[0].appendChild(div);

    // iniciamos el div en la posicion que queremos
    div.x = x;
    div.y = y;

    return div;  
}  