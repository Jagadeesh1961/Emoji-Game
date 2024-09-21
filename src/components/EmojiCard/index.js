import './index.css'

const EmojiCard = props => {
  const {item, onClickEmojiId} = props
  const {emojiUrl, emojiName, id} = item

  const onEmoji = () => {
    onClickEmojiId(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="emoji-button" onClick={onEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
