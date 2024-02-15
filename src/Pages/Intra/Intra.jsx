import Location from "../../Component/Location/Location";
import {
  RiArrowRightDoubleFill,
  RiAdminFill,
  RiTimeLine,
  RiChat3Fill,
} from "react-icons/ri";

const Intra = () => {
  const Data = {
    title: {
      label: "Intra University Idea",
      subLabel: null,
    },
    links: [
      { label: "Facilities", icon: RiArrowRightDoubleFill },
      {
        label: "Intra University",
        icon: RiArrowRightDoubleFill,
        color: "text-[#2e3094]",
      },
    ],
  };
  return (
    <div>
      <Location {...Data} />
      <section className="mx-72">
      <div >
        <h1 className="text-2xl font-semibold text-center text-black ">
          <span className="underline">INTRA</span> UNIVERSITY INNOVATIVE IDEA &
          PROJECT COMPETITION (IUIIPC)
        </h1>
        <div className="flex flex-row justify-between items-center mx-12">
          <div className="gap-5 flex">
            <h1 className="flex flex-row gap-2 items-center">
              <RiAdminFill /> Admin
            </h1>
            <h1 className="flex flex-row gap-2 items-center">
              <RiTimeLine /> September 18, 2022
            </h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <RiChat3Fill /> No comments
          </div>
        </div>
      </div>
      </section>
      <div className="flex items-center justify-center mt-5 ">
        <img
          className=" h-72"
          src="https://www2.kuet.ac.bd/fablab/wp-content/uploads/2022/09/banner-3-01-300x200.png"
          alt="Banner"
        />
      </div>
      <h1 className="text-center">
        “Intra-University Innovative Idea & Project Competition (IUIIPC)”
      </h1>
      <h1 className="text-center">
        Organized by: Fabrication Laboratory (Fab Lab), KUET
      </h1>
      <h1 className="text-center">
        Venue: Fab Lab, 4 th floor, Block A, New Academic Building, KUET
      </h1>

      <section className="mx-72 mt-10">
        <div className="flex gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="10" cy="" r="10" />
          </svg>
          <p>
            FABLAB KUET is one of the most promising places for providing
            facilities with contemporary technology. We are pleased to inform
            you that Fab Lab KUET is going to organize an event titled “-
            (Intra-University Innovative Idea & Project Competition (IUIIPC))”.
            The event will be organized with the support from , Ministry of
            Posts, Telecommunications, and Information Technology, Bangladesh.
          </p>
        </div>
        <div className=" mt-10">
          <p>
            The event aims to develop a project development and implementation
            process, where the students can get the experience to turn their
            innovative idea into reality. The competition also provides an
            opportunity for students to work with the latest fabrication tools
            and work under experienced persons to develop their target products.
            The competition comprises multiple rounds including primary and
            final selections.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>Key Features of Event:</p>
        </div>
        <div>
          <p>
            ➢ A golden opportunity to turn innovative ideas into reality.
            <br />
            ➢ Knowledge sharing and understanding of the process of project
            development.
            <br />➢ Develop your project using fabrication tools and feel the
            real experience.
          </p>
        </div>
      </section>
      <section className="mx-72 mt-10">
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>Key Information:</p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>There are Two Rounds:</p>
        </div>
        <div>
          <p>
            ✓ Primary Round: The students will submit the project proposal in
            the group. Each project will be evaluated and finally selected 15 to
            20 projects for group presentations.
            <br />✓ Final Round: After judging the project presentations, the
            top 5 to 7 groups will be selected for the project development
            phase. Here each group will work at Fab Lab KUET to implement their
            project as a real product.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Participation is open for the 2nd year to the 4th year ( 2K19 to
            2K17 ) students from all the departments of KUET.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>Each group is formed using Four (04).</p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            The choice of department and batch in group formation is
            unrestricted.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            On behalf of each group, only one participant (Group Leader) will
            register.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>Each group will submit only one project proposal.</p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            The project proposal should be submitted based on the prescribed
            format.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Fab Lab will provide technical support as much as possible during
            the project development phase.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            The project proposal should be realistic to be implemented within
            Two days the event schedule set up at the Fab Lab KUET.:
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Each of the finally selected and developed projects will be
            preserved at the Fab Lab KUET for further improvement. Fab Lab KUET
            will also try to provide support to those projects to attend
            national and international events.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>No Registration fee.</p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Registration kits, T-shirts, and refreshments will be provided
            during the event.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>There will be two rounds:</p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Primary Round: All you have to do is to submit your project
            proposal. We will by selecting the top 20 groups who will be present
            their project proposal and all of them will get certificates.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Final Round: After judging the project presentation top 5/7 groups
            will be selected for project implementation and. Our judges will
            select the top 3 groups for awards in this round.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Fab Lab will provide technical support as much as possible in the
            implementation of the project..
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Registration kits, T-shirts, and refreshments will be provided
            during the event.
          </p>
        </div>
        <div className="flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            The complete event schedule will be published soon on our social
            media platforms.
          </p>
        </div>
        <div className="flex gap-2 mt-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle cx="5" cy="8" r="5" />
          </svg>
          <p>
            Prize:
            <br />
            ➢ First Prize: 20,000 Taka
            <br />
            ➢ Second Prize: 15,000 Taka
            <br />
            ➢ Third Prize: 10,000Taka
            <br />➢ Moreover, the Top 15 to 20 groups will get the participation
            certificate.
          </p>
        </div>
        <p className="mt-20">So……Don’t miss this amazing opportunity.</p>
        <p className="mt-16">
          Group Registration and Proposal Submission Deadline: September 28.
          2022 (11:59 PM). Fill out the following registration form to
          participate: https://tinyurl.com/3966736j
        </p>
        <p className="mt-16">
          Prescribed Project Proposal Template ( use KUET domain Email ):
          <br />
          https://tinyurl.com/mrxb3mk5 <br /> For any further Query:
          fablab@kuet.ac.bd
        </p>

        <hr
          style={{
            background: "black",
            marginTop: "40px",
            height: "1px",
            border: "none",
          }}
        />
      </section>
      <section className="mx-72 mt-10">
        <h1 className="text-xl">POST NAVIGATION</h1>
        <div className="flex justify-between items-center mt-3 text-red-600">
          <p>Call for FabLab Student Operators-2021</p>
          <p>Call for Fab Lab Student Operators – 2023</p>
        </div>
        <hr
          style={{
            background: "black",
            marginTop: "40px",
            height: "1px",
            border: "none",
          }}
        />
      </section>
      <section className="mx-72 mt-10">
        <h1 className="text-xl">Leave a Reply</h1>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="flex gap-5 justify-center mt-4">
  <label htmlFor="comment">Comment</label>
  <textarea id="comment" className="h-96 w-full border"></textarea>
</div>
<div className="flex gap-5 mt-4">
  <label htmlFor="name">Name *</label>
  <input id="name" className="border w-1/2 h-14 ml-4"></input>
</div>
<div className="flex gap-5 mt-4">
  <label htmlFor="email">Email *</label>
  <input id="email" className="border w-1/2 h-14 ml-5"></input>
</div>
<div className="flex gap-5 mt-4">
  <label htmlFor="website">Website</label>
  <input id="website" className="border w-1/2 h-14 ml-3"></input>
</div>

        <div>
          <button className="btn ml-24 mt-5 bg-orange-500 text-white">POST COMMENT</button>
        </div>
      </section>
    </div>
  );
};

export default Intra;
