import React from "react";
import "./Education.css"; // Custom CSS file

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-year">2021</div>
            <h3>High School</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime asperiores quam obcaecati laborum mollitia.
            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-year">2022</div>
            <h3>University</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo harum suscipit libero natus laborum nam vitae.
            </p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-year">2023</div>
            <h3>Graduation</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ratione voluptate esse?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
