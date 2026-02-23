import { interests, achievements } from '../data/portfolioData'
import {
  FaChess, FaGamepad, FaMusic, FaFutbol, FaDice, FaRunning
} from 'react-icons/fa'
import '../styles/Interests.css'

const iconMap = {
  frisbee: FaRunning,
  sports: FaFutbol,
  chess: FaChess,
  gaming: FaGamepad,
  boardgames: FaDice,
  music: FaMusic,
}

const Interests = () => {
  return (
    <section className="interests section" id="interests">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Beyond Work</h2>
          <p className="section-subtitle">What I enjoy outside of data</p>
        </div>

        <div className="interests__grid">
          {interests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon] || FaFutbol
            return (
              <div className="interests__card" key={index}>
                <div className="interests__card-icon">
                  <IconComponent />
                </div>
                <span className="interests__card-name">{interest.name}</span>
              </div>
            )
          })}
        </div>

        {/* Fun Facts */}
        <div className="interests__fun">
          <h3 className="interests__fun-title">⚡ Fun Facts</h3>
          <div className="interests__fun-grid">
            <div className="interests__fun-card">
              <span className="interests__fun-emoji">🥏</span>
              <p>Ultimate frisbee tournament champion & team assist leader</p>
            </div>
            <div className="interests__fun-card">
              <span className="interests__fun-emoji">🎸</span>
              <p>Plays the ukulele - always learning a new song</p>
            </div>
            <div className="interests__fun-card">
              <span className="interests__fun-emoji">🎓</span>
              <p>Finished a 4-year B.A. degree in just 3 years</p>
            </div>
            <div className="interests__fun-card">
              <span className="interests__fun-emoji">📊</span>
              <p>Top 0.1% in ÖSS 2009 - Turkey's national university exam (~1.4M+ students)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests