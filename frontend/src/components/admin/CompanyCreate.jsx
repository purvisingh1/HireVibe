import Navbar from "../ui/shared/navbar"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
import { COMPANY_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSingleCompany } from "@/redux/companySlice"
import { toast } from "sonner"
const CompanyCreate = () => {
    const navigate=useNavigate();

    const[companyName,setCompanyName]=useState();
    const dispatch=useDispatch();
    const registerNewCompany=async()=>{
        try {
            const res=await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
            if(res?.data?.success){
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId=res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div
    style={{
        blur:"xl",
        opacity:"40",
        backgroundImage: `url('https://media.istockphoto.com/id/1411304340/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=KQA6R0B5lp8-rcdFO9knPiSz96NiZBCJQBQMlMoXT7U=')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
         // This will blur the background
    }}
   >
       <div className="text-white bg-black">  <Navbar/></div>
        
        <div className="max-w-4xl mx-auto">
            <div className="my-10"> <h1 className="font-bold text-2xl text-white">Your Company Name</h1>
          
          <p className="text-white">Enter your company name.you can change this later.</p></div>

        <Label className="text-white" >Company Name</Label>
        <Input
        type="text"

        className="my-2 text-black bg-white"
        placeholder="jobHunt,Deloitte,etc..."
        onChange={(e)=>setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
            <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
            <Button onClick={registerNewCompany}>Continue</Button>
        </div>
        </div>
    </div>
  )
}

export default CompanyCreate