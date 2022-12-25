/* eslint-disable prettier/prettier */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Updates from './components/updates/updates';
import Speakers from './components/Speakers/Speakers';
import Sponsers from './components/Sponsors/sponsors';
import Footer from './components/footer/footer';
import About from './components/AboutUS/AboutUs';
import Faq from './components/faq/Faq';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Updates />
                <Sponsers />
<<<<<<< HEAD
                <Faq />
=======
                <Speakers />
>>>>>>> 936f88fa4d250c1de96269f86ba39c45b1c92334
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
