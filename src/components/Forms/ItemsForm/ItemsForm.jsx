import React from 'react';
import './itemsForm.scss'
import {renderIf} from "../../../utils/helpers";
import TextBox from "../../TextBox";
import SelectField from "../../SelectField/SelectField";
import {ItemTypeList} from "../../../constants";

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