export const jobs = [
    {
        id:0,
        title: "Machine Learning Engineer",
        about:"EXITEK team is looking for a Machine Learning Engineer. We're expanding our development team and looking for experienced, self-organised candidate to develop ML models and algorithms to be used in our BeautyUp app.",
        responsabilities: [
            "Design, develop, and optimize state-of-the-art computer vision algorithms and models;",
            "Conceive and experiment with innovative features and functionalities in the realm of photo editing and enhancement."
        ],
        requirements: [
            "Proficiency in Python and familiarity with deep learning frameworks like PyTorch or TensorFlow;",
            "Deep understanding of the current state of the art in machine learning and computer vision;",
            "Robust communication skills, complemented by the ability to thrive in a collaborative team environment."
        ],
        benefits : [
            "High level of decision-making freedom",
            "A friendly team of professionals",
            "A chance to influence the development of our products directly",
            "Remote work"
        ],
        salary : [3000, 6000]
    },
    {
        id:0,
        title: "Machine Learning Engineer",
        about:"EXITEK team is looking for a Machine Learning Engineer. We're expanding our development team and looking for experienced, self-organised candidate to develop ML models and algorithms to be used in our BeautyUp app.",
        responsabilities: [
            "Design, develop, and optimize state-of-the-art computer vision algorithms and models;",
            "Conceive and experiment with innovative features and functionalities in the realm of photo editing and enhancement."
        ],
        requirements: [
            "Proficiency in Python and familiarity with deep learning frameworks like PyTorch or TensorFlow;",
            "Deep understanding of the current state of the art in machine learning and computer vision;",
            "Robust communication skills, complemented by the ability to thrive in a collaborative team environment."
        ],
        benefits : [
            "High level of decision-making freedom",
            "A friendly team of professionals",
            "A chance to influence the development of our products directly",
            "Remote work"
        ],
        salary : [3000, 6000]
    },
]

export function getJob(job){

    let newJob = jobs.find((element) => element.id == job)
    
    return newJob
}
export const jobTitles = () => jobs.map(e => {
  return {title: e.title, id: e.id}
})

//------- careers list
import house from "../../assets/careers/house.svg"
import bag from "../../assets/careers/bag.svg"
import book from "../../assets/careers/book.svg"

export const careerList = [
    {
      icon: house,
      title: "Fully Remote Working",
      content: "We are a remote-first organisation and offer you the chance to work from wherever you want as."
    },
    {
      icon: bag,
      title: "Competitive salary",
      content: "We believe that when you are rewarded fairly for your hard work, it motivates you to reach new heights of success and innovation."
    },
    {
      icon: book,
      title: "Learning opportunities",
      content: "We offer a wide range of comprehensive learning opportunities to expand your skills, broaden your knowledge."
    },
  ]