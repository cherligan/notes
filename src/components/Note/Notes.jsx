import "./Note.css"
export default function Notes({ notes, addNote, onCardClick })
{
  return(
    <div className="notes-grid"> 
        {notes.map(note => (
            <div key={note.id} className="card-note" onClick={() => onCardClick(note.id)}>{note.title}</div>
        ))}
        <div className="empty-note" onClick={addNote}> + </div>
    </div>
  )
}