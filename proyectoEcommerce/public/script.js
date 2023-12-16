document.addEventListener('DOMContentLoaded', () => {
    // Obtener los datos de la base de datos al cargar la página
    fetchData();
  
    // Función para obtener datos de la base de datos
    async function fetchData() {
      try {
        const response = await fetch('api/obtenerProducto');
        const data = await response.json();
        console.log(data)
        // Llamar a la función para crear tarjetas con los datos recibidos
        createProductCards(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
  
    // Función para crear tarjetas con los datos de los productos
    function createProductCards(products) {
      const container = document.getElementById('productsContainer');
  
      container.innerHTML = '';
      products.forEach(product => {
        
        // creamos un producto
        container.innerHTML += `
        <div class="col  contenedorProducto">
          <div class="card miTarjeta border-black text-center" style="width: 18rem;">
            <h5 class="card-title text-uppercase">${product.name}</h5>
            <img src=${product.imagen} class="card-img-top" alt="postre">
            <div class="card-body">
              <p class="card-text fs-1">$${product.precio}</p>
              <a href="#" class="btn btn-dark">Añadir al carrito</a>
            </div>
          </div>
        </div>
        `;
  
      });
    }
  });