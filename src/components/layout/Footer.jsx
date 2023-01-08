import React from 'react';

const Footer = () => {
    return ( 
    <div className="container footer">
    <div className="col">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00023d"  d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,112C672,117,768,171,864,176C960,181,1056,139,1152,101.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <p className="lead text-center pb-4 navBar text-white">
            <span> Derechos reservados &copy; DAG</span>
        </p>
    </div>
</div> );
}

export default Footer;