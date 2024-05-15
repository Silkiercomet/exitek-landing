import { careerList, jobTitles } from "../components/utils/ContentArrays";
import JobCard from '../components/about/JobCard';
import CareersHero from '../components/layouts/CareersHero';
import OfferCard from '../components/careers/OfferCard';
import style from "./routes.module.css"
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const jobs = await jobTitles();
  return { jobs };
}
const Careers = () => {
  
  const { jobs } = useLoaderData();
  return (
    <div className={style.Careersbg}>
      <CareersHero />
      <section className={`container ${style.careers}`}>
        <h2>
          What we offer you
        </h2>
        <ul className={style.offerslist}>
          {careerList.map((e,i) => <OfferCard icon={e.icon} content={e.content} title={e.title} key={e.title+i} />)}
        </ul>
      </section>
      <section className={`container ${style.careers__positions}`} id="positions">
        <h4>Open positions</h4>
        <ul>
        {jobs.map((e) => <JobCard title={e.title} id={e.id} key={e.id}/>)}
        </ul>
      </section>
    </div>
  )
}

export default Careers