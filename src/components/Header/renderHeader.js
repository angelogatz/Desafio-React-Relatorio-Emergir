import './Header.css'
import logoFarmbox from '../../assets/logo-fb.png'
import { useContext } from 'react'
import { ContentDetailsContext } from '../../context/ContentDetailsContext';

const Header = () => {
  const { dataContentDetails } = useContext(ContentDetailsContext);

  if(!dataContentDetails) return null

  return (
    <header className="header">
        <div className="header-container">
            <div className="header-container-links">
                <h1><span><i className="fa-solid fa-clipboard-list"></i></span> Relatório de visita técnica - {dataContentDetails.details.date.split("-").reverse().join("/")}</h1>
                <a href="/"><img src={logoFarmbox} alt="fbimage"/></a>
            </div>
        </div>
    </header>
  )
}

export default Header