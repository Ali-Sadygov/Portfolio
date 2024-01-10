import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Skills from './pages/Skills';
import Projects from './pages/Projects'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <Router>
        <div style={{backgroundColor: "#1C1B18"}}>
          <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path='/skills' element={<Skills/>}/>
              <Route path='/projects' element={<Projects/>}/>
            </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;

          

            