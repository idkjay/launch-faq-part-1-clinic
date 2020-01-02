import React, { useState} from 'react';
import QuestionTile from './QuestionTile'

const App = (props) => {
  // const [stateVariable, functionThatChangesState] = useState(null)
  const [selectedQuestionId, setSelectedQuestionId] = useState(null)

  const arrayOfQuestionTileComponents =
  props.data.map((questionData) => {

    const changeQuestionIdWrapperFunction = () => {
      if (selectedQuestionId === questionData.id) {
        return setSelectedQuestionId(null)
      
      }
      return setSelectedQuestionId(questionData.id)
    }

    let showAnswer = false
    if (selectedQuestionId === questionData.id) {
      showAnswer = true
    }

    return(
      <QuestionTile
        key={questionData.id}
        questionData={questionData}
        showAnswer={showAnswer}
        setSelectedQuestionIdHolder={changeQuestionIdWrapperFunction}
      />
    )
  })

  return(
    <div className="border">
      <h1> Hello from Launch, any questions?</h1>
      {arrayOfQuestionTileComponents}
      <p>{selectedQuestionId}</p>
    </div>
  )
}

export default App;
