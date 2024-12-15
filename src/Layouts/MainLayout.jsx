import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";
import Footer from "../componants/Footer/Footer";
import '../index.css'

const MainLayout = () => {
    return (
        <div className="poppins-font">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;