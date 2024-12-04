# Pollos "El Güero"

Este es el repositorio del proyecto Pollos "El Güero", una aplicación web para la gestión de un restaurante de pollo frito.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio:

    ```sh
    git clone https://github.com/Kurisari/final_project_dweb.git
    cd pollos-el-guero
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

## Ejecución en Desarrollo

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```sh
npm start
```

Esto abrirá la aplicación en tu navegador en <http://localhost:3000>.

## Construcción para Producción

Para construir la aplicación para producción, ejecuta:

```sh
npm run build
```

Esto creará una carpeta build con los archivos optimizados para producción.

## Estructura del Proyecto

- `public/`: Contiene los archivos estáticos y el archivo `index.html`.
- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Contiene los componentes de React.
    - `Header.js`: Componente del encabezado.
    - `Footer.js`: Componente del pie de página.
    - `Home.js`: Componente de la página principal.
    - `Categorias.js`: Componente de las categorías de productos.
    - `Carrito.js`: Componente del carrito de compras.
    - `Admin.js`: Componente del panel de administración.
    - `ApiLoca.js`: Componente que muestra datos, trivia aleatoria e imagenes de gatos.
  - `assets/`: Contiene los recursos estáticos como imágenes y datos.
  - `App.js`: Componente principal de la aplicación.
  - `index.js`: Punto de entrada de la aplicación.

## Acceso a Páginas Específicas

Para acceder a las páginas de administración y ApiLoca, es necesario escribir las siguientes direcciones directamente en la barra de direcciones del navegador:

- **Página de Administración**: `http://localhost:3000/admin`
- **Página ApiLoca**: `http://localhost:3000/apiloca`

## Funcionalidades

- Página Principal: Muestra una bienvenida y un menú de productos.
- Categorías: Filtra productos por categorías.
- Carrito de Compras: Permite agregar y eliminar productos del carrito.
- Panel de Administración: Permite gestionar productos (crear, editar, eliminar).
- Api Loca: Muestra datos, imágenes de gatos y una trivia aleatoria usando APIs externas.

## Configuración de Proxy

El archivo `setupProxy.js` configura un proxy para redirigir las solicitudes API al backend:

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api-productos-lkpz.onrender.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};
```

## Nota sobre la API de Productos

La API utilizada para gestionar los productos puede cerrarse después de un tiempo de inactividad. Para asegurarte de que los productos se muestren correctamente, abre el siguiente enlace antes de usar la aplicación:

[https://api-productos-lkpz.onrender.com/productos](https://api-productos-lkpz.onrender.com/productos)

## Pruebas

Para ejecutar las pruebas, usa:

```sh
npm test
```

## Autores

- [@Kurisari](https://github.com/Kurisari)
- [@LuisDA39](https://github.com/LuisDA39)
