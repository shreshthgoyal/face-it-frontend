import React from 'react';
import './face.css'

const FaceRecon = ({imageUrl, box, info}) => {
    return (
        <div className="center">
            <div className="absolute pa4">
             <img src={imageUrl} alt="" id='inputImage' width='250px' height='auto'></img>
             <div className="bounding-box ma2" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}
             ></div>
             </div>
        </div> 
    );
}

export default FaceRecon;