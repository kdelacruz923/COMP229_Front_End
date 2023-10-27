import React from 'react';

//Footer React Component
function Footer()
{

    function getDate(): number
    {
        let date = new Date();
        return date.get
    }
    return(

        <nav className="navbar fixed-bottom bg-light">
            <div className="container-fluid">
            <h5 id="copyright">&copy; Copyright 2023 - Karen Dela Cruz</h5>
        </div>
</nav>

    )
}

export default Footer;