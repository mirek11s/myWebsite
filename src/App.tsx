import './styles.css'
import IMAGE from './main_img.jpg'
import LOGO from './svgFile.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <div>
      <h1>
        My App {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={LOGO} alt="main" />
      <img src={IMAGE} alt="main" width="300" height="200" />
      <ClickCounter />
    </div>
  )
}
