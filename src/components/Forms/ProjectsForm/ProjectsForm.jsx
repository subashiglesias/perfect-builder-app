import React, {useState} from 'react';
import './ProjectsForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import TextArea from "../../TextArea";
import {TabContext, TabPanel} from "@material-ui/lab";
import TabList from "@material-ui/lab/TabList";
import Tab from "@material-ui/core/Tab";
import {Avatar} from "@material-ui/core";
import addBox from "../../../images/add_box.svg";
import BlocksForm from "../BlocksForm";

var moment = require('moment'); // require


const ProjectsForm = ({handleSubmit, dialog, fieldValues}) => {
    console.log(fieldValues);
    const [value, setValue] = useState(0);
    const [blocks, setBlocks] = useState(fieldValues.blocks || []);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="project-form">
            <div className="header"> {`${fieldValues.name || 'New'} Project`}</div>
            <form onSubmit={handleSubmit(blocks)}>
                <div className="content">
                    <TextBox label="Enter project Name" id={'name'} defaulValue={fieldValues.name} required/>
                    {renderIf( () => fieldValues.id , () => (
                        <TextBox label="project id" id={'id'} defaulValue={fieldValues.id} readonly/>
                        ))}
                    <TextArea label="Enter project Address" id={'address'} cols={1} rows={3}
                              defaulValue={fieldValues.address} required/>
                    <TextArea label="Enter project Comments" id={'comment'} cols={1} rows={3}
                              defaulValue={fieldValues.comments}
                              required/>
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
            <div >
                <TabContext value={value}>
                    <TabList orientation="vertical"
                             variant="scrollable"
                             value={value}
                             onChange={handleChange}
                             aria-label="List of blocks">
                        <Tab icon={<Avatar alt="Add new" src={addBox}/>} value={0}/>
                        {blocks.map((block) => (
                            <Tab label={block.name} value={block.name}/>))}
                    </TabList>
                    <TabPanel value={0}>
                        <div className="project-page__content">
                            <BlocksForm blockValues={blocks} setBlocksValues={setBlocks}/>
                        </div>
                    </TabPanel>
                    {blocks && blocks.map((block) => (
                        <TabPanel value={block.name}> <BlocksForm blockValues={block}/> </TabPanel>))}
                </TabContext>
            </div>
        </div>
    )
}

export default ProjectsForm;