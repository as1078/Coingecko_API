import React from 'react';
//import ListElement from "./components/ListElement"

const List = props => (
    <div>
        
        <h1>
            Directory
        </h1>
        <ol>
            <li>
                
            </li>
            <button onClick={props.getData}>
                Exchange
            </button>
        </ol>
    </div>
    
);

export default List;