import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiMiniSignal } from "react-icons/hi2";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import DashBoardEditContact from "./DashBoardEditContact";

const DashBoardContact = () => {
    return (
        <div>
            <div className="mx-14 flex justify-between items-center">
                <input className="w-1/2 h-10 rounded-[35px] mt-5 px-5 border border-black" type="text" placeholder="Search" />
            </div>
            <div className="grid grid-cols-2 gap-5 m-10">
                <button className="  border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200" onClick={()=>document.getElementById('my_modal_5').showModal()}>
                    
                    <div className="flex justify-center my-5">
                        <FaLocationDot className="text-[#2e3094] text-3xl" />
                    </div>
                    <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
                        <h1 className=" mt-5 font-semibold text-3xl"> Meet Us At</h1>
                        <h1 className=" mt-5 font-semibold text-2xl">DIU FABLAB & INNOVATION LAB</h1>
                        <h1 className=" mt-5 text-xl">Daffodil International University</h1>
                    </div>
                    <DashBoardEditContact></DashBoardEditContact>
                </button>
                <div className=" border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200">
                    <div className="flex justify-center my-5">
                        <FaPhoneAlt className="text-[#2e3094] text-3xl" />
                    </div>
                    <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
                        <h1 className=" mt-5 font-semibold text-3xl"> Phone Number</h1>
                        <h1 className=" mt-5 font-semibold text-2xl">+880 1*************</h1>
                    </div>
                </div>
                <div className=" border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200">
                    <div className="flex justify-center my-5">
                        <MdEmail className="text-[#2e3094] text-3xl" />
                    </div>
                    <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
                        <h1 className=" mt-5 font-semibold text-3xl"> Email Us</h1>
                        <h1 className=" mt-5 font-semibold text-2xl">fablab@diu.edu.bd</h1>

                    </div>
                </div>
                <div className=" border-spacing-0.5 border-gray-700 border  mx-5 rounded-lg bg-base-200">
                    <div className="flex justify-center my-5">
                        <HiMiniSignal className="text-[#2e3094] text-3xl" />
                    </div>
                    <div className="text-center border-spacing-0.5 border-gray-700 border-t my-10">
                        <h1 className=" mt-5 font-semibold text-3xl"> Connect With Us</h1>
                        <h1 className=" mt-5 font-semibold text-2xl text-center flex justify-center gap-5">
                            <FaFacebook className="text-[#2e3094] text-3xl" /> <BsTelegram className="text-[#2e3094] text-3xl" /> <BsLinkedin className="text-[#2e3094] text-3xl" />
                        </h1>


                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default DashBoardContact;