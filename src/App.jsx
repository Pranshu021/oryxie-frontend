import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
    const [data, setData] = useState("")

    const fetchTestData = async() => {
        const response = await axios.get("http://localhost:3001/api/test")
        console.log(response.data.message)
        setData(response.data.message)
    }

    useEffect(() => {
        console.log("Something")
        fetchTestData()
    }, [])

    return (
        <div>
            {data ? <h1>{data}</h1> : <h1>Welcome to Oryxie homepage</h1>}
        </div>
    )
}

export default App
