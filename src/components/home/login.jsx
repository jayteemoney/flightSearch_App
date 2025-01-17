const Loginhome = () => {
    return (
      <>
        <div className="max-w-[1200px] mt-[100px] mx-auto p-[10px] bg-white rounded-lg shadow-lg shadow-black">
          <h4 className="text-blue-950 mt-5 font-bold text-center">
            Looking for special deals?
          </h4>
          <div className="flex flex-col sm:flex-row justify-around">
            <p className="mt-[30px] text-center sm:text-left">
              Sign up here to receive personalized offers and travel inspiration
              right in your inbox
            </p>
            <button className="border border-blue-900 rounded-[10px] p-[12px] mt-4 sm:mt-0 text-bold text-center w-full sm:w-auto">
              Sign up now
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Loginhome;
  