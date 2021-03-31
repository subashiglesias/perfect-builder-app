import React from 'react';
import './CustomersForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import SelectField from "../../SelectField/SelectField";

const CustomersForm = ({handleSubmit, dialog, fieldValues, projectName, projectList}) => {

    return (
        <div className="item-form">
            <div className="header"> {`${fieldValues.name || 'New'}'s Contract`}</div>
            <form onSubmit={handleSubmit}>
                <div className="content">
                    <TextBox label="Enter Customer Name" id={'name'} defaulValue={fieldValues.name} required/>
                    {renderIf(() => fieldValues.id, () => (
                        <TextBox label="Item id" id={'id'} defaulValue={fieldValues.id} readonly/>
                    ))}
                    <SelectField label="Select project name" id={'projectName'} required defaulValue={projectName} optionsLabel={projectList} optionsValue={projectList} updateHandler={() => {}}/>
                    <TextBox label="Enter mobile number" type={"number"} id={'mobile'} defaulValue={fieldValues.mobile}
                             required/>
                    <TextBox label="Enter email Id" id={'emailId'} defaulValue={fieldValues.emailId} required/>
                    <TextBox label="Enter address" id={'address'} defaulValue={fieldValues.address} required/>
                </div>
                {renderIf(() => dialog, () => (
                    <div className="error">
                        <p>{dialog}</p>
                    </div>
                ))}
                <div className="actions">
                    <button className="save">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CustomersForm;