import { useContext, useState } from "react"
import { NotesContext } from "../context/notesContext"
import Card from "./renderCard"

const RenderTalhao = ({ id, header, index}) => {

    const { notesPlantations } = useContext(NotesContext)
    
    const [linkActive, setLinkActive] = useState(index === 0)

    const handleArrow = () => {
       setLinkActive(!linkActive)
    }

    if(!notesPlantations) return null
    if(!id) return null
    if(!header) return null

  return (
    <>
        <div key={id} className="section-navcard-links">
            <div className="navcard-link-1">
                <h3>{header.plot.name}<sup className="side-baloom">{header.cycle}° ciclo</sup></h3>
                <span>{header.variety.name + " - " + header.area + " Ha"}</span>
                <p className="plantado">{header.state === "active" ? 'plantado' : ""}</p>
            </div>
            <div className="navcard-link-2">
                <div className="divisor-navcard"></div>
                <div className="info-link-card">
                    <div className="info-1">
                        <p >Data do plantio</p>
                        <p >Emergência </p>
                        <p >Colheita </p>
                    </div>
                    <div className="info-2">
                        <p>{header?.date !== null ? header.date.split("-").reverse().join("/") : "Data indisponível"}</p>
                        <p>{header?.emergence_prediction_date !== null ? header.emergence_prediction_date.split("-").reverse().join("/") : "Data indisponível"}</p>
                        <p>{header?.harvest_prediciton_date !== null ? header.harvest_prediction_date.split("-").reverse().join("/") : "Data indisponível"}</p>
                    </div>
                </div>
                <div className="divisor-navcard"></div>
            </div>
            <div className="divisor-navcard-mobile"></div>
            <div className="navcard-link-3">
                    <i onClick={handleArrow} className={!linkActive ? "uil uil-angle-up" : "uil uil-angle-down"} ></i>
            </div>
        </div>
        
        {notesPlantations.map((note) => (
            linkActive && note.location.id === id ?
            <Card nota={note} /> : ""
        ))}
    </>
  )
}

export default RenderTalhao