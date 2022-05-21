



const TalhaoNavcard = ({header, index}) => {

  return (
        <div key={index} className="section-navcard-links">
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
                        <p>{header.date !== null ? header.date : "Data indisponível"}</p>
                        <p>{header.emergence_prediction_date !== null ? header.emergence_prediction_date : "Data indisponível"}</p>
                        <p>{header.harvest_prediciton_date !== null ? header.harvest_prediction_date : "Data indisponível"}</p>
                    </div>
                </div>
                <div className="divisor-navcard"></div>
            </div>

            <div className="divisor-navcard-mobile"></div>

            <div className="navcard-link-3">
                <i /*onClick={handleArrowChange}*/ className={"uil uil-angle-up"}></i>
            </div>
        </div>
  )
}

export default TalhaoNavcard