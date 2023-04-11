import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const Gradient = styled(LinearGradient)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`

export const ButtonsView = styled.View`
  width: 95%;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`
