import {
  ScoreContainer,
  RpsContainer,
  Rps,
  ScoreBoard,
  Score,
  ScoreValue,
} from './styledComponents'
import './index.css'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <RpsContainer>
        <Rps>ROCK</Rps>
        <Rps>PAPER</Rps>
        <Rps>SCISSORS</Rps>
      </RpsContainer>
      <ScoreBoard>
        <Score>Score</Score>
        <ScoreValue>{score}</ScoreValue>
      </ScoreBoard>
    </ScoreContainer>
  )
}
export default ScoreView
