import './App.css'
import projects from './projectsData'
import PortfolioGrid from './components/PortfolioGrid'

function App() {
  return (
    <>
      <header className="portfolio-header">
        <h1>Alejandro Melo Flores</h1>
        <p>Project Portfolio</p>
      </header>

      <PortfolioGrid projects={projects} />
    </>
  )
}

export default App