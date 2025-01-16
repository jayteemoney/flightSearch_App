import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckIn from './pages/checkIn';
import MyTrip from './pages/myTrip';
import Information from './pages/information';
import Home from './pages/home';
import Navbar from './components/home/nav';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509803874385-db7c23652552?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8fDA%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Ensure the image covers the whole viewport height
          backgroundAttachment: 'fixed', // Keeps the background fixed when scrolling
        }}
      >
        <nav>
          <Navbar />
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/my-trip" element={<MyTrip />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
