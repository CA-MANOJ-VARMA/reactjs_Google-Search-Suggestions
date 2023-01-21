// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchValue: '', filteredList: ''}

  SeachValueFunction = event => {
    const {suggestionsList} = this.props
    const searchValueFinal = event.target.value
    console.log(searchValueFinal)
    const filteredArray = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchValueFinal.toLowerCase()),
    )

    this.setState({
      searchValue: searchValueFinal,
      filteredList: filteredArray,
    })
    //   console.log(filteredList)
  }

  changeFunction = value => {
    const {suggestionsList} = this.props
    const filteredArray = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(value.toLowerCase()),
    )
    this.setState({searchValue: value, filteredList: filteredArray})
  }

  render() {
    const {searchValue, filteredList} = this.state
    console.log(searchValue === '')
    const {suggestionsList} = this.props

    return (
      <div className="css-bg-container">
        <div className="css-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="css-google-image-itself"
          />
        </div>
        <div className="css-input-list-container">
          <div className="css-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="css-search-icon-itself"
            />
            <input
              type="search"
              placeholder="search Google"
              className="css-input-itself"
              value={searchValue}
              onChange={this.SeachValueFunction}
            />
          </div>
          <ul className="css-list-container">
            {(searchValue === '' ? suggestionsList : filteredList).map(
              eachItem => (
                <SuggestionItem
                  Item={eachItem}
                  key={eachItem.id}
                  changeValueFunction={this.changeFunction}
                />
              ),
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
