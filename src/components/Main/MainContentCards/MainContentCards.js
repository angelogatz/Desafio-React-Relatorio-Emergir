
import PlantationsFarmCards from '../PlantationsFarmCards/PlantationsFarmCards'
import TalhoesNavcards from '../TalhoesNavcards/DataHeaderTalhao'

import './MainContentCards.css'

const MainContentCards = () => {
  return (
    <section className="section-cards">
      <h1>Anotações da fazenda</h1>
        <div className="section-cards-container">
            <PlantationsFarmCards />
        </div>

        <div className="section-cards-container section-navcard">
            <TalhoesNavcards />
        </div>
    </section>
  )
}

export default MainContentCards