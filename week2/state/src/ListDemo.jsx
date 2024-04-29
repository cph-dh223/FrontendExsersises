import {useState} from "react";

function MemberTable({ members }) {
  return (
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>age</th>
            </tr>
        </thead>
        <tbody>
            {members.map((m, k) => {return(<tr key={k}><td>{m.name}</td><td>{m.age}</td></tr>)})}
        </tbody>
    </table>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}

export default function ListDemo() {

  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];

  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}