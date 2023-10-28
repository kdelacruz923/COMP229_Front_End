import React, {useEffect} from 'react';

function Services()
{
    useEffect(()=>{
        document.title = "Our Services";
    });
    return(
        <div className='container'>
            <h1> About Us</h1>
            <hr />
            <p> Here is the detail of our Services.</p>
        </div>
    )
}

export default About;