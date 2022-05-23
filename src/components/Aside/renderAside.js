import "./aside.css"
import { useContext } from "react"
import { ContentDetailsContext } from "../../context/ContentDetailsContext"
import { PlantationsContext } from "../../context/plantationsContext"
import { FarmContext } from "../../context/farmContext"

const Aside = () => {

    const { dataContentDetails } = useContext(ContentDetailsContext)
    const { plotsRainFall } = useContext(FarmContext)
    const { dataPlantations } = useContext(PlantationsContext)

    const handlePrint = () => {
        const btn = document.querySelector(".btn")
        btn.style.display = "none"
        window.print()
        btn.style.display = ""
    }

   return (
        
    <aside className="sidebar">
        <div className="sidebar-container">
            <div className="sidebar-container-links-top">
                <h2>Fazenda</h2>
                <h3>{dataContentDetails?.farm.name}</h3>
                <span>{dataPlantations?.results.length + plotsRainFall?.plots}Talhões</span>
                <iframe className="maps-google" src="https://maps.google.com/maps?q=checkplant&t=&z=19&ie=UTF8iwloc=&output=embed" frameBorder="0" scrolling="0" marginHeight="0" marginWidth="0" ></iframe>
                <div className="divisor-top"></div>
            </div>
            <div className="sidebar-container-links-meio">
                <div className="first-side-bar">
                    <div className="first-sidebar-content">
                        <h2>data da visita</h2>
                        <h3>{dataContentDetails?.details.date.split("-").reverse().join("/")}</h3>    
                    </div>

                    <div className="first-sidebar-content">
                        <h2>Safra</h2>
                        <h3>{dataContentDetails?.harvest.name}</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="second-sidebar">
                        <div className="second-sidebar-container">
                            <h2>Realizada por</h2>
                            <h4>{dataContentDetails?.owner.name}</h4>
                        </div>
                        <div className="second-sidebar-container">
                            <p>{dataContentDetails?.owner.initials}</p>
                        </div>
                    </div>

                    <div className="third-sidebar">
                        <div className="third-sidebar-container">
                            <h2>Pluviometria</h2>
                            <h4><i className="fa-solid fa-droplet"></i>{plotsRainFall?.rain_until_date}mm</h4>
                            <span>Acumulado na safra</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divisor-bottom"></div>
            <div className="sidebar-bottom-container">
                <div className="sidebar-bottom-container-links">
                    <h2 className="side-bottom-title">Observações</h2>
                    <p className="side-bottom-subtitle">{dataContentDetails?.details.observation}</p>
                </div>
            </div>
            <div className="divisor"></div>
            <button onClick={handlePrint} className="btn btn-printer"><i className="fa-solid fa-print"></i>imprimir</button>
        </div>
    </aside>
  )
}

export default Aside