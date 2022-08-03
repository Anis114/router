import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import React from 'react'
import {Link} from 'react-router-dom'
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header></Header>
    <Switch>
     
<Route  path='/Desc'>
<AddToDo/>
</Route>

     </Switch>
     
    </div>
    </BrowserRouter> 
   
    
   
  );
}

export default App;
