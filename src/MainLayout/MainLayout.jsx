import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar";
import Footer from "../Pages/SharedPage/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;