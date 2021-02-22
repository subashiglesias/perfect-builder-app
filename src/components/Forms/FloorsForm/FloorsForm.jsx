import React, {useState} from 'react';
import './FloorsForm.scss'
import TextBox from "../../TextBox";

const FloorsForm = ({floorValues}) => {

    return (
        <div>
            <TextBox label="Enter Block Name" defaulValue={floorValues.name} required/>
            <TextBox label="Enter No of Units" defaulValue={floorValues.noOfUnits} required/>
            <TextBox label="Enter Car Parking Area" defaulValue={floorValues.carParkingArea} required/>
            <TextBox label="Enter Basement Height" defaulValue={floorValues.basementHeight} required/>
        </div>
    )
};

export default FloorsForm;