import './PlantationsFarmCards.css'
import { useContext } from 'react'
import Card from '../../../Cards/Card'
import { NotesContext } from '../../../context/notesContext'

const MainContentFarmCards = () => {

  const { notesFarm } = useContext(NotesContext)

  if(!notesFarm) return null
  
  return (
    <>
      {notesFarm.map((note) => (
        <Card nota={note} />
        ))}
    </>
  )
}

export default MainContentFarmCards