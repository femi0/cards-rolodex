import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();

    this.state ={
      courses: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then (users=> this.setState({courses:users})); 
  }

handleChange= e =>{ 
  this.setState({searchField: e.target.value});
};


  render(){
    const { courses, searchField } = this.state;
    const filteredcourses = courses.filter(course =>
      course.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
        <h1>My Weird Card List</h1>
        <SearchBox 
          placeholder='Search'
          handleChange ={this.handleChange}
        />
        <CardList courses={filteredcourses}/>
      
      </div>
    );
  } 
}

export default App;
