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
            <p> Here is the details of our projects.</p>
        </div>
    )
}

export default Projects;