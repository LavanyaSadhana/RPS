import styled from 'styled-components'

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultName = styled.p`
  color: #fff;
  font-size: 18px;
`
export const ResultText = styled.p`
  color: #fff;
  font-size: 18px;
`
export const ResultImage = styled.img`
  height: 150px;
  width: 150px;
`
export const RestartButton = styled.button`
  color: #223a5f;
  font-size: 14px;
  background-color: #fff;
`
export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  border: 0px;
  outline: none;
  background: transparent;
  margin-right: 20px;
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
`
