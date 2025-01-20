const Documents = () => {
    return (
      <>
        <div className="px-[10px] bg-white font-serif mt-[100px]">
          <h4 className="text-blue-950 text-[22px] mb-10 z-10">
            Get ready to travel
          </h4>
  
          {/* Service Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Service Card 1 */}
            <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/images/pic17.jpg."
                  alt="destination"
                  className="w-[100px] h-[100px] mx-auto "
                />
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Travel Documents</h4>
                <p className="my-4 text-center text-sm">
                  Check which travel documents you need to bring for a smooth trip
                </p>
              </div>
            </div>
  
            {/* Service Card 2 */}
            <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/images/pic18.jpg"
                  alt="destination"
                  className="w-[100px] h-[100px] mx-auto "
                />
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">At the airport</h4>
                <p className="my-4 text-center text-sm">
                  Where you can drop off your baggage, where the lounges are, and what travel documents to bring.
                </p>
              </div>
            </div>
  
            {/* Service Card 3 */}
            <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/images/pic19.jpg"
                  alt="destination"
                  className="w-[100px] h-[100px] mx-auto "
                />
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Onboard experience and services</h4>
                <p className="my-4 text-center text-sm">
                  What to expect during your flight: seats, meals, WiFi, and all other onboard services.
                </p>
              </div>
            </div>
  
            {/* Service Card 4 */}
            <div className="bg-slate-50 border-blue-950 h-[300px] border transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/images/pic20.jpg"
                  alt="destination"
                  className="w-[50px] h-[50px] mx-auto"
                />
                <h4 className="text-blue-950  font-bold text-center text-xl">Travelling with kids and babies</h4>
                <p className="my-4 text-center text-sm">
                  Here is anything you need to know for a stress-free flight and preparation for you and your children.
                </p>
              </div>
            </div>
  
            {/* Service Card 5 */}
            <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/images/pic21.jpg"
                  alt="destination"
                  className="w-[100px] h-[190px] mx-auto"
                />
                <h4 className="text-blue-950 mt- font-bold text-center text-xl">Travelling with pets</h4>
                <p className="my-4 text-center text-sm">
                  Make a reservation for your dog or cat and prepare them for their journey in cabin or hold.
                </p>
              </div>
            </div>
  
            {/* Service Card 6 */}
            <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/images/pic22.jpg"
                  alt="destination"
                  className="w-[100px] h-[100px] mx-auto"
                />
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Assistance and health</h4>
                <p className="my-4 text-center text-sm">
                  Whether you need a wheelchair or want to know what to do for a child traveling alone, we will help out.
                </p>
              </div>
            </div>
  
            {/* Service Card 7 */}
            <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <img
                  src="/images/images/pic23.jpg"
                  alt="destination"
                  className="w-[100px] h-[100px] mx-auto"
                />
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Sustainability</h4>
                <p className="my-4 text-center text-sm">
                  Being an airline comes with responsibility. Here is our commitment to creating a more sustainable future of aviation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Documents;
  