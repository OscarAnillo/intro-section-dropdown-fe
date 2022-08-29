import ImageComponent from './components/image-component';
import NavBarComponent from './components/nav-component';
import TextComponent from './components/text-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <div className='App-row'>
        <ImageComponent />
        <TextComponent />
      </div>
    </div>
  );
}

export default App;
