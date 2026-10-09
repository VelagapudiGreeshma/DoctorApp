import { useEffect, useState } from "react";
import DoctorCard from "./component/DoctorCard";
import Navbar from "./component/Navbar";
import AddDoctor from "./pages/AddDoctor";

function App(){
  let[data,setData]=useState([]);
  let[search,setSearch]=useState("");
  useEffect(()=>{
    let res=fetch("https://api-bdti.onrender.com/doctors")
              .then((res)=>res.json())
              .then((result)=>{setData(result)})
              .catch(error=>console.log(error))
    console.log(res);
  },[])

  let filterDoctor=data.filter((d)=>{
    let dataFilter=d.name.toLowerCase().includes(search.toLowerCase())
    return dataFilter;
  })
  return(
    <>
      <Navbar/>
      {/* <DoctorCard name="Reshma" salary="75000" gender="Female" age="25" specialization="Cardio"/>
      <DoctorCard name="Tejaswi" salary="55000" gender="Female" age="27" specialization="Ortho"/>
      <DoctorCard name="Krishna"  gender="Male" age="28"/> */}
      {/* <AddDoctor/> */}
      <label>Search For Doctor : </label>
      <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
     {
      filterDoctor.length>0 ?
      filterDoctor.map((d)=>(
        <DoctorCard key={d.id} name={d.name} salary={d.salary} gender={d.gender} age={d.age} specialization={d.specialization}/>

      )) : <h1>No Doctor Found</h1>
     }
    </>
  )
}
export default App;