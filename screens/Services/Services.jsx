import React from "react";
import "./Services.css";

const serviceData = [
  {
    title: "UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempor rerum beatae autem consectetur, ipsum aut, ut neque molestiae veniam necessitatibus quisquam explicabo natus minima quas vel incidunt, unde perferendis!",
  },
  {
    title: "Frontend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempor rerum beatae autem consectetur, ipsum aut, ut neque molestiae veniam necessitatibus quisquam explicabo natus minima quas vel incidunt, unde perferendis!",
  },
  {
    title: "Backend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempor rerum beatae autem consectetur, ipsum aut, ut neque molestiae veniam necessitatibus quisquam explicabo natus minima quas vel incidunt, unde perferendis!",
  },
  {
    title: "Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempor rerum beatae autem consectetur, ipsum aut, ut neque molestiae veniam necessitatibus quisquam explicabo natus minima quas vel incidunt, unde perferendis!",
  },
];

const Services = () => {
  return (
    <section className="container" id="services">
      <h2 className="heading">Services</h2>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
