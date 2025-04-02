import { Link } from "react-router-dom";

const Trends = () => {
  return (
    <section className="px-4 py-10">
      <h3 className="text-blue-950 text-3xl md:text-4xl font-bold text-center mb-10">
        Stay up to date
      </h3>

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-6xl mx-auto">
        {/* Card 1 */}
        <Link to="https://www.klm.com.ng/travel-guide/destinations">
          <div className="border border-blue-950 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-[450px]">
            <img
              src="/images/images/pic1.jpg"
              alt="destination"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg"
            />
            <h4 className="text-blue-950 font-bold text-center mt-4">
              Ready to travel?
            </h4>
            <p className="text-center mt-2">
              Start Planning Your Trips And Dream Away At The Worlds Most
              Fascinating Destinations.
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="https://login.klm.com/enrol/flyingblue">
          <div className="border border-blue-950 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-[450px]">
            <img
              src="/images/images/pic2.jpg"
              alt="destination"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg"
            />
            <h4 className="text-blue-950 font-bold text-center mt-4">
              Join Flying Blue
            </h4>
            <p className="text-center mt-2">
              Save time booking flights, earn miles, and receive special offers
              and deals.
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="https://www.klm.com.ng/deals">
          <div className="border border-blue-950 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-[450px]">
            <img
              src="/images/images/pic3.jpg"
              alt="destination"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg"
            />
            <h4 className="text-blue-950 font-bold text-center mt-4">
              Discover the best deals
            </h4>
            <p className="text-center mt-2">
              Browse our selection of deals at the most favorable fares and
              enjoy your trips.
            </p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to="https://www.klm.com.ng/deals?cabin=BUSINESS">
          <div className="border border-blue-950 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 p-4 w-full max-w-[450px]">
            <img
              src="/images/images/pic4.jpg"
              alt="destination"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg"
            />
            <h4 className="text-blue-950 font-bold text-center mt-4">
              World Business Class
            </h4>
            <p className="text-center mt-2">
              Travel in style with more privacy, comfort, and full attention
              from our cabin crew.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Trends;
