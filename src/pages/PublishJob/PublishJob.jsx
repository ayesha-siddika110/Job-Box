
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PublishJob = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const handlePublishJob = (e) => {
        e.preventDefault()
        // const form = e.target;
        // const title = form.title.value
        // const company = form.company.value
        // const city = form.city.value
        // const state = form.state.value
        // const country = form.country.value
        // const type = form.type.value
        // const description = form.description.value
        // const min = form.min.value
        // const max = form.max.value
        // const currency = form.currency.value
        // const logo = form.logo.value
        // const js = form.javaScript.value
        // const python = form.python.value
        // const node = form.nodeJS.value
        // const react = form.react.value

        // const allData = {
        //     title,
        //     company,
        //     logo,
        //     location : {
        //         city,
        //         state,
        //         country
        //     } ,
        //     type,
        //     description,
        //     salaryRange: {
        //         min,
        //         max,
        //         currency
        //     },
        //     skills: [
        //         js,
        //         python,
        //         node,
        //         react
        //     ]
        // }
        // console.log(allData);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries())
        const {min, max, currency, ...newjob} = data;
        newjob.salaryRange = {min,max,currency}
        newjob.skills = newjob.skills.split('\n')
        console.log(newjob);
        
        fetch('http://localhost:3000/jobs',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    title: "Publish",
                    text: "Your job has been published.",
                    icon: "success"
                  });
                  navigate('/mypostedjob')
            }
            // console.log(data);
            // form.reset()
            
        })
        
        // console.log(name, email, password);





    }
    return (
        <>
        <p className='text-3xl font-semibold text-center py-6'>Publish your job</p>
        <div className="md:w-[80%] lg:w-[70%] m-auto bg-base-200  mb-10">
            <div className=" flex-col lg:flex-row-reverse">

                <div className="card bg-base-100  shrink-0 shadow-2xl">
                    <form onSubmit={handlePublishJob} className="card-body space-y-3">
                        <div className='grid grid-cols-2 gap-4'>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Job Title</span>
                                </label>
                                <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Company Name</span>
                                </label>
                                <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Company Logo URL</span>
                                </label>
                                <input type="text" name='logo' placeholder="Company LOGO URL" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* location */}
                        <div className=''>

                            <p  className='text-lg font-semibold'>location : </p>
                            <div className='grid grid-cols-3 gap-4'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">city : </span>
                                    </label>
                                    <input type="text" name='city' placeholder="enter city" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">state : </span>
                                    </label>
                                    <input type="text" name='state' placeholder="enter city" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">country : </span>
                                    </label>
                                    <input type="text" name='country' placeholder="enter city" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            {/* type */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Job Type</span>
                                </label>
                                <input type="text" name='type' placeholder="job type" className="input input-bordered" required />
                            </div>
                            {/* description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Job description</span>
                                </label>
                                <textarea type="text" name='description' placeholder="job description" className="input input-bordered" required />
                            </div>

                        </div>
                        {/* Salary Range */}
                        <div className=''>

                            <p className='text-lg font-semibold'>Salary Range : </p>
                            <div className='grid grid-cols-3 gap-4'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">min : </span>
                                    </label>
                                    <input type="text" name='min' placeholder="enter min salary" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">max : </span>
                                    </label>
                                    <input type="text" name='max' placeholder="enter max salary" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Currency : </span>
                                    </label>
                                    <input type="text" name='currency' placeholder="enter currenct like $ , tk, BTD" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>

                        {/* skills */}
                        <p className='font-semibold text-lg'>Skills:</p>
                        <div className='form-control'>

                            <textarea name="skills" type="text" placeholder='put each skill in a new line' className='input input-bordered' required />
                        </div>
                        <p className='font-semibold text-lg'>Deadline</p>
                        <div className='form-control'>

                            <input name="deadline" type="date" placeholder='dd/mm/yyyy' className='input input-bordered' required />
                        </div>
                        <p className='font-semibold text-lg'>HR email</p>
                        <div className='form-control'>

                            <input name="hr_email" type="email" placeholder='dd/mm/yyyy' defaultValue={user?.email} className='input input-bordered' required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="bg-blue-600 w-[200px] text-center py-2 text-white rounded-md">Publish Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default PublishJob;