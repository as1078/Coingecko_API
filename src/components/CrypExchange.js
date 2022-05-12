import React from 'react';
import {Link} from "react-router-dom";

var rootStyle = {
    backgroundColor: 'lightgreen',
    height: '100%'
}
// Page with Detailed Information on Exchanges
class CrypExchange extends React.Component{
    state = {
        activeExchange: []
    }
    componentDidMount = async() =>{
        const title = this.props.location.state.crypexchange;
        const api_call = await fetch(`https://api.coingecko.com/api/v3/exchanges/${title}`);
        const data = await api_call.json();
        this.setState({activeExchange:data});
        console.log(this.state);
    }
    // Change the API facebook_url data to make it usable
    componentDidUpdate(){
        const exc = this.state.activeExchange;
        let fb_url = exc.facebook_url;
        if(!exc.facebook_url.startsWith('https://www.facebook.com')){
            fb_url = `https://www.facebook.com/${exc.facebook_url}`
            exc.facebook_url = fb_url; 
            this.setState({activeExchange:exc});
        }
    }    
    
    render(){
        const exc = this.state.activeExchange;
        return (
            <div className="container" style={rootStyle}>
                <table class="detailedTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Trust Rank</th>
                                <th>Logo</th>
                                <th>Year of Establishment</th>
                                <th>Social Media Links</th>
                                <th>Description</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{exc.name}</td>
                                <td>{exc.country}</td>
                                <td>{exc.trust_score_rank}</td>
                                <td><img src={exc.image} alt={exc.name}></img></td>
                                <td>{exc.year_established}</td>
                                <td><ul class="socialMedia">
                                    <li><a href={exc.facebook_url}>Facebook</a></li>
                                    <li><a href={`https://twitter.com/${exc.twitter_handle}`}>Twitter</a></li>
                                </ul></td>
                                <td>{exc.description}</td>
                                <td><button className="main_page_buttons">
                                    <Link to={{pathname: `/`}
                                }>Back to Main Page</Link></button></td>

                            </tr>
                        </tbody>
                </table> 
            </div>
        )
    }
};
    


export default CrypExchange;
