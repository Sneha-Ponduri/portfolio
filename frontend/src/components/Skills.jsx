// import React from "react";
// // import "../styles/Skills.css";
// import { 
//   FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython, FaDatabase, FaCode, FaTools 
// } from "react-icons/fa";
// import { 
//   SiNextdotjs, SiExpress, SiMongodb, SiPostman, SiC, SiMysql, SiSnowflake, SiDatabricks 
// } from "react-icons/si";

// const Skills = () => {
//   const skills = [
//     { name: "HTML", icon: <FaHtml5 /> },
//     { name: "CSS", icon: <FaCss3Alt /> },
//     { name: "JavaScript", icon: <FaJs /> },
//     { name: "ReactJS", icon: <FaReact /> },
//     { name: "NextJS", icon: <SiNextdotjs /> },
//     { name: "NodeJS", icon: <FaNodeJs /> },
//     { name: "Express", icon: <SiExpress /> },
//     { name: "MongoDB", icon: <SiMongodb /> },
//     { name: "Postman", icon: <SiPostman /> },
//     { name: "Git", icon: <FaGitAlt /> },
//     { name: "GitHub", icon: <FaGithub /> },
//     { name: "Java", icon: <FaJava /> },
//     { name: "Python", icon: <FaPython /> },
//     { name: "C", icon: <SiC /> },
//     { name: "MySQL", icon: <SiMysql /> },
//     { name: "Hasura", icon: <FaDatabase /> }, // fallback
//     { name: "LangChain", icon: <FaCode /> },  // fallback
//     { name: "Snowflake", icon: <SiSnowflake /> },
//     { name: "Databricks", icon: <SiDatabricks /> },
//     { name: "GenAI", icon: <FaTools /> }, // now correctly imported
//   ];

//   return (
//     <div className="skills" id="skills">
//       <h2>My Skills</h2>
//       <div className="skills-container">
//         {skills.map((skill, index) => (
//           <button key={index} className="skill-btn">
//             <span className="icon">{skill.icon}</span>
//             {skill.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;




import React from "react";
import "../styles/Skills.css";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, 
  FaJava, FaPython, FaDatabase, FaCode, FaTools 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiExpress, SiMongodb, SiPostman, SiC, 
  SiMysql, SiSnowflake, SiDatabricks 
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C", icon: <SiC /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Hasura", icon: <FaDatabase /> },   // fallback icon
    { name: "LangChain", icon: <FaCode /> },    // fallback icon
    { name: "Snowflake", icon: <SiSnowflake /> },
    { name: "Databricks", icon: <SiDatabricks /> },
    { name: "GenAI", icon: <FaTools /> },       // fallback icon
  ];

  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <button key={index} className="skill-btn">
            <span className="icon">{skill.icon}</span>
            {skill.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
