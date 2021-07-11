var crear_cuadrado = function(x,y,ancho,altura,color_especificado){

    // posicion para el circulo
    // x = 100;
    // y = 100;

    // color del circulo
    color = color_especificado;

    // creamos un elemento en la pagina, del tipo div
    var div = document.createElement('div');

    // asignando sus propiedades
    div.id = 'circulo'; // el nombre del div que estamos creando
    div.style.zIndex = '1'; // orden atras o adelanta
    div.style.position = 'absolute'; // absolute o relativa 
    div.style.left = x + 'px'; // posicion en eje left
    div.style.top = y + 'px';  // posicion en eje top  
    div.style.width = ancho + 'px';  // ancho del circulo  
    div.style.height = altura + 'px';  // altura del circulo   
    div.style.borderRadius = '50%'; // circulo (0% crea un cuadrado)
    div.style.background = color;  // color  

    // añadir este div al "cuerpo" de la pagina
    document.getElementsByTagName('body')[0].appendChild(div);

    // iniciamos el div en la posicion que queremos
    div.x = x;
    div.y = y;

    return div;  
}  