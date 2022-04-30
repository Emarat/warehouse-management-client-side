import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
