const Trends = () => {
    return (
      < >
         <h3 className="text-blue-950 text-3xl mt-5 font-bold text-center mb-10">Stay up to date</h3>
        <div className="flex flex-wrap gap-[30px] justify-center items-center font-serif"> 
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
            <img 
              src="/public/pic1.JPG" 
              alt="destination"
              className="max-w-full h-[300px] mx-auto "
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center ">Ready to travel?</h4>
            <p className="my-[20px] text-center ">Start Planning Your Trips And Dream Away At The Worlds Most Fascinating Destinations.</p>
          </div>
          
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
            <img 
              src="/public/pic2.JPG" 
              alt="destination"
              className="max-w-full h-[300px] mx-auto "
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Join flying blue</h4>
            <p className="my-[20px] text-center">Save time booking flights, earn miles and receive special offers and deals</p>
          </div>
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
  
            <img 
              src="/public/pic3.JPG" 
              alt="destination"
              className="max-w-full h-[300px] mx-auto "
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Ready to travel?</h4>
            <p className="my-[20px text-center]">Start Planning Your Trips And Dream Away At The Worlds Most Fascinating Destinations.</p>
          </div>
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
            <img 
              src="/public/pic4.JPG" 
              alt="destination"
              className="max-w-full h-[300px] mx-auto "
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Ready to travel?</h4>
            <p className="my-[20px] text-center">Start Planning Your Trips And Dream Away At The Worlds Most Fascinating Destinations.</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Trends;
  