import { Link } from "react-router-dom";

const Trends = () => {
  return (
    <>
      <h3 className="text-blue-950 text-3xl mt-[100px] font-bold text-center mb-[100px]">
        Stay up to date
      </h3>
      <div className="flex flex-wrap gap-6 justify-center items-center font-serif">
        <Link to="https://www.klm.com.ng/travel-guide/destinations">
          <div className="border-blue-950 border w-[460px] shadow-black shadow-md rounded-[10px] hover:cursor-pointer p-4">
            <img
              src="/images/images/pic1.jpg"
              alt="destination"
              className="max-w-full h-[300px] mx-auto rounded-lg mb-4"
            />
            <h4 className="text-blue-950 font-bold text-center">Ready to travel?</h4>
            <p className="mt-4 text-center">
              Start Planning Your Trips And Dream Away At The Worlds Most Fascinating Destinations.
            </p>
          </div>
        </Link>
        <Link to="https://login.klm.com/enrol/flyingblue">
          <div className="border-blue-950 border w-[460px] shadow-black shadow-md rounded-[10px] hover:cursor-pointer p-4">
            <img
              src="/images/images/pic2.jpg"
              alt="destination"
              className="max-w-full h-[300px] mx-auto rounded-lg mb-4"
            />
            <h4 className="text-blue-950 font-bold text-center">Join flying blue</h4>
            <p className="mt-4 text-center">
              Save time booking flights, earn miles and receive special offers and deals.
            </p>
          </div>
        </Link>
        <Link to="https://www.klm.com.ng/deals">
          <div className="border-blue-950 border w-[460px] shadow-black shadow-md rounded-[10px] hover:cursor-pointer p-4">
            <img
              src="/images/images/pic3.jpg"
              alt="destination"
              className="max-w-full h-[300px] mx-auto rounded-lg mb-4"
            />
            <h4 className="text-blue-950 font-bold text-center">
              Discover the best deals
            </h4>
            <p className="mt-4 text-center">
              Browse our selection of deals at the most favorable fares and enjoy your deals.
            </p>
          </div>
        </Link>
        <Link to="https://www.klm.com.ng/deals?cabin=BUSINESS">
          <div className="border-blue-950 border w-[460px] shadow-black shadow-md rounded-[10px] hover:cursor-pointer p-4">
            <img
              src="/images/images/pic4.jpg"
              alt="destination"
              className="max-w-full h-[300px] mx-auto rounded-lg mb-4"
            />
            <h4 className="text-blue-950 font-bold text-center">World Business Class</h4>
            <p className="mt-4 text-center">
              Travel in style with more privacy, comfort, and full attention from our cabin crew.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Trends;
