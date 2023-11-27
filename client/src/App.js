// import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Parcel from "./components/Parcel";
import About from "./components/About";
import { BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={< Home/>}/>
          <Route path="/Parcel" element={<Parcel />}/>
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
