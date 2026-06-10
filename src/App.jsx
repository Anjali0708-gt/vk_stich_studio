import react from 'react';
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
function App()
{
  return(
    <>
      <BrowserRouter>
      <nav>
        <div className="logo">

        </div>

        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to='/service'>Service</Link>
         <Link to='/contact'>Contact</Link>
          <Link to='/gallery'>Gallery</Link>
          </div>
          </nav>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
    
    
  )
}

export default App;