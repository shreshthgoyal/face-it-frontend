import React from 'react';
import './home.css'

const Home = ({onRoutechange}) => {
    return (
        <div className="white tl ma6">
            <h1 className="f-headline lh-solid grow">face-it</h1>
            <h2 className="f2 grow">WE-FACE-WITH-YOU</h2>
            <h4 onClick={()=>onRoutechange('know')} className="f3 ba ph3 pv2 mb2 dib white grow">KNOW MORE ➡</h4>
        </div> 
    );
}

export default Home;