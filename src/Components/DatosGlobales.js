import React, {useState, useEffect} from 'react';
import axios from 'axios';
const peticionGet=async()=>{
      

    const baseUrl="http://localhost:4006/vacunas/";
    const [data, setData]=useState([]);
    
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
      //console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }//peticionGe
  useEffect(() =>{
      peticionGet();
  }, [])
  return(
    <div className="App">
        <h1>Datos Globales</h1>
    </div>
)


export default Pricing;