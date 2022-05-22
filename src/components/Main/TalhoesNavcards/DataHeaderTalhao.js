import { useContext } from 'react'
import TalhaoNavcard from '../../../Cards/HeaderTalhaoNavcards'
import { PlantationsContext } from '../../../context/plantationsContext'

export const TalhoesNavcards = () => {

    const { dataPlantations, loading, error } = useContext(PlantationsContext)

    if(loading === "loading"){

    }

    if(!dataPlantations) return null

  return (
    <>
        {dataPlantations.results.map((header, index) => (
            <TalhaoNavcard id={header.id} header={header} index={index} />
        ))}
    </>
  )
}

export default TalhoesNavcards