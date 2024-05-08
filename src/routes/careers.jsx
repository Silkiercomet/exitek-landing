import React from 'react'
import { careerList, jobTitles } from "../components/utils/ContentArrays";
import AboutCard from '../components/about/AboutCard';
import JobCard from '../components/about/JobCard';


const Careers = () => {
  return (
    <>
      <div>
        <h1>Be part of our mission</h1>
        <p>We invite you to join us in a journey of innovation and creativity. Our mission is to revolutionize the way people edit and transform visuals using the power of AI technology.</p>
        <a href='#positions'>View Openings</a>
      </div>
      <section>
        <h2>
          What we offer you
        </h2>
        <ul>
          {careerList.map((e,i) => <AboutCard icon={e.icon} content={e.content} title={e.title} key={e.title+i} />)}
        </ul>
      </section>
      <section>
        <h4>Open positions</h4>
        {jobTitles.map((e) => <JobCard title={e.title} id={e.id} key={e.id}/>)}
        
      </section>
    </>
  )
}

export default Careers