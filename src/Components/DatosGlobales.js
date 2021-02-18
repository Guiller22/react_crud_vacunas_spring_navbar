import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
const Datos_Globales = () => {
  const peticionGet = async () => {

    const baseUrl = "http://localhost:4006/vacunas/";
    const [data, setData] = useState([]);
    /*const [contador, setContador] = useState(0);
    const [dosisEntregadas, setDosisEntregadas] = useState(0);
    const [dosisAdministradas, setDosisAdministradas] = useState(0);
    const [personasPauta, setPersonasPauta] = useState(0);*/


    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
        //console.log(response.data);
      }).catch(error => {
        console.log(error);
      })
  } //peticionGet
  useEffect(() => {
    peticionGet();
  }, [])
  return ( <div className = "App" > <h1> Datos Globales </h1> </div>

  )
}



export default Datos_Globales;