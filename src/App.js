import ImageComponent from './components/image-component';
import NavBarComponent from './components/nav-component';
import TextComponent from './components/text-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <div>
        <ImageComponent />
        <TextComponent />
      </div>
    </div>
  );
}

export default App;
