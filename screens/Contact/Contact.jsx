import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'; // Make sure to link this CSS file

const Contact = () => {
  return (
    <section className="contact py-5" id="contact">
      <div className="">
        <h2 className="heading text-center mb-5">Contact <span>Me</span></h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">  {/* Increased the column width from 6 to 8 */}
            <div className="row">
              {/* Left side - input fields */}
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control neon-input"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="email"
                    className="form-control neon-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="tel"
                    className="form-control neon-input"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control neon-input"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>

              {/* Right side - message field */}
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <textarea
                    className="form-control neon-textarea"
                    rows="8"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn neon-button">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
