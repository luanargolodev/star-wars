import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(64)}px;
  padding-left: ${({ theme }) => theme.metrics.px(24)}px;
`
