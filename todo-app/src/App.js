
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './pages/dashbord/Dashbord';
import Connexion from './pages/Connexion/Connexion';
import Enregistrement from './pages/Enregistrement/Enregistrement';
import Ttaches from './pages/Ttaches/Ttaches';
import Aujourdhui from './pages/Aujourd\'hui/Aujourdhui';
import Attente from './pages/EnAttente/Attente';
import Pomodoro from './pages/pomodoro/Pomodoro';

function App() {
  return (
    <BrowserRouter>
        
        <Routes>
          
          <Route path="/alltasks" element={<Ttaches />}/>
          <Route path="/todaytasks" element={<Aujourdhui />}/>
          <Route path="/attente" element={<Attente />}/>
          <Route path="/pomodoro" element={<Pomodoro />}/>
          <Route path="/dashbord" element={<Dashbord />}/>
          <Route path="/enregistrement" element={<Enregistrement />}/>
          <Route path="/" element={<Connexion />}/>
        </Routes>
     </BrowserRouter>

  );
}

export default App;
