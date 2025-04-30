import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const catagory=[
    "Frontend Developer",
    "Backend Developer",
    "Data Scientist",
    "Graphic Designer",
    "FullStack Developer",
    "Data Analyst",
    "Business Analyst",
    "Software Tester",
    
]
const CatagoryCarausel=()=>{

const navigate=useNavigate();
const dispatch=useDispatch();
    
    const searchJobHandler=(query)=>{
        dispatch(setSearchedQuery(query));
        navigate("/browse");
     }
    return(
        <div>
         <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        catagory.map((cat,index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline"className="roundeed-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
export default CatagoryCarausel