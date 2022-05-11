import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
import List from "./components/List"

class App extends Component{
  state = {
    objects:[]

  }
  getData = async (e) =>{
    e.preventDefault();
    console.log("working");
    const api_call = await fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=10`);
    const data = await api_call.json();
    console.log(data);
    this.setState({objects:data});

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Cryptocurrency Exchanges</h1>
          <List getData={this.getData}/>
          {this.state.objects.map((obj)=>{
            return(
               <div>
                <p key={obj.id}>{obj.name},
                {obj.country},
                {obj.trust_score_rank}</p>
                <img src={obj.image}/>
               </div>
               )
          })}
        </header> 
      </div>
    );
  }
  
}

export default App;
