import Aside from '../Aside/renderAside'
import Header from '../Header/renderHeader'
import './Main.css'
import MainContentCards from './MainContentCards/MainContentCards'


const Main = () => {
  return (
    <>
      <Header />  
      <main className='main'>
          <section className='wrapper'>
            <Aside />
            <MainContentCards />
          </section>
      </main>
    </>
  )
}

export default Main