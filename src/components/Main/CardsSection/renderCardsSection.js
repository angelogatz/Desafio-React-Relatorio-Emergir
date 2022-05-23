
import AllNotes from '../NoteCards/AllNotes'
import TalhaoHeader from '../TalhoesHeader/TalhaoHeader'
import './renderCardsSection.css'

const RenderCardsSection = () => {
  return (
    <section className="section-cards">
      <h1>Anotações da fazenda</h1>
        <div className="section-cards-container">
            <AllNotes />
        </div>

        <div className="section-cards-container section-navcard">
            <TalhaoHeader />
        </div>
    </section>
  )
}

export default RenderCardsSection