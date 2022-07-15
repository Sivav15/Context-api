import React,{useState} from 'react'
import Navbar from './Navbar';

export const StudentContact = React.createContext();


function App() {

  let [user,setUser] = useState("sivanathan");
  let [stud,setStud] = useState("raja");
  return (
   <StudentContact.Provider value={{user,setUser,stud,setStud}}>
   
            <Navbar/>
    </StudentContact.Provider>
 
  )
}

export default App