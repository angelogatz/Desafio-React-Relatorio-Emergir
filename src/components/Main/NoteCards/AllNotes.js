import { useContext } from 'react'
import RenderCard from '../../../Cards/renderCard'
import { NotesContext } from '../../../context/notesContext'

const RenderAllNotes = () => {

  const { notesFarm } = useContext(NotesContext)

  if(!notesFarm) return null
  
  return (
    <>
      {notesFarm.map((note) => (
        <RenderCard nota={note} />
        ))}
    </>
  )
}

export default RenderAllNotes