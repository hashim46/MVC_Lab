import React from 'react'

function Index(props){
    return(
        <div>
            <h1>Index View</h1>
            <ul>
                {props.vegetables.map((vegetable, index)=>
                <li> 
                    <a href={`/vegetables/${index}`}><strong>{vegetable.name}</strong> </a>
                    
                </li> 
           )}
           </ul>
        </div>
    )
}

export default Index