const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de plantillas (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas principales
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home - Tu E-commerce',
        page: 'home' 
    });
});

app.get('/product/:id', (req, res) => {
    res.render('productDetail', { 
        title: 'Detalle del Producto',
        page: 'product',
        productId: req.params.id 
    });
});

app.get('/cart', (req, res) => {
    res.render('productCart', { 
        title: 'Carrito de Compras',
        page: 'cart' 
    });
});

app.get('/register', (req, res) => {
    res.render('register', { 
        title: 'Registro',
        page: 'register' 
    });
});

app.get('/login', (req, res) => {
    res.render('login', { 
        title: 'Login',
        page: 'login' 
    });
});

// Ruta para manejar errores 404
app.use((req, res) => {
    res.status(404).render('error404', { 
        title: 'Página no encontrada',
        page: 'error' 
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log('Presiona Ctrl+C para detener el servidor');
});
