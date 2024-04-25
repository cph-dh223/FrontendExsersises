// eslint-disable-next-line no-unused-vars
import React from "react";
import { persons } from "./file2";
 
export function Welcome(props) {
    // eslint-disable-next-line react/prop-types
    return <h1>Hello, {props.name}</h1>;
}
export default function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map( (p, n) => <WelcomePerson key={n} person = {p}/>)}
      </div>
    );
}

export function WelcomePerson(props) {
    // eslint-disable-next-line react/prop-types
    return(<Welcome name = {props.person.firstName}/>)
}