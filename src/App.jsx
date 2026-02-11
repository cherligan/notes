import { useState } from "react"
import Header from "./components/Header"
import Notes from "./components/Note/Notes"
export default function App() {
  const [notes, setNotes] = useState([])
  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Новая заметка"
    }
    setNotes(prev => [...prev, newNote])
  }
  return (
    <div>
      <Header />
      <main>
          <Notes notes={notes} addNote={addNote}/>
      </main>
    </div>
  )
}