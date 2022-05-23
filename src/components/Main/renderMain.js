import { useContext } from 'react'
import { ContentDetailsContext } from '../../context/ContentDetailsContext'
import { FarmContext } from '../../context/farmContext'
import { NotesContext } from '../../context/notesContext'
import { PlantationsContext } from '../../context/plantationsContext'
import Aside from '../Aside/renderAside'
import Error from '../Error/Error'
import Footer from '../Footer/Footer'
import Header from '../Header/renderHeader'
import Loading from '../Loading/Loading'
import RenderCardsSection from './CardsSection/renderCardsSection'
import './renderMain.css'

const Main = () => {

  const { 
    contentDetailsIsLoading,
    contentDetailsContextError
     }  = useContext(ContentDetailsContext);

  const { 
    farmContextIsLoading,
    farmContextError
    }  = useContext(FarmContext);

  const { 
    notesContextIsLoading,
    notesContextError 
    }  = useContext(NotesContext);

  const { 
    plantationsContextIsLoading,
    plantationsContextError
    }  = useContext(PlantationsContext);

  const dataIsLoading = 
    contentDetailsIsLoading 
    && farmContextIsLoading 
    && notesContextIsLoading 
    && plantationsContextIsLoading 

  const dataError = 
    contentDetailsContextError 
    || farmContextError 
    || notesContextError 
    || plantationsContextError

  return (
    <>
    {dataIsLoading ?
    (<Loading /> ) :
    dataError ? ( <Error error={dataError} />) :
      (<>
        <Header />  
        <main className='main'>
            <section className='wrapper'>
              <Aside />
              <RenderCardsSection />
            </section>
        </main>
        <Footer />
      </>
      )}
    </>
  );
};

export default Main