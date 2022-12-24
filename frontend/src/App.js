import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/home';
import ProjetoPampraieiro from './pages/projetopampraieiro';
import QuemSomos from './pages/quemsomos';
import Portfolio from './pages/portfolio';
import NossaRede from './pages/nossarede';
import Contato from './pages/contato';
import Sucesso from './pages/sucesso';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/projetopampraieiro' element={<ProjetoPampraieiro />}></Route>
          <Route path='/quemsomos' element={<QuemSomos />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/nossarede' element={<NossaRede />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
          <Route path='/sucesso' element={<Sucesso />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
