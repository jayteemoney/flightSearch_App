const Booking = () => {
  return (
    <>
      <div className=" bg-white font-serif px-[10px] ">
        <h2 className="text-3xl text-blue-950 font-bold mb-5">Information</h2>
        <p className="mb-5 text-blue-950">
          Whether you are all set to book your ticket or are looking for practical
          information after your booking, we got you covered!
        </p>

        <h4 className="text-blue-950 text-[22px] mb-10 z-10">
          Book and manage your trip
        </h4>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Service Card 1 */}
          <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
            <div className="flex flex-col items-center">
              <img
                src="/public/pic10.JPG"
                alt="destination"
                className="w-[100px] h-[100px] mx-auto "
              />
              <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Baggage</h4>
              <p className="my-4 text-center text-sm">
                All about your luggage, such as what you can and cannot
                bring and what to do if something goes wrong.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
            <div className="flex flex-col items-center">
              <img
                src="/public/pic11.JPG"
                alt="destination"
                className="w-[100px] h-[100px] mx-auto "
              />
              <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Destination and Deals</h4>
              <p className="my-4 text-center text-sm">
                Searching for the best deals on flights, hotels, and more?
                do not miss out on our offers to world wide top destinations!
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
            <div className="flex flex-col items-center">
              <img
                src="/public/pic12.JPG"
                alt="destination"
                className="w-[100px] h-[100px] mx-auto "
              />
              <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Find your destination</h4>
              <p className="my-4 text-center text-sm">
                Not sure on where to go next trip? Get inspired by our travel guide
                and find perfect destination!
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="bg-slate-50 border-blue-950 h-[300px] border transition duration-100 ease-in-out shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
            <div className="flex flex-col items-center">
              <img
                src="/public/pic13.JPG"
                alt="destination"
                className="w-[100px] h-[100px] mx-auto"
              />
              <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Ticket options and services</h4>
              <p className="my-4 text-center text-sm">
                Check our ticket types for groups, kids or students, and read all
                about travelling on public transport or our available payment methods.
              </p>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
            <div className="flex flex-col items-center">
              <img
                src="/public/pic14.JPG"
                alt="destination"
                className="w-[100px] h-[190px] mx-auto"
              />
              <h4 className="text-blue-950 mt- font-bold text-center text-xl">Managing your booking</h4>
              <p className="my-4 text-center text-sm">
                Check how to change, upgrade or cancel your flight, and how to make a name correction.
              </p>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
            <div className="flex flex-col items-center">
              <img
                src="/public/pic15.JPG"
                alt="destination"
                className="w-[100px] h-[100px] mx-auto"
              />
              <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Extra options for your trip</h4>
              <p className="my-4 text-center text-sm">
                Check out all our add-on options, to make your next flight with us just a little extra special
              </p>
            </div>
          </div>

          {/* Service Card 7 */}
          <div className="bg-slate-50 border-blue-950 border h-[300px] transition duration-100 ease-in-out shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
            <div className="flex flex-col items-center">
              <img
                src="/public/pic16.JPG"
                alt="destination"
                className="w-[100px] h-[100px] mx-auto"
              />
              <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Refund and compensation</h4>
              <p className="my-4 text-center text-sm">
                If your flight was delayed or cancelled, or your Baggage was delayed
                or damaged, you might be eligible for a refund or compensation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
