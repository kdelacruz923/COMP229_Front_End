import React, {useEffect} from 'react';

function Projects()
{
    useEffect(()=>{
        document.title = "Our Projects";
    });
    return(
        <div className='container'>
            <h1> About Us</h1>
            <hr />
            <p> Here is the detail</p>
        </div>
    )
}

export default projects;