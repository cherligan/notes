import "./Note.css"
export default function Notes({ notes, addNote})
{
  return(
    <div className="notes-grid"> 
        {notes.map(note => (
            <div key={note.id} className="card-note">{note.title}</div>
        ))}
        <div className="empty-note" onClick={addNote}> + </div>
    </div>
  )
}