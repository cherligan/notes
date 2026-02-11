import { useState } from "react"
import Header from "./components/Header"
import Notes from "./components/Note/Notes"
import "./index.css"
import "./components/Button/Button.css"
export default function App() {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: "простая заметка"
    }
  ])
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [activeNoteId, setActiveNoteId] = useState(null)
  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Новая заметка"
    }
    setNotes(prev => [...prev, newNote])
  }
  const openOverlay = (id) => 
  {
    setActiveNoteId(id)
    setOverlayOpen(true)
  }
  const closeOverlay = () => 
  {
    setActiveNoteId(null)
    setOverlayOpen(false)
  }
  return (
    <div>
      <Header />
      <main>
          <Notes notes={notes} addNote={addNote} onCardClick={openOverlay}/>
          {overlayOpen && 
          (
            <div className="overlay" onClick={closeOverlay}>
              <div className="modal" onClick={e => e.stopPropagation()}>
                <h1>Редактирование {activeNoteId} </h1>
                <input type="text" placeholder="Название" />
                <textarea placeholder="Текст" />
                <div className="row">
                  <button className="button" onClick={closeOverlay}>Сохранить</button>
                  <button className="button" onClick={closeOverlay}>Закрыть</button>
                </div>
                
              </div>
            </div>
          )}
      </main>
    </div>
  )
}