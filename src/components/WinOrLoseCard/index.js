import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props

  const winOrLoseText = score === 12 ? 'You Won' : 'You Lose'
  const winOrLoseImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreText = score === 12 ? 'Best Score' : 'Score'

  const onPlayAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="win-or-lose-container">
      <div>
        <h1 className="head-text">{winOrLoseText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score-number-value">{score}/12</p>
        <button
          type="button"
          onClick={onPlayAgain}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <img className="lose-win-logo" src={winOrLoseImage} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
