import React from 'react';
import './VendorsForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import {ItemTypeList} from "../../../constants";

const VendorsForm = ({handleSubmit, dialog, fieldValues, itemType}) => {

    return (
        <div className="vendor-form">
            <div className="header"> {`${fieldValues.name || 'New'} - Vendor`}</div>
            <form onSubmit={handleSubmit}>
                <div className="content">
                    <TextBox label="Enter Vendor Name" id={'name'} defaulValue={fieldValues.name} required/>
                    {renderIf(() => fieldValues.id, () => (
                        <TextBox label="Vendor id" id={'id'} defaulValue={fieldValues.id} readonly/>
                    ))}
                    <TextBox label="GSTIN" type={"number"} id={'gsTin'} defaulValue={fieldValues.gsTin} required/>
                    <TextBox label="Enter Address" id={'address'} defaulValue={fieldValues.address} required/>
                    <TextBox label="Enter Mobile Number" id={'mobile'} defaulValue={fieldValues.mobile} required/>
                    <TextBox label="Enter EmailId" id={'emailId'} defaulValue={fieldValues.emailId} required/>
                </div>
                <div className="additional-content">
                    <div className="row-1">
                        <TextBox label={ItemTypeList[0]} type={"checkbox"} id={ItemTypeList[0]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[0])}/>
                        <TextBox label={ItemTypeList[1]} type={"checkbox"} id={ItemTypeList[1]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[1])}/>
                        <TextBox label={ItemTypeList[2]} type={"checkbox"} id={ItemTypeList[2]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[2])}/>
                        <TextBox label={ItemTypeList[3]} type={"checkbox"} id={ItemTypeList[3]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[3])}/>
                    </div>
                    <div className="row-2">
                        <TextBox label={ItemTypeList[4]} type={"checkbox"} id={ItemTypeList[4]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[4])}/>
                        <TextBox label={ItemTypeList[5]} type={"checkbox"} id={ItemTypeList[5]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[5])}/>
                        <TextBox label={ItemTypeList[6]} type={"checkbox"} id={ItemTypeList[6]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[6])}/>
                        <TextBox label={ItemTypeList[7]} type={"checkbox"} id={ItemTypeList[7]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[7])}/>
                    </div>
                    <div className="row-3">
                        <TextBox label={ItemTypeList[8]} type={"checkbox"} id={ItemTypeList[8]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[8])}/>
                        <TextBox label={ItemTypeList[9]} type={"checkbox"} id={ItemTypeList[9]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[9])}/>
                        <TextBox label={ItemTypeList[10]} type={"checkbox"} id={ItemTypeList[10]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[10])}/>
                        <TextBox label={ItemTypeList[11]} type={"checkbox"} id={ItemTypeList[11]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[11])}/>
                    </div>
                    <div className="row-4">
                        <TextBox label={ItemTypeList[12]} type={"checkbox"} id={ItemTypeList[12]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[12])}/>
                        <TextBox label={ItemTypeList[13]} type={"checkbox"} id={ItemTypeList[13]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[13])}/>
                        <TextBox label={ItemTypeList[14]} type={"checkbox"} id={ItemTypeList[14]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[14])}/>
                        <TextBox label={ItemTypeList[15]} type={"checkbox"} id={ItemTypeList[15]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[15])}/>
                    </div>
                    <div className="row-5">
                        <TextBox label={ItemTypeList[16]} type={"checkbox"} id={ItemTypeList[16]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[16])}/>
                        <TextBox label={ItemTypeList[17]} type={"checkbox"} id={ItemTypeList[17]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[17])}/>
                        <TextBox label={ItemTypeList[18]} type={"checkbox"} id={ItemTypeList[18]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[18])}/>
                        <TextBox label={ItemTypeList[19]} type={"checkbox"} id={ItemTypeList[19]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[19])}/>
                    </div>
                    <div className="row-6">
                        <TextBox label={ItemTypeList[20]} type={"checkbox"} id={ItemTypeList[20]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[20])}/>
                        <TextBox label={ItemTypeList[21]} type={"checkbox"} id={ItemTypeList[21]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[21])}/>
                        <TextBox label={ItemTypeList[22]} type={"checkbox"} id={ItemTypeList[22]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[22])}/>
                        <TextBox label={ItemTypeList[23]} type={"checkbox"} id={ItemTypeList[23]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[23])}/>
                    </div>
                    <div className="row-7">
                        <TextBox label={ItemTypeList[24]} type={"checkbox"} id={ItemTypeList[24]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[24])}/>
                        <TextBox label={ItemTypeList[25]} type={"checkbox"} id={ItemTypeList[25]}
                                 defaultChecked={fieldValues.itemType && fieldValues.itemType.includes(ItemTypeList[25])}/>
                    </div>
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

export default VendorsForm;