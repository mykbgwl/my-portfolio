import {
    mobile,
    backend,
    gamer,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    jkpaper,
    capgemini,
    crypto,
    dicegame,
    firebasecontact,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Gamer",
      icon: gamer,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "JK Papers",
      icon: jkpaper,
      iconBg: "#0066B3",
      date: "May 2021 - July 2021",
      points: [
        "Developed automated scripts to simplify common tasks and reduce manual effort.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - May 2022",
      points: [
        "Developed a Restful API that served as the back-end for a web application, improving scalability and reducing latency.",
        "Developed a web application that allowed users to securely store and manage their data.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#E6DEDD",
      date: "July 2022 - present",
      points: [
        "Attended training to learn software development theory, techniques and coding best practices.",
        "Worked with energy and enthusiasm, enhancing positive team morale and building motivation towards web development targets.",
        "Used extensive coding knowledge to accurately link retail elements to databases, developing high-functioning web applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mayank proved me wrong.",
      name: "Taylor Swift",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mayank does.",
      name: "Bruce Lee",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Mayank optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lana Del Rey",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Crypto Web App",
      description:
        "Developed a comprehensive web application with a focus on cryptocurrency-related services. Implemented a robust authentication system, enabling secure user registration and login processes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/mykbgwl/Crypto-Web-Design",
    },
    {
      name: "Dice Game",
      description:
        "I developed a dynamic and interactive web application using React.js. This project demonstrates my proficiency in front-end web development and my ability to create an engaging user experience. The game is designed with a simple set of rules",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "green-text-gradient",
        },
      ],
      image: dicegame,
      source_code_link: "https://github.com/mykbgwl/Dice-Game",
    },
    {
      name: "Firebase Contact App",
      description:
        "Revolutionize your contact management with our React.js and Firebase-powered application. Experience seamless real-time updates, sleek interface, and secure data storage. Effortlessly organize and sync contacts across devices. Modern, efficient, and user-friendly -it's contact management reimagined.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: firebasecontact,
      source_code_link: "https://github.com/mykbgwl/Firebase-Contact-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };