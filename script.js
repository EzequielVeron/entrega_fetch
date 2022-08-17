const t_productos = document.getElementById("t_productos")

fetch('/productos.json')
.then (response =>response.json())
.then (productos=>{
    productos.forEach((producto, indice) => {
        t_productos.innerHTML += `
        <tr id="producto${indice+1}">
      <th scope="row">${indice+1}</th>
      <td>${producto.marca}</td>
      <td>${producto.producto}</td>
      <td>${producto.precio}</td>
      <td>${producto.stock}</td>
      <td><img src="/img/${producto.img}"></td>
      <td><button class="btn-btn">Comprar</td>
    </tr>    
        `
    });
})

async function mostrar_Productos (){
    const productos = await fetch ("/productos.json")
    const productosParseados= await productos.json()
    console.log(productosParseados)
    return productosParseados
}

boton1.addEventListener('click', mostrar_Productos)

boton1.addEventListener('click', () => {
    mostrar_Productos()
})