import React from 'react';
import './ProjectsForm.scss'
import {renderIf} from "../../utils/helpers";

const ProjectsForm = ({handleSubmit, dialog, fieldValues}) => {
    console.log(fieldValues);

    return (
    <div className="modal">
        <div className="header"> New Project</div>
        <form onSubmit={handleSubmit}>
            <div className="content">
                <label htmlFor="name">Enter project Name</label>
                <input id="name" name="name" type="text" defaultValue={fieldValues.name || ''} required/>
                <label htmlFor="area">Enter project Area</label>
                <input id="area" name="area" type="text" defaultValue={fieldValues.area || ''} required/>
                <label htmlFor="category">Enter project Category</label>
                <input id="category" name="category" type="text" defaultValue={fieldValues.category || ''} required/>
                <label htmlFor="description">Enter project Description</label>
                <input id="description" name="description" type="text" defaultValue={fieldValues.description || ''} required/>
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