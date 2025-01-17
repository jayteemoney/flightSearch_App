const Services = () => {
  return (
     <>
      <h3 className=" text-blue-950 text-3xl mt-[100px] font-bold text-center mb-10 bg-white p-4  z-10">
        Looking for more than a flight?
      </h3>

      <div className="flex flex-wrap justify-center gap-8 mb-6">
        {/* Service Card 1 */}
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/pic5.JPG"
              alt="destination"
              className="w-[80px] h-[80px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Rent a car</h4>
            <p className="my-[20px] text-center">
              Book a car with Hertz at a favorable price and earn miles.
            </p>
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/pic6.JPG"
              alt="destination"
              className="w-[80px] h-[80px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Find your next stay</h4>
            <p className="my-[20px] text-center">
              Book your accomodation with booking.com and receive...
            </p>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/pic7.JPG"
              alt="destination"
              className="w-[80px] h-[80px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Park at the Airport.</h4>
            <p className="my-[20px] text-center">
              Reserve your parking spot in advance with free2move and earn...
              
            </p>
          </div>
        </div>

        {/* Service Card 4 */}
        <div className="bg-slate-100 border-blue-950 border transition duration-100 ease-in-out w-[260px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <img
              src="/public/pic8.JPG"
              alt="destination"
              className="w-[80px] h-[80px] mx-auto rounded-[50%]"
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Stay connected, anytime</h4>
            <p className="my-[20px] text-center">
              Want to be online while travelling? choose a data bundle and earn miles.
            </p>
          </div>
        </div>
      </div>

      {/* Discover More Button */}
      <div className="flex justify-center">
        <button className="border border-blue-500 rounded-[10px] p-[12px] bg-blue-200 mt-6 text-bold text-center w-full sm:w-auto">
          Discover more
        </button>
      </div>
    </>
  );
};

export default Services;
