import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios

function Home(){
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:5000/');  // Replace with your backend URL
            setData(response.data.number);  // Access correct property from response data
            console.log('Data:', response.data); // Log the data to the console
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);

    return(
    <div>
        <h1>Home Page</h1>
        <p>Number of the day: {data !== null ? data : "Loading ..."}</p>
    </div>
    );
}

export default Home;