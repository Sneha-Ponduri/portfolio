// import React from "react";
// import "../styles/Projects.css";

// const Projects = () => {
//   const projectsData = [
//     {
//       name: "Portfolio Website",
//       tech: "React, Tailwind CSS",
//       description: "A personal portfolio showcasing my projects, education, and skills with a responsive design.",
//       link: "https://github.com/username/portfolio"
//     },
//     {
//       name: "Chat Application",
//       tech: "Node.js, Socket.io, MongoDB",
//       description: "Real-time chat app with authentication, group chat, and message persistence.",
//       link: "https://github.com/username/chat-app"
//     },
//     {
//       name: "E-commerce Store",
//       tech: "React, Express, MySQL",
//       description: "Full-stack e-commerce app with product catalog, cart system, and payment integration.",
//       link: "https://github.com/username/ecommerce-store"
//     }
//   ];

//   return (
//     <div className="projects" id="projects">
//       <h2>Projects</h2>
//       <div className="projects-container">
//         {projectsData.map((project, index) => (
//           <div key={index} className="project-card">
//             <h3>{project.name}</h3>
//             <p className="tech">{project.tech}</p>
//             <p className="desc">{project.description}</p>
//             <a 
//               href={project.link} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="project-link"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;



import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectsData = [
    {
      name: "Expense-tracker",
      tech: "Reactjs",
      description: "An expense tracker app where you can add the amount you have and transactions you did and keep a track of them.",
      viewLink: "https://sneha-ponduri.github.io/money-tracker-app/",
      codeLink: "https://github.com/Sneha-Ponduri/money-tracker-app"
    },
    {
      name: "Recipe app",
      tech: "Nextjs",
      description: "A recipe generator app where one can find many recipes of choice",
      viewLink: "https://next-recipe-app-roan.vercel.app/",
      codeLink: "https://github.com/Sneha-Ponduri/next-recipe-app"
    },
    {
      name: "Storage Manager Application",
      tech: "Nextjs, Appwrite, Nodejs, Expressjs",
      description: "A storage management application where one can store their files, generate links, view files, share files,check available memory and many more",
      viewLink: "https://storage-manager-application.vercel.app/",
      codeLink: "https://github.com/Sneha-Ponduri/storage_manager_application"
    },
    {
      name: "Quick Connect",
      tech: "Nextjs, Clerk Authentication, Appwrite, Nodejs, Expressjs",
      description: "A video meet application where one can join meetings, create meetings, have recorded sessions, view meetings",
      viewLink: "https://zoom-clone-eta-seven.vercel.app/",
      codeLink: "https://github.com/Sneha-Ponduri/zoom-clone"
    },
    {
      name: "Blog Platform",
      tech: "Next.js, MongoDB , nodejs, expressjs",
      description: "A blogging platform with user can read blogs, add blogs, delete blogs.",
      viewLink: "https://blog-app-h64v.vercel.app/blogs",
      codeLink: "https://github.com/username/blog-platform"
    },
    {
      name: "Task Manager",
      tech: "React, Hasura",
      description: "Task management app with deadlines, categories, and user accounts.",
      viewLink: "https://hasura-todo-list.vercel.app/",
      codeLink: "https://github.com/Sneha-Ponduri/hasura-todo-list"
    },
    {
      name: "Linkedin Post Generator tool",
      tech: "LLAMa 3.2, Lang chain, Streamlit, Groq cloud",
      description: "Generates a linkedin post based on the category, length and language provided",
      viewLink: "",
      codeLink: ""
    },
    {
      name: "Campus Projects Hub",
      tech: "JavaScript, Firebase",
      description: "A platform for college students where one can post projects, invite people and join projects",
      viewLink: "",
      codeLink: "https://github.com/Sneha-Ponduri/cph-final"
    },
    {
      name: "Hybrid Log Classification System using Gen AI & Machine Learning",
      tech: "BERT + Logistic Regression, Regex, and LLMs ",
      description: "An classification tool that helps in calssification",
      viewLink: "",
      codeLink: ""
    }
  ];

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p className="tech">{project.tech}</p>
            <p className="desc">{project.description}</p>
            <div className="buttons">
              <a 
                href={project.viewLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn view-btn"
              >
                View
              </a>
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn code-btn"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

