import * as ReactDOM from 'react-dom';
import { Modpacks } from './components/Modpacks/Modpacks';
import { Play } from './components/Play/Play';
import "./index.css";

function render() {
  ReactDOM.render(<div className='app'>
    <Modpacks/>
    <Play/>
  </div>, document.body);
}

render();