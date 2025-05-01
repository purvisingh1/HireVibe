import { useEffect } from 'react'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from './ui/shared/navbar'
import CatagoryCarausel from './CatagoryCarausel'
import Footer from './ui/shared/Footer'


const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/");
    }
  }, []);

  return (
    <div >
      
     <div className="bg-white text-black"> <Navbar/></div>
       
      <HeroSection />
      <CatagoryCarausel />
      <LatestJobs />
     

      
      <Footer />
    </div>
  );
};

export default Home;
