import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Body from './body/body';
import Carousel from './carousel/carousel';
import ScrollButton from './ScrollButton/ScrollButton';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <ScrollButton></ScrollButton>
      <Body></Body>
      </div>
  );
}

export default App;
