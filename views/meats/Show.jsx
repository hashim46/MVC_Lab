import React from 'react'



function Show(props){
    return (
        <div style = {{backgroundColor: 'red'}}>
            <h1>Show View</h1>
            <p> The <strong>{props.meat.name}</strong> {props.meat.readyToEat ? 'is ready to eat' : 'not ready to eat'  }</p>
            <p>It's color is {props.meat.color}</p>
            <a href="/meats"> Back </a>
           
        </div>
    )
}

export default Show;