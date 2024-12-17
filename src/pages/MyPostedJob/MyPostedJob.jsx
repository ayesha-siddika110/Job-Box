import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const MyPostedJob = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setData(data);

            })
    }, [user?.email])
    return (
        <div>
            {data.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Name</th>
                            <th>location</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            data?.map((item, index) => <>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{item?.title}</td>
                                    <td>{item?.deadline}</td>
                                    <td>
                                        <Link to={`/applicantforThisJob/${item?._id}`}><button>View applicant</button></Link>
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

export default MyPostedJob;