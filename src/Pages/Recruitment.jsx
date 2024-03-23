import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Recruitment() {
  let { type } = useParams()
  const [form, setForm] = useState({});
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
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className='items-start m-3 md:w-56'>
              <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">*Department :</label>
              <select id="department" name='department' value={form.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <hr />
             
            <hr />
            <h3>Academic Performance</h3>
            <hr />
            Career Experience Details
            <hr /> 
            <hr />
          Subjects Handled
            <hr />
            <hr />
            Achievements
            <hr />


            <button type="button" class= "w-32 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Submit</button>
          </div>
        </form>
      </div>



    </>
  )
}
