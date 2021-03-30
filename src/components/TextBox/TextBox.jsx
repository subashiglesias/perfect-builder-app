import './TextBox.scss'
import React from "react";

const TextBox = ({label, type, defaulValue, required, id, readonly, defaultChecked}) => (
    <div className="text-box">
        <label htmlFor="name">{ label }</label>
        <input id={id} name={id} type={type ? type : 'text'} defaultValue={defaulValue || ''} required={required} readOnly={readonly} defaultChecked={defaultChecked}/>
    </div>
)

export default TextBox