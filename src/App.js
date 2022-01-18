import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import About from './pages/About/About'
import Footer from './Components/Footer/Footer'
import Questions from './pages/Questions/Questions'
import Goals from './pages/Goals/Goals'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <section className="app__body">
          <div className="app__body--container">
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/questions" element={<Questions />} />
              <Route exact path="/definitions" element={<Goals />} />
            </Routes>
          </div>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
