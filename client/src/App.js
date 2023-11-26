// import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Parcel from "./components/Parcel";
import { BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={< Home/>}/>
          <Route path="/Parcel" element={<Parcel />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
