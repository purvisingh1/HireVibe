import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Navbar from "../ui/shared/navbar"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchJobByText } from "@/redux/jobSlice"
import AdminJobsTable from "./AdminJobsTable"
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs"


const AdminJobs = () => {
  useGetAllAdminJobs();
  const[input,setInput]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(setSearchJobByText(input));
    },[input]);
  return (
    <div
    style={{
    
      backgroundImage: `url('https://cdn.pixabay.com/photo/2015/10/29/08/17/building-1011876_1280.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
       // This will blur the background
  }}
  > 
     <div className="text-white bg-black hover:text-white bg-black">  <Navbar/></div> 
      
      <div className="max-w-6xl m-auto my-10">
      <div className="flex items-center justify-between my-5">
        <Input className="w-fit bg-white"
         placeholder="filter by name,role"
         onChange={(e)=>setInput(e.target.value)}>
         </Input>
        <Button onClick={()=>navigate("/admin/jobs/create")} className="bg-[#6A38C2]"> New Jobs</Button>
    </div>
    <AdminJobsTable/>
      </div>
    </div>
  )
}

export default AdminJobs