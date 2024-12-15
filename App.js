import React, { useEffect, useState } from 'react'

function App(){
  const data={name:"", email:"", password:""}
const [inputData, setInputData]=useState(data)
const [flag,setFlag]=useState(false)
  useEffect(()=>{
    console.log("Registered");
  },[flag])
   function handleChange(e){
    e.preventDefault();
     setInputData( {...inputData,[e.target.name]:e.target.value})
   }
   function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || ! inputData.email || !inputData.password){
      alert("All the field are Manditory")
    }else{
      setFlag(true)
    }
   }

  return(
    <>
    <pre>{(flag)?<h2>AOA,{inputData.name} You have Registered  Successfully</h2>:" "}</pre>
    <h1>Registration Form </h1>
    <form  onSubmit={handleSubmit}>
      <lable>Enter Your Name:</lable>
      <input type='text' name="name" placeholder='Muhammad Musa' value={inputData.name} onChange={handleChange}></input><br/>

      <lable>Enter Your Email:</lable>
      <input type='text' name="email" placeholder='Email' value={inputData.email} onChange={handleChange}></input><br/>

      <lable>Password:</lable>
      <input type='text' name="password" placeholder='Password' value={inputData.password} onChange={handleChange}></input><br/>

      <button type="submit">Submit</button>
    </form>
    </>
  )
  
}
export default App