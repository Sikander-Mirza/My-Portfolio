import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for layout responsiveness
import "./Testimonials.css"
import home from "../../src/assets/Home-img.jpeg";


// Testimonials data array
const testimonials = [
  {
    name: "Marilyn",
    image: home, // You can add image paths here
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum inventore ex nesciunt deserunt.",
  },
  {
    name: "Julia",
    image: home,
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum inventore ex nesciunt deserunt.",
  },
  {
    name: "Rebecca",
    image: home,
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum inventore ex nesciunt deserunt.",
  },
];

// Star rating component
const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`fa fa-star ${i < rating ? "checked" : ""}`}></span>
      );
    }
    return <div className="star-rating">{stars}</div>;
  };
  
  const Testimonials = () => {
    return (
      <section className="testimonials py-5">
        <div className="container">
          <h2 className="heading text-center mb-4">Testimonials</h2>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="testimonial-item text-center p-4 shadow-sm">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img mb-3"
                  />
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <StarRating rating={testimonial.rating} />
                  <p className="testimonial-feedback mt-3">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default Testimonials;
