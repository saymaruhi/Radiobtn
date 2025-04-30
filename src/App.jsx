import { useState } from "react"


function App() {
  const[gender,setgender]= useState("male")
  const[city,setcity]= useState("")
  

  return (
    
      <div>
       <h2 style={{color:"blue"}}>Radio Button</h2>

      <h3>Select Gender</h3>

      <input type="radio" onChange={(event)=> setgender(event.target.value)} name= "gender" id= "male" value= {"Male"} checked={gender=="Male"}  />

      <label htmlFor= "male">Male</label>

      <input type="radio" onChange={(event)=> setgender(event.target.value)} name= "gender" id= "female" value= {"Female"} checked= {gender=="Female"} />

      <label htmlFor= "female">Female</label>

      <h4>Selected Gender: {gender}</h4>
      <hr/>
    
      <h2>Select City</h2>
      <select onChange={(event)=> setcity(event.target.value)} defaultValue={"Patna"}>
        <option value= "Delhi" >Delhi</option>
        <option value= "Noide" >Noide</option>
        <option value= "Patna" >Patna</option>
        <option value= "Kolkata">Kolkata</option>

       </select>
       <h4>Selected City: {city}</h4>
       <hr/>
       <h4 style={{textDecoration:"underline"}} >Understand correctly <b style={{color:"blue"}}> State/hook in jsx,</b> Now lets go to learn another concept</h4>



      </div>

     
    
  )
}

export default App
