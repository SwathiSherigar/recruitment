import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import AcademicPerformanceTable from '../components/AcademicPerformanceTable';
import CareerExperienceTable from '../components/CareerExperienceTable';
import SubjectsHandledInput from '../components/SubjectsHandled';
import AchievementsInput from '../components/AchivementsInput';

export default function Recruitment() {
  let { type } = useParams()
  const [form, setForm] = useState({
    experience:''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  return (
    <>
      <div className='w-10/12 mx-auto'>
        <h1 className='text-3xl m-3 mt-6'>Candidate Application</h1>
        <hr />

        <form className="">
          <div className='w-10/12 flex flex-start flex-col' >
            <div className='items-start m-3 md:w-56'>
              <label htmlFor="AppliedFor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Post Applied :</label>
              <select id="AppliedFor" name='AppliedFor' value={form.AppliedFor} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Select Post</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className='items-start m-3 md:w-56'>
              <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Department :</label>
              <select id="department" name='department' value={form.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Select Department</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">*Name:</label>
                <select id="title" name='title' value={form.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20  p-2.5 ">
                  <option selected>Select title</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                </select>
                <input type="text" name='name' value={form.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Name' />
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="qualification" className="block mb-2 text-sm font-medium text-gray-900">*Qualification:</label>
                <input type="text" name='qualification' value={form.qualification} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter qualification' />
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900">*Address:</label>
                <textarea name="Address" id="Address" rows="2" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' value={form.Address} style={{ resize: 'none' }}></textarea>
              </div>
              <div className=' m-3 flex flex-row gap-2 align-middle items-center w-full'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">*Teaching:</label>
                <select
                  id="teaching"
                  name="teaching"
                  value={form.teaching}
                  className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5"
                >
                  <option selected>Select Experience</option>
                  {[...Array(24).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                  <option value="25+">25+</option>
                </select>

              </div>
              <div className=' m-3 flex flex-row gap-2 align-middle items-center w-full'>
                <label htmlFor="Research" className="block mb-2 text-sm font-medium text-gray-900">*Research:</label>
                <select
                  id="Research"
                  name="Research"
                  value={form.Research}
                  className="bg-gray-50 border border-gray-300 text-gray-900  w-full text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5"
                >
                  <option selected>Select Experience</option>
                  {[...Array(9).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                  <option value="10+">10+</option>
                </select>
              </div>


              <div className=' m-3 flex flex-row gap-2 align-middle items-center w-full'>
                <label htmlFor="Industry" className="block mb-2 text-sm font-medium text-gray-900">*Industry:</label>
                <select
                  id="Industry"
                  name="Industry"
                  value={form.Industry}
                  className="bg-gray-50 border border-gray-300 text-gray-900  w-full text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5"
                >
                  <option selected>Select Experience</option>
                  {[...Array(9).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                  <option value="10+">10+</option>
                </select>
              </div>

              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900">*Email:</label>
                <input type="mail" name='Email' value={form.Email} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter email' />
              </div>

              <div className=' m-3 flex flex-row gap-2 align-middle items-center w-full'>
                <label htmlFor="Religion" className="block mb-2 text-sm font-medium text-gray-900">*Religion:</label>
                <select
                  id="Religion"
                  name="Religion"
                  value={form.Religion}
                  className="bg-gray-50 border border-gray-300 text-gray-900  w-full text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5"
                >
                  <option selected>Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Islam">Islam</option>
                  <option value="Christian">Christian</option>
                  <option value="Jain">Jain</option>
                </select>
              </div>

              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">*Category:</label>
                <input type="text" name='category' value={form.category} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter category' />
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">*Mobile:</label>
                <input type="tel" name='mobile' value={form.mobile} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter mobile' />
              </div>

              <div className=' m-3 flex flex-row gap-2 align-middle items-center w-full'>
                <label htmlFor="Religion" className="block mb-2 text-sm font-medium text-gray-900">*Gender:</label>
                <select
                  id="Gender"
                  name="Gender"
                  value={form.Gender}
                  className="bg-gray-50 border border-gray-300 text-gray-900  w-full text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5"
                >
                  <option selected>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="Caste" className="block mb-2 text-sm font-medium text-gray-900">*Caste:</label>
                <input type="text" name='Caste' value={form.Caste} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Caste' />
              </div>
              <div className=' m-3 flex flex-row gap-2 align-middle items-center   w-full'>
                <label htmlFor="Marital" className="block mb-2 text-sm font-medium text-gray-900 w-full">*Marital status:</label>
                <select
                  id="Marital"
                  name="Marital"
                  value={form.Marital}
                  className="bg-gray-50 border border-gray-300 text-gray-900  w-full text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block p-2.5"
                >
                  <option selected>Select Gender</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="Father" className="block mb-2 text-sm font-medium text-gray-900">*Father Name:</label>
                <input type="text" name='Father' value={form.Father} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Father name' />
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="Mother" className="block mb-2 text-sm font-medium text-gray-900">*Mother Name:</label>
                <input type="text" name='Mother' value={form.Mother} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Mother name' />
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="Place" className="block mb-2 text-sm font-medium text-gray-900">*Place:</label>
                <input type="text" name='Place' value={form.Place} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Place name' />
              </div>
              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="DOB" className="block mb-2 text-sm font-medium text-gray-900">*Date of birth:</label>
                <input type="date" name='DOB' value={form.DOB} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
              </div>
              <div className="ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center">
                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">
                  *Upload Photo:
                </label>
                <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  Choose a photo
                  <input
                    id="file-upload"
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => console.log(e.target.files[0])} // Handle file selection
                  />
                </label>
              </div>

              <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="aadhar" className="block mb-2 text-sm font-medium text-gray-900">*Aadhar No:</label>
                <input type="number" name='aadhar' value={form.aadhar} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Caste' />
              </div>

              <div className="ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center">
      <label className="block mb-2 text-sm font-medium text-gray-900">Experience:</label>
      <div className="flex items-center">
        <input
          type="radio"
          id="experienced"
          name="experience"
          value="experienced"
          className="mr-2 appearance-none rounded-full border-2 border-gray-300 w-6 h-6 checked:bg-blue-500 checked:border-transparent focus:outline-none"
          onChange={handleChange}
          checked={form.experience === 'experienced'}
        />
        <label
          htmlFor="experienced"
          className="text-sm text-gray-900"
        >
          Experienced
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="fresher"
          name="experience"
          value="fresher"
          className="mr-2 appearance-none rounded-full border-2 border-gray-300 w-6 h-6 checked:bg-blue-500 checked:border-transparent focus:outline-none"
          onChange={handleChange}
          checked={form.experience === 'fresher'}
        />
        <label
          htmlFor="fresher"
          className="text-sm text-gray-900"
        >
          Fresher
        </label>
      </div>
    </div>

    <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="csalary" className="block mb-2 text-sm font-medium text-gray-900">*Current Salary(in months):</label>
                <input type="number" name='csalary' value={form.csalary} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter current salary' />
              </div>

    <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="esalary" className="block mb-2 text-sm font-medium text-gray-900">*Expected Salary(in months):</label>
                <input type="number" name='esalary' value={form.esalary} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Expected salary' />
              </div>
    <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="pdesignation" className="block mb-2 text-sm font-medium text-gray-900">*Present Designation:</label>
                <input type="text" name='pdesignation' value={form.pdesignation} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter Present Desingation' />
              </div>
    <div className=' ml-3 my-3 w-full flex flex-row gap-2 align-middle items-center'>
                <label htmlFor="cemployee" className="block mb-2 text-sm font-medium text-gray-900">*Current  Employer:</label>
                <input type="text" name='cemployer' value={form.cemployer} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Enter current employer' />
              </div>


            </div>
            <hr />
            <AcademicPerformanceTable/>
            <hr />
           <CareerExperienceTable/>
            <hr />
            <hr />
            <SubjectsHandledInput/>
            <hr />
            <hr />
            <AchievementsInput/>
            <hr />


            <button type="button" className="w-32 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Submit</button>
          </div>
        </form>
      </div>



    </>
  )
}
