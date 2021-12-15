
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/principal/home';
import Home_Detalle from './components/detalle_proyecto/home.';
import Home_Login from './components/login/home';
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle" element={<Home_Detalle />} >
          <Route path=":id" element={<Home_Detalle />} />
        </Route>
        <Route path="/login" element={<Home_Login />} />
        <Route path='*' element={<NotFound />} />        
      </Routes>
    </BrowserRouter>
  );

}

export default App;