/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Geryko",
  title: "Hi all, I'm Geryko",
  subTitle: emoji(
    "A dedicated Full Stack Software Developer 🚀 with experience in creating web applications using JavaScript, Reactjs, Nodejs, and various other innovative libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Xr7eFy-2Q1HW2WJqL-_uUBZwga98nKmsYVgjdEKDeJA/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/glmenta",
  linkedin: "https://www.linkedin.com/in/geryko-menta-36a0b0215/",
  gmail: "gakidogeck@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Engineer backend APIs"),
    emoji(
      "⚡ Integration of third party services such as AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UC Davis",
      logo: require("./assets/images/ucdavislogo.png"),
      subHeader: "Bachelor of Science in Neurology, Physiology and Behavior",
      duration: "September 2016 - June 2021",
      desc: "Utilized advanced laboratory equipment and techniques for experiments, data collection, and analysis.",
      descBullets: [
        "Engaged in rigorous coursework, enhancing critical thinking, problem-solving, and research skills.",
        "Collaborated with fellow students and faculty on group projects and presentations, honing teamwork and communication abilities."
      ]
    },
    {
      schoolName: "App Academy",
      logo: require("./assets/images/Appacademylogo.png"),
      subHeader: "Full-Stack Web Development",
      duration: "August 2022 - August 2023",
      desc: "Completed an immersive online software engineering bootcamp, acquiring practical skills in coding, web development, and app creation.",
      descBullets: [
        "Worked on real-world projects, demonstrating the ability to design, develop, and deploy functional web applications.",
        "Collaborated with peers in a virtual environment, enhancing remote communication and collaboration skills.",
        "Adapted to fast-paced learning, quickly grasping new concepts and technologies."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Physical Therapy Aide",
      company: "Movement For Life",
      companylogo: require("./assets/images/movementforlifelogo.png"),
      date: "August 2021 – September 2022",
      desc: "Assisted in guiding patients through specific exercises and routines designed for their recovery.",
      descBullets: [
        "Assisted in managing patient data and electronic health records (EHR) systems, demonstrating attention to detail and familiarity with handling sensitive information.",
        "Collaborated with a multidisciplinary team to support the development and implementation of customized treatment plans, showcasing teamwork and communication skills."
      ]
    },
    {
      role: "Food Staff",
      company: "Fish's Wild Island Grill",
      companylogo: require("./assets/images/fishswildlogo.png"),
      date: "August 2019 – March 2020",
      desc: "Enhanced multitasking abilities, managing multiple orders and customer requests efficiently.",
      descBullets: [
        "Operated point-of-sale  systems and cash registers with accuracy, showcasing proficiency in handling financial transactions.",
        "Adapted to diverse customer needs and preferences, demonstrating flexibility and a customer-centric mindset."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Projects and Achievements 🏆 "),
  subtitle:
    "Achievements and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AnimeBnb",
      subtitle:
        "Developed a full-stack web application that emulates the core functionality of AirBnb.",
      image: require("./assets/images/animebnbfavico.ico"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View my Airbnb clone in Action",
          url: "https://airbnb-project-92yx.onrender.com"
        }
      ]
    },
    {
      title: "Soundcloud Clone",
      subtitle:
        "Developed a full-stack application alongside a group of web developers using React, AWS and Flask that allows for users to create, edit and share songs and playlists.",
      image: require("./assets/images/soundcloudIcon.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View our Soundcloud clone in Action",
          url: "https://soundcloudclone.onrender.com/"
        }
      ]
    },
    {
      title: "KeebCraft",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/keebcraft.ico"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View KeebCraft in Action",
          url: "https://keebcraft-capstone.onrender.com"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "209-373-6411",
  email_address: "gakidogeck@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
