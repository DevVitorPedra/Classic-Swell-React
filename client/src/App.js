import Header from "./views/Header/Header";
import { Route, Switch } from 'react-router-dom';
import Login from "./views/Login/Login";
import BestBeaches from "./views/BestBeaches/BestBeaches";
import WeekForecast from "./views/WeekForecast/WeekForecast";
import News from "./views/News/News";
import SignUp from "./components/SignUp/SignUp";
import './App.css'
import { useState } from "react";
import { LoginContext, UserContext } from "./components/SignIn/SignIn";



function App() {
  const [value,setValue] = useState('unloged')
  const [userName,setUserName] = useState('')

  
  return (
 
    <div className="App">
      <LoginContext.Provider value={{userName,setUserName}}>
       <UserContext.Provider value={{value,setValue}}>
      <Header/>
      
      <div className="display">
      <Switch>
      <Route exact path="/" component={BestBeaches}></Route>
      <Route path="/weekforecast" component={WeekForecast}></Route>
      
      <Route path="/news" component={News}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
      </Switch>
      
      </div>
      </UserContext.Provider>
      </LoginContext.Provider>
    </div>
    
    
  )
}

export default App;
