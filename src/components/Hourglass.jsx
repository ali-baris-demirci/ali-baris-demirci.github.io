export default function Hourglass() {
  return (
    <div className="hourglass-wrapper">
      <div className="hourglass-scaler">
        <div id="glass-container">
          <div id="glass">
            <div className="top half-glass triangle" />
            <div className="bottom half-glass triangle rotate" />
          </div>
          <div id="sand-stream" />
          <div id="bond">
            <div className="top bond triangle" />
            <div className="bottom bond triangle" />
          </div>
        </div>
      </div>
    </div>
  )
}
