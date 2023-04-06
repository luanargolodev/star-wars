import styled from 'styled-components'

export const CustomText = styled.Text`
  color: ${({ color, theme }) => color || theme.colors.white};
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: 12px;
  font-family: 'SourceSansPro_700Bold';
`
