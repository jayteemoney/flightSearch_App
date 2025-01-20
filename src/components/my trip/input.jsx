import { useState } from 'react';
import { FaUser } from 'react-icons/fa'; 

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track whether user clicked the "Log in" button

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true); // Update state to show the form when the button is clicked
  };

  return (
    <div className="bg-white flex gap-[80px] justify-around mt-[2px] font-serif text-3xl">
      <div className="sm:block md:block lg:flex justify-center mb-10">
        {/* Image Section (hidden on small screens) */}
        <div className="lg:w-[40vw] h-[80vh] mb-5 hidden lg:block">
          <img
            src="/images/images/pic9.jpg"
            className="object-cover rounded-[20px] shadow-[10px_10px_10px_rgba(0,0,0,0.5)] w-full h-full transition-transform duration-300 transform hover:scale-100"
          />
        </div>

        {/* Card Section */}
        <div className="lg:w-[40vw] sm:w-full h-auto px-10 py-6  rounded-lg ">
          <h2 className="text-center font-bold text-[30px] mb-4">Your Trip</h2>
          <p className="text-center text-gray-700 text-[20px] mb-6">Log in to view and manage your trip</p>

          <button
            className="w-full flex items-center justify-between bg-blue-500 text-white p-3 rounded-md mb-4 hover:bg-blue-600"
            onClick={handleLoginClick} // When button is clicked, set `isLoggedIn` to true
          >
            <FaUser className="text-white mr-2" />
            <span>Log into my account</span>
            <span className="text-2xl">›</span>
          </button>

          <p className="text-center text-gray-600 text-[20px] mb-6">Log in with booking details</p>

          {/* Render form only if isLoggedIn is true */}
          {isLoggedIn && (
            <form
              id="userForm"
              className="p-[50px] sm:text-center md:text-center lg:text-left"
              onSubmit={handleSubmit}
            >
              <label htmlFor="firstName" className="block text-sm mb-1">First Name:</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="p-[7px] border-[1px] border-black w-full rounded-[10px] mb-3"
              />

              <label htmlFor="lastName" className="block text-sm mb-1">Last Name:</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="p-[7px] border-[1px] border-black w-full rounded-[10px] mb-3"
              />

              <label htmlFor="email" className="block text-sm mb-1">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-[7px] border-[1px] border-black w-full rounded-[10px] mb-3"
              />

              <label htmlFor="password" className="block text-sm mb-1">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="p-[7px] border-[1px] border-black w-full rounded-[10px] mb-3"
              />

              <div className="flex items-center mb-[20px]">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="form-checkbox h-4 w-4"
                />
                <span className="ml-2 text-sm">I agree to the terms & conditions</span>
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="w-full p-[9px] border-none rounded-[10px] bg-blue-300 hover:bg-blue-350 text-white hover:cursor-pointer"
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
