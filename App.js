import React from 'react';
import  ReactDOM  from 'react-dom';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom"
import ListStudentComponents from './components/ListStudentComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
      <HeaderComponent/>
       <div className="container">
             <Switch> 
              <Route path ="/" exact component ={ListStudentComponents}></Route>
              <Route path ="/student"component ={ListStudentComponents}></Route>
              <Route path ="/add-student/:id"component ={CreateStudentComponent}></Route>
              <Route path ="/view-student/:id"component ={ViewStudentComponent}></Route>
              {/*<Route path ="/update-student/:id"component ={UpdateStudentComponent}></Route>*/}

              <ListStudentComponents/>
             </Switch>
       </div>
       <FooterComponent/>
       </div>
       </Router>
    </div>
  );
}

export default App;
