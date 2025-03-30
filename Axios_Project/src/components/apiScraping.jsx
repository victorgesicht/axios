import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ApiScraping = () => {
    const apiurl='https://jsonplaceholder.typicode.com/users'
    const [data, setData]=useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get(apiurl)
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch((error) => console.error('Error fetching data:', error))
    }, [data])

  return (
    <div>
        
        <h2 className='font-mono bg-slate-500'>SANTA'S NAUGHTY LIST</h2>
        {data.map((item) => {
            return (
                <div className="space-y-6" key={item.id}>
                    <h3 className='font-bold bg-slate-600'>{item.name}</h3>
                    <h3 className='font-light'>{item.email}</h3>
                    <h4>{item.phone}</h4>
                </div>
            )
        }
        )}
                <div>
                
                    <button onClick={() => {setCount (count + 1)}} className='bg-slate-700 text-white p-2 rounded-lg'>
                        Click me
                    </button>
                    <h3>count:{count} people viewed</h3>    
            
                </div>
        
    </div>
  )
}  


export default ApiScraping