import React, { useState, useEffect } from 'react';
import '../App.css'
import {deleteData, fetchData} from '../util/persistence'
function PersonList({ updated = true, setUpdated, setPersonToUpdate, url }) {
    const [persons, setPersons] = useState([])

    const handleDelete = (e) => {
        deleteData(url, e.target.id)
        setUpdated(true)
    }

    const handleEdit = (e) => {
        setPersonToUpdate(persons.find(p => p.id == e.target.id))
    }

    useEffect(() => {
        if (updated) { setUpdated(false) } else { return }
        fetchData(url, setPersons)
    }, [updated])
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.email}</td>
                            <td>{person.gender}</td>
                            <td><button onClick={handleDelete} id={person.id}>Delete</button>
                                <button onClick={handleEdit} id={person.id}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PersonList;