// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {Item, changeValueFunction} = props
  const suggestionItemChangeValue = suggestion => {
    console.log(suggestion)
    changeValueFunction(suggestion)
  }
  return (
    <li className="css-list-itself">
      <p>{Item.suggestion}</p>
      <button
        type="button"
        className="css-button-itself"
        onClick={() => suggestionItemChangeValue(Item.suggestion)}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="css-arrow-image-itself"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
