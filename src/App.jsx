import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-grid-margin py-unit-12">
        <Hero />
        <Skills />
        <div className="grid grid-cols-1 md:grid-cols-2 mb-unit-16 md:gap-x-12">
          <Experience />
          <Education />
        </div>
        <Projects />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
