import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";
import Footer from "../componants/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-[1440px] m-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;