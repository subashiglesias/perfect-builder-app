import React, {useState} from 'react';
import './BlocksForm.scss'
import TextBox from "../../TextBox";

const BlocksForm = ({blockValues, setBlocksValues}) => {
    const [floors, setFloors] = useState(blockValues.floors || []);

    const blockHandleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewBlockBody(new FormData(form));
        const blockUpdate = [...blockValues]
        blockUpdate.push(body)
        setBlocksValues(blockUpdate);
        event.stopPropagation();
    }

    const createNewBlockBody = (formData) => {
        return {
            name: formData.get('name'),
            noOfUnits: formData.get('noOfUnits'),
            carParkingArea: formData.get('carParkingArea'),
            basementHeight: formData.get('basementHeight'),
        }
    }

    return (
        <form onSubmit={blockHandleSubmit}>
            <div>
                {`No of Blocks: ${blockValues.length}`}
                <TextBox label="Enter Block Name" id={'name'} defaulValue={blockValues.name} />
                <TextBox label="Enter No of Units" id={'noOfUnits'} defaulValue={blockValues.noOfUnits} />
                <TextBox label="Enter Car Parking Area" id={'carParkingArea'} defaulValue={blockValues.carParkingArea} />
                <TextBox label="Enter Basement Height" id={'basementHeight'} defaulValue={blockValues.basementHeight} />
            </div>

            <div className="save">
                <button>Create Block</button>
            </div>
        </form>
    )
};

export default BlocksForm;