import React,{Component} from 'react';
import'./App.css';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import CardList from './Cards/CardList';

class App extends Component	 {
    constructor(){
        super()//tova e na komponent
        this.state = {//neshto koeto se promenq , moje go
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response =>{ return response.json();})
        .then(users => {this.setState({robots:users})}); 
    }

    onSearchChange =(event) =>{
        this.setState({searchfield: event.target.value});
    }
    
    render(){

        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        
        if(this.state.robots.length === 0){
            return <h2>Loading</h2>
        }
        else{ 
            return(
                <div className = 'tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
            )
            }
        }


}

export default App;