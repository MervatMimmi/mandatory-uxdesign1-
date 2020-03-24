import React from 'react';
import './RadioButton.scss';

export default function RadioButton({isOnRadio, onColorRadio, handleToggleRadio}) {
    
    return(
        <div className = 'mds-radiobutton__parent'>
        <div className = 'mds-radiobutton'>
            <input className = 'mds-radiobutton__input'
                id = 'basic-radio__one'
                type = 'radio'
                value = 'one'
                checked = {isOnRadio === 'one'}
                onChange = {handleToggleRadio}
                />
            <label className = 'mds-radiobutton__label'
                style = {{background: isOnRadio  && onColorRadio }}
                htmlFor='basic-radio__one'>
                <span className = 'mds-radiobutton__button'></span> 
            </label>
            <input className = 'mds-radiobutton__input'
                id = 'basic-radio__two'
                type = 'radio'
                value = 'two'
                checked = {isOnRadio === 'two'}
                onChange = {handleToggleRadio}
                />
            <label className = 'mds-radiobutton__label'
                style = {{background: isOnRadio  && onColorRadio }}
                htmlFor='basic-radio__two'>
                <span className = 'mds-radiobutton__button'></span> 
            </label>
        </div>
        <p className = 'mds-radiobutton__text'>Choose a button</p>
        </div>
    );
}