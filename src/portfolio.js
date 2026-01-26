/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Saloni Garg's Portfolio",
  description:
    "A passionate technology enthusiast with strong problem-solving skills, focused on building scalable and impactful digital solutions.",
  og: {
    title: "Saloni Garg Portfolio",
    type: "website",
    url: "http://salonigarg.com/",
  },
};

//Home Page
const greeting = {
  title: "Saloni Garg",
  logo_name: "SaloniGarg",
  nickname: "saloni_dev",
  subTitle:
    "A passionate technology enthusiast with strong problem-solving skills, focused on building scalable and impactful digital solutions.",
  resumeLink:
    "https://drive.google.com/file/d/110LhH9iel4-KeRRLdzqBGJr_m1Hae5vW/view?usp=drivesdk",
  portfolio_repository: "https://github.com/salonigarg1328/masterPortfolio",
  githubProfile: "https://github.com/salonigarg1328",
  
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/salonigarg1328",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/salonigarg13/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:gargsaloni247@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & MongoDB",
        "⚡ Developing RESTful APIs and integrating databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        
      ],
    },
   {
  title: "Cloud & DevOps Fundamentals",
  fileName: "CloudInfraImg",
  skills: [
    "⚡ Understanding of core cloud computing concepts and architecture",
    "⚡ Hands-on exposure to deploying applications on virtual machines",
    "⚡ Familiarity with containerization using Docker and cloud-based databases",
    "⚡ Actively learning cloud-native tools and deployment workflows",
  ],
  softwareSkills: [
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      style: { color: "#47A248" },
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "simple-icons:postgresql",
      style: { color: "#336791" },
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "simple-icons:docker",
      style: { color: "#1488C6" },
    },
  ],
},
{
  title: "Machine Learning Fundamentals",
  fileName: "MLImg",
  skills: [
    "⚡ Understanding of basic machine learning concepts and workflows",
    "⚡ Familiarity with data preprocessing and feature selection",
    "⚡ Knowledge of common ML algorithms through coursework and practice",
    "⚡ Continuously learning and exploring practical ML applications",
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "simple-icons:python",
      style: { color: "#3776AB" },
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "simple-icons:numpy",
      style: { color: "#013243" },
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "simple-icons:pandas",
      style: { color: "#150458" },
    },
  ],
},

  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/_saloni_garg/",
    },
    {
      siteName: "geeksforgeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.geeksforgeeks.org/gargsalnqy1",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Graphic Era Hill University",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "graphic_logo.jpeg",
      alt_name: "Graphic Era Hill University",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development and Data Structures.",
        "⚡ I am working on various projects using MERN stack and improving my problem solving skills.",
      ],
      website_link: "http://gehu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Fundamentals of Machine Learning & Articificial Intelligence",
      subtitle: "AWS training & Certification",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1SZlRehRI8ZG9QR2y-i4KHwQA7WcETzJx/view?usp=drivesdk",
      alt_name: "AWS",
      color_code: "#8C151599",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle: "AWS training & Certification",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1gj8V2gS1QYTcJMpkrho_twgBmTprKtKQ/view?usp=drivesdk",
      alt_name: "AWS",
      color_code: "#2A73CC",
    },
    {
      title: "Oracle Cloud Intfrastructure and AI Associate",
      subtitle: "Oracle Foundation associate",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1fcQ7ZFbe5h4-7kid-DqlekypWV2Lg9Ng/view?usp=drivesdk",
      alt_name: "Oracle",
      color_code: "#8C151599",
    },
    {
      title: "NPTEL(GOOGLE) Cloud Computing",
      subtitle: "Skill India",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1btbBbMvthpN0MAZEek_cppZ3FybjiTos/view?usp=drivesdk",
      alt_name: "NPTEL",
      color_code: "#8C151599",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Building Skills Through Projects & Learning",
  description:
    "Currently focused on strengthening my technical foundation through hands-on projects and continuous learning. Actively exploring full-stack development, cloud technologies, and emerging areas such as artificial intelligence and machine learning. Open to internships, hackathons, and collaborative opportunities where I can apply problem-solving skills, learn from real-world challenges, and contribute to impactful technology-driven solutions.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Academic Projects & Development",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Personal Projects",
          company_url: "https://github.com/salonigarg1328",
          logo_path: "legato_logo.png",
          duration: "2023 - Present",
          location: "Self-Driven Learning",
          description:
            "Developing full-stack web applications using MERN stack (MongoDB, Express.js, React, Node.js). Building scalable RESTful APIs, implementing user authentication systems, and creating responsive user interfaces. Focusing on clean code practices and modern development workflows.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Skills & Preparation",
      experiences: [
        {
          title: "Competitive Programming & DSA",
          company: "LeetCode | GeeksforGeeks",
          company_url: "https://leetcode.com/",
          logo_path: "delhivery_logo.png",
          duration: "2023 - Present",
          location: "Continuous Practice",
          description:
            "Actively solving Data Structures and Algorithms problems to strengthen problem-solving skills. Practicing Java and C++ for competitive programming. Working on improving algorithmic thinking and code optimization techniques.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Hackathons & Collaborations",
      experiences: [
        {
          title: "Hacathon",
          company: "College & open hachathons",
          company_url: "https://github.com/salonigarg1328",
          logo_path: "hackathon.jpg",
          duration: "2023-present",
          location: "Team Based | Competitive Environment",
          description:
            "Participated in hackathons focused on real-world problem solving, rapid prototyping, and collaborative development. Worked in team settings to design, develop, and present functional solutions under time constraints. Gained hands-on experience in ideation, full-stack development, debugging, and pitching technical solutions while enhancing teamwork, adaptability, and problem-solving skills.",
            
            
          color: "#4285F4",
        },
      ],
    },

    {
      title: "Looking Forward",
      experiences: [
        {
          title: "Open to Opportunities",
          company: "Internships & Collaborations",
          company_url: "mailto:gargsaloni247@gmail.com",
          logo_path: "companylogo.jpeg",
          duration: "Available Immediately",
          location: "Remote | Hybrid | On-site ",
          description:
            "Seeking internship opportunities in Full Stack Development, Software Engineering, and roles involving foundational exposure to cloud computing and machine learning. Eager to contribute to real-world projects, collaborate with experienced professionals, and apply problem-solving skills while continuously strengthening expertise in cloud technologies and ML concepts. Ready to bring dedication, adaptability, and a strong learning mindset to impactful development teams.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of various technology tools. My best experience is to create Full Stack projects using MERN stack.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_minee.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with MERN Stack, Web Development, Cloud Computing, Machine Learning and DSA.",
  },
  blogSection: {
  title: "Thoughts & Ideas",
  subtitle:
    "These are some concepts and mini projects I'm currently exploring. Work in progress – stay tuned for updates!",
  blogs: [
    {
      url: "https://medium.com/@salonigarg", // Replace with your actual blog link
      image: "thought.png", // Placeholder image in public folder
      title: "Exploring Full Stack Concepts",
      description:
        "Learning and experimenting with MERN stack, web development, and building small projects to strengthen practical skills.",
    },
    {
      url: "https://medium.com/@salonigarg",
      image: "thought.png",
      title: "Cloud & ML Experiments",
      description:
        "Documenting ideas, mini experiments, and learning journeys in cloud computing and machine learning.",
    },
    {
      url: "https://medium.com/@salonigarg",
      image: "thought.png",
      title: "Problem Solving & DSA Practice",
      description:
        "Sharing learnings from algorithm challenges, data structures, and coding exercises to improve technical skills.",
    },
  ],
},

  addressSection: {
    title: "Address",
    subtitle: "Muzaffarnagar, Uttar Pradesh, India",
    locality: "Muzaffarnagar",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "251001",
    streetAddress: "Muzaffarnagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/b7FGvXofFyWDeqd36",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
    publications,
  contactPageData,
};