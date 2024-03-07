import {Component} from 'react'

import {
  MainContainer,
  EditableContainer,
  EditableHeading,
  EditableInputContainer,
  EditableInput,
  EditableResult,
  EditableButton,
} from './styledComponents'

class Editable extends Component {
  state = {
    textInput: '',
    isSaved: false,
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSavedButton = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {textInput, isSaved} = this.state
    return (
      <MainContainer>
        <EditableContainer>
          <EditableHeading>Editable Text Input</EditableHeading>
          <EditableInputContainer>
            {isSaved ? (
              <EditableResult>{textInput}</EditableResult>
            ) : (
              <EditableInput
                type="text"
                value={textInput}
                onChange={this.onChangeTextInput}
              />
            )}
            <EditableButton type="button" onClick={this.onClickSavedButton}>
              {isSaved ? 'Edit' : 'Save'}
            </EditableButton>
          </EditableInputContainer>
        </EditableContainer>
      </MainContainer>
    )
  }
}

export default Editable
