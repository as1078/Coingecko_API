import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
import List from "./components/List"
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component{
  state = {
    objects:[],
  }
  componentDidMount(){
    this.getData()
  }
  getData = async (e) =>{
    //e.preventDefault();
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
          <h1>Cryptocurrency Exchanges</h1>
        </header> 
        <List exchanges={this.state.objects}/>  
      </div>
    );
    }
  }

export default App;
