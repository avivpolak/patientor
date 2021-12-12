import React from "react";
import { Entry } from "../types";
const EntryEl = ({ entry }: { entry: Entry }) => {
    switch (entry.type) {
        case "HealthCheck":
            return (
                <ul>
                    <li>
                        {/* <p>{entry.date}</p>
                        <p>{entry.description}</p>
                        <p>{entry.specialist}</p>
                        <p>{entry.type}</p>
                        <p>{entry.healthCheckRating}</p>
                        <p>{entry.id}</p>
                        <p>{entry.diagnosisCodes}</p> */}
                    </li>
                </ul>
            );
        case "Hospital":
            return (
                <ul>
                    <li>
                        <p>{entry.date}</p>
                        <p>{entry.description}</p>
                        <p>{entry.specialist}</p>
                        <p>{entry.type}</p>
                        <p>{entry.discharge.criteria}</p>
                        <p>{entry.discharge.date}</p>
                        <p>{entry.id}</p>
                        <p>{entry.diagnosisCodes}</p>
                    </li>
                </ul>
            );

        case "OccupationalHealthcare":
            if (entry.sickLeave) {
                return (
                    <ul>
                        <li>
                            <p>{entry.date}</p>
                            <p>{entry.description}</p>
                            <p>{entry.specialist}</p>
                            <p>{entry.type}</p>
                            <p>{entry.employerName}</p>
                            <p>{entry.sickLeave.endDate}</p>
                            <p>{entry.sickLeave.startDate}</p>
                            <p>{entry.id}</p>
                            <p>{entry.diagnosisCodes}</p>
                        </li>
                    </ul>
                );
            } else {
                return (
                    <ul>
                        <li>
                            <p>{entry.date}</p>
                            <p>{entry.description}</p>
                            <p>{entry.specialist}</p>
                            <p>{entry.type}</p>
                            <p>{entry.employerName}</p>
                            <p>{entry.id}</p>
                            <p>{entry.diagnosisCodes}</p>
                        </li>
                    </ul>
                );
            }

        default:
            return <ul></ul>;
    }
};
export default EntryEl;
