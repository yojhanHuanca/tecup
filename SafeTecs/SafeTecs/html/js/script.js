const formulario = document.getElementById('formulario');
const qrcodeDiv = document.getElementById('qrcode');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const carrera = document.getElementById('carrera').value.trim();
    const id = document.getElementById('id').value.trim();

    if (!nombre || !email || !carrera || !id) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Aquí generamos la URL con los parámetros del formulario
    const url = `bienvenida.html?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&carrera=${encodeURIComponent(carrera)}&id=${encodeURIComponent(id)}`;

    qrcodeDiv.innerHTML = '';  // Limpiar el contenedor

    // Crear la imagen para mostrar (puedes poner una URL de código de barras si lo prefieres)
    const img = document.createElement('img');
    img.src = "https://tse3.mm.bing.net/th?id=OIP.8Cyugbg4T3I3ipbYDG4iGwHaFy&pid=Api&P=0&h=180";  // Cambia esta URL por la imagen o código de barras que desees
    img.alt = "Imagen generada";
    qrcodeDiv.appendChild(img);

    // Mostrar la imagen por 4 segundos y luego redirigir
    setTimeout(() => {
        window.location.href = url;
    }, 4000);  // Redirige después de 4 segundos
});
