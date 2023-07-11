import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  ResultImage,
  RestartButton,
} from './styledComponents'
import './index.css'

const GameResultsView = props => {
  const {newArray, text, isShow, checkResult, restartGame, choicesList} = props
  const gameResult = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => {
              checkResult(choicesList[0].id)
            }}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => {
              checkResult(choicesList[1].id)
            }}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => {
              checkResult(choicesList[2].id)
            }}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <ResultImage src={newArray[0].imageUrl} alt="Your Choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <ResultImage src={newArray[1].imageUrl} alt="Opponent Choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <RestartButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </RestartButton>
          </ResultImageContainer>
        </>
      )}
    </GameViewContainer>
  )
  return gameResult()
}
export default GameResultsView
