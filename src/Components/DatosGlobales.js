import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import './DatosGlobales.css';
const Datos_Globales = () => {
    const baseUrl = "http://localhost:4006/vacunas/";
    const [data, setData] = useState([]);
    /*const [contador, setContador] = useState(0);*/
    const [dosisEntregadas, setDosisEntregadas] = useState(0);
    const [dosisAdministradas, setDosisAdministradas] = useState(0);
    const [personasPauta, setPersonasPauta] = useState(0);
    


    const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        var totalesDosis =0;
        var dosisAdministradas =0;
        var pautaCompleta =0;
        var porcientoRecibidad , porcientoAdministradas;
        setData(response.data);
        //console.log(response.data);

        response.data.map(function (item , it){
          totalesDosis += item.dosistPfizer;
          totalesDosis += item.dosistModerna;
          dosisAdministradas += item.dosisAdministradas;

        });
        porcientoRecibidad= parseFloat(dosisAdministradas * 100 / totalesDosis).toFixed(2);
        porcientoAdministradas= parseFloat(pautaCompleta * 100 / dosisAdministradas).toFixed(2);
        console.log("Dosis entregadas en España: "+totalesDosis);
        console.log("Dosis administradas en España: "+dosisAdministradas);
        console.log("Personas con pauta completa en España: "+pautaCompleta);
        console.log("% personas con dosis administradas: "+porcientoAdministradas);
        console.log("% personas con dosis recibidas: "+porcientoRecibidad);

        setDosisEntregadas(totalesDosis);
        setDosisAdministradas(dosisAdministradas);
        setPersonasPauta(pautaCompleta);
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