const RenderCard = ({nota}) => {

  return (
    <div key={nota.id} className="section-card">
          <div className="section-card-links">
            <h2 className="cards-title"><i className="fa-solid fa-pencil"></i>Anotação</h2>
            <div className="images">
            {nota.attachments.images.map(el => 
                <img src={el.thumb_url} alt="placeholder" />
            )}
              
            </div>
            <p className="cards-subtitle">{nota.description}</p>
          </div>
    </div>
  )
}

export default RenderCard