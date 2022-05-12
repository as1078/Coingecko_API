import React from 'react';

class CrypExchange extends React.Component{
    state = {
        activeExchange: []
    }
    componentDidMount = async() =>{
        //const api_call = await fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=10`);
        const title = this.props.location.state.crypexchange;
        const api_call = await fetch(`https://api.coingecko.com/api/v3/exchanges/${title}`);
        const data = await api_call.json();
        this.setState({activeExchange:data});

    }
    
    render(){
        const exc = this.state.activeExchange;
        return (
            <div className="container">
                <div className="active-exchange">
                    <p>Cryptocurrency Exchange</p>
                    
                    <table>
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
                                    <td><a href={exc.facebook_url}>Facebook</a>
                                    <a href={exc.reddit_url}>Reddit</a>
                                    <a href={exc.twitter_handle}>Twitter</a>
                                    <a href={exc.telegram_url}>Telegram</a></td>
                                    <td>{exc.description}</td>
                                </tr>
                            </tbody>
                        </table> 
                </div>
            </div>
        )
    }
};
    


export default CrypExchange;

/*
name, country, trust rank, logo, 
year of establishment, social media links, description, 
and a back-to-main-page button.
*/