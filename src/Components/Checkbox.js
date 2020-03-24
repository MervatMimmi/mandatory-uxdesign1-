import React from 'react';
import './Checkbox.scss';

export default function Checkbox({isOnCheck, handleToggleCheck,onColorCheck}) {
    return(
        <div className = 'mds-checkbox'>
            <input className = 'mds-checkbox__input'
                id = 'basic-checkbox'
                type = 'checkbox'
                checked = {isOnCheck}
                onChange = {handleToggleCheck}
                />
            <label className = 'mds-checkbox__label'
                htmlFor = 'basic-checkbox'
                style = {{background: isOnCheck && onColorCheck }}
                >
                <span className = 'mds-checkbox__checkmark'></span>
            </label>

        </div>
    );
}