// Main Page
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const List = props => (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Logo</th>
                    <th>Country</th>
                    <th>URL</th>
                    <th>Trust Rank</th>
                </tr>
            </thead>    
        {props.exchanges.map((obj)=>{
                return(
                    <Fragment>   
                        <tbody>
                            <tr className="exchange_element">
                                <td>{obj.name}</td>
                                <td><img src={obj.image}/></td>
                                <td>{obj.country}</td>
                                <td><a href={obj.url}>{obj.url}</a></td>
                                <td>{obj.trust_score_rank}</td>
                                <td><button className="exchange_buttons">
                                    <Link to={{pathname: `/crypexchange/${obj.id}`,
                                    state:{crypexchange: obj.id}}
                                }>Exchange</Link></button></td>
                            </tr>
                        </tbody>
                    </Fragment>
                    )         
            })}
            </table> 
    </div>
    
);

export default List;