import React from 'react'
import clock from "../../assets/careers/clock.svg"
import pointer from "../../assets/careers/pointer.svg"
const JobCard = ({title, id}) => {
  return (
    <li>
        <div>
            <h5>{title}</h5>
            <span><i><img src={pointer} alt="the job position is"/></i> 100% Remote</span>
            <span><i><img src={clock} alt="the job position is"/></i> Full-Time</span>
        </div>
        <a href={`./careers/${id}`}>apply now</a>
    </li>
  )
}

export default JobCard