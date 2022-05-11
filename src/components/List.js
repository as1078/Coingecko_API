import React from 'react';
import Button from "./Button"
import {Link} from "react-router-dom";

const List = props => (
    <div>
        <h1>
            Directory
        </h1>    
        {props.exchanges.map((obj)=>{
                return(
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
                            <tbody>
                                <tr>
                                    <td>{obj.name}</td>
                                    <td><img src={obj.image}/></td>
                                    <td>{obj.country}</td>
                                    <td><a href={obj.url}>{obj.url}</a></td>
                                    <td>{obj.trust_score_rank}</td>
                                    <td><button className="exchange_buttons">
                                        <Link to={{pathname: `/crypexchange/${obj.id}`}}>Exchange</Link></button></td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                    )
            })}
    </div>
    
);

export default List;