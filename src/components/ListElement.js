import React from 'react';

const ListElement = props =>(
    <div className="container">
        <div className="row">
        {props.map((obj)=>{
            return(
                <div>
                    <p key={obj.id}>{obj.name},
                        {obj.country},
                        {obj.trust_score_rank},
                        {obj.url}
                    </p>
                    <img src={obj.image}/>
                </div>
            );
        })}
        </div>
    </div>
);

export default ListElement;