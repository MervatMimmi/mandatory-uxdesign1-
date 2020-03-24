import React, {useState} from 'react';
import Header from './Header';
import TextField from './TextField';
import Switch from './Switch';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';


export default function Main(){
    const [value, setValue] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isRadio, setIsRadio] = useState('');
    const [disable, updateDisable] = useState(false);
    const [buttonText, updateButtonText] = useState('DISABLE');

    function onClick(){
        updateDisable(!disable);
        updateButtonText(buttonText === 'DISABLE' ? 'ENABLE': 'DISABLE');
    }

    return(
        <div className = 'container'>
            <h1>UX-teknik</h1>
            <div className = 'parent-container'>
                <Header/>
                <div style = {disable ? {pointerEvents: 'none', opacity: '0.4'} : {}}>
                    <TextField/>
                    <Switch
                        isOn = {value}
                        onColor = '#35628e'
                        handleToggle={() => setValue(!value)}
                        />
                    <Checkbox 
                        isOnCheck = {isChecked}
                        onColorCheck = '#35628e'
                        handleToggleCheck={() => setIsChecked(!isChecked)}
                        />
                    <RadioButton
                        isOnRadio = {isRadio}
                        onColorRadio = '#35628e'
                        handleToggleRadio = {(e) => setIsRadio(e.target.value)}
                        />
                </div>
                <div className = 'mds-container'>
                        <button className = 'mds-container__button'
                            value = {disable}
                            onClick = {onClick}>   
                            {buttonText}
                        </button>
                </div>
            </div>
        </div>
    );
}