import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Portfolio from './components/portfolio'
import Skills from './components/skills'
import Testimonials from './components/testimonials'
import Tools from './components/tools'

function App() {

  return (
    <>
    <div className='w-[1200px] justify-center items-center  mx-auto'>
      <Navbar/>
      <Hero/>
      <Contact/>
      <Portfolio/>
      <Testimonials/>
      <Skills/>
      <Tools/>
      <Footer/> 
    </div>
      

    </>
  )
}

export default App
