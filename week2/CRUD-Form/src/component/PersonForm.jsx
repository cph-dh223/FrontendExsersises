import React, { useEffect, useState } from 'react';
import { changeData, fetchData } from '../util/persistence';

const PersonForm = ({ setUpdated, personToUpdate, url }) => {
    const [person, setPerson] = useState({})
    const handleChange = (e) => {
        setPerson({ ...person, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!person.id) {
            changeData(url, 'POST', person)
        } else {
            changeData(url + `/${person.id}`, 'PUT', person)
        }
        setUpdated(true)
        setPerson({})
        e.target.reset()
    }

    useEffect(() => {
        console.log(personToUpdate);
        if (personToUpdate) {
            setPerson(personToUpdate)
            document.getElementById("1").value = personToUpdate.id
            document.getElementById("name").value = personToUpdate.name
            document.getElementById("age").value = personToUpdate.age
            document.getElementById("email").value = personToUpdate.email
            document.getElementById("gender").value = personToUpdate.gender
        }
    }, [personToUpdate])

    return (
        <>
            <form id='form' onSubmit={handleSubmit}>
                <label htmlFor="id">Id</label>
                <input id="1" type="number"  readOnly placeholder="id" onChange={handleChange} />
                <label htmlFor="name">Name</label>
                <input id="name" type="text"  placeholder="name" onChange={handleChange} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number"  min="1" max="120" placeholder="age" onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input id="email" type="email"  placeholder="email" onChange={handleChange} />
                <label htmlFor="gender">Gender</label>
                <select id="gender" onChange={handleChange}>
                    <option defaultChecked>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <button type='submit'>{person.id ? 'Edit' :'Submit'}</button>
            </form>
        </>
    );
};

export default PersonForm;