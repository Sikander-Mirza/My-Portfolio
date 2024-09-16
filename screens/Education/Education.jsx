import React from "react";
import "./Education.css"; // Custom CSS file

const Education = () => {
  // Define the array of timeline items
  const timelineItems = [
    {
      year: "2021",
      title: "High School",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime asperiores quam obcaecati laborum mollitia.",
    },
    {
      year: "2022",
      title: "University",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo harum suscipit libero natus laborum nam vitae.",
    },
    {
      year: "2023",
      title: "Graduation",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ratione voluptate esse?",
    },
    {
      year: "2023",
      title: "Graduation",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ratione voluptate esse?",
    },
    {
      year: "2023",
      title: "Graduation",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ratione voluptate esse?",
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
