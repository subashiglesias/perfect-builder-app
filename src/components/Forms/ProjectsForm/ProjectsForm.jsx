import React, {useState} from 'react';
import './ProjectsForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import TextArea from "../../TextArea";
import {Avatar} from "@material-ui/core";
import addField from "../../../images/add_box.svg";
import removeField from "../../../images/remove-black.svg";
import Styles from "../../ReactTable/Styles/Styles";
import ReactTable from "../../ReactTable";
import deleteField from "../../../images/delete-black.svg";

const ProjectsForm = ({handleSubmit, dialog, fieldValues}) => {
    const [blocks, setBlocks] = useState(fieldValues.blocks || []);

    const renderEditable = (row, defaultValue) => {
        return (
            <input
                id={defaultValue + row.index}
                name={defaultValue + row.index}
                type={defaultValue === "name" ? "text" : "number"}
                defaultValue={defaultValue === "name" ? row.values[defaultValue] || '' : isNaN(row.values[defaultValue]) ? null : row.values[defaultValue]}
                onBlur={(event) => updateBlock(row, event, defaultValue)}
            />
        );
    };

    const renderFloorsEditable = (row) => {
        const allBlocks = [...blocks];
        const selectedBlock = allBlocks.slice(row.index, row.index+1)

        return (
            <div>
                <span>
                    <Avatar alt="Add floor" src={addField} onClick={() => {
                        console.log(selectedBlock)
                        selectedBlock[0]['floors'] = [...selectedBlock[0]['floors'],{floorNo: null, name: '', ceilingHeight: ''}]
                        allBlocks.splice(row.index, 1, selectedBlock[0])
                        setBlocks(allBlocks)
                    }}/>
                </span>
                <div className="floors">
                    {selectedBlock[0]['floors'] && selectedBlock[0]['floors'].map((floor, index) => {
                        return(
                            <div className="floor">
                                <input
                                    id={"floorNo" + index}
                                    name={"floorNo" + index}
                                    type="number"
                                    placeholder={"No."}
                                    defaultValue={isNaN(floor.floorNo) ? null : floor.floorNo}
                                    onBlur={(event) => {updateFloor(row, index, event, "floorNo" )}}
                                />
                                <input
                                    id={"name" + index}
                                    name={"name" + index}
                                    type="text"
                                    placeholder={"Floor Name"}
                                    defaultValue={floor.name || ''}
                                    onBlur={(event) => {updateFloor(row, index, event, "name" )}}
                                />
                                <input
                                    id={"ceilingHeight" + index}
                                    name={"ceilingHeight" + index}
                                    type="text"
                                    placeholder={"Ceiling height"}
                                    defaultValue={floor.ceilingHeight || ''}
                                    onBlur={(event) => {updateFloor(row, index, event, "ceilingHeight" )}}
                                />
                                <Avatar alt="Add floor" src={removeField} onClick={() => deleteFloor(row, allBlocks, index)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };

    const updateBlock = (row, event, defaultValue) => {
        event.preventDefault()
        const allBlocks = [...blocks]
        if (event.target.value) {
            console.log(allBlocks)
            const modifiedBlock = allBlocks.slice(row.index, row.index+1)
            modifiedBlock[0][defaultValue] = event.target.value;
            allBlocks.splice(row.index, 1, modifiedBlock[0])
            console.log(allBlocks)
            setBlocks(allBlocks)
        }
    }

    const updateFloor = (row, index, event, defaultValue) => {
        event.preventDefault()
        const allBlocks = [...blocks]
        if (event.target.value) {
            const modifiedBlock = allBlocks.slice(row.index, row.index+1)
            const floor = modifiedBlock[0]["floors"].slice(index, index+1);
            floor[0][defaultValue] = event.target.value;
            modifiedBlock[0]["floors"].splice(index, 1, floor[0])
            allBlocks.splice(row.index, 1, modifiedBlock[0])
            setBlocks(allBlocks)
        }
    }

    const deleteBlock = (row, allBlocks) => {
        const filteredBlocks = [...allBlocks]
        filteredBlocks.splice(row.index, 1)
        setBlocks(filteredBlocks)
    }

    const deleteFloor = (row, allBlocks, floorIndex) => {
        const selectedBlock = allBlocks.slice(row.index, row.index+1)
        selectedBlock[0]["floors"].splice(floorIndex, 1)
        allBlocks.splice(row.index, 1, selectedBlock[0])
        setBlocks(allBlocks)
    }

    const columns = [
        {
            Header: 'Blocks',
            columns: [
                {
                    Header: 'Block Name',
                    accessor: 'name',
                    Cell: ({row}) => renderEditable(row, "name"),
                },
                {
                    Header: 'No. of Units',
                    accessor: 'noOfUnits',
                    Cell: ({row}) => renderEditable(row, "noOfUnits"),
                },
                {
                    Header: 'Car Parking Area',
                    accessor: 'carParkingArea',
                    Cell: ({row}) => renderEditable(row, "carParkingArea"),
                },
                {
                    Header: 'Basement height',
                    accessor: 'basementHeight',
                    Cell: ({row}) => renderEditable(row, "basementHeight"),
                },
                {
                    Header: 'no. of Floors',
                    accessor: 'noOfFloors',
                },
                {
                    Header: 'Floors',
                    accessor: 'floors',
                    Cell: ({row}) => renderFloorsEditable(row),
                },
                {
                    Header: 'Delete',
                    Cell: ({row}) => (<span onClick={() => deleteBlock(row, blocks)}>
                            <Avatar alt="Add project" src={deleteField}/>
                        </span>),
                },
            ],
        },
    ]

    const formatData = (blocks) => {
        const data = []
        blocks.forEach(block => data.push({
            name: block.name,
            noOfUnits: block.noOfUnits,
            noOfFloors: block.floors && block.floors.length,
            carParkingArea: block.carParkingArea,
            basementHeight: block.basementHeight,
            floors: block.floors,
        }))
        return data;
    }

    return (
        <div className="project-form">
            <div className="header"> {`${fieldValues.name || 'New'} Project`}</div>
            <form onSubmit={handleSubmit(blocks)}>
                <div className="content">
                    <TextBox label="Enter project Name" id={'name'} defaulValue={fieldValues.name} required/>
                    {renderIf(() => fieldValues.id, () => (
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
            <div className="blocks">
                <div className="add-new">
                <span>
                    <Avatar alt="Add project" src={addField} onClick={() => {
                        const allBlocks = [...blocks];
                        allBlocks.push({
                            name: '',
                            carParkingArea: null,
                            basementHeight: null,
                            noOfFloors: null,
                            floors: [],
                            noOfUnits: null,
                        })
                        setBlocks(allBlocks)
                    }}/>
                </span>
                </div>
                <Styles>
                    <ReactTable columns={columns} data={formatData(blocks)}/>
                </Styles>
            </div>
        </div>
    )
}

export default ProjectsForm;