function init() {
    var card = document.getElementById("card1")
    card = card.innerHTML = 
    `
        <div>
            <h1>Lista de productos...</h1>
            <h2 id="nombreproducto">Producto B:</h2>
            <input type="number" id="input1">
            <button onclick="agregarCarrito()" type="button" class="btn btn-success boton">Añadir</button>
        </div>
    `

}
function agregarCarrito(){
    var nombreP = document.getElementById("nombreproducto")
    var valor = document.getElementById("input1").value
    var carrito = document.getElementById("carrito")
    carrito = carrito.innerHTML=`<h1>valor:${valor} y nombre: ${nombreP} $</h1>
    
    `

}