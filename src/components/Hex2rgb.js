import React, {useState} from 'react';
import '../App.css';

function HexToRGB() {
    const [state, setState] = useState({
        value:''
    });
    const element = document.querySelector('.rgb');
    const handleChange = event => {
        const val = event.target.value.trim();
        setState({value: val});
        if (val.length === 7) {
            element.value='';
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
            element.value = result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'Ошибка!';
            if (element.value !== 'Ошибка!') document.body.style.backgroundColor = element.value;
            else document.body.style.backgroundColor = 'red';
        }
    }

    return (
        <div className={"wrapper"}>
            <div className={"container"}>
                <input type={"text"} value={state.value} onChange={handleChange} className={"app-input"}/>
                <input type={"text"} className={"app-input rgb"}/>
            </div>
        </div>
        
    )
}

export default HexToRGB;