const DEFAULT_API_GATEWAY_URL = 'http://localhost:3000'

export const CONFIG = {
  API_GATEWAY_URL: (import.meta.env.VITE_API_GATEWAY_URL || DEFAULT_API_GATEWAY_URL).replace(/\/$/, ''),
  MAX_RETRIES: 3,
  INITIAL_DELAY: 1000,
}

export const getKasekiIdentifyURL = () => `${CONFIG.API_GATEWAY_URL}/api/kaseki/identify`
