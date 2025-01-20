import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="border border-gray-300 shadow-lg bg-slate-50 font-serif " >
      <div className="flex justify-between p-4 ">
        <div className="flex gap-3">
          <img src="/public/images/KLM logo.jpg" alt="logo" className="h-8 mt-7" />
          <p className="mt-9 text-[20px] text-blue-400">Royal Dutch Airlines</p>
        </div>
        <Link to=''>
        <div className="flex items-center gap-[20px] mt-7 hover:bg-[#b4d8dd] rounded-[3]">
          <i className="fa fa-user-plus"></i>
          <strong className="ml-2">Log in</strong>
        </div>
        </Link>
      </div>

      {/* Button for small screens */}
      <button
        onClick={toggleMenu}
        className="sm:hidden absolute left-4 top-4 p-2 text-black"
      >
        ☰
      </button>

      <nav className="flex flex-col sm:flex-row items-center justify-between text-black p-[10px] rounded-sm w-full border-gray-300 shadow-md">
        <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block w-full`}>
          <Link to="/" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            Home
          </Link>
          <Link to="/my-trip" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            My Trip
          </Link>
          <Link to="/information" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            Information
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
