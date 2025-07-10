import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
  return (
    <div className='m-auto flex align-middle justify-center bg-orange-700 text-4xl text-white my-10 py-5 font-semibold '>User : {userId} </div>
  )
}

export default User