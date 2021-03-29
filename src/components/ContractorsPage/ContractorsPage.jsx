import React, {useEffect, useState} from 'react';
import './ContractorsPage.scss';
import {Avatar} from "@material-ui/core";
import addField from "../../images/add_box.svg";
import Styles from "../ReactTable/Styles/Styles";
import ReactTable from "../ReactTable";
import Modal from "react-modal";
import editField from "../../images/edit-black.svg";
import deleteField from "../../images/delete-black.svg";
import ContractorsForm from "../Forms/ContractorsForm";
var moment = require('moment'); // require


const ContractorsPage = ({contractorList, getAllContractors, createOrUpdateContractor, deleteContractor}) => {
    const [dialog, setDialog] = useState('');
    const [editContractor, setEditContractor] = useState({});
    const [openModal, setOpenModal] = useState(false);

    useEffect( () => {
        getAllContractors()
    }, []);

    const toggleEditModal = () => {
        setOpenModal(!openModal);
    }

    const editRow = (row, AllContractors) => {
        AllContractors.forEach(async contractors => {
            if (contractors.id === row.values.contractorId) {
                await setEditContractor(contractors)
                toggleEditModal()
            }
        });
    }

    const deleteRow = (row, AllContractors) => {
        AllContractors.forEach(async contractors => {
            if (contractors.id === row.values.contractorId) {
                deleteContractor(contractors.id)
            }
        });
    }

    const columns = [
        {
            Header: 'Projects',
            columns: [
                {
                    Header: 'Name',
                    accessor: 'contractorName',
                },
                {
                    Header: 'Contractor ID',
                    accessor: 'contractorId',
                },
                {
                    Header: 'Work Type',
                    accessor: 'workType',
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
                    Cell: ({row}) => (<span onClick={() => editRow(row, contractorList)}>
                            <Avatar alt="Edit project" src={editField}/>
                        </span>),
                },
                {
                    Header: 'Delete',
                    Cell: ({row}) => (<span onClick={() => deleteRow(row, contractorList)}>
                            <Avatar alt="Add project" src={deleteField}/>
                        </span>),
                },
            ],
        },
    ]

    const formatData = (contractors) => {
        const data = []
        contractors.forEach(contractor => data.push({
            contractorName: contractor.name,
            contractorId: contractor.id,
            workType: contractor.workType,
            mobile: contractor.mobile,
            emailId: contractor.emailId,
            createdBy: contractor.createdBy,
            createdDate: contractor.createdDate,
        }))
        return data;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewContractorBody(new FormData(form));
        createOrUpdateContractor(body)
    };

    const createNewContractorBody = (formValues) => {
        return {
            id: formValues.get('id'),
            name: formValues.get('name'),
            workType: formValues.get('workType'),
            mobile: formValues.get('mobile'),
            emailId: formValues.get('emailId'),
            createdBy: "Bob cane",
            createdDate: moment().format('DD/MM/YYYY'),
        }
    }

    return (
        <div className="contractors-page">
            <div className="add-new">
                <span onClick={() => {
                    setEditContractor({})
                    setOpenModal(true)
                }}>
                    <Avatar alt="Add contractor" src={addField}/>
                </span>
            </div>
            <Styles>
                <ReactTable columns={columns} data={formatData(contractorList)}/>
            </Styles>
            <Modal
                isOpen={openModal}
                ariaHideApp={false}
                onRequestClose={toggleEditModal}
                contentLabel="Example Modal"
            >
                <div className="project-page__form">
                    <ContractorsForm handleSubmit={handleSubmit} dialog={dialog}
                                  fieldValues={editContractor}/>
                </div>
                <span className="modalClose" onClick={() => {
                    toggleEditModal()
                    setEditContractor({})
                }}>
              ✕
            </span>
            </Modal>
        </div>
    )

}

export default ContractorsPage;