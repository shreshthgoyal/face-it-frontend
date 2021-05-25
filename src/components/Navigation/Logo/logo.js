import React from 'react';
import Tilt from 'react-tilt';
import './logo.css'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 80, width: 80 }} >
                <div className="Tilt-inner pa2"> 
                <img alt= "" src="https://i.ibb.co/zGB4LL2/ai.png"></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;