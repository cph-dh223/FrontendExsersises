
import './App.css'
import upper from './file1'
import obj, {males, females } from './file2';
import MultiWelcome from './file3'

let person = obj; 

let {firstName, email} = person

function App() {
    return(
        <>
            <p>{upper("please uppercase me")}</p>
            <h2>Ex2</h2>
            <p>firstname: {firstName}, email: {email}</p>
            <h2>Ex3</h2>
            <MultiWelcome/>
        </>
    );
}
let spred1 = [...males, ...females]
console.log(spred1)

let spred2 = [...males, firstName, "Helle", ...females, "Tina"]
console.log(spred2);

export default App
