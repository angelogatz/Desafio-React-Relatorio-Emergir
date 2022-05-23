import { useContext } from 'react'

import { NotesContext } from '../../../context/notesContext'
import RenderCard from '../../Cards/renderCard'

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