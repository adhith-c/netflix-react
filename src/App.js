
import './App.css';
import Banner from './Banner/Banner';
import NavBar from './NavBar/NavBar';
import RowPost from './RowPost/RowPost';
import {original,action,Romance} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={original} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall />
       <RowPost url={Romance} title="Romance" />
    </div>
  );
}

export default App;
