import React from 'react';
import './SelectField.scss';

const SelectField = ({
                         id, label, optionsLabel, optionsValue, value, updateHandler, onChange, className, selectedValue, disabled, defaulValue
                     }) => (
    <div className={`select-field ${className}`}>
        <span className="field">{label}</span>
        <select
            id={id}
            name={id}
            value={value}
            onChange={(e) => {
                updateHandler(e.target.value);
                if (onChange) onChange();
            }}
            disabled={disabled}
            defaultValue={defaulValue}
        >
            <option selected={selectedValue === 'Select'} value=""> Select </option>
            {optionsLabel.map((item, i) => <option key={item} value={optionsValue[i]} selected={selectedValue === optionsValue[i]}>{item}</option>)}
        </select>
    </div>
);

export default SelectField;
