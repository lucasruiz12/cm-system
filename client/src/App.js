import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
