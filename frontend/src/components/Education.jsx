// import React from "react";
// import Slider from "react-slick";
// import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCalendarAlt, FaStar } from "react-icons/fa";
// import "../styles/Education.css";

// const Education = () => {
//   const educationData = [
//     {
//       title: "B.Tech",
//       institution: "Vishnu Institute Of Technology",
//       place: "Bhimavaram, India",
//       year: "2022 - 2026",
//       cgpa: "CGPA: 9.33"
//     },
      
//     {
//       title: "Higher Secondary Education",
//       institution: "Narayana Junior College",
//       place: "Ongole, India",
//       year: "2020 - 2022",
//       cgpa: "Percentage: 96.8%",
      
//     },
//     {
//       title: "Primary Education",
//       institution: "Montessori High School",
//       place: "Ongole, India",
//       year: "Till 2020",
//       cgpa: "Percentage: 100%",
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false
//   };

//   return (
//     <div className="education" id="education">
//       <h2>Education</h2>
//       <Slider {...settings} className="education-slider">
//         {educationData.map((edu, index) => (
//           <div key={index} className="education-card">
//             <h3><FaGraduationCap className="icon" /> {edu.title}</h3>
//             <h4><FaUniversity className="icon" /> {edu.institution}</h4>
//             <p className="place"><FaMapMarkerAlt className="icon" /> {edu.place}</p>
//             <span className="year"><FaCalendarAlt className="icon" /> {edu.year}</span>
//             <span className="cgpa"><FaStar className="icon" /> {edu.cgpa}</span>
//             <p className="desc">{edu.description}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Education;


import React from "react";
import Slider from "react-slick";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import "../styles/Education.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      title: "B.Tech",
      institution: "Vishnu Institute Of Technology",
      place: "Bhimavaram, India",
      year: "2022 - 2026",
      cgpa: "CGPA: 9.33",
    },
    {
      title: "Higher Secondary Education",
      institution: "Narayana Junior College",
      place: "Ongole, India",
      year: "2020 - 2022",
      cgpa: "Percentage: 96.8%",
    },
    {
      title: "Primary Education",
      institution: "Montessori High School",
      place: "Ongole, India",
      year: "Till 2020",
      cgpa: "Percentage: 100%",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="education" id="education">
      <h2>Education</h2>
      <Slider {...settings} className="education-slider">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>
              <FaGraduationCap className="icon" /> {edu.title}
            </h3>
            <h4>
              <FaUniversity className="icon" /> {edu.institution}
            </h4>
            <p className="place">
              <FaMapMarkerAlt className="icon" /> {edu.place}
            </p>
            <span className="year">
              <FaCalendarAlt className="icon" /> {edu.year}
            </span>
            <span className="cgpa">
              <FaStar className="icon" /> {edu.cgpa}
            </span>
            <p className="desc">{edu.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Education;
