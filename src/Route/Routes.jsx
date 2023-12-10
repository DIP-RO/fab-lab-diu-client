import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import FabCharter from "../Pages/FabCharter/FabCharter";
import People from "../Pages/People/People";
import MembershipFacilities from "../Pages/MembershipFacilities/MembershipFacilities";

import News from "../Pages/News/News";
import Membership from "../Pages/Membership/Membership";
import Tools from "../Pages/Tools/Tools";
import Materials from "../Pages/Materials/Materials";
import Gallery from "../Pages/Gallery/Gallery";
import Idea from "../Pages/Idea/Idea";
import Rules from "../Pages/Rules/Rules";
import LabFacilities from "../Pages/LabFacilities/LabFacilities";
import Electronics from "../Pages/Tools/Electronics";
import HeavyMachineries from "../Pages/Tools/HeavyMachineries";
import PowerTools from "../Pages/Tools/PowerTools";
import OtherTools from "../Pages/Tools/OtherTools";
import Product from "../Pages/Product/Product";
import Project from "../Pages/Project/Project";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import Events from "../Pages/Events/Events";
import Image from "../Pages/Image/Image";
import DashBoard from "../Layout/DashBoard";
import DashBoardContact from "../Pages/Dashboard/DashBoardContact/DashBoardContact";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/fabCharter",
          element: <FabCharter></FabCharter>,
        },
        {
          path: "/people",
          element: <People></People>,
        },
        {
          path: "/membershipFacilities",
          element: <MembershipFacilities></MembershipFacilities>,
        },
        {
          path: "/product",
          element: <Product></Product>,
        },
        {
          path: "/news",
          element: <News></News>,
        },
        {
          path: "/membership",
          element: <Membership></Membership>,
        },
        {
          path: "/materials",
          element: <Materials></Materials>,
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/idea",
          element: <Idea></Idea>,
        },
        {
          path: "/rules",
          element: <Rules></Rules>,
        },
        {
          path: "/labFacilities",
          element: <LabFacilities></LabFacilities>,
        },
        {
          path: "/project",
          element: <Project></Project>,
        },
        {
          path: "/comingSoon",
          element: <ComingSoon ></ComingSoon>,
        },
        {
          path: "/CompleteEvents",
          element: <Events ></Events>,
        },
        {
          path: "/image",
          element: <Image></Image>,
        },

      ],
    },
    {
      path: "/machineries",
      element: <Tools></Tools>,
      children: [
        {
          path: "/machineries",
          element:<HeavyMachineries></HeavyMachineries>,
        },
        {
          path: "/machineries/electronics",
          element:<Electronics></Electronics>,
        },
        {
          path: "/machineries/powerTools",
          element: <PowerTools></PowerTools>,
        },
        {
          path: "/machineries/otherTools",
          element: <OtherTools></OtherTools>,
        },
      ],
      
    },
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "/dashboard",
          element: <h1 className=" text-center text-3xl font-bold mt-20">Welcome To Dashboard</h1>,
        },
        {
          path: "/dashboard/contact",
          element:<DashBoardContact></DashBoardContact>,
        },
      ],
    } 
  ]);
  