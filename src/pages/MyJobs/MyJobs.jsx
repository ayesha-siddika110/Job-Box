import { useLoaderData } from "react-router-dom";


const MyJobs = () => {
    const data = useLoaderData()
    // console.log(data);
    
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Company name</th>
        <th>Position</th>
        <th>location</th>
      </tr>
    </thead>
    <tbody>
        {
            data?.map((item,index)=> <>
            <tr key={index} className="hover">
        <th>{index+1}</th>
        <td>{item.company}</td>
        <td>{item.title}</td>
        <td></td>
      </tr>
            </>)
        }
     
      
     
      
   
      
    </tbody>
  </table>
</div>
            
            
        </div>
    );
};

export default MyJobs;