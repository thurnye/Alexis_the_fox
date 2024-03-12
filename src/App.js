import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
