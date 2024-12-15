import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const JobApply = () => {
    const {id} = useParams()
    const {user} = useContext(AuthContext)

    console.log(user);
    
    
    const handleJobApplyform =(e)=>{
        e.preventDefault()
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const resume = form.resume.value

        const alldata = {
            job_id: id,
            applicant_email : user?.email,
            linkedIn,
            resume,
        }
        console.log(alldata);

        fetch('http://localhost:3000/jobapply',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(alldata)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Application has been saved",
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
            console.log(data);
            
        })
        
        

    }
    return (

                <div className="card bg-base-100 w-[30%] m-auto   shadow-2xl my-10">
                    <h1 className="text-2xl text-center py-4">Apply Job</h1>
                    <form onSubmit={handleJobApplyform} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn URL</span>
                            </label>
                            <input name='linkedIn' type="url" placeholder="linkedIn URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input name="resume" type="url" placeholder="resume URL" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply Now</button>
                        </div>
                    </form>
                </div>
    );
};

export default JobApply;