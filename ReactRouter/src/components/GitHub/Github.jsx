import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Yassh2003')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

  return (
    <div className='bg-gray-600 text-center text-white text-3xl m-4 p-4'>
        Github Followers : {data.followers}</div>
  )
}

export default Github