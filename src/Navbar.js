import React,{useContext} from 'react'
import {StudentContact} from './App'


function Navbar() {

    let context = useContext(StudentContact);

    console.log(context);

    let data = "suriya";
    context.setUser(data);

  return (
    <div>{context.user}  siva {context.stud}</div>
  )
}

export default Navbar