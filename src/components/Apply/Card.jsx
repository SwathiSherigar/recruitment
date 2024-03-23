import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className='card mt-4 mx-auto flex flex-col items-center'>
        <img src="https://picsum.photos/300/400" alt="" />
      <Link to={`/recruitment/recruitment/${props.id}`}>  <button type="button" class="text-white bg-green-600 hover:bg-green-700 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 ">Click here to apply</button></Link>
    </div>
  )
}
