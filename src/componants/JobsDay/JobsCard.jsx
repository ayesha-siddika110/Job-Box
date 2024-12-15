import React from 'react';
import { Link } from 'react-router-dom';

const JobsCard = ({item}) => {
    const {title,description,salaryRange,_id,logo} = item || {}
    return (
        <div className='p-4 rounded-lg bg-white border shadow-xl'>
            <Link
      to={`/job/${_id}`}
      className=''
    >
      <div className='flex items-center justify-between'>
       
        <span className='text-xs font-light text-gray-800 '>
          Deadline: 28/05/2024
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {title}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          {title}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
          {description}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 mb-3'>Total Bids: 0</p>
      <Link to={`/jobApply/${_id}`} className='bg-blue-100 rounded-md py-2 px-3'>Apply Now</Link>
      </div>
    </Link>
        </div>
    );
};

export default JobsCard;