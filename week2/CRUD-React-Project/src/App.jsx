import { useState } from 'react'
import PersonList from './component/PersonList'
import PersonForm from './component/PersonForm'

import './App.css'

const url = 'http://127.0.0.1:3001/api'
function App() {
    const [updated, setUpdated] = useState(true)
    const [personToUpdate, setPersonToUpdate] = useState()


    return (
        <>
            <PersonForm updated={updated} setUpdated={setUpdated} personToUpdate={personToUpdate} url = {url}/>
            <PersonList updated={updated} setUpdated={setUpdated} setPersonToUpdate={setPersonToUpdate} url = {url}/>
        </>
    )
}

export default App
