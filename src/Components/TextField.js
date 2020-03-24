import React, {useState} from 'react';
import './TextField.scss';

export default function TextField() {
    const [inputValue, updateInputValue] = useState('');
    //const [fieldActive, updateFieldActive] = useState(false);
    
    /*function disableFocus(e) {
        if(e.target.value === '') {
            updateFieldActive(false)
        }
    }

   /* function activateField() {
        updateFieldActive(false);
    }
    
    function onChange(e){
        e.preventDefault(e);
        updateInputValue(e.target.value);
       // activateField(e);
    }*/
    

    return(
        <div className = 'mds-textfield'>
            <input className = 'mds-textfield__input'
                   type = 'text'
                   value = {inputValue}
                   required = ''
                  // onFocus = {activateField}
                  // onBlur = {disableFocus}
                   onChange = {(e)=> updateInputValue(e.target.value)}/>
            <div className = 'mds-textfield__underline'></div>
            <label className = 'mds-floating__label'>Name</label>
        </div>
    );
}