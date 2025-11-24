const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const upload = multer({ dest: path.join(__dirname, 'uploads/') })
const app = express()
const PORT = process.env.PORT || 5000

// Ensure uploads folder exists
fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true })

// Simple CORS + preflight handling so the frontend (vite) can call the API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.sendStatus(200)
  next()
})

const MATERIAL_INFO = {
  Cerámica: {
    description: 'Fragmentos de cerámica (barro cocido). Pueden mostrar decoración, engobe, o características de fabricación que ayudan a tipificar cronológicamente.',
    typology: 'Vasijas, platos, tiestos, fragmentos decorados o utilitarios.',
    typical_context: 'Depósitos domésticos, basureros, contextos funerarios y ofrendas.',
    recommended_actions: 'Revisar morfología, análisis petrográfico y comparativa tipológica con catálogos regionales.',
    sources: [
      { title: 'Ceramic - Wikipedia', url: 'https://en.wikipedia.org/wiki/Ceramic' },
      { title: 'Portable Antiquities Scheme - Ceramics (UK)', url: 'https://finds.org.uk/learn/ceramics/' }
    ]
  },
  Piedra: {
    description: 'Material lítico (piedra trabajada o natural). Incluye herramientas, núcleos, lascas y objetos esculpidos.',
    typology: 'Herramientas de corte, percusión, núcleos y piezas utilitarias o rituales.',
    typical_context: 'Niveles de actividad, talleres y afloramientos cercanos.',
    recommended_actions: 'Registrar tipo de roca, tecnología lítica y realizar análisis de uso si es posible.',
    sources: [
      { title: 'Lithic tool - Wikipedia', url: 'https://en.wikipedia.org/wiki/Lithic_tool' },
      { title: 'Archaeology Data Service (ADS)', url: 'https://archaeologydataservice.ac.uk/' }
    ]
  },
  Hueso: {
    description: 'Material osteológico procedente de fauna o humano. Presenta características internas y externas que permiten su identificación.',
    typology: 'Restos óseos completos o fragmentados, artefactos modificados (punzones, agujas).',
    typical_context: 'Depósitos alimentarios, funerarios y contextos rituales.',
    recommended_actions: 'Evaluar anatómicamente y, si procede, enviar a análisis zooarqueológico o antropológico.',
    sources: [
      { title: 'Bone - Wikipedia', url: 'https://en.wikipedia.org/wiki/Bone' },
      { title: 'Smithsonian National Museum of Natural History', url: 'https://naturalhistory.si.edu/' }
    ]
  },
  Metal: {
    description: 'Objetos metálicos (fundidos, forjados, o laminados). Incluye aleaciones y evidencias de tratamientos superficiales.',
    typology: 'Utensilios, adornos, herramientas y restos de fundición.',
    typical_context: 'Talleres metalúrgicos, contextos funerarios y depósitos votivos.',
    recommended_actions: 'Examinar tipos de aleación, corrosión y considerar análisis elemental (p. ej. XRF).',
    sources: [
      { title: 'Metalworking - Wikipedia', url: 'https://en.wikipedia.org/wiki/Metalworking' },
      { title: 'The British Museum - Metal objects', url: 'https://www.britishmuseum.org/collection' }
    ]
  },
  Vidrio: {
    description: 'Material vítreo, a menudo asociado a recipientes o fragmentos vitrificados por procesos culturales o post-deposicionales.',
    typology: 'Fragmentos de recipientes, cuentas y vitrinas.',
    typical_context: 'Depósitos domésticos, contextos industriales o funerarios.',
    recommended_actions: 'Documentar color, grosor y posibles tratamientos; considerar análisis composicional.',
    sources: [
      { title: 'Glass - Wikipedia', url: 'https://en.wikipedia.org/wiki/Glass' },
      { title: 'Corning Museum of Glass', url: 'https://www.cmog.org/' }
    ]
  }
}

function hashNameToMaterial(name) {
  if (!name) name = 'file'
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h << 5) - h + name.charCodeAt(i)
  const materials = Object.keys(MATERIAL_INFO)
  const idx = Math.abs(h) % materials.length
  const material = materials[idx]
  return { material }
}

// Palabras clave por material para mejorar la búsqueda en CrossRef/filtrado
const SEARCH_KEYWORDS = {
  Cerámica: ['ceramic', 'ceramics', 'cerámica', 'cerámico', 'pottery', 'cerámica arqueológica'],
  Piedra: ['lithic', 'stone', 'stone tools', 'lítica', 'flint', 'chert', 'lascas', 'artefactos líticos'],
  Hueso: ['bone', 'osteology', 'zooarchaeology', 'hueso', 'osteológico'],
  Metal: ['metal', 'metallurgy', 'metalworking', 'metalurgia', 'aleación'],
  Vidrio: ['glass', 'Glaze', 'vidrio', 'glass fragments', 'vitreous']
}

app.post('/identify', upload.single('image'), (req, res) => {
  try {
    const file = req.file
    // If no file, return bad request
    if (!file) return res.status(400).json({ error: 'No image uploaded' })

    // In un sistema real, aquí se procesaría `file.path` con un modelo ML.
    // Para este mock usamos el nombre original para producir un resultado reproducible.
    const originalName = file.originalname || 'file'
    const id = hashNameToMaterial(originalName)
    const mat = id.material
    const info = MATERIAL_INFO[mat] || {}

    // Intenta enriquecer fuentes con búsqueda en CrossRef (artículos relacionados)
    async function buildResponse() {
      let sources = info.sources ? info.sources.slice() : []
      try {
        const cross = await fetchCrossRef(mat + ' archaeology')
        if (cross && cross.length) {
          // Añadir al final las entradas de CrossRef (title + doi link)
          cross.forEach(it => sources.push({ title: it.title, url: it.url }))
        }
      } catch (err) {
        console.warn('CrossRef fetch failed:', err.message)
      }

      res.json({
        material: mat,
        notes: 'Respuesta mock desde API. Reemplaza por un modelo real en producción.',
        description: info.description,
        typology: info.typology,
        typical_context: info.typical_context,
        recommended_actions: info.recommended_actions,
        sources
      })
    }

    buildResponse()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Busca artículos en CrossRef y devuelve hasta 3 resultados con {title, url}
async function fetchCrossRef(query) {
  // Usa la API pública de CrossRef; fetch results (larger set) and filter by keywords
  const url = `https://api.crossref.org/works?query.bibliographic=${encodeURIComponent(query)}&rows=10`
  const resp = await fetch(url, { headers: { 'User-Agent': 'Kaseki/1.0 (mailto:example@example.org)' } })
  if (!resp.ok) throw new Error('CrossRef response not ok')
  const json = await resp.json()
  const items = (json.message && json.message.items) || []

  // intentar inferir material a partir del query (si query incluye la palabra material)
  const qLower = query.toLowerCase()
  let guessedMaterial = null
  for (const mat of Object.keys(SEARCH_KEYWORDS)) {
    if (qLower.includes(mat.toLowerCase())) { guessedMaterial = mat; break }
  }

  // seleccione palabras clave relevantes
  const keywords = guessedMaterial ? SEARCH_KEYWORDS[guessedMaterial] : [query]

  // Filtrar items por presencia de alguna palabra clave en título o en subject
  const filtered = items.filter(it => {
    const title = (it.title && it.title[0] || '').toString().toLowerCase()
    const subjects = (it.subject || []).join(' ').toLowerCase()
    for (const kw of keywords) {
      const k = kw.toLowerCase()
      if (title.includes(k) || subjects.includes(k)) return true
    }
    // también aceptar si DOI o URL contienen la palabra clave
    if ((it.DOI || '').toLowerCase().includes(keywords[0].toLowerCase())) return true
    return false
  })

  const chosen = (filtered.length ? filtered : items).slice(0, 3)
  return chosen.map(it => {
    const doi = it.DOI
    const title = (it.title && it.title[0]) || (it['subtitle'] && it['subtitle'][0]) || 'Artículo'
    const link = doi ? `https://doi.org/${doi}` : (it.URL || '')
    return { title, url: link }
  })
}

// Endpoint para identificar civilización
app.post('/identify-civilization', upload.single('image'), async (req, res) => {
  try {
    const file = req.file
    if (!file) return res.status(400).json({ error: 'No image uploaded' })

    // Mock: usar nombre del archivo para simular identificación
    const civilizationGuess = await guessCivilizationFromImage(file)
    
    // Buscar información en la web sobre la civilización
    const civilizationData = await fetchCivilizationInfo(civilizationGuess)
    
    res.json(civilizationData)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Simula identificación de civilización (en producción usarías un modelo de IA)
async function guessCivilizationFromImage(file) {
  const name = file.originalname || 'artifact'
  const civilizations = ['Maya', 'Azteca', 'Inca', 'Egipcia', 'Romana', 'Griega', 'China', 'Mesopotamia', 'Olmeca']
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h << 5) - h + name.charCodeAt(i)
  const idx = Math.abs(h) % civilizations.length
  return civilizations[idx]
}

// Busca información de civilización usando Wikipedia API
async function fetchCivilizationInfo(civilizationName) {
  try {
    // Buscar en Wikipedia en español primero
    const searchUrl = `https://es.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(civilizationName + ' civilización')}&limit=1&format=json&origin=*`
    const searchResp = await fetch(searchUrl)
    const searchData = await searchResp.json()
    
    if (searchData[1] && searchData[1][0]) {
      const pageTitle = searchData[1][0]
      const pageUrl = searchData[3][0]
      
      // Obtener extracto de la página
      const extractUrl = `https://es.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&titles=${encodeURIComponent(pageTitle)}&format=json&origin=*`
      const extractResp = await fetch(extractUrl)
      const extractData = await extractResp.json()
      
      const pages = extractData.query.pages
      const pageId = Object.keys(pages)[0]
      const extract = pages[pageId].extract || ''
      
      // Parsear información básica del extracto
      const lines = extract.split('\n').filter(l => l.trim())
      const description = lines.slice(0, 3).join(' ').substring(0, 500)
      
      // Buscar artículos académicos relacionados
      const academicSources = await fetchCrossRef(civilizationName + ' civilization archaeology')
      
      return {
        civilization: civilizationName,
        description: description || `${civilizationName} es una civilización antigua importante en la historia de la humanidad.`,
        period: extractPeriod(extract),
        region: extractRegion(extract),
        characteristics: extractCharacteristics(extract),
        notes: 'Información obtenida de búsqueda web en tiempo real',
        sources: [
          { title: `${pageTitle} - Wikipedia`, url: pageUrl },
          ...academicSources
        ]
      }
    }
    
    // Fallback si no encuentra en Wikipedia
    return {
      civilization: civilizationName,
      description: `${civilizationName} es una civilización histórica. La información específica no está disponible en este momento.`,
      period: 'Período no especificado',
      region: 'Región por determinar',
      characteristics: 'Características en investigación',
      notes: 'Información limitada - se requiere más investigación',
      sources: []
    }
  } catch (err) {
    console.error('Error fetching civilization info:', err)
    return {
      civilization: civilizationName,
      description: 'Error al obtener información',
      period: 'N/A',
      region: 'N/A',
      characteristics: 'N/A',
      notes: 'Error en la búsqueda web',
      sources: []
    }
  }
}

// Extrae período temporal del texto
function extractPeriod(text) {
  const periodRegex = /(\d{1,4}\s*(?:a\.?\s*C\.?|d\.?\s*C\.?|AC|DC|BCE|CE))/gi
  const matches = text.match(periodRegex)
  if (matches && matches.length >= 2) {
    return `${matches[0]} - ${matches[1]}`
  } else if (matches && matches.length === 1) {
    return matches[0]
  }
  return 'Período no especificado'
}

// Extrae región geográfica del texto
function extractRegion(text) {
  const lines = text.split('\n')
  for (const line of lines) {
    if (line.toLowerCase().includes('ubicad') || 
        line.toLowerCase().includes('región') || 
        line.toLowerCase().includes('territorio') ||
        line.toLowerCase().includes('localizad')) {
      return line.substring(0, 200)
    }
  }
  return 'Región por determinar'
}

// Extrae características principales
function extractCharacteristics(text) {
  const lines = text.split('\n').filter(l => l.trim())
  const relevantLines = lines.slice(3, 6).join(' ')
  return relevantLines.substring(0, 300) || 'Características en investigación'
}

app.get('/', (req, res) => res.json({ ok: true, msg: 'Kaseki identification API with web search' }))

app.listen(PORT, () => {
  console.log(`Kaseki API with web search listening on http://localhost:${PORT}`)
})
