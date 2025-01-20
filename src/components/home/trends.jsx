import { Link } from "react-router-dom";

const Trends = () => {
    return (
      < >
         <h3 className="text-blue-950 text-3xl mt-[100px] font-bold text-center mb-[100px]">Stay up to date</h3>
        <div className="flex flex-wrap gap-4 justify-center items-center font-serif"> 
          <Link to="https://www.klm.com.ng/travel-guide/destinations">
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
            <img 
              src="/public/images/pic1.JPG" 
              alt="destination"
              className="max-w-full h-[300px] mx-auto "
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center ">Ready to travel?</h4>
            <p className="my-[20px] text-center ">Start Planning Your Trips And Dream Away At The Worlds Most Fascinating Destinations.</p>
          </div>
          </Link>
          <Link to="https://login.klm.com/enrol/flyingblue">
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
            <img 
              src="/public/images/pic2.JPG" 
              alt="destination"
              className="max-w-full h-[300px] mx-auto "
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">Join flying blue</h4>
            <p className="my-[20px] text-center">Save time booking flights, earn miles and receive special offers and deals</p>
          </div>
          </Link>
          <Link to="https://www.klm.com.ng/deals">
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
  
           <img 
             src="/public/images/pic3.JPG" 
             alt="destination"
             className="max-w-full h-[300px] mx-auto "
           />
           <h4 className="text-blue-950 mt-5 font-bold text-center">Discover the best deals</h4>
           <p className="my-[20px] text-center">Browse our selection of deals at the most favourables fares enjoy your deals.</p>
          </div>
          </Link>
          <Link to="https://www.klm.com.ng/deals?cabin=BUSINESS">
          <div className="border-blue-950 border transition duration-100 ease-in-out w-[460px] shadow-black shadow-md hover:scale-105 rounded-[10px] hover:cursor-pointer items-center">
            <img 
              src="/public/images/pic4.JPG" 
              alt="destination"
              className="max-w-full h-[300px] mx-auto "
            />
            <h4 className="text-blue-950 mt-5 font-bold text-center">World bBusiness Class</h4>
            <p className="my-[20px] text-center"> Travel in style with more privacy, comfort, and full attentionfrom our cabin crew.</p>
          </div>
          </Link>
        </div>
      </>
    );
  }
  
  export default Trends;
  