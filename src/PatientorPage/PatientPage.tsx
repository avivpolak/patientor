import { useParams } from "react-router";
import React, { useEffect } from "react";
import axios from "axios";
import { async } from "q";
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
        fetchData();
    }, []);
    let patient = state.updatedPatients[id];
    return (
        <div className="App">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Occupation</Table.HeaderCell>
                        <Table.HeaderCell>Health Rating</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {Object.values(state.updatedPatients).map(
                        (patient: Patient) => (
                            <Table.Row key={patient.id}>
                                <Table.Cell>{patient.name}</Table.Cell>
                                <Table.Cell>{patient.gender}</Table.Cell>
                                <Table.Cell>{patient.occupation}</Table.Cell>
                                <Table.Cell>
                                    <HealthRatingBar
                                        showText={false}
                                        rating={1}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        )
                    )}
                </Table.Body>
            </Table>
        </div>
    );
};

export default PatientPage;
function dispatch(arg0: { type: string; payload: any }) {
    throw new Error("Function not implemented.");
}
