import { interests } from '../data/portfolioData'
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
      </div>
    </section>
  )
}

export default Interests