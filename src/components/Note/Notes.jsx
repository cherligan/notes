import { FaTrash } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import "./Note.css"
export default function Notes({ notes, addNote, onCardClick, onDelete })
{
  return(
    <div className="notes-grid"> 
        {notes.map(note => (
            <div key={note.id} className="card-note" onClick={() => onCardClick(note.id)}>
                {note.title}
                <button className="delete-btn" onClick={(e) => {e.stopPropagation(); onDelete(note.id);}}><FaTrash /></button>
            </div>
        ))}
        <div className="empty-note" onClick={addNote}> <MdOutlineAdd size={36}/> </div>
    </div>
  )
}