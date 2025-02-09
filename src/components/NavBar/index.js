import './index.css'

const NavBar = props => {
  const {score, topScore, isGameEnded} = props
  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-game">Emoji Game</h1>
        </div>
        {!isGameEnded && (
          <div className="score-container">
            <p className="score">Score: {score}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
