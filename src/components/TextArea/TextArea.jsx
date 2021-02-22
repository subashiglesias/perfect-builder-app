import './TextArea.scss'
import React from "react";

const TextArea = ({label, defaulValue, required, cols, rows, id}) => (
    <div className="text-area">
        <label htmlFor="name">{ label }</label>
        <textarea id={id} name={id} defaultValue={defaulValue || ''} required={required} cols={cols} rows={rows} />
    </div>
)

export default TextArea