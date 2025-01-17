import { Link } from "react-router-dom";



const Footer = () => {
    return (  
        <>
        <div className="flex items-center justify-center">
        <nav className="flex flex-col mt-[100px] bg-blue-100 sm:flex-row items-center justify-between text-blue-400 p-[10px] rounded-[5px] w-[1200px] border-gray-300 shadow-md">
        
          <Link to="/" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            Legal Information
          </Link>
          <Link to="/check-in" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            Privacy Statement
          </Link>
          <Link to="/my trip" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            Asessibility Statement
          </Link>
          <Link to="/information" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            copyright 2025 KLM
          </Link>
          <Link to="/information" className="block sm:inline-block p-2 hover:underline decoration-blue-300">
            Cookie Settings
          </Link>
        
      </nav>
        </div>
        </>
    );
}
 
export default Footer;