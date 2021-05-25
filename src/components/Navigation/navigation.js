import React from 'react';

const Navigation = ({ onRoutechange, isSigned }) => {
    if (isSigned) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRoutechange('home')} className="f6 link white br-pill pa3 pointer no-underline ba grow dib mr3 no-underline pv2 ">Sign-Out</p>
            </nav>
        );
    }
    else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRoutechange('home')} className="f6 link white br-pill pa3 pointer no-underline ba grow dib mr3 no-underline pv2 ">Home</p>
                <p onClick={() => onRoutechange('signin')} className="f6 link white br-pill pa3 pointer no-underline ba grow dib mr3 no-underline pv2 ">Sign-In</p>
                <p onClick={() => onRoutechange('signup')} className="f6 link white br-pill pa3 pointer no-underline ba grow dib mr3 no-underline pv2 ">Sign-Up</p>
            </nav>

        );
    }
}

export default Navigation;