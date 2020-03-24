import React, {useState} from 'react';
import './TextField.scss';

export default function TextField() {
    const [inputValue, updateInputValue] = useState('');

    return(
        <div className = 'mds-textfield'>
            <input className = 'mds-textfield__input'
                   type = 'text'
                   value = {inputValue}
                   required
                   onChange = {(e)=> updateInputValue(e.target.value)}/>
            <div className = 'mds-textfield__underline'></div>
            <label className = 'mds-floating__label'>Name</label>
        </div>
    );
}