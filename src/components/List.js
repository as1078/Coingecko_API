import React from 'react';
import ListElement from "./ListElement"

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
                                        Exchange</button></td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                    )
            })}
    </div>
    
);

export default List;

//<ListElement getData={props.getData}/>
/*
{props.getData.map((obj)=>{
                    return(
                        <div>
                            <p key={obj.id}>{obj.name},
                            {obj.country},
                            {obj.trust_score_rank},
                            {obj.year_established},
                            {obj.description}
                            </p>
                            <img src={obj.image}/>
                        </div>
                        )
                })}
                */
                //name, country, URL, logo, trust rank)