
import './App.css';
import Banner from './Banner/Banner';
import NavBar from './NavBar/NavBar';
import RowPost from './RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix Originals"/>
      <RowPost title="Action" isSmall/>
    </div>
  );
}

export default App;
