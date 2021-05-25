import React from 'react';
import './form.css'

const Form = ({inputchange, onSubmit, onInfo}) => {
    return (
        <div className="main tc">
                <div className="">
                <input className="f4 input w5" type="text" onChange={inputchange}/>
                <button className="grow f4 link no-underline btn" onClick={onSubmit}><label className="f5">Detect</label></button>
            </div>
        </div>   
    );
}

export default Form;