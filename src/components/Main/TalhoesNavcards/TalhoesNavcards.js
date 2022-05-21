import { useState, useContext } from 'react'
import TalhaoNavcard from '../../../Cards/TalhaoNavcard'
import { PlantationsContext } from '../../../context/plantationsContext'





export const TalhoesNavcards = () => {

    const { dataPlantations } = useContext(PlantationsContext)
    // const [arrow, setArrow] = useState()

    

    if(!dataPlantations) return null

    

  return (
    <>
        {dataPlantations.results.map((header, index) => (
            <TalhaoNavcard header={header} index={index} />
        ))}
    </>
  )
}

export default TalhoesNavcards