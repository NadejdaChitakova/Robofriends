import React,{Component} from 'react';
import {robots} from './robots';
import SearchBox from './SearchBox';
import CardList from './Cards/CardList';

class App extends Component	 {
    constructor(){
        super()//tova e na komponent
        this.state = {//neshto koeto se promenq , moje go
            robots : robots,//have robots array
            searchfield: ''
        }
    }

    onSearchChange =(event) =>{
        this.setState({searchfield: event.target.value});
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        console.log(filteredRobots); //give us the value of search 
    }

    render(){
        return(
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange ={this.onSearchChange}/>
                <CardList robots = {this.state.robots}/>
            </div>
        )
        }
}

export default App;