# Kaseki - Identificación de materiales arqueológicos (React)

Proyecto UI mínimo en React + Vite para identificar materiales arqueológicos a partir de una imagen.

Estructura principal:
- `index.html` - entrada con Bootstrap CDN
- `src/main.jsx` - montado de React
- `src/App.jsx` - rutas y páginas
- `src/pages/Home.jsx` - página de inicio (plantilla tipo Blog)
- `src/pages/About.jsx` - página About con 5 cuadros
- `src/pages/Identify.jsx` - subida de imagen, vista previa y área de resultados
- `src/components/NavBar.jsx` - navegación

Cómo ejecutar (Windows PowerShell o cmd):

```powershell
cd C:\Users\yaren\Downloads\Kaseki
npm install
npm run dev
```

Abre http://localhost:5173/ en tu navegador.

API mock (identificación)
-------------------------
El proyecto incluye un servidor Express mock en `server/index.js` que expone `POST /identify`.
Para ejecutarlo (en otra terminal):

```powershell
cd C:\Users\yaren\Downloads\Kaseki
npm run server
```

El frontend intentará enviar la imagen a `http://localhost:5000/identify`. Si el servidor no está disponible, el cliente usará un fallback mock local.

API enriquecida
---------------
El endpoint `POST /identify` ahora devuelve información más extensa sobre el material detectado (ejemplo mock):

- `material`: nombre del material (ej. "Cerámica").
- `description`: descripción amplia del material.
- `typology`: tipos o formas típicas.
- `typical_context`: contextos arqueológicos habituales.
- `recommended_actions`: pasos recomendados para documentación o análisis.
- `sources`: array de {title,url} con enlaces específicos.

El cliente muestra estos campos en la página de Identificación. Esto hace que la respuesta sea más útil para arqueólogos y conservadores porque no solo devuelve una etiqueta, sino también contexto y recursos para investigación complementaria.

Siguientes pasos recomendados:
- Integrar un modelo/servicio para la identificación (p. ej. un endpoint de ML o un modelo WASM/TFJS)
- Guardar datos subidos y resultados en un backend o en localStorage
- Añadir tests y optimizar assets
