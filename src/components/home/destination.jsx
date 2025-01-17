const Destination = () => {
    return (  
      <div className="flex flex-col justify-center items-center min-h-screen text-center mt-[100px]">
        <h3 className="text-blue-950 text-3xl mt-5 font-bold">Destination and deals</h3>
        <p className="my-[20px] ">Explore the world with Miles. Book your reward tickets here</p>
        <img 
          src="https://media.istockphoto.com/id/157773670/photo/cruise-excursion-in-cozumel.jpg?s=612x612&w=0&k=20&c=rD321cvHfSzIiqlR7Imkb9PdpcErUjBwCs_YOkCXdgM=" 
          alt="destination"
          className="max-w-full h-[400px] mx-auto transition duration-100 ease-in-out hover:scale-105 rounded-[10px] hover:cursor-pointer"
        />
        <button className="border border-blue-900 rounded-[10px] p-[12px] bg-blue-200 mt-[20px] mb-10 sm:mt-[20px] text-bold text-center w-full sm:w-auto">
          Discover promo reward tickets
        </button>
      </div>
    );
  }
  
  export default Destination;
  