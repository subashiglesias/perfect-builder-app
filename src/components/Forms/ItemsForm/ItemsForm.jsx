import React from 'react';
import './itemsForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import SelectField from "../../SelectField/SelectField";
import {ItemTypeList, ItemUnitList} from "../../../constants";

const ItemsForm = ({handleSubmit, dialog, fieldValues, itemType}) => {

    return (
        <div className="item-form">
            <div className="header"> {`${fieldValues.name || 'New'}'s Contract`}</div>
            <form onSubmit={handleSubmit}>
                <div className="content">
                    <TextBox label="Enter Item Name" id={'name'} defaulValue={fieldValues.name} required/>
                    {renderIf(() => fieldValues.id, () => (
                        <TextBox label="Item id" id={'id'} defaulValue={fieldValues.id} readonly/>
                    ))}
                    <SelectField label="Select item type" id={'itemType'} updateHandler={() => {}} defaulValue={itemType} required optionsLabel={ItemTypeList} optionsValue={ItemTypeList} />

                    <TextBox label="Enter item rate" type={"number"} id={'rate'} defaulValue={fieldValues.rate} required/>
                    <TextBox label="GST Item" type={"checkbox"} id={'gst'} defaultChecked={fieldValues.gst}/>
                    <TextBox label="CGST %" type={"number"} id={'cgst'} defaulValue={fieldValues.cgst} required/>
                    <TextBox label="SGST %" type={"number"} id={'sgst'} defaulValue={fieldValues.sgst} required/>
                    <TextBox label="IGST %" type={"number"} id={'igst'} defaulValue={fieldValues.igst} required/>
                    <TextBox label="Enter description" id={'description'} defaulValue={fieldValues.description} required/>
                </div>
                <div className="additional-content">
                    <div className="row-1">
                        <TextBox label={ItemUnitList[0]} type={"checkbox"} id={ItemUnitList[0]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[0]]}/>
                        <TextBox label={ItemUnitList[1]} type={"checkbox"} id={ItemUnitList[1]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[1]]}/>
                        <TextBox label={ItemUnitList[2]} type={"checkbox"} id={ItemUnitList[2]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[2]]}/>
                    </div>
                    <div className="row-2">
                        <TextBox label={ItemUnitList[3]} type={"checkbox"} id={ItemUnitList[3]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[3]]}/>
                        <TextBox label={ItemUnitList[4]} type={"checkbox"} id={ItemUnitList[4]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[4]]}/>
                        <TextBox label={ItemUnitList[5]} type={"checkbox"} id={ItemUnitList[5]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[5]]}/>
                    </div>
                    <div className="row-3">
                        <TextBox label={ItemUnitList[6]} type={"checkbox"} id={ItemUnitList[6]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[6]]}/>
                        <TextBox label={ItemUnitList[7]} type={"checkbox"} id={ItemUnitList[7]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[7]]}/>
                        <TextBox label={ItemUnitList[8]} type={"checkbox"} id={ItemUnitList[8]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[8]]}/>
                    </div>
                    <div className="row-4">
                        <TextBox label={ItemUnitList[9]} type={"checkbox"} id={ItemUnitList[9]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[9]]}/>
                        <TextBox label={ItemUnitList[10]} type={"checkbox"} id={ItemUnitList[10]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[10]]}/>
                        <TextBox label={ItemUnitList[11]} type={"checkbox"} id={ItemUnitList[11]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[11]]}/>
                    </div>
                    <div className="row-5">
                        <TextBox label={ItemUnitList[12]} type={"checkbox"} id={ItemUnitList[12]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[12]]}/>
                        <TextBox label={ItemUnitList[13]} type={"checkbox"} id={ItemUnitList[13]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[13]]}/>
                    </div>
                    <div className="row-6">
                        <TextBox label={ItemUnitList[14]} type={"checkbox"} id={ItemUnitList[14]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[14]]}/>
                        <TextBox label={ItemUnitList[15]} type={"checkbox"} id={ItemUnitList[15]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[15]]}/>
                    </div>
                    <div className="row-7">
                        <TextBox label={ItemUnitList[16]} type={"checkbox"} id={ItemUnitList[16]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[16]]}/>
                        <TextBox label={ItemUnitList[17]} type={"checkbox"} id={ItemUnitList[17]} defaultChecked={fieldValues.itemUnit && fieldValues.itemUnit[ItemUnitList[17]]}/>
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

export default ItemsForm;