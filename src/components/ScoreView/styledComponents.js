import styled from 'styled-components'

export const ScoreContainer = styled.div`
  width: 800px;
  align-self: center;
  border-radius: 8px;
  border: 3px solid #fff;
  padding: 15px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 150px;
`
export const RpsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`
export const Rps = styled.h1`
  font-size: 16px;
  text-transform: capitalize;
  font-family: 'roboto';
`
export const ScoreBoard = styled.div`
  border-radius: 8px;
  border: 0px;
  background-color: #fff;
  padding: 8px;
  color: #223a5f;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Score = styled.h1`
  font-size: 16px;
  font-family: 'Roboto0';
`
export const ScoreValue = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
`
