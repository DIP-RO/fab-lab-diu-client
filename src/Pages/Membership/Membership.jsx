
import { RiArrowRightDoubleFill } from "react-icons/ri";

import Location from '../../Component/Location/Location';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Style.css';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
const Membership = () => {



  const Data = {
    title: {
      label: 'Membership',
      subLabel: null,
    },
    links: [
      { label: null, icon: null },
      { label: 'Membership', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };



  return (
    <div>
      <Location {...Data} />

      <>
        <Swiper spaceBetween={30}
         mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
          <SwiperSlide> <div className="hero  min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hYFN1mN/45a3d48d6f59f3289e5777ffc91b0bfd.webp)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold w-full">Welcome to FabLab DIU</h1>
                <p className="mb-5">Learning how to make anything for innovation & industrial use</p>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLScJaeWllbsUMr6C9D5IVCYlQC71qVoUcgnCgJmFAK5JEtmifw/viewform'><button className="btn btn-primary">Join Us</button></Link>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wc6vjfx/faf9059f7bd95878524a99d2eac018a1.webp)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold w-full">Welcome to FabLab DIU</h1>
                <p className="mb-5">Learning how to make anything for innovation & industrial use</p>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLScJaeWllbsUMr6C9D5IVCYlQC71qVoUcgnCgJmFAK5JEtmifw/viewform'><button className="btn btn-primary">Join Us</button></Link>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hYFN1mN/45a3d48d6f59f3289e5777ffc91b0bfd.webp)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold w-full">Welcome to FabLab DIU</h1>
                <p className="mb-5">Learning how to make anything for innovation & industrial use</p>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLScJaeWllbsUMr6C9D5IVCYlQC71qVoUcgnCgJmFAK5JEtmifw/viewform'><button className="btn btn-primary">Join Us</button></Link>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide> <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/qCwcSnJ/85e5099deca8c14acd90a48c3d3c59b0.webp)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold w-full">Welcome to FabLab DIU</h1>
                <p className="mb-5">Learning how to make anything for innovation & industrial use</p>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLScJaeWllbsUMr6C9D5IVCYlQC71qVoUcgnCgJmFAK5JEtmifw/viewform'><button className="btn btn-primary">Join Us</button></Link>
              </div>
            </div>
          </div></SwiperSlide>
        </Swiper>
      </>



    </div>
  );
};

export default Membership;
