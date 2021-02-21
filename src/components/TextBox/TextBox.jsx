import './TextBox.scss'
import React from "react";

const TextBox = ({label, defaulValue, required}) => (
    <div className="text-box">
        <label htmlFor="name">{ label }</label>
        <input id="name" name="name" type="text" defaultValue={defaulValue || ''} required={required} />
    </div>
)

export default TextBox