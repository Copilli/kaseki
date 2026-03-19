# Kaseki - Identificacion de materiales arqueologicos

Frontend en React + Vite para analizar imagenes arqueologicas consumiendo exclusivamente `copilli-api-gateway`.

Estructura principal:
- `src/pages/Identify.jsx` - carga de imagen y consumo del endpoint de Kaseki
- `src/config.js` - configuracion del gateway
- `.env` / `.env.example` - configuracion de acceso local o servicio desplegado

Desarrollo:

```powershell
cd C:\Users\yaren\Downloads\Kaseki
npm install
npm run dev
```

Variables de entorno:
- `VITE_API_GATEWAY_URL`: base del gateway

Endpoint consumido por la app:
- `POST /api/kaseki/identify`
