import { useLoaderData } from "react-router-dom";
import { getJob } from "../components/utils/ContentArrays";
import JoinTheTeam from "../components/forms/JoinTheTeam";
import JobHero from "../components/job/JobHero";
import style from "./routes.module.css"
export async function loader({ params }) {
  const job = await getJob(params.careersId);
  return { job };
}

const Jobs = () => {
  const { job } = useLoaderData();

  return (
    <>
      <JobHero title={job.title} />
      <main className={`${style.jobContainer} container`}>
        <p>{job.about}</p>
        <div>
          <h2>What will you do:</h2>
          <ul>
            {job.responsabilities.map((e, i) => (
              <li key={`${e + i}`}>{e}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>What you should have:</h3>
          <ul>
            {job.requirements.map((e, i) => (
              <li key={`${e + i}`}>{e}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>What we offer:</h4>
          <ul>
            {job.benefits.map((e, i) => (
              <li key={`${e + i}`}>{e}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Location:</h5>
          <ul>
            <li>This position is fully remote</li>
          </ul>
        </div>
        <div>
          <h6>Salary:</h6>
          <ul>
            <li>
              {"Monthly gross salary from " +
                `${job.salary[0]} to ${job.salary[1]}`}
            </li>
          </ul>
        </div>

        <JoinTheTeam />
      </main>
    </>
  );
};

export default Jobs;
