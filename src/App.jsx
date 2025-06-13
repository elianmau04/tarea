import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio.jsx';
import OfertaCursos from './OfertaCursos.jsx';

function App() {
  return (
    <Router>
      <div className="container-fluid" style={{ backgroundColor: '#302727', minHeight: '100vh' }}>

        <header className="bg-dark text-white p-3 text-center">
          <h1>Academia de Baile "Sergio el Bailador"</h1>
          <p>Elian Mauricio Ibañez Solis</p>
        </header>
        <nav
  className="p-2 d-flex justify-content-center gap-4"
  style={{ backgroundColor: '#ba2d2d' }}
>
  <Link
    to="/"
    style={{ color: 'White', fontWeight: 'bold', textDecoration: 'none' }}
  >
    INICIO
  </Link>
  <Link
    to="/oferta"
    style={{ color: 'White', fontWeight: 'bold', textDecoration: 'none' }}
  >
    OFERTA DE CURSOS
  </Link>
</nav>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/oferta" element={<OfertaCursos />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center p-3">
          © 2025 Academia "Sergio el Bailador"--ELIAN IBANEZ SOLIS
        </footer>
      </div>
    </Router>
  );
}

export default App;
