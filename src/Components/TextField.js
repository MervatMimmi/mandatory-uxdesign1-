import React from 'react';
import './TextField.scss';

export default function TextField({inputValue, onChange}) {

    return(
        <div className = 'mds-textfield'>
            <input className = 'mds-textfield__input'
                   type = 'text'
                   value = {inputValue}
                   required
                   onChange = {onChange}/>
            <div className = 'mds-textfield__underline'></div>
            <label className = 'mds-floating__label'>Name</label>
        </div>
    );
}