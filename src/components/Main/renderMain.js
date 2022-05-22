import { useContext } from 'react'
import { ContentDetailsContext } from '../../context/ContentDetailsContext'
import { FarmContext } from '../../context/farmContext'
import { NotesContext } from '../../context/notesContext'
import { PlantationsContext } from '../../context/plantationsContext'
import Aside from '../Aside/renderAside'
import Footer from '../Footer/Footer'
import Header from '../Header/renderHeader'
import Loading from '../Loading/Loading'
import './Main.css'
import MainContentCards from './MainContentCards/MainContentCards'

const Main = () => {

  const { contentDetailsIsLoading }  = useContext(ContentDetailsContext)
  const { farmContextIsLoading }  = useContext(FarmContext)
  const { notesContextIsLoading }  = useContext(NotesContext)
  const { plantationsContextIsLoading }  = useContext(PlantationsContext)

  return (
    <>
    {contentDetailsIsLoading && farmContextIsLoading && notesContextIsLoading && plantationsContextIsLoading 
    ? (<Loading /> )
    : (<>
        <Header />  
        <main className='main'>
            <section className='wrapper'>
              <Aside />
              <MainContentCards />
            </section>
        </main>
        <Footer />
      </>
      )}
    </>
  );
};

export default Main