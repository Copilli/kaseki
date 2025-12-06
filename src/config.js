// Configuración centralizada para la aplicación
export const CONFIG = {
  // API Keys
  GEMINI_API_KEY: "AIzaSyCMMuE8U4df6T4p1YKHFkhafp_FLfFJiRw",
  
  // URLs de API
  GEMINI_API_URL: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",
  
  // Configuraciones por defecto
  MAX_RETRIES: 3,
  INITIAL_DELAY: 1000
}

// Función helper para obtener la URL completa de Gemini
export const getGeminiURL = () => `${CONFIG.GEMINI_API_URL}?key=${CONFIG.GEMINI_API_KEY}`