import {BiAbacus} from "react-icons/bi"
export default function Note({title, time, onDelete, onEdit})
{
    return(
        <div className="note-preview" onClick={onEdit}>
            <span className="note-title">{title}</span>
            <span className="note-time">{time}</span>
            <button className="note-button" onClick={(e) => {e.stopPropagation(); onDelete();}}><BiAbacus /></button>
        </div>
    )
}