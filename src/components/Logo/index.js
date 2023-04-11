import { LogoImage } from './styles'

import logo from '../../../assets/logo.png'

const sizes = {
  small: 28,
  large: 64,
}

export const Logo = ({ size }) => {
  return <LogoImage source={logo} size={sizes[size] || 'large'} />
}
