import React, {useEffect, useState} from 'react';
import './CustomersPage.scss';
import {Avatar} from "@material-ui/core";
import addField from "../../../images/add_box.svg";
import Styles from "../../ReactTable/Styles/Styles";
import ReactTable from "../../ReactTable";
import Modal from "react-modal";
import editField from "../../../images/edit-black.svg";
import deleteField from "../../../images/delete-black.svg";
import CustomersForm from "../../Forms/CustomersForm";
import SelectField from "../../SelectField/SelectField";

var moment = require('moment'); // require


const CustomersPage = ({customerList, getAllCustomers, createOrUpdateCustomer, deleteCustomer, username, projects, getAllProjects}) => {
 const [dialog, setDialog] = useState('');
 const [editCustomer, setEditCustomer] = useState({});
 const [openModal, setOpenModal] = useState(false);
 const [selectedProjectName, setSelectedProjectName] = useState("");
 const [projectList, setProjectList] = useState([]);

 useEffect(async () => {
  if(projects && !projects.length)
   await getAllProjects()
 }, [])

 useEffect(()=>{
  projects && setProjectList([...projects.map(({name}) => name)])
 }, [projects])

 useEffect(() => {
  getAllCustomers(selectedProjectName)
 }, [selectedProjectName]);

 const toggleEditModal = () => {
  setOpenModal(!openModal);
 }

 const editRow = (row, AllCustomers) => {
  AllCustomers.forEach(async customers => {
   if (customers.id === row.values.customerId) {
    await setEditCustomer(customers)
    toggleEditModal()
   }
  });
 }

 const deleteRow = (row, AllCustomers) => {
  AllCustomers.forEach(async customers => {
   if (customers.id === row.values.customerId) {
    deleteCustomer(customers.id)
   }
  });
 }

 const columns = [
  {
   Header: 'Customers',
   columns: [
    {
     Header: 'Name',
     accessor: 'customerName',
    },
    {
     Header: 'Customer ID',
     accessor: 'customerId',
    },
    {
     Header: 'Project Name',
     accessor: 'projectName',
    },
    {
     Header: 'Mobile Number',
     accessor: 'mobile',
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
     Cell: ({row}) => (<span onClick={() => editRow(row, customerList)}>
                            <Avatar alt="Edit Customer" src={editField}/>
                        </span>),
    },
    {
     Header: 'Delete',
     Cell: ({row}) => (<span onClick={() => deleteRow(row, customerList)}>
                            <Avatar alt="Add Customer" src={deleteField}/>
                        </span>),
    },
   ],
  },
 ]

 const formatData = (customers) => {
  const data = []
  customers.forEach(customer => data.push({
   customerName: customer.name,
   customerId: customer.id,
   projectName: customer.projectName,
   mobile: customer.mobile,
   emailId: customer.emailId,
   address: customer.address,
   createdBy: customer.createdBy,
   createdDate: customer.createdDate,
  }))
  return data;
 }


 const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;
  const body = createNewCustomerBody(new FormData(form));
  createOrUpdateCustomer(body);
  toggleEditModal();
 };

 const createNewCustomerBody = (formValues) => {
  return {
   id: formValues.get('id'),
   name: formValues.get('name'),
   projectName: formValues.get('projectName'),
   mobile: formValues.get('mobile'),
   emailId: formValues.get('emailId'),
   address: formValues.get('address'),
   createdBy: username,
   createdDate: moment().format('DD/MM/YYYY'),
  }
 }

 return (
     <div className="customers-page">
      <SelectField label="Select project name" id={'projectList'} updateHandler={setSelectedProjectName} required
                   optionsLabel={projectList} optionsValue={projectList}/>
      <div className="customers-table">
       <div className="add-new">
                <span>
                    <Avatar alt="Add customer" src={addField} onClick={() => {
                     setEditCustomer({})
                     setOpenModal(true)
                    }}/>
                </span>
       </div>
       <Styles>
        <ReactTable columns={columns} data={formatData(customerList)}/>
       </Styles>
       <Modal
           isOpen={openModal}
           ariaHideApp={false}
           onRequestClose={toggleEditModal}
           contentLabel="Example Modal"
       >
        <div className="Customer-page__form">
         <CustomersForm handleSubmit={handleSubmit} dialog={dialog} projectName={selectedProjectName}
                    fieldValues={editCustomer} projectList={projectList}/>
        </div>
        <span className="modalClose" onClick={() => {
         toggleEditModal()
         setEditCustomer({})
        }}>
              ✕
            </span>
       </Modal>
      </div>
     </div>
 )

}

export default CustomersPage;