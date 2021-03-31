import React, {useEffect, useState} from 'react';
import './VendorsPage.scss';
import {Avatar} from "@material-ui/core";
import addField from "../../../images/add_box.svg";
import Styles from "../../ReactTable/Styles/Styles";
import ReactTable from "../../ReactTable";
import Modal from "react-modal";
import editField from "../../../images/edit-black.svg";
import deleteField from "../../../images/delete-black.svg";
import VendorsForm from "../../Forms/VendorsForm";
import {ItemTypeList, ItemUnitList} from "../../../constants";
var moment = require('moment'); // require


const VendorsPage = ({vendorList, getAllVendors, createOrUpdateVendor, deleteVendor, username}) => {
 const [dialog, setDialog] = useState('');
 const [editVendor, setEditVendor] = useState({});
 const [openModal, setOpenModal] = useState(false);

 useEffect( () => {
  getAllVendors()
 }, []);

 const toggleEditModal = () => {
  setOpenModal(!openModal);
 }

 const editRow = (row, AllVendors) => {
  AllVendors.forEach(async vendors => {
   if (vendors.id === row.values.vendorId) {
    await setEditVendor(vendors)
    toggleEditModal()
   }
  });
 }

 const deleteRow = (row, AllVendors) => {
  AllVendors.forEach(async vendors => {
   if (vendors.id === row.values.vendorId) {
    deleteVendor(vendors.id)
   }
  });
 }

 const columns = [
  {
   Header: 'Projects',
   columns: [
    {
     Header: 'Name',
     accessor: 'vendorName',
    },
    {
     Header: 'Vendor ID',
     accessor: 'vendorId',
    },
    {
     Header: 'Item Types',
     accessor: 'itemType',
    },
    {
     Header: 'Mobile Number',
     accessor: 'mobile',
    },
    {
     Header: 'GSTIN',
     accessor: 'gsTin',
    },
    {
     Header: 'Address',
     accessor: 'address',
    },
    {
     Header: 'Email Id',
     accessor: 'emailId',
    },
    {
     Header: 'Created By',
     accessor: 'createdBy',
    },
    {
     Header: 'Created Date',
     accessor: 'createdDate',
    },
    {
     Header: 'Edit',
     Cell: ({row}) => (<span onClick={() => editRow(row, vendorList)}>
                            <Avatar alt="Edit project" src={editField}/>
                        </span>),
    },
    {
     Header: 'Delete',
     Cell: ({row}) => (<span onClick={() => deleteRow(row, vendorList)}>
                            <Avatar alt="Add project" src={deleteField}/>
                        </span>),
    },
   ],
  },
 ]

 const getItemUnits = formValues => {
  const ItemTypes = []
  ItemTypeList.forEach(itemType => {
   if(formValues.get(itemType) === "") ItemTypes.push(itemType)
  })
  return ItemTypes
 }

 const formatData = (vendors) => {
  const data = []
  vendors.forEach(vendor => data.push({
   vendorName: vendor.name,
   vendorId: vendor.id,
   itemType: vendor.itemType.join(),
   gsTin: vendor.gsTin,
   address: vendor.address,
   mobile: vendor.mobile,
   emailId: vendor.emailId,
   createdBy: vendor.createdBy,
   createdDate: vendor.createdDate,
  }))
  return data;
 }

 const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const body = createNewVendorBody(new FormData(form));
  createOrUpdateVendor(body);
  toggleEditModal();
 };

 const createNewVendorBody = (formValues) => {
  return {
   id: formValues.get('id'),
   name: formValues.get('name'),
   itemType: getItemUnits(formValues),
   gsTin: formValues.get('gsTin'),
   address: formValues.get('address'),
   mobile: formValues.get('mobile'),
   emailId: formValues.get('emailId'),
   createdBy: username,
   createdDate: moment().format('DD/MM/YYYY'),
  }
 }

 return (
     <div className="vendors-page">
      <div className="add-new">
                <span onClick={() => {
                 setEditVendor({})
                 setOpenModal(true)
                }}>
                    <Avatar alt="Add vendor" src={addField}/>
                </span>
      </div>
      <Styles>
       <ReactTable columns={columns} data={formatData(vendorList)}/>
      </Styles>
      <Modal
          isOpen={openModal}
          ariaHideApp={false}
          onRequestClose={toggleEditModal}
          contentLabel="Example Modal"
      >
       <div className="project-page__form">
        <VendorsForm handleSubmit={handleSubmit} dialog={dialog}
                         fieldValues={editVendor}/>
       </div>
       <span className="modalClose" onClick={() => {
        toggleEditModal()
        setEditVendor({})
       }}>
              ✕
            </span>
      </Modal>
     </div>
 )

}

export default VendorsPage;