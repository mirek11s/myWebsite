import './styles.css'
import IMAGE from './main_img.jpg';
import LOGO from './svgFile.svg';

export const App = () => {
    return (
        <div>
            <h1>My App</h1>
            <img src={LOGO} alt="main image" />
            <img src={IMAGE} alt="main image" width="300" height="200" />
        </div>
    );
};