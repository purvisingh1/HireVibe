import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Navbar from "../ui/shared/navbar"
import CompaniesTable from "./CompaniesTable"
import useGetAllCompanies from "@/hooks/useGetAllCompanies"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchCompanyByText } from "@/redux/companySlice"

const Companies = () => {
  useGetAllCompanies();
  const[input,setInput]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(setSearchCompanyByText(input));
    },[input]);
  return (
    <div 
    style={{
      opacity:"40",
      backgroundImage: `url('https://img.freepik.com/premium-photo/airy-illuminated-corporate-workspace-with-geometric-glass-corridors_38013-42872.jpg?w=900')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      blur:"xl"
       // This will blur the background
  }}
    > 
      <div className="text-white bg-black">  <Navbar/></div> 
      <div className="max-w-6xl m-auto my-10">
      <div className="flex items-center justify-between my-5">
        <Input className="w-fit bg-white"
         placeholder="filter by name"
         onChange={(e)=>setInput(e.target.value)}>
         </Input>
        <Button onClick={()=>navigate("/admin/companies/create")} className="bg-[#6A38C2]">New Company</Button>
    </div>
    <CompaniesTable/>
      </div>
    </div>
  )
}

export default Companies