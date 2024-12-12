import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";
import Footer from "../componants/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;