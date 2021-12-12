import { useParams } from "react-router";
import React, { useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../state";
import { Patient } from "../types";
import { Table } from "semantic-ui-react";
import HealthRatingBar from "../components/HealthRatingBar";
const PatientPage = () => {
    const [state, dispatch] = useStateValue();
    const { id } = useParams<{ id: string }>();
    async function fetchData(): Promise<void> {
        const { data: patient } = await axios.get<Patient>(
            `/api/patients/${id}`
        );
        dispatch({ type: "SET_UPDATED_PATIENT", payload: patient });
        console.log(state);
    }

    useEffect(() => {
        if (!state.updatedPatients[id]) fetchData();
    }, []);
    let patient = state.updatedPatients[id];
    return patient ? (
        <div className="App">
            <Table celled>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            {state.updatedPatients[id].name}
                        </Table.Cell>
                        <Table.Cell>
                            {state.updatedPatients[id].gender}
                        </Table.Cell>
                        <Table.Cell>
                            {state.updatedPatients[id].occupation}
                        </Table.Cell>
                        <Table.Cell>
                            <HealthRatingBar showText={false} rating={1} />
                        </Table.Cell>
                        {/* {Object.values(patient.entries).map((entry: {}) => (
                            <Table.Cell>{entry}</Table.Cell>
                        ))} */}
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    ) : (
        <div>nothing to show</div>
    );
};

export default PatientPage;
function dispatch(arg0: { type: string; payload: any }) {
    throw new Error("Function not implemented.");
}
