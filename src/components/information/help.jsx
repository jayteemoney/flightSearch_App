const Help = () => {
    return (
      <>
        <div className="px-[10px] bg-white font-serif mt-[100px]">
          <h4 className="text-blue-950 text-[22px] mb-10 z-10">
            How can we help you?
          </h4>
  
          {/* Service Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Service Card 1 */}
            <div className="bg-slate-50 border-blue-950 border h-[200px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Contact us</h4>
                <p className="my-4 text-center text-sm">
                  We are here to help you with any question or request. Reach out to KLM customer contact center.
                </p>
              </div>
            </div>
  
            {/* Service Card 2 */}
            <div className="bg-slate-50 border-blue-950 border h-[200px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Flight status</h4>
                <p className="my-4 text-center text-sm">
                  Check out our flight tracker for live updates on all flights, up to 60 days in advance.
                </p>
              </div>
            </div>
  
            {/* Service Card 3 */}
            <div className="bg-slate-50 border-blue-950 border h-[200px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Travel alerts</h4>
                <p className="my-4 text-center text-sm">
                  Stay up to date about alerts and disruptions of our flights schedule that may affect your trip.
                </p>
              </div>
            </div>
  
            {/* Service Card 4 */}
            <div className="bg-slate-50 border-blue-950 h-[200px] border transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Stay informed</h4>
                <p className="my-4 text-center text-sm">
                  Receive real-time flights updates, subscribe to our newsletter, follow us on social media, or download the KLM app to manage your trip.
                </p>
              </div>
            </div>
  
            {/* Service Card 5 */}
            <div className="bg-slate-50 border-blue-950 border h-[200px] transition duration-100 ease-in-out w-full shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Bulletin Board</h4>
                <p className="my-4 text-center text-sm">
                  Stay up to date about new destinations, departure airports in your country, new aircraft types and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Help;
  