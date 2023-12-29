import {Component} from 'react'
import {v4} from 'uuid'
import CharacterCountItem from '../CharacterCountItem'

import './index.css'

class CharacterCount extends Component {
  state = {
    characterCountList: [],
    inputLetter: '',
  }

  onChangeInputLetters = event => {
    this.setState({inputLetter: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {inputLetter} = this.state
    const newLine = {
      id: v4(),
      name: inputLetter,
    }
    this.setState(prevState => ({
      characterCountList: [...prevState.characterCountList, newLine],
      inputLetter: '',
    }))
  }

  render() {
    const {characterCountList, inputLetter} = this.state

    return (
      <div className="main-container">
        <div className="left-container">
          <div className="left-inner-container">
            <h1 className="count-heading">Count the characters like a Boss</h1>
          </div>
          {characterCountList.length > 0 ? (
            <ul className="unOrder-list">
              {characterCountList.map(eachCharacterCount => (
                <CharacterCountItem
                  key={eachCharacterCount.id}
                  eachCharacterCounts={eachCharacterCount}
                />
              ))}
            </ul>
          ) : (
            <img
              className="no-user-image"
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </div>
        <div className="right-container">
          <h1 className="character-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.onClickAddButton}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-slide"
              onChange={this.onChangeInputLetters}
              value={inputLetter}
            />
            <button className="save-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCount
