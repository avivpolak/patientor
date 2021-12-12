import { useParams } from "react-router";
import React, { useEffect } from "react";
import axios from "axios";
import { useStateValue } from "../state";
import { Entry, Patient } from "../types";
import { Table } from "semantic-ui-react";
import HealthRatingBar from "../components/HealthRatingBar";
import EntryEl from "./Enrty";

const PatientPage = () => {
    const [state, dispatch] = useStateValue();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: patient } = await axios.get<Patient>(
                    `/api/patients/${id}`
                );
                dispatch({ type: "SET_UPDATED_PATIENT", payload: patient });
            } catch (error) {
                console.log(error);
            }
        };

        if (!state.updatedPatients[id]) void fetchData();
        return;
    }, []);

    const patient = state.updatedPatients[id];
    patient ? console.log(patient.entries) : console.log("nun");
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
                    </Table.Row>
                </Table.Body>
            </Table>

            {Object.values(patient.entries).map((entry: Entry) => (
                <EntryEl entry={entry} key={entry.id} />
            ))}
        </div>
    ) : (
        <div>nothing to show</div>
    );
};

export default PatientPage;
function dispatch(arg0: { type: string; payload: any }) {
    throw new Error("Function not implemented.");
}
