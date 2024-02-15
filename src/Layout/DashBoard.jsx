import { Link, Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";


const DashBoard = () => {
    return (
        <div>
        <Navbar></Navbar>
         <div className='flex flex-wrap mx-10'>
            <div className=' w-1/4 h-3/4 flex'>
            <div>
            <Link to="/profile"><button className="btn w-3/4 mx-5 my-2">Fab Charter</button></Link>
            <Link to="/dashboard/contact"><button className="btn w-3/4 mx-5 my-2">Contact</button></Link>
            <Link to="/dashboard/people"><button className="btn w-3/4 mx-5 my-2">People</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Membership Facilities</button></Link>
            <Link to="/profile"><button className="btn w-3/4 mx-5 my-2">Machineries</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Our Activites</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Project</button></Link>
            <Link to="/profile"><button className="btn w-3/4 mx-5 my-2">Research</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Events</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Image</button></Link>
            <Link to="/profile"><button className="btn w-3/4 mx-5 my-2">Order</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Ideas</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Rules</button></Link>
            <Link to="/profile"><button className="btn w-3/4 mx-5 my-2">Video</button></Link>
            <Link to="/profile/password"><button className="btn w-3/4 mx-5 my-2">Product</button></Link>
            <Link to="/profile/intra"><button className="btn w-3/4 mx-5 my-2">Intra</button></Link>
            
            </div>
            <div className="divider lg:divider-horizontal"></div>
            </div>
            
            <div className=' w-3/4 h-screen'>
                <Outlet></Outlet>
            </div>

         </div>
    </div>
    );
};

export default DashBoard;