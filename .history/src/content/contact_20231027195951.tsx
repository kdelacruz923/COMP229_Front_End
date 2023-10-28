import React, {useEffect} from 'react';

function Services()
{
    useEffect(()=>{
        document.title = "Contact Us";
    });
    return(
        <div className='container'>
            <h1> Contact Us</h1>
            <hr />
            <p> Here is the detail of our Services.</p>
        </div>
    )
}

export default Services;