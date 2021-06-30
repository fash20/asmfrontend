import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup'
import Report from './components/report/Report'
import Asset from './components/asset/Asset';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='Content'>
        <Switch>
          <Route exact path ='/login'> <Login /> </Route>
          <Route exact path= '/signup'> <Signup /></Route>
          <Route path ='/report'><Report /></Route>
          <Route path ='/asset'><Asset /></Route>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


const NotFound = () =>{
  return(
    <h2 className='not-found'>404 Page Not Found</h2>
  )
}