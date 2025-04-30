import { useEffect } from "react"
import Navbar from "../ui/shared/navbar"
import ApplicantsTable from "./ApplicantsTable"
import axios from "axios"
import { useParams } from "react-router-dom"
import { APPLICATION_API_END_POINT } from "@/utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { setAllApplicants } from "@/redux/applicationSlice"

const Applicants = () => {
    const params=useParams();
    const dispatch=useDispatch();
    const {applicants} = useSelector(store=>store.application);
    useEffect(()=>{
        const fetchAllApplicants = async ()=>{
               try {
                const res=await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
                 dispatch(setAllApplicants(res.data.job));
                if(res.data.success){
                     dispatch(setAllApplicants(res.data.job));
                }
               } catch (error) {
                console.log(error);
               }
        }
        fetchAllApplicants();
    },[])
  return (
    <div
    style={{
      blur:"xl",
      opacity:"40",
      backgroundImage: `url('https://thumbs.dreamstime.com/z/two-selection-committee-manager-reading-resume-job-interview-employer-interviewing-to-ask-young-female-job-seeker-148349085.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
       // This will blur the background
  }}>
    <div className="text-white bg-black">  <Navbar/></div>
      
        <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-xl my-5">Applicants:{applicants?.applications?.length}</h1>
            <ApplicantsTable/>
        </div>
    </div>
  )
}

export default Applicants