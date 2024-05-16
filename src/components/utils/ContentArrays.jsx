export const jobs = [
  {
    id: 0,
    title: "Machine Learning Engineer",
    about:
      "EXITEK team is looking for a Machine Learning Engineer. We're expanding our development team and looking for experienced, self-organised candidate to develop ML models and algorithms to be used in our BeautyUp app.",
    responsabilities: [
      "Design, develop, and optimize state-of-the-art computer vision algorithms and models;",
      "Conceive and experiment with innovative features and functionalities in the realm of photo editing and enhancement.",
    ],
    requirements: [
      "Proficiency in Python and familiarity with deep learning frameworks like PyTorch or TensorFlow;",
      "Deep understanding of the current state of the art in machine learning and computer vision;",
      "Robust communication skills, complemented by the ability to thrive in a collaborative team environment.",
    ],
    benefits: [
      "High level of decision-making freedom",
      "A friendly team of professionals",
      "A chance to influence the development of our products directly",
      "Remote work",
    ],
    salary: [3000, 6000],
  },
  {
    id: 1,
    title: "Senior iOS Software Engineer",
    about:
      "EXITEK team is looking for an iOS Software Engineer. We're expanding our iOS development team and looking for experienced, self-organised candidate to develop our BeautyUp app and implement new features and ideas.",
    responsabilities: [
      "Design & develop software for the iOS platform",
      "Implement image processing algorithms",
      "Implement UI for mobile phones",
      "Integrate third party modules",
    ],
    requirements: [
      "Strong experience with Swift, iOS SDK, Xcode",
      "Experience with Metal and in image processing",
      "Strong experience with SwiftUI and UIKit",
      "Understanding of OOP, SOLID, iOS related design patterns, data structures and classic algorithms",
      "Building custom views, interactive animations, responsive screens",
      "Using git, git flow",
    ],
    benefits: [
      "High level of decision-making freedom",
      "A friendly team of professionals",
      "A chance to influence the development of our products directly",
      "Remote work",
    ],
    salary: [2500, 5000],
  },
  {
    id: 2,
    title: "Middle iOS Software Engineer",
    about:
      "EXITEK team is looking for an iOS Software Engineer. We're expanding our iOS development team and looking for experienced, self-organised candidate to develop our BeautyUp app and implement new features and ideas.",
    responsabilities: [
      "Design & develop software for the iOS platform",
      "Implement image processing algorithms",
      "Implement UI for mobile phones",
      "Integrate third party modules",
    ],
    requirements: [
      "Strong experience with Swift, iOS SDK, Xcode",
      "Experience with Metal and in image processing",
      "Strong experience with SwiftUI and UIKit",
      "Understanding of OOP, SOLID, iOS related design patterns, data structures and classic algorithms",
      "Building custom views, interactive animations, responsive screens",
      "Using git, git flow",
    ],
    benefits: [
      "High level of decision-making freedom",
      "A friendly team of professionals",
      "A chance to influence the development of our products directly",
      "Remote work",
    ],
    salary: [1500, 3000],
  },
  {
    id: 3,
    title: "User Acquisition Manager",
    about:
      "EXITEK team is looking for an experienced and self-organised User Acquisition Manager to work on all aspects of Plasma app marketing strategy in iOS ecosystem.",
    responsabilities: [
      "Plan, execute, and analyze user acquisition campaigns across performance UA channels",
      "Analyze data and optimize campaign performance towards Return on Investment (ROI)",
      "Track and report on key metrics on a regular basis",
      "Drive A/B & multivariate testing and present results to related teams",
      "Communicate clearly to management, the plans, status, challenges to meeting objectives",
      "Be proactive; stay on top of industry trends and best practices",
    ],
    requirements: [
      "2 - 4 years experience in performance-based acquisition role",
      "Deep understanding of the mobile user acquisition ecosystem",
      "Hands-on experience in Meta/TikTok acquisition",
      "Familiarity with KPIs such as CPA, CPC, CPM, ARPDAU and LTV",
      "Advanced knowledge of Amplitude, Firebase and Microsoft Excel (data analysis, pivot tables)",
    ],
    benefits: [
      "High level of decision-making freedom",
      "A friendly team of professionals",
      "A chance to influence the development of our products directly",
      "Remote work",
    ],
    salary: [3000, 6000],
  },
  {
    id: 4,
    title: "Motion Designer",
    about:
      "EXITEK, a company focusing on making next-gen AI based photo editing applications is looking for a passionate and creative Motion Graphics Designer.",
    responsabilities: [
      "Create video ads for mobile apps to run on Facebook, Instagram and TikTok",
      "Write concepts and scenarios",
      "Prepare and animate photo and video materials",
      "Find and produce content",
      "Deal with editing, keying, tracking, and color correction",
    ],
    requirements: [
      "2+ years of experience in motion design",
      "A feel for the rhythm and timing of animation",
      "Experience with mobile apps and understanding of iOS guidelines",
      "Understanding of composition and design principles",
      "Experience with Adobe products such as After Effects, Photoshop, and Illustrator",
      "Experience with plugins such as Element 3D, Trapcode, OpticalFlares, etc.",
      "At least a pre-intermediate level of English",
      "A nice portfolio is a must",
    ],
    benefits: [
      "High level of decision-making freedom",
      "A friendly team of professionals",
      "A chance to influence the development of our products directly",
      "Remote work",
    ],
    salary: [1500, 3000],
  },
];

export function getJob(job) {
  let newJob = jobs.find((element) => element.id == job);

  return newJob;
}
export const jobTitles = () =>
  jobs.map((e) => {
    return { title: e.title, id: e.id };
  });

//------- careers list
import house from "../../assets/careers/house.svg";
import bag from "../../assets/careers/bag.svg";
import book from "../../assets/careers/book.svg";

export const careerList = [
  {
    icon: house,
    title: "Fully Remote Working",
    content:
      "We are a remote-first organisation and offer you the chance to work from wherever you want as.",
  },
  {
    icon: bag,
    title: "Competitive salary",
    content:
      "We believe that when you are rewarded fairly for your hard work, it motivates you to reach new heights of success and innovation.",
  },
  {
    icon: book,
    title: "Learning opportunities",
    content:
      "We offer a wide range of comprehensive learning opportunities to expand your skills, broaden your knowledge.",
  },
];
