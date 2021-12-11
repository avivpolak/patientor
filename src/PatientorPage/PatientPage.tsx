import { useParams } from "react-router";
import React, { useEffect } from 'react';
import axios from "axios";
import { async } from "q";
import { useStateValue } from "../state";
const PatientPage = () => {
    const { id } = useParams<{ id: string }>();
 async function fetchData ():Promise<void>
 {return console.log(await axios.get(`/api/patients/${id}`));}
  useEffect(()=>{
      fetchData()
  })
  return (
    <div className="App">
    
    </div>
  );
};

export default PatientPage;
