import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Vintage from './pages/Vintage';
import Home from './pages/Home';
import Footer from "./components/Footer";
import Latest2 from './pages/Latest2';
import Hybrid from './pages/Hybrid';
import Electric from './pages/Electric';
import Diesel from './pages/Diesel';



function App() {
  return (
   <div className="App">
    <Header />
     <Routes>
     <Route path="/" element={<Home  />} />
     <Route path="/vintage" element={<Vintage />} />
     <Route path='/latest' element ={<Latest2 />  } />
     <Route path='/hybrid' element={<Hybrid /> } />
     <Route path='/electric' element={<Electric /> } />
     <Route path='/diesel' element ={<Diesel />}/>
     </Routes>
     <Footer />
    </div>
   
  );
}

export default App;
