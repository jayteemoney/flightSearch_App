import { Link } from "react-router-dom";
const Services = () => {
  return (
     <>
      <h3 className=" text-blue-950 text-3xl mt-[100px] font-bold text-center mb-10 bg-white p-4  z-10">
        Looking for more than a flight?
      </h3>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Service Card 1 */}
        <Link to="https://www.klm-mobility.com/en/home?clientId=597145#/searchcars">
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/images/pic5.JPG"
              alt="destination"
              className="w-[80px] h-[80px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Rent a car</h4>
            <p className="my-[20px] text-center">
              Book a car with Hertz at a favorable price and earn miles.
            </p>
          </div>
        </div>
        </Link>

        {/* Service Card 2 */}
        <Link to="https://sp.booking.com/index.html?aid=356081&label=KLM-homepage">
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/images/pic6.JPG"
              alt="destination"
              className="w-[80px] h-[80px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Find your next stay</h4>
            <p className="my-[20px] text-center">
              Book your accomodation with booking.com and receive...
            </p>
          </div>
        </div>
        </Link>

        {/* Service Card 3 */}
        <Link to="https://klm.free2move.com/en-IE/?utm_source=partenaire&utm_medium=klm&utm_campain=park&utm_content=websitehomepagepartnerpage&utm_terms=cta_services">
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/images/pic7.JPG"
              alt="destination"
              className="w-[80px] h-[80px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Park at the Airport.</h4>
            <p className="my-[20px] text-center">
              Reserve your parking spot in advance with free2move and earn...
              
            </p>
          </div>
        </div>
        </Link>

        {/* Service Card 4 */}
        <Link to="https://klm.shop.kolet.com/en?utm_source=klm&utm_medium=website&utm_campaign=partnerblock">
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/images/pic8.JPG"
              alt="destination"
              className="w-[60px] h-[60px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Stay connected, anytime</h4>
            <p className="my-[20px] text-center">
              Want to be online while travelling? choose a data bundle and earn miles.
            </p>
          </div>
        </div>
        </Link>
      </div>

      {/* Discover More Button */}
      <Link to="https://www.klm.com.ng/information/ticket-services/hotels-cars-activities">
      <div className="flex justify-center">
        <button className="border border-blue-500 rounded-[10px] p-[12px] bg-blue-200 mt-6 text-bold text-center w-full sm:w-auto">
          Discover more
        </button>
      </div>
      </Link>
    </>
  );
};

export default Services;
