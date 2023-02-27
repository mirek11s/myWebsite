import IMAGE from './main_img.jpg'
import LOGO from './svgFile.svg'
import { ClickCounter } from './components/ClickCounter'
import './styles.css'

export const App = () => {
  return (
    <div>
      <h1 className="text-primary">
        My App {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={LOGO} alt="main" />
      <img src={IMAGE} alt="main" width="300" height="200" />
      <ClickCounter name="test1" />
    </div>
  )
}
