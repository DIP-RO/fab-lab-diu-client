import RecentEvent from "../../Component/RecentEvent/RecentEvent";
import { RiArrowRightDoubleFill } from "react-icons/ri";

import Location from '../../Component/Location/Location';

const Events = () => {
    const Data = {
        title: {
          label: 'Complete Events',
          subLabel: null,
        },
        links: [
          { label: 'Events', icon: RiArrowRightDoubleFill},
          { label: 'Complete Events', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div>
             <Location {...Data} />
            <RecentEvent/>
        </div>
    );
};

export default Events;