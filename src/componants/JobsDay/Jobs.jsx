import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";


const Jobs = () => {
    const [alldata, setallData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setallData(data);
            
        })

    },[])
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center pt-20 pb-10">Jobs Of The Day</h1>

            <div className="grid grid-cols-3 gap-8 ">
                {
                    alldata?.map((item , index)=> <JobsCard key={index} item={item}></JobsCard>)
                }

            </div>
            
        </div>
    );
};

export default Jobs;