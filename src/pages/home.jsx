import { useState, useEffect } from "react";
import Destination from "../components/home/destination";
import Trends from "../components/home/trends";
import Services from "../components/home/services";
import Loginhome from "../components/home/login";
import Footer from "../components/home/footer";

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedArrival, setSelectedArrival] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(
          "https://api.aviationstack.com/v1/flights?access_key=e15c75a3d308970e300d73d7ae72b767"
        );
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          setFlights(data.data);

          const locations = new Set();
          data.data.forEach((flight) => {
            if (flight.departure?.airport) locations.add(flight.departure.airport);
            if (flight.arrival?.airport) locations.add(flight.arrival.airport);
          });

          setUniqueLocations([...locations]);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching flight data:", err);
        setError("Failed to fetch flight data");
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleSubmit = () => {
    if (selectedDeparture && selectedArrival) {
      const exactMatches = flights.filter(
        (flight) =>
          flight.departure?.airport?.toLowerCase().trim() ===
            selectedDeparture.toLowerCase().trim() &&
          flight.arrival?.airport?.toLowerCase().trim() ===
            selectedArrival.toLowerCase().trim()
      );

      if (exactMatches.length > 0) {
        setFilteredFlights(exactMatches);
      } else {
        const fallbackMatches = flights.filter(
          (flight) =>
            flight.departure?.airport?.toLowerCase().trim() ===
            selectedDeparture.toLowerCase().trim()
        );
        setFilteredFlights(fallbackMatches);
      }

      setFormSubmitted(true);
    } else {
      console.error("Please select both departure and arrival locations.");
    }
  };

  const handleBookNow = (index) => {
    setFilteredFlights((prevFlights) => prevFlights.filter((_, i) => i !== index));

    // If all cards are removed, reset the input fields
    if (filteredFlights.length === 1) {
      setSelectedDeparture("");
      setSelectedArrival("");
      setFormSubmitted(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-[1200px] mt-10 mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center gap-4 border border-gray-300 w-full max-w-xs h-12 rounded-lg hover:cursor-pointer hover:text-blue-400">
          <i className="fa fa-fighter-jet text-lg" aria-hidden="true"></i>
          <h1 className="text-lg font-bold">Book a Flight</h1>
        </div>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}

        {!loading && !error && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Search for Flights</h2>
            <div className="space-y-4">
              {/* Departure Dropdown */}
              <div>
                <label className="block text-lg font-medium">Departure Location:</label>
                <input
                  type="text"
                  value={selectedDeparture}
                  onClick={() => setShowDepartureDropdown(!showDepartureDropdown)}
                  readOnly
                  placeholder="Select departure location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {showDepartureDropdown && (
                  <ul className="mt-2 bg-white shadow-md border border-gray-300 rounded-md max-h-48 overflow-y-auto">
                    {uniqueLocations.map((location, index) => (
                      <li key={index}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedDeparture(location);
                            setShowDepartureDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                          {location}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Arrival Dropdown */}
              <div>
                <label className="block text-lg font-medium">Arrival Location:</label>
                <input
                  type="text"
                  value={selectedArrival}
                  onClick={() => setShowArrivalDropdown(!showArrivalDropdown)}
                  readOnly
                  placeholder="Select arrival location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {showArrivalDropdown && (
                  <ul className="mt-2 bg-white shadow-md border border-gray-300 rounded-md max-h-48 overflow-y-auto">
                    {uniqueLocations.map((location, index) => (
                      <li key={index}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedArrival(location);
                            setShowArrivalDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                          {location}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>

            {/* Filtered Flights */}
            {formSubmitted && filteredFlights.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Available Flights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFlights.map((flight, index) => (
              <div
              key={index}
              className="border p-4 rounded-lg shadow-md hover:bg-blue-50 font-serif"
            >
              <img
                src="https://thumbs.dreamstime.com/b/flying-aircraft-stylized-illus-3552676.jpg"
                alt="Airplane"
                className="h-[150px] w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">
                {flight.departure?.airport} to {flight.arrival?.airport}
              </h3>
              <p>Flight Number: {flight.flight?.number}</p>
              <p>Date: {flight.flight_date}</p>
              <p>Departure Time: {flight.departure?.scheduled}</p>
              <p>Arrival Time: {flight.arrival?.scheduled}</p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={() => handleBookNow(index)}
              >
                Book Now
              </button>
            </div>
            
                  ))}
                </div>
              </div>
            )}

            {formSubmitted && filteredFlights.length === 0 && (
              <div className="mt-6 text-red-500">
                No flights found for the selected locations.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Other Components */}
      <Destination />
      <Trends />
      <Services />
      <Loginhome />
      <Footer />
    </div>
  );
};

export default Home;
