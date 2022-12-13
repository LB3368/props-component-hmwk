/* eslint-disable no-unused-vars */
import React, { useState, } from 'react'
import "./App.css";
import logo from './logo.svg'
import { Routes, Route} from 'react-router-dom'
import EmployeeList from './components/EmployeeList'
import Card from './components/EmployeeCard'
import data from './data/employeedata.json'
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateEmployee from "./components/CreateEmployee"
import ViewEmployee from './components/ViewEmployee'




function App() {
  //use cards as the state and pass it the data from our file
  const [cards, setCards] = useState(data);

  //Sort the table by at least one category
  //sortByName
  function sortByName() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.lastName;
      var employeeB = b.lastName;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

//sort by tenure
function sortByTenure() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.since;
      var employeeB = b.since;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

// Filter the users by at least one property.
// filter In Office
 function filterInOffice (){
   const filteredArray = [];
   for (let i = 0; i < data.length; i++){
  const employee = data[i];
  if (employee.workPlace === "In Office"){
    filteredArray.push(employee);
    }
  }
  setCards(filteredArray);
 }

// filter remote
function filterRemote (){
  const filteredArray = [];
  for (let i = 0; i < data.length; i++){
 const employee = data[i];
 if (employee.workPlace === "Remote"){
   filteredArray.push(employee);
   }
 }
 setCards(filteredArray);
}





//clears filters and displays all employees
  function filterNone() {
    setCards(data);
  }

  return (
    <div className="App">
      <Header />
      <div className="row labels">
      </div>
        <div className="row d-flex flex-wrap button-row">
          <div className="col button-col">
            <p className="button-label">Sort by:</p>
            <button
              onClick={() => sortByName()}
              className="button">
              Name
            </button>
            <button
              onClick={() => sortByTenure()}
              className="button">
              Time Employeed
            </button>
          </div>
          <div className="col button-col">
          <button 
          onClick={() => filterNone()} 
          className="button">
              View All
            </button>
          </div>
          <div className="col button-col">
            <p className="button-label">Filter by:</p>
            <button 
            onClick={() => filterInOffice()} 
            className="button ">In Office
            </button>
            <button
              onClick={() => filterRemote()}
              className="button">Remote
            </button>
          </div>
        </div>
        <div className="container-main">
        <div className="row grid">
          {/* <div className="col"> */}
            <div className="employee-cards">
              {cards.map(function(e) {
                return <Card employee={e} />;
              })}
            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
  
  
  /*return (
    <div>
        <Routes>
              <Header />
                <div className="container">
                    <Route> 
                          <Route path = "/" exact component = {EmployeeList}></Route>
                          <Route path = "/employees" component = {EmployeeList}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployee}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployee}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> }
                    </Route>
                </div>
              <Footer />
        </Routes>
    </div>
    
  );
}
*/
export default App;








/*import Card from "./components/EmployeeCard";

//import data from "./data/employeedata.json";

function App() {
  //use cards as the state and pass it the data from our file
  const [cards, setCards] = useState(data);

  //Sort the table by at least one category
  //sortByName
  function sortByName() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.lastName;
      var employeeB = b.lastName;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

//sort by tenure
function sortByTenure() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.since;
      var employeeB = b.since;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

// Filter the users by at least one property.
// filter In Office
 function filterInOffice (){
   const filteredArray = [];
   for (let i = 0; i < data.length; i++){
  const employee = data[i];
  if (employee.workPlace === "In Office"){
    filteredArray.push(employee);
    }
  }
  setCards(filteredArray);
 }

// filter remote
function filterRemote (){
  const filteredArray = [];
  for (let i = 0; i < data.length; i++){
 const employee = data[i];
 if (employee.workPlace === "Remote"){
   filteredArray.push(employee);
   }
 }
 setCards(filteredArray);
}





//clears filters and displays all employees
  function filterNone() {
    setCards(data);
  }

  return (
    <div className="App">
      <Header />
      <div className="row labels">
      </div>
        <div className="row d-flex flex-wrap button-row">
          <div className="col button-col">
            <p className="button-label">Sort by:</p>
            <button
              onClick={() => sortByName()}
              className="button">
              Name
            </button>
            <button
              onClick={() => sortByTenure()}
              className="button">
              Time Employeed
            </button>
          </div>
          <div className="col button-col">
          <button 
          onClick={() => filterNone()} 
          className="button">
              View All
            </button>
          </div>
          <div className="col button-col">
            <p className="button-label">Filter by:</p>
            <button 
            onClick={() => filterInOffice()} 
            className="button ">In Office
            </button>
            <button
              onClick={() => filterRemote()}
              className="button">Remote
            </button>
          </div>
        </div>
        <div className="container-main">
        <div className="row grid">
          {/* <div className="col"> }
            <div className="employee-cards">
              {cards.map(function(e) {
                return <Card employee={e} />;
              })}
            {/* </div> }
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;*/