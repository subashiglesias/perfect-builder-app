import './TextBox.scss'
import React from "react";

const TextBox = ({label, defaulValue, required, id}) => (
    <div className="text-box">
        <label htmlFor="name">{ label }</label>
        <input id={id} name={id} type="text" defaultValue={defaulValue || ''} required={required} />
    </div>
)

export default TextBox