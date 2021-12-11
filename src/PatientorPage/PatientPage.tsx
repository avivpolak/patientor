import { useParams } from "react-router";
import React, { useEffect } from 'react';
import axios from "axios";
import { async } from "q";
import { useStateValue } from "../state";
import { Patient } from "../types";
const PatientPage = () => {
const { id } = useParams<{ id: string }>();
 async function fetchData ():Promise<void>
 {
    const { data: patient }= await axios.get<Patient>(`/api/patients/${id}`);
    dispatch({ type: "SET_PATIENT", payload: patient });
    }

  useEffect(()=>{
      
      fetchData()
  })
  return (
    <div className="App">
    
    </div>
  );
};

export default PatientPage;
function dispatch(arg0: { type: string; payload: any; }) {
    throw new Error("Function not implemented.");
}

