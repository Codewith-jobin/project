import './App.css';
import Home from './components/Home';
import Loginn from './components/Loginn';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Findings from './components/componentsin/Findings';
import Features from './components/componentsin/Features';
import Settings from './components/componentsin/Settings';
import Account from './components/componentsin/Account';
import Newws from './components/componentsin/Newws';
import Search from './components/componentsin/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginn/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/findings" element={<Findings/>}/>
        <Route path="/news" element={<Newws/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/setting" element={<Settings/>}/>







      </Routes>
    </Router>
    
   
  );
}

export default App;
