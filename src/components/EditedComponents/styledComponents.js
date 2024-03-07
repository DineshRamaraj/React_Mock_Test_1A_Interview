import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
`

export const EditableContainer = styled.div`
  padding: 20px 40px 30px;
  height: 160px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const EditableHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #000000;
`

export const EditableInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EditableInput = styled.input`
  font-size: 14px;
  color: #323f4b;
  border: 1px solid #cbd2d9;
  border-radius: 5px;
  padding: 8px 15px;
  outline: none;
  width: 200px;
  height: 40px;
  flex-grow: 1;
`

export const EditableResult = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #323f4b;
`

export const EditableButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #d946ef;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
`
