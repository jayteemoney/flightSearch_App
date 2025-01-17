import { useState, useEffect } from 'react';
import Destination from '../components/home/destination';
import Trends from '../components/home/trends';
import Services from '../components/home/services';
import Loginhome from '../components/home/login';
import Footer from '../components/home/footer';


const Home = () => {
  // State for managing flight data, selected airport, and loading states
  const [flights, setFlights] = useState([]);
  const [selectedDepartureAirport, setSelectedDepartureAirport] = useState('');
  const [selectedArrivalAirport, setSelectedArrivalAirport] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        // const response = await fetch('https://api.aviationstack.com/v1/flights?access_key=ac7e4420837504b1d2da9d31f698e9e5');
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setFlights(data.data);  // Save the fetched data to state
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching flight data:', err);
        setError('Failed to fetch flight data');
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  // Handle dropdown click to toggle showing the options
  const handleDepartureInputClick = () => {
    setShowDepartureDropdown(!showDepartureDropdown);
  };

  const handleArrivalInputClick = () => {
    setShowArrivalDropdown(!showArrivalDropdown);
  };

  // Select airport from dropdown and set selected value
  const handleSelectDepartureAirport = (airport) => {
    setSelectedDepartureAirport(airport);
    setShowDepartureDropdown(false); // Hide the dropdown after selection
  };

  const handleSelectArrivalAirport = (airport) => {
    setSelectedArrivalAirport(airport);
    setShowArrivalDropdown(false); // Hide the dropdown after selection
  };

  // Validate the form to ensure both airports are selected
  const validateForm = () => {
    return selectedDepartureAirport && selectedArrivalAirport;
  };

  return (
    <div className='px-[40px] font-serif'>
    <div className="max-w-[1200px] mt-[300px] mx-auto p-6 bg-white rounded-lg shadow-lg">
    <div className="flex items-center gap-4 border border-gray-300 w-[180px] h-[50px]  rounded-[10px] hover:cursor-pointer hover:text-blue-400">
      <i className="fa fa-fighter-jet" aria-hidden="true"></i>
      <h1 className="text-[17px] w-[140px] py-2 font-bold mb-6 mt-4">
        Book a flight
     </h1>
    </div>

  
    {loading && <div>Loading...</div>}
    {error && <div className="text-red-500">{error}</div>}
  
    {!loading && !error && flights.length === 0 && <div>No flight data available</div>}
  
    {flights.length > 0 && (
      <div>
        <h2 className="text-xl font-semibold mb-4">Select a flight to view details</h2>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Departure Airport */}
          <div>
            <label className="block text-lg font-medium">Departure Airport:</label>
            <input
              type="text"
              value={selectedDepartureAirport}
              onClick={handleDepartureInputClick}
              readOnly
              placeholder="Select Departure Airport"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showDepartureDropdown && (
              <ul className="mt-2 bg-white shadow-md border border-gray-300 rounded-md">
                {flights.map((flight, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleSelectDepartureAirport(flight.departure?.airport)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      {flight.departure?.airport}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
  
          {/* Arrival Airport */}
          <div>
            <label className="block text-lg font-medium">Arrival Airport:</label>
            <input
              type="text"
              value={selectedArrivalAirport}
              onClick={handleArrivalInputClick}
              readOnly
              placeholder="Select Arrival Airport"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {showArrivalDropdown && (
              <ul className="mt-2 bg-white shadow-md border border-gray-300 rounded-md">
                {flights.map((flight, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleSelectArrivalAirport(flight.arrival?.airport)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      {flight.arrival?.airport}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            disabled={!validateForm()}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    )}
  </div>
  <Destination/>
  <Trends />
  <Services/>
  <Loginhome />
  <Footer />

  </div>
 
  );

};

export default Home;
