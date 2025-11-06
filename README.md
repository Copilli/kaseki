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

Siguientes pasos recomendados:
- Integrar un modelo/servicio para la identificación (p. ej. un endpoint de ML o un modelo WASM/TFJS)
- Guardar datos subidos y resultados en un backend o en localStorage
- Añadir tests y optimizar assets
