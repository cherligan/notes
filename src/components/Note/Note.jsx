import { useState } from "react";
import {BiAbacus} from "react-icons/bi"
import './Note.css'

export default function Note({title, time, onDelete, onEdit})
{
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(title)
  const [editText, setEditText] = useState("")
  const startEditing = () => { setIsEditing(true) }
  return(
    <>
    {!isEditing && 
      (
        <div className="note-preview" onClick={startEditing}>
          <span>{time}</span>
          <span>{title}</span>
          <button className="note-button" onClick={(e) => {e.stopPropagation(); onDelete()}}> <BiAbacus /></button>
        </div>
      ) 
    }
    {isEditing &&
      (
        <div className="note-edit">
          <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} placeholder="Название заметки" />
          <textarea value={editText} onChange={(e) => setEditText(e.target.value)} placeholder="Текст заметки" />
            <div className="note-edit-buttons">
                <button onClick={() => setIsEditing(false)}>Сохранить</button>
                <button onClick={() => setIsEditing(false)}>Отмена</button>
            </div>
        </div>  
      )
    }
    </>
  )
}