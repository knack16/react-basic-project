import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //  fetch('https://api.github.com/users/knack16')
    //  .then(response => response.json())
    //  .then(data => {
    //    console.log(data);
    //    setData(data);
    //  })
    //  .catch(error => console.error('Error fetching data:', error));
    // }, [])

    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-orange-600 text-3xl text-white p-4'>
        Github Followers: {data.followers}
        <div className='flex flex-col md:flex-row justify-center items-center bg-white p-6 rounded-lg shadow-lg mt-4'>
            <div>
                <img className='rounded-full m-4' src={data.avatar_url} alt="Avatar" />
            </div>
            <div>
                 <h1 className='text-2xl font-semibold text-black'>Name: {data.name}</h1>
                <h2 className='text-xl font-semibold  text-black'>Bio: Full Stack developer (React & ASP.NET Core)</h2>
                <h3 className='text-lg font-semibold  text-black'>Location: Pune, Maharashtra, India</h3>
                <h4 className='text-lg font-semibold  text-black'>Public Repos: {data.public_repos}</h4>
                <h5 className='text-lg font-semibold  text-black'>Followers: {data.followers}</h5>
                <h6 className='text-lg font-semibold  text-black'>Following: {data.following}</h6>
                <a className='text-lg font-semibold text-blue-500' href={data.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
        </div>
        
       
    </div>
  )
}

export default Github

export const  githubInfoLoader= async ()=>{
    const response = await fetch('https://api.github.com/users/knack16');
    return response.json 
}