import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Result from "./components/results/Result";
import WasteVideo2 from "./components/wastevideo/WasteVideo2";
import WasteVideo from './components/wastevideo/WasteVideo'
import Landing from "./components/Landing";
import './App.css'
import PredictionList from "./components/predictions/PredictionList";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/results" element={<Result/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video" element={<WasteVideo2/>}/>
          <Route path="/image" element={<WasteVideo/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/predictionlist" element={<PredictionList/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
