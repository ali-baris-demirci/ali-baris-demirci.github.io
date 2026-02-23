import { personalInfo } from '../data/portfolioData'
import {
  FaEnvelope, FaLinkedin, FaGithub,
  FaMapMarkerAlt, FaPaperPlane
} from 'react-icons/fa'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact section--dark" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="contact__content">
          {/* Contact Cards */}
          <div className="contact__cards">
            <a href={`mailto:${personalInfo.email}`} className="contact__card">
              <div className="contact__card-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="contact__card-title">Email</h3>
                <p className="contact__card-value">{personalInfo.email}</p>
              </div>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__card-icon">
                <FaLinkedin />
              </div>
              <div>
                <h3 className="contact__card-title">LinkedIn</h3>
                <p className="contact__card-value">ali-baris-demirci</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__card-icon">
                <FaGithub />
              </div>
              <div>
                <h3 className="contact__card-title">GitHub</h3>
                <p className="contact__card-value">ali-baris-demirci</p>
              </div>
            </a>

            <div className="contact__card contact__card--location">
              <div className="contact__card-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="contact__card-title">Location</h3>
                <p className="contact__card-value">{personalInfo.location}</p>
                <p className="contact__card-sub">Work Permit Holder · Open to Relocation</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="contact__cta">
            <div className="contact__cta-content">
              <FaPaperPlane className="contact__cta-icon" />
              <h3>Let's work together</h3>
              <p>
                Whether you have a question, a project idea, or just want to say hello — 
                my inbox is always open.
              </p>
              <div className="contact__cta-buttons">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn--primary"
                >
                  <FaEnvelope /> Send an Email
                </a>
                <a
                  href={personalInfo.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline-light"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact