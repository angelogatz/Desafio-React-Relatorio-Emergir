import { useContext } from 'react'
import RenderTalhao from '../../../Cards/renderTalhao'

import { PlantationsContext } from '../../../context/plantationsContext'

export const RenderTalhaoHeader = () => {

    const { dataPlantations, loading} = useContext(PlantationsContext)

    if(loading === "loading"){

    }

    if(!dataPlantations) return null

  return (
    <>
        {dataPlantations.results.map((header, index) => (
            <RenderTalhao id={header.id} header={header} index={index} />
        ))}
    </>
  )
}

export default RenderTalhaoHeader