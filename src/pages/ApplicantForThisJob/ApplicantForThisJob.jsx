import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const ApplicantForThisJob = () => {
    const data = useLoaderData()
    console.log(data);

    const handleStatusUpdate =(e, id)=>{
        console.log(e.target.value);
        console.log(id);

        const data = {
            status : e.target.value
        }
        fetch(`http://localhost:3000/jobapply/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount){
                toast.success('Status Update')

            }
            
        })
        

    }

    return (
        <div>
            <Toaster></Toaster>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>job id</th>
                            <th>applicant email</th>
                            <th>resume</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((item, i) => <>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{item.job_id}</td>
                                    <td>{item.applicant_email}</td>
                                    <td>{item.resume}</td>
                                    <td>
                                        <select
                                        onChange={(e)=> handleStatusUpdate(e, item._id) } 
                                        defaultValue={item.status || 'change status'}
                                        className="select select-ghost w-full max-w-xs">
                                            <option disabled >Current status</option>
                                            <option>under review</option>
                                            <option>call interview</option>
                                            <option>hired</option>
                                            <option>rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            </>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ApplicantForThisJob;