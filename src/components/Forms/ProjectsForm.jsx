import React from 'react';
import './ProjectsForm.scss'
import {renderIf} from "../../utils/helpers";
import TextBox from "../TextBox";
import TextArea from "../TextArea";

const ProjectsForm = ({handleSubmit, dialog, fieldValues}) => {
    console.log(fieldValues);

    return (
    <div className="modal">
        <div className="header"> { `${fieldValues.name || 'New'} Project` }</div>
        <form onSubmit={handleSubmit}>
            <div className="content">
                <TextBox label="Enter project Name" defaulValue={fieldValues.name} required/>
                <TextArea label="Enter project Address" cols={1} rows={3} defaulValue={fieldValues.area} required/>
                <TextArea label="Enter project Comments" cols={1} rows={3} defaulValue={fieldValues.category} required/>
            </div>
            {renderIf( () => dialog, () => (
                <div className="error">
                    <p>{dialog}</p>
                </div>
            ))}
            <div className="actions">
                <button>Save</button>
            </div>
        </form>
    </div>
)}

export default ProjectsForm;