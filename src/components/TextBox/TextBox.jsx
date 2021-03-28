import './TextBox.scss'
import React from "react";

const TextBox = ({label, defaulValue, required, id, readonly}) => (
    <div className="text-box">
        <label htmlFor="name">{ label }</label>
        <input id={id} name={id} type="text" defaultValue={defaulValue || ''} required={required} readOnly={readonly}/>
    </div>
)

export default TextBox