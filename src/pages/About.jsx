import React, { useState } from 'react'

const initialCards = Array.from({length:5}).map((_,i)=>({
  id: i,
  image: `https://picsum.photos/seed/about-${i}/600/400`,
  info: `Descripción breve para el elemento ${i+1}`
}))

export default function About(){
  const [cards, setCards] = useState(initialCards)

  function handleImageChange(e, idx){
    const file = e.target.files && e.target.files[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setCards(prev => prev.map(c => c.id === idx ? {...c, image: ev.target.result} : c))
    }
    reader.readAsDataURL(file)
  }

  function handleInfoChange(e, idx){
    const val = e.target.value
    setCards(prev => prev.map(c => c.id === idx ? {...c, info: val} : c))
  }

  return (
    <div>
      <h2 className="mb-4">About Us</h2>

      <p className="text-muted">Aquí puedes agregar hasta cinco elementos con imagen e información descriptiva. Sube una imagen y edita el texto debajo de cada cuadro.</p>

      <div className="row gy-4">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <div className="card about-card h-100 shadow-sm">
              <div className="card-img-top img-placeholder" style={{backgroundImage:`url(${card.image})`}}></div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Elemento {card.id + 1}</h5>

                <div className="mb-2">
                  <label className="form-label small">Cambiar imagen</label>
                  <input type="file" accept="image/*" className="form-control form-control-sm" onChange={(e)=>handleImageChange(e, card.id)} />
                </div>

                <textarea className="form-control mb-2" rows={3} value={card.info} onChange={(e)=>handleInfoChange(e, card.id)} />

                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <small className="text-muted">Preview local</small>
                  <button className="btn btn-outline-primary btn-sm" onClick={()=>navigator.clipboard?.writeText(card.info)}>Copiar info</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
