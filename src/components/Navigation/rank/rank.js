import React from 'react';
import './rank.css'


const Rank = ({name, entries}) => {
    return (
       <div className="w6 mr3 tc">
           <div className="f1 head">
                    {`HI ${name}`}
                </div>
           <div className="white f3 pa4">
             {'Currently Your points are '}
             <div className="white f1">
               {`${entries}`}
             </div>
           </div>
       </div>
    );
}

export default Rank;