import React from 'react'

function Edit(props){
    return(
        <div>
            <h1> In Edit in fruits </h1>
            <form>
                <label>
                    <input type="text" name="name"/>
                </label>
            <input type = 'submit' value= 'Submit' />
           </form>
        </div>
    )
}

export default Edit