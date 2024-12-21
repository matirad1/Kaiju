document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        console.error('Todos los campos deben estar completos.');
        alert('Por favor, completa todos los campos.');
    } else {
        console.log('Formulario enviado correctamente.');
        alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    }
});

const productos = [
    'Kafka Hibino (Kaiju No.8)',
    'Kaiju No.9',
    'Teddiursa'
];

console.log('Lista de productos disponibles:');
productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto}`);
});

function crearListadoProductos() {
    const productos = [
        { nombre: 'Kafka Hibino (Kaiju No.8)', descripcion: 'Altura: 21cm. Detalles pintados a mano.' },
        { nombre: 'Kaiju No.9', descripcion: 'Altura: 21cm. Pintura con laca protectora.' },
        { nombre: 'Teddiursa', descripcion: 'Altura: 7cm. Figura coleccionable.' }
    ];

    const productosContainer = document.getElementById('productos');
    productos.forEach((producto) => {
        productosContainer.innerHTML += `
            <div class="card">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
            </div>
        `;
    });
}

crearListadoProductos();

fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
        const main = document.querySelector('main');
        data.forEach((producto) => {
            main.innerHTML += `
                <div class="card">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                </div>`;
        });
    })
    .catch((error) => console.error('Error al obtener datos:', error));

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function agregarAlCarrito(producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`${producto.nombre} añadido al carrito.`);
    }
    
    function mostrarCarrito() {
        console.log('Carrito:', carrito);}