import style from "./card.module.css"
import clock from "../../assets/careers/clock.svg"
import pointer from "../../assets/careers/pointer.svg"
const JobCard = ({title, id}) => {
  return (
    <li className={style.jobcard}>
        <div className={style.JobCard_info}>
            <h5>{title}</h5>
            <div>
              <span><i><img src={pointer} alt="the job position is"/></i> 100% Remote</span>
              <span><i><img src={clock} alt="the job position is"/></i> Full-Time</span>
            </div>
        </div>
        <a href={`./careers/${id}`}>Apply Now</a>
    </li>
  )
}

export default JobCard