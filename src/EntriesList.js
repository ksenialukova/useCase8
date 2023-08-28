import React from 'react';
import { useSelector } from 'react-redux';

const EntriesList = () => {
    const entries = useSelector(state => state.entries);

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.firstName}</td>
                        <td>{entry.lastName}</td>
                        <td>{entry.email}</td>
                        <td>{entry.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EntriesList;
