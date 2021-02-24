import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';

const Datos_Globales = () => {
    const baseUrl = "http://localhost:4006/vacunas/";
    const [data, setData] = useState([]);
    /*const [contador, setContador] = useState(0);*/
    const [dosisEntregadas, setDosisEntregadas] = useState(0);
    const [dosisAdministradas, setDosisAdministradas] = useState(0);
    const [personasPauta, setPersonasPauta] = useState(0);
    const [porcientoAdministradas, setPorcientoAdministradas] = useState(0);
    const [porcientoRecibidas, setPorcientoRecibidas] = useState(0);
    


    const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        var totalesDosis =0;
        var dosisAdministradas =0;
        var personasPauta =0;
        var porcientoRecibidad , porcientoAdministradas;
        setData(response.data);
        //console.log(response.data);

        response.data.map(function (item , it){
          totalesDosis += item.dosisPfizer;
          totalesDosis += item.dosisModerna;
          dosisAdministradas += item.dosisAdministradas;
          personasPauta += item.personasPauta;

        });
        porcientoRecibidad= parseFloat(dosisAdministradas * 100 / totalesDosis).toFixed(2);
        porcientoAdministradas= parseFloat(personasPauta * 100 / dosisAdministradas).toFixed(2);
        console.log("Dosis entregadas en España: "+totalesDosis);
        console.log("Dosis administradas en España: "+dosisAdministradas);
        console.log("Personas con pauta completa en España: "+personasPauta);
        console.log("% personas con dosis administradas: "+porcientoAdministradas);
        console.log("% personas con dosis recibidas: "+porcientoRecibidad);

        setDosisEntregadas(totalesDosis);
        setDosisAdministradas(dosisAdministradas);
        setPersonasPauta(personasPauta);
        setPorcientoAdministradas(porcientoAdministradas);
        setPorcientoRecibidas(porcientoRecibidad);
      }).catch(error => {
        console.log(error);
      })
  } //peticionGet
  useEffect(() => {
    peticionGet();
  }, [])
  return (
     <div className = "App" style={
      {textAlign: 'center',
      backgroundColor: 'rgba(177, 225, 177, 0.5)' }}> <h1> Datos Globales </h1> 
    <div>
    <p>Dosis entregadas</p>
    <p><b>{dosisEntregadas.toLocaleString("es-ES")}</b></p>
  </div>
  <div>
    <p>Dosis administradas</p>
    <p><b>{dosisAdministradas.toLocaleString("es-ES")}</b></p>
  </div>
  <div>
    <p>Personas con pauta completada</p>
    <p><b>{personasPauta.toLocaleString("es-ES")}</b></p>
  </div>
  <div>
    <p>Personas con porciento completada</p>
    <p><b>{porcientoAdministradas.toLocaleString("es-ES")}</b></p>
  </div>
  <div>
    <p>% sobre entregadas</p>
    <p><b>{porcientoRecibidas.toLocaleString("es-ES")}</b></p>
  </div>
  </div>
  
  )
}



export default Datos_Globales;