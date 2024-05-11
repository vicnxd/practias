fetch('menu.json')
//Que hace? Esta linea inicia la carga del archivo  menu.json fetch es una funcion de javaScrip que facilita la realizacion de solicitudes de redd, como obtener datos de un archivo o un endpint en API


//como funciona? fetch devuelve una promesa gue cuando se resuelve , tiene acceso a la respuesta de la solicitud.Esta respuesta mo es directamente los datos en formato json , simo un objeto de respueta que incluye varios detalles sobre la respuesta misma

.then(Response => Response.json())
//Que hace? esta linea tom el objeto nde respuesta ontenido dek feth y utiliza el metodo .json npata convertir el cuerpo de la respuesta un objeto javaScrip (esto asume que el cuerpo de la respuesta esta formado en json)
('menu-container');
then(data=>{ const menuContainer = document.getElementById);
    //Que hace?aqui se procesa los datos JSON ya convertidos . se una referencia al codigo en el html mediante getElementaryBYID ('menu-container ') y luego se intera sobre los elementos (categorias) del menu.

    
    data.items.forEach(category =>{const categoryTitle=document.createElement('h2');
    //Que?aqui se crea un elemento h2 , se asigna el nombre de la categoria con su contenido de texto , y luego se añade este titulo al contenedor del menu /
    categoryTitle.textContent=category.category;
    menuContainer.appendChild(categoryTitle);const table = document.createElement('table') ;
    //Que hace? crea un elemento table para cada categoria addemas se prepara el encabezado (tableHead) con las colupnas pertinentes tableBody se inicializa vacio y se llenara con los elemntos de la categoria 
    

} )
    const tableHead= '<tr><th>Foto</th><th>Descripcion</th><th>Precio</th>';
    let tableBody='';

    //
category.items.forEachitem =>{

}