fetch('menu.json')
.then(response => response.json())
.then(data =>{
    const menuContainer = document.getElementById
    ('menu-container');
    let total = 0;
    data.items.array.forEach(category => {
        const categoryTitle = document.createElement
        ('h3');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        const tableHead = `<tr><th>Foto</
        th><th>Descripcion</th><th>Precio</
        th><th>Seleccionar</th></tr>`;

        let tableBody= '';


        category.items.forEach(items => {
            tableBody+= 
            `<tr>
                <td><img src= "${item.img}" alt=_"${item.name}"></td>
                    <td>${item.name} - ${item.descripcion}</td>
                    <td>${item.price}</td>
                    <td><input type="checkbox" data-price="${item.price.replace(`&`,``)}" 
                    onchanges="updateTotal()"</td>
                    
            </tr>`;                 
        });

        table.innerHTML=tableContent;
        menuContainer.appendChild(table);

    });
});
function updateTotal(){
    const checkboxes=
}