import React from 'react'



function Show(props){
    return (
        <div style = {{backgroundColor: 'red'}}>
            <h1>Show View</h1>
            <p> The <strong>{props.vegetable.name}</strong> {props.vegetable.readyToEat ? 'is ready to eat' : 'not ready to eat'  }</p>
            <p>It's color is {props.vegetable.color}</p>
            <a href="/vegetables"> Back </a>
           
        </div>
    )
}

export default Show;