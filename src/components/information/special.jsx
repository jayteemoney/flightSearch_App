const Special = () => {
    return (
      <>
        <div className="px-[10px] bg-white font-serif mt-[100px]">
          <h4 className="text-blue-950 text-[22px] mb-10 z-10">
            Frequent flyers and corporate travellers
          </h4>
  
          {/* Service Cards Section */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            {/* Service Card 1 */}
            <div className="bg-slate-50 border-blue-950 border h-[150px] transition duration-100 ease-in-out w-[300px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Flying blue</h4>
                <p className="my-4 text-center text-sm">
                   Join flying blue to earn Miles anytime you fly and to enjoy benefits
                </p>
              </div>
            </div>
  
            {/* Service Card 2 */}
            <div className="bg-slate-50 border-blue-950 border h-[150px] transition duration-100 ease-in-out w-[300px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer p-4">
              <div className="flex flex-col items-center">
                <h4 className="text-blue-950 mt-5 font-bold text-center text-xl">Business Travel</h4>
                <p className="my-4 text-center text-sm">
                  Take off for Business with KLM and Air France. We provide a range of tailor-made solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Special;
  