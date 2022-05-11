import React from 'react';
{this.state.objects.map((obj)=>{
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