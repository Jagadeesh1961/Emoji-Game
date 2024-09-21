import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameEnded: false,
    emojiIdList: [],
  }

  onClickEmojiId = id => {
    const {emojiIdList, score} = this.state

    const isNum = emojiIdList.find(i => i === id)

    if (isNum === undefined) {
      this.setState(prevState => ({
        emojiIdList: [...prevState.emojiIdList, id],
      }))
      if (score === 11) {
        this.setState({
          isGameEnded: true,
          emojiIdList: [],
        })
      }
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({
        isGameEnded: true,
        emojiIdList: [],
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = () => {
    const {score, topScore} = this.state

    this.setState({
      topScore: score >= topScore ? score : topScore,
      isGameEnded: false,
      score: 0,
    })
  }

  render() {
    const {score, topScore, emojiIdList, isGameEnded} = this.state
    console.log(emojiIdList)

    const shuffledEmojiList = this.shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameEnded={isGameEnded} />
        <div className="emoji-game-container">
          {!isGameEnded ? (
            <ul className="ul-container">
              {shuffledEmojiList.map(eachItem => (
                <EmojiCard
                  item={eachItem}
                  key={eachItem.id}
                  onClickEmojiId={this.onClickEmojiId}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              onClickPlayAgain={this.onClickPlayAgain}
              isGameEnded={isGameEnded}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
