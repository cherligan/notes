import { useState } from "react"
import Header from "./components/Header"
import Notes from "./components/Note/Notes"
import "./index.css"
import "./components/Button/Button.css"
export default function App() {
  const [notes, setNotes] = useState(() => {
  try {
    const saved = localStorage.getItem("notes");
    if (!saved || saved === "undefined") {
      return [
        {
          id: Date.now(),
          title: "Простая заметка",
          text: "Простой текст для простой заметки чтобы не пустовала иначе скучно"
        }
      ];
    }
    return JSON.parse(saved);
  } catch {
    return [
      {
        id: Date.now(),
        title: "Простая заметка",
        text: "Простой текст для простой заметки чтобы не пустовала иначе скучно"
      }
    ];
  }
});
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [editingNote, setEditingNote] = useState(null)
  const isEditing = notes.some(n => n.id === editingNote?.id);
  const saveNotes = (newNotes) =>
  {
    setNotes(newNotes)
    localStorage.setItem("notes", JSON.stringify(newNotes))
  }

  const openOverlayForNew = () => 
  {
    const newNote = {id: Date.now(), title: "" , text: ""}
    setEditingNote(newNote)
    setOverlayOpen(true)
  }

  const openOverlayForExisting = (id) =>
  {
    const note = notes.find((n) => n.id === id)
    if (note)
    {
      setEditingNote({...note})
      setOverlayOpen(true)
    }
  }

  const handleSave = () =>
    {
      if (!editingNote.title && !editingNote.text) 
        {
          closeOverlay()
          return
        }
      const exists = notes.find((n) => n.id === editingNote.id)
      if (exists) 
        {
          const updatedNotes = notes.map((n) =>
            n.id === editingNote.id ? editingNote : n
          );
          saveNotes(updatedNotes)
        } 
      else 
        {
          saveNotes([...notes, editingNote])
        }
      closeOverlay()
  }
  const closeOverlay = () => 
  {
    setEditingNote(null)
    setOverlayOpen(false)
  }
  const deleteNote = (id) =>
  {
    saveNotes(notes.filter((n) => n.id !== id))
    if (editingNote?.id === id) closeOverlay()
  }
  return (
    <div>
      <Header />
      <main>
          <Notes notes={notes} addNote={openOverlayForNew} onCardClick={openOverlayForExisting} onDelete={deleteNote}/>
          {overlayOpen && editingNote &&
          (
            <div className="overlay" onClick={closeOverlay}>
              <div className="modal" onClick={e => e.stopPropagation()}>
                <h1> {isEditing ? "Редактирование" : "Новая заметка"}   </h1>
                <input type="text" maxLength={48} placeholder="Название" value={editingNote.title} onChange={(e) => setEditingNote({...editingNote, title: e.target.value})}/>
                <textarea placeholder="Текст" value={editingNote.text} onChange={(e) => setEditingNote({...editingNote, text: e.target.value})}/>
                <div className="row">
                  <button className="button" onClick={handleSave}>Сохранить</button>
                  <button className="button" onClick={closeOverlay}>Закрыть</button>
                </div>
                
              </div>
            </div>
          )}
      </main>
    </div>
  )
}