import './PlantationsFarmCards.css'
import { useContext } from 'react'
import Card from '../../../Cards/Card'
import { NotesContext } from '../../../context/notesContext'


const MainContentFarmCards = () => {

  const { notesFarm, notesPlantations } = useContext(NotesContext)


  if(!notesFarm) return null
  if(!notesPlantations) return null
  
  return (
    <>
      {notesFarm.map((note) => (
        <Card nota={note} />
      ))}
      {notesPlantations.map((note) => (
        <Card nota={note} />
      ))}
    </>
  )
}

export default MainContentFarmCards