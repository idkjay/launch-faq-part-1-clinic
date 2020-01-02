import React from 'react'

const QuestionTile = props => {

  let answerStuff = null
  let showAnswer

  if (props.showAnswer === true) {// this questionTile's id is the selectedId in the App component
    answerStuff = props.questionData.answer 
  }

  return (
    <div onClick={props.setSelectedQuestionIdHolder}>
      <strong>{props.questionData.question}</strong>
      <p>{answerStuff}</p>
    </div>
  )
}

export default QuestionTile
