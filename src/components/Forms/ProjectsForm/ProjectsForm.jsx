import React, {useState} from 'react';
import './ProjectsForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import TextArea from "../../TextArea";
import {Avatar} from "@material-ui/core";
import addField from "../../../images/add_box.svg";
import Styles from "../../ReactTable/Styles/Styles";
import ReactTable from "../../ReactTable";
import deleteField from "../../../images/delete-black.svg";

const ProjectsForm = ({handleSubmit, dialog, fieldValues}) => {
    const [value, setValue] = useState(0);
    const [blocks, setBlocks] = useState(fieldValues.blocks || []);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderEditable = (row, defaultValue) => {
        return (
            <input
                id={defaultValue + row.index}
                name={defaultValue + row.index}
                type="text"
                defaultValue={row.values[defaultValue] || ''}
                onBlur={(event) => updateRow(row, event, defaultValue)}
            />
        );
    };

    const renderFloorsEditable = (row) => {
        const allBlocks = [...blocks];
        const selectedBlock = allBlocks.slice(row.index, row.index+1)

        return (
            <div>
                <span onClick={() => {
                console.log(selectedBlock)
                selectedBlock[0]['floors'] = [...selectedBlock[0]['floors'],{floorNo: null, name: '', ceilingHeight: ''}]
                allBlocks.splice(row.index, 1, selectedBlock[0])
                setBlocks(allBlocks)
                }}>
                    <Avatar alt="Add floor" src={addField}/>
                </span>
                <div className="floors">
                    {selectedBlock[0]['floors'] && selectedBlock[0]['floors'].map(floor => {
                        return(
                            <div className="floor">
                                {console.log(floor)}
                                <input
                                    id={"floorNo" + row.index}
                                    name={"floorNo" + row.index}
                                    type="text"
                                    placeholder={"No."}
                                    defaultValue={floor.floorNo || ''}
                                    onBlur={() => {}}
                                />
                                <input
                                    id={"name" + row.index}
                                    name={"name" + row.index}
                                    type="text"
                                    placeholder={"Floor Name"}
                                    defaultValue={floor.name || ''}
                                    onBlur={() => {}}
                                />
                                <input
                                    id={"ceilingHeight" + row.index}
                                    name={"ceilingHeight" + row.index}
                                    type="text"
                                    placeholder={"Ceiling height"}
                                    defaultValue={floor.ceilingHeight || ''}
                                    onBlur={() => {}}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
        // return (
        //     <input
        //         id={defaultValue+row.index}
        //         name={defaultValue+row.index}
        //         type="text"
        //         defaultValue={row.values[defaultValue] || ''}
        //         onBlur={(event) => updateRow(row, event, defaultValue)}
        //     />
        // );
    };

    const updateRow = (row, event, defaultValue) => {
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

    const deleteBlock = (row, allBlocks) => {
        const filteredBlocks = [...allBlocks]
        filteredBlocks.splice(row.index, 1)
        setBlocks(filteredBlocks)
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
            <div>
                <h4>Blocks</h4>
                <div className="add-new">
                <span onClick={() => {
                    const allBlocks = [...blocks];
                    allBlocks.push({
                        name: '',
                        carParkingArea: '',
                        basementHeight: '',
                        noOfFloors: null,
                        floors: [],
                        noOfUnits: '',
                    })
                    setBlocks(allBlocks)
                }}>
                    <Avatar alt="Add project" src={addField}/>
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