import React from 'react';
import DashBoardAddPeople from './DashBoardAddPeople';
import DashBoardEditPeople from './DashBoardEditPeople';
import Swal from 'sweetalert2'
const DashBoardPeople = () => {
  const people = [
    {
      "Name": "Prof. Dr. Syed Akhter Hossain",
      "Role": "Chief Advisor",
      "Designation": "Dean of FSIT and Professor of CSE",
      "Department": "Daffodil International University",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/6eba66b8e2f13de1437cf1930e065b22.webp"
    },
    {
      "Name": "Professor Dr. Touhid Bhuiyan",
      "Role": "Advisor",
      "Designation": "Head",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/89f8418e21689e7d89bf09596bd3bc4e.webp"

    },
    {

      "Name": "Professor Dr. Shaikh Muhammad Allayear",
      "Role": "Advisor",
      "Designation": "Head",
      "Department": "Department of Multimedia & Creative Technology",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/a2a085364d5a5941ac84eae21a4cc320.webp"

    },
    {

      "Name": "Professor Md. Khairul Enam",
      "Role": "Advisor",
      "Designation": "Head",
      "Department": "Department of Architecture",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/f115aada217005333cd48a3887142ce0.webp"

    },
    {

      "Name": "Professor Dr. Md. Shahid Ullah",
      "Role": "Advisor",
      "Designation": "Head",
      "Department": "Department of Electrical and Electronic Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/1779b23c6d2d7694d864ca9dc895d41c.webp"

    },
    {

      "Name": "Dr. Mohammad Hannan Mahmud Khan",
      "Role": "Advisor",
      "Designation": "Head",
      "Department": "Department of Civil Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/a7243cc358e6cd9b761198e7b69eacef.webp"

    },
    {

      "Name": "Professor Dr. Sheak Rashed Haider Noori",
      "Role": "Advisor",
      "Designation": "Associate Head",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/97f577f5b01f1f3174a2283f18479d10.webp"

    },
    {

      "Name": "Dr. S. M. Aminul Haque",
      "Role": "Convener",
      "Designation": "Associate Professor and Associate Head",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/e32fe302af6bf61ad9e058b72609590e.webp"

    },
    {

      "Name": "Engineer Golam Rabbany",
      "Role": "Lab in-charge",
      "Designation": "Lecturer",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/a40214ec29b9d8605235197e68905190.webp"

    },
    {

      "Name": "Md. Shamsuzzaman Miah",
      "Role": "Lab Officer",
      "Designation": "Technical Officer",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/7206c1ef43f1548be1446d85bb5351ef.webp"

    },
    {

      "Name": "Mr. Kazi Jahid Hasan",
      "Role": "Advisor (Graphics Design)",
      "Designation": "Lecturer",
      "Department": "Department of Multimedia & Creative Technology (MCT)",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/e3867b23c3b09b9995e4ea58b167800e.webp"

    },
    {

      "Name": "Mr. Md. Shafiul Islam",
      "Role": "Advisor (Digital Marketing)",
      "Designation": "Lecturer",
      "Department": "Department of Architecture",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/caf577bcb44fa5de6b2a459c7653ec0c.webp"

    },
    {

      "Name": "Mr. Galib Nur Anan",
      "Role": "Advisor",
      "Designation": "Lecturer",
      "Department": "Department of Architecture",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/28ab678eb28e127fbcf7346b494d903c.webp"

    },
    {

      "Name": "Engr. Md. Imran Hasan Bappy",
      "Role": "Advisor",
      "Designation": "Lecturer",
      "Department": "Department of Civil Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/e50489d97a94c5fce8704a368f74d18b.webp"

    },
    {

      "Name": "Ms Sutapa Debnath",
      "Role": "Advisor",
      "Designation": "Senior Lecturer",
      "Department": "Department of Electrical & Electronic Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/1c2b0db22960bea04e6e3bfba183002b.webp"

    },
    {

      "Name": "Md. Aslamuzzaman Bappy",
      "Role": "Advisor from Student Forum",
      "Designation": "Student",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/ff812cbd326b3c151672151c2f081b7b.webp"

    },
    {

      "Name": "Gazi Md. Ashiqur Rahman",
      "Role": "Programmer",
      "Designation": "Student",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/coming-soon.webp"

    },
    {

      "Name": "Md. Rafiqul Islam",
      "Role": "PCB Designer",
      "Designation": "Student",
      "Department": "Department of Electrical and Electronic Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/coming-soon.webp"

    },
    {

      "Name": "Orin Tasfia",
      "Role": "Student",
      "Designation": "Student",
      "Department": "Department of Computer Science and Engineering",
      "img": "https://daffodilvarsity.edu.bd/images/lab-committee/coming-soon.webp"

    }
  ]
  const handleDelete = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div>
      <div className="mx-14 flex justify-between items-center">
        <input className="w-1/2 h-10 rounded-[35px] mt-5 px-5 border border-black" type="text" placeholder="Search" />
        <button className="btn btn-sm bg-[#2e3094] hover:bg-[#2e3094] text-white" onClick={() => document.getElementById('modal_add_people').showModal()} >Add People</button>
      </div>
      <div className='flex justify-center p-5 m-5'>
        <div className='grid grid-cols-2 gap-5'>
          {
            people.map((person, index) => (
              <button onClick={() => document.getElementById('my_modal_4').showModal()} key={index} className="card w-80 bg-base-100 shadow-xl border-slate-950 border-spacing-0.5 border flex flex-col justify-center items-center">
                <figure className=" p-5 ">
                  <img src={person.img} alt="Shoes" className="rounded-xl w-full h-[250px]" />
                </figure>
                <div className="card-body items-center text-center border-slate-950 border-spacing-0.5 border-t">
                  <h2 className="card-title">{person.Name}</h2>
                  <p>{person.Role}</p>
                </div>
              </button>
            ))
          }
        </div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg">What Do You Want?</h3>
            <div className='flex gap-5 mt-5'>
            <button className='btn text-black' onClick={() => document.getElementById('modal_edit_people').showModal()}>update</button>
            <button className='btn text-black' onClick={handleDelete}>delete</button>
            </div>
            <DashBoardEditPeople />
          </div>

          
          <form method="dialog" className="modal-backdrop">
            <button >close</button>
          </form>
        </dialog>
      </div>
      <DashBoardAddPeople />
    </div>
  );
};

export default DashBoardPeople;