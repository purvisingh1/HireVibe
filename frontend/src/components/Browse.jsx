import  { useEffect } from 'react'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import Navbar from './ui/shared/navbar';

// const randomJobs = [1, 2,45];

const Browse = () => {

    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
    return (
        <div
        style={{
            
            backgroundImage: `url('https://thumbs.dreamstime.com/b/blurred-office-backdrop-modern-laptop-computer-placed-top-white-desk-office-setting-blurred-office-backdrop-311188038.jpg?w=768')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
          }}>

            <Navbar/>
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl text-white my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse