import React from 'react';
import './Switch.scss';


export default function Switch({isOn, handleToggle, onColor }) {
    
    return(
        <div className = 'mds-switch__parent' >
            <div className = 'mds-switch'>
                <input className = 'mds-switch__input'
                    id = 'basic-switch'
                    type = 'checkbox'
                    checked = {isOn}
                    onChange = {handleToggle}
                    />
                <label className = 'mds-switch__label'
                    style = {{background: isOn && onColor }}
                    htmlFor='basic-switch'
                    tabIndex = '0'>
                    <span className = 'mds-switch__button'></span> 
                </label>
            </div>
            <p className = 'mds-switch__text'>Switch On/Off</p>
        </div>
    );
}