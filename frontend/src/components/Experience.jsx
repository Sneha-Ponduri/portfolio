// import React from "react";



// const Experience = () => {
//   const experienceData = [
//     {
//       role: "Software Development Intern",
//       company: "Tech Solutions Ltd.",
//       place: "Hyderabad, India",
//       year: "Jun 2024 – Aug 2024",
//       description: "Worked on building scalable REST APIs, optimized database queries, and improved performance by 20%."
//     },
//     {
//       role: "Frontend Developer (Part-time)",
//       company: "Creative Web Studio",
//       place: "Remote",
//       year: "Jan 2023 – May 2024",
//       description: "Designed and developed responsive UIs using React.js, integrated APIs, and enhanced user experience."
//     }
//   ];

//   return (
//     <div className="experience" id="experience">
//       <h2>Experience</h2>
//       <div className="experience-container">
//         {experienceData.map((exp, index) => (
//           <div key={index} className="experience-card">
//             <h3>{exp.role}</h3>
//             <h4>{exp.company}</h4>
//             <p className="place">{exp.place}</p>
//             <span className="year">{exp.year}</span>
//             <p className="desc">{exp.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;



import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experienceData = [
    {
      role: "React Developer Intern",
      company: "Enligence Technologies Private Limited",
      place: "Banglore(remote), India",
      year: "2023",
      description:
        "As a React Developer, I was responsible for developing and maintaining responsive and dynamic user interfaces for web applications I collaborated closely with designers and backend developers to implement clean, reusable, and high-performance code using React.js and related technologies",
    },
    {
      role: "FullStack Teaching Assistant Intern",
      company: "Meritcurve",
      place: "Remote",
      year: "2024-2025",
      description:
        "Worked as a Teaching Assistant, guiding peers in understanding  full stack development concepts including frontend, backend, and databases. Assisted students in building hands-on projects, reinforcing practical application of course concepts",
    },
  ];

  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p className="place">{exp.place}</p>
            <span className="year">{exp.year}</span>
            <p className="desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
