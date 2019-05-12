import React from 'react';
import './App.css';
import Persons from './components/Persons'
import AddPerson from './components/AddPerson'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  state={
    persons:[
      {firstName:'hesam',lastName:'ahrari',idCard:'1234',id:'1'}
    ]
  }


addPerson = (person) =>{
    if(this.state.persons.length>0){
      this.state.persons.forEach(el =>{
    
        if(el.idCard === person.idCard){
          alert("pleace insert valid idCard")
          let persons = [...this.state.persons]
          this.setState({
            persons: persons
        })
      }else{
        let VerPersons = [...this.state.persons,person]
          this.setState({
            persons: VerPersons
        })
      }
    })
  }else{
    let noPersons = [person]
      this.setState({
          persons: noPersons
      })
  }
}
      
  
    
  deleteperson = (id)=>{
    let persons = this.state.persons.filter((person,index)=>{
      return id !== index
    })
    this.setState({
      persons:persons
    })
  }
  render(){
    return (
      <div className="App">
        <AddPerson addPerson={this.addPerson}/>
        <Persons deleteperson={this.deleteperson} persons={this.state.persons}/>
      </div>
    );
  }
  }


export default App;
