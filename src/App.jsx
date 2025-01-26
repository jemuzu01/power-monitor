import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout} from './layout/layout';
import { Administration } from './pages/Administration/Administration';
import { Italian } from './pages/Italian/Italian';
import { ElectricalTech } from './pages/ElectricalTech/ElectricalTech';
import { Automotive } from './pages/Automotive/Automotive';
import { Manufacturing } from './pages/Manufacturing/Manufacturing';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="administration" element={<Administration />} />
        <Route path="italian" element={<Italian />} />
        <Route path="electrical" element={<ElectricalTech />} />
        <Route path="automotive" element={<Automotive />} />
        <Route path="manufacturing" element={<Manufacturing />} />
      </Route>
     </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
