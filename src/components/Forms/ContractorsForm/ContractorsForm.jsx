import React from 'react';
import './ContractorsForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import AutoDropDown from "../../AutoDropDown/AutoDropDown";

const ContractorsForm = ({handleSubmit, dialog, fieldValues}) => {

    return (
        <div className="project-form">
            <div className="header"> {`${fieldValues.name || 'New'}'s Contract`}</div>
            <form onSubmit={handleSubmit}>
                <div className="content">
                    <TextBox label="Enter Contractor Name" id={'name'} defaulValue={fieldValues.name} required/>
                    {renderIf(() => fieldValues.id, () => (
                        <TextBox label="Contractor id" id={'id'} defaulValue={fieldValues.id} readonly/>
                    ))}
                    <AutoDropDown label="Enter work type" id={'workType'} defaulValue={fieldValues.workType} options={[
                        "Civil contract",
                        "Plumbing contract",
                        "Electrical contract",
                        "Painting contract",
                        "Carpentry contract",
                        "Tiles contract"
                    ]} />
                    <TextBox label="Enter mobile number" type={"number"} id={'mobile'} defaulValue={fieldValues.mobile} required/>
                    <TextBox label="Enter email Id" id={'emailId'} defaulValue={fieldValues.emailId} required/>
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

export default ContractorsForm;