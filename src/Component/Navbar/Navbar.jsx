import { Link } from "react-router-dom";
import { BsImage} from "react-icons/bs";
import { FaBoxOpen, FaPhotoVideo } from "react-icons/fa";
import { FcIdea, FcRules } from "react-icons/fc";
import { FiBox } from "react-icons/fi";

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 sticky z-10 top-0  px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost">
                    <figure ><img className='h-[50px] w-full ' src="https://i.ibb.co/DL5Pzm0/fablab-logo.png" alt="logo" /></figure>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li className="text-base font-semibold hover:bg-base-100"><a>Home</a></li></Link>
                    <li tabIndex={0} className="w-28">
                        <details>
                            <summary className="text-base font-semibold hover:bg-base-100 w-full" >About Us</summary>
                            <ul className="p-2 w-52">
                                <Link to='/fabCharter'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Fab Charter</a></li></Link>
                                <Link to='/contact'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Contact</a></li></Link>
                            </ul>
                        </details>
                    </li>
                    <Link to='/people'><li className="text-base font-semibold hover:bg-base-100"><a>People</a></li></Link>
                    <li tabIndex={0} className="w-28">
                        <details>
                            <summary className="text-base font-semibold hover:bg-base-100 w-full" >Facilities</summary>
                            <ul className="p-2 w-52">
                                <Link to='/membershipFacilities'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Membership Facilities</a></li></Link>
                                <Link to='/machineries'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Machineries</a></li></Link>
                                <Link to='/labFacilities'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Our Activites</a></li></Link>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0} className="w-24">
                        <details>
                            <summary className="text-base font-semibold hover:bg-base-100 w-full" >Project</summary>
                            <ul className="p-2 w-52">
                                <Link to='/project'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Complete</a></li></Link>
                                <Link to='/comingSoon'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Ongoing</a></li></Link>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0} className="w-28">
                        <details>
                            <summary className="text-base font-semibold hover:bg-base-100 w-full" >Research</summary>
                            <ul className="p-2 w-52">
                                <Link to='/comingSoon'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Published</a></li></Link>
                                <Link to='/comingSoon'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Ongoing</a></li></Link>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0} className="w-24">
                        <details>
                            <summary className="text-base font-semibold hover:bg-base-100 w-full" >Events</summary>
                            <ul className="p-2 w-52">
                                <Link to='/CompleteEvents'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Complete</a></li></Link>
                                <Link to='/comingSoon'><li className="text-base font-semibold hover:bg-base-100 hover:ml-2"><a>Upcoming</a></li></Link>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>

            <div className="navbar-end">
                <div className="flex gap-28">
                <Link to='/membership'><button className=" bg-[#2e3094] py-3 px-4 text-white rounded-xl sm:hidden">MEMBERSHIP</button></Link>
                <div className=" dropdown dropdown-bottom  dropdown-end sm:ml-5">
                    
                    <button tabIndex={0}>
                        <img className='h-[40px] w-[40px] ' src="https://i.ibb.co/QM8qsK3/menu.png" alt="logo" />
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu   rounded-box ">
                        <div>
                            <div className="card bg-base-100  w-80">
                                <div className="card-body grid grid-cols-2 gap-10">

                                    
                                    <Link to='/gallery'>
                                    <div className="btn bg-white border-0 hover:bg-white">
                                        <BsImage />
                                        <h2 className="card-title">image</h2>
                                    </div>
                                    </Link>
                                    
                                    <Link to='/materials'>
                                    <div className="btn bg-white border-0 hover:bg-white">
                                        <FaBoxOpen />
                                        <h2 className="card-title">Order</h2>
                                    </div>
                                    </Link>
                                    <Link to='/idea'>
                                    <div className="btn bg-white border-0 hover:bg-white">
                                        <FcIdea />
                                        <h2 className="card-title">Ideas</h2>
                                    </div>
                                    </Link>
                                    <Link to='/rules'>
                                    <div className="btn bg-white border-0 hover:bg-white">
                                        <FcRules />
                                        <h2 className="card-title">Rules</h2>
                                    </div>
                                    </Link>
                                    <Link to='/gallery'>
                                    <div className="btn bg-white border-0 hover:bg-white">
                                        <FaPhotoVideo />
                                        <h2 className="card-title">Video</h2>
                                    </div>
                                    </Link>
                                    <Link to='/product'>
                                    <div className="btn bg-white border-0 hover:bg-white">
                                        <FiBox />
                                        <h2 className="card-title">Product</h2>
                                    </div></Link>


                                </div>
                            </div>
                        </div>

                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;