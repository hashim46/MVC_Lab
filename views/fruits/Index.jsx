import React from 'react'

function Index(props){
    return(
        <div>
            <h1>Index View</h1>
            <ul>
                {props.fruits.map((fruit, index)=>
                <li> 
                    <a href={`/fruits/${index}`}><strong>{fruit.name}</strong> </a>
                    
                </li> 
           )}
           </ul>
        </div>
    )
}

export default Index