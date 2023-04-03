import logo from './logo.svg';
import './App.css';
import Propex from './components/Propex';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import OrderContainer from './containers/OrderContainer';


function App() {
  function getData(x, y, z) {
    return x + y + z;
  }

  return (
    <div className="App">
      {/* <Propex data="abc"   Datafun={getData} />    */}
      < OrderContainer/>
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
