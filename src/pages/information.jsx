import Footer from "../components/home/footer";
import Booking from "../components/information/booking";
import Documents from "../components/information/documents";
import Help from "../components/information/help";
import Special from "../components/information/special";

const Information = () => {

    return (  
        <div className="">
            <Booking />
            <Documents />
            <Help />
            <Special />
            <Footer />
        </div>
    );
}
 
export default Information;