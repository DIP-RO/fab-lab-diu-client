
import { Link } from 'react-router-dom';
import './Slide.css'; // Import your CSS file

const Slide = () => {
    
    return (
        <div>
            
            <div className='w-full bg-base-200 fixed z-10'>
                <Link>
                <h1 className='annimation text-blue-800 underline mt-4 '>A WORKSHOP ON “DIGITAL FABRICATION FACILITIES FOR ADVANCE RESEARCH” WAS....</h1>
                </Link>
            
            </div>
        </div>
    );
};

export default Slide;