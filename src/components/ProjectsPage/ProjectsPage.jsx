import React, {useEffect, useState} from 'react';
import './ProjectsPage.scss';
import 'reactjs-popup/dist/index.css';
import ReactTable from "../ReactTable";
import Styles from "../ReactTable/Styles/Styles";
import editField from "../../images/edit-black.svg";
import deleteField from "../../images/delete-black.svg";
import addField from "../../images/add_box.svg";
import {Avatar} from "@material-ui/core";
import Modal from 'react-modal';
import ProjectsForm from "../Forms/ProjectsForm";


var moment = require('moment'); // require


const ProjectsPage = ({projectList, getAllProjects, createOrUpdateProjects, deleteProject}) => {
    const [dialog, setDialog] = useState('');
    const [editProject, setEditProject] = useState({});
    const [openModal, setOpenModal] = useState(false);

    useEffect( () => {
        getAllProjects()
    }, []);

    const handleSubmit = blocks => async event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewProjectBody(new FormData(form), blocks);
        console.log("The blocks are ", blocks)
        createOrUpdateProjects(body)
    };

    const editRow = (row, allProjects) => {
        allProjects.forEach(async project => {
            if(project.name === row.values.projectName) {
                await setEditProject(project)
                toggleEditModal()
            }
        });
    }

    const deleteRow = (row, allProjects) => {
        allProjects.forEach(async project => {
            if(project.id === row.values.projectId) {
                deleteProject(project.id)
            }
        });
    }

    const toggleEditModal = () => {
        setOpenModal(!openModal);
    }

    const createNewProjectBody = (formValues, blocks) => {
        return {
            id: formValues.get('id'),
            name: formValues.get('name'),
            address: formValues.get('address'),
            comments: formValues.get('comment'),
            noOfBlocks: blocks.length,
            blocks: blocks,
            createdBy: "Bob cane",
            createdDate: moment().format('DD/MM/YYYY'),
        }
    }

    const columns = [
            {
                Header: 'Projects',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'projectName',
                    },
                    {
                        Header: 'Project ID',
                        accessor: 'projectId',
                    },
                    {
                        Header: 'Address',
                        accessor: 'projectAddress',
                    },
                    {
                        Header: 'Blocks Count',
                        accessor: 'projectBlocksCount',
                    },
                    {
                        Header: 'Floors Count',
                        accessor: 'projectFloorsCount',
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
                        Cell: ({row}) => (<span onClick={ () => editRow( row, projectList)}>
                            <Avatar alt="Edit project" src={editField}/>
                        </span>),
                    },
                    {
                        Header: 'Delete',
                        Cell: ({row}) => (<span onClick={() => deleteRow(row, projectList)}>
                            <Avatar alt="Add project" src={deleteField}/>
                        </span>),
                    },
                ],
            },
        ]

    const formatData = (projects) => {
        const data = []
        projects.forEach(project => data.push({
            projectName: project.name,
            projectId: project.id,
            projectAddress: project.address,
            projectBlocksCount: project.noOfBlocks,
            projectFloorsCount: 'yet to implement',
            createdBy: project.createdBy,
            createdDate: project.createdDate,
        }))
        return data;
    }

    return (
        <div className="project-page">
            <div className="add-new">
                <span onClick={() => {
                    setEditProject({})
                    setOpenModal(true)
                }}>
                    <Avatar alt="Add project" src={addField}/>
                </span>
            </div>
            <Styles>
                <ReactTable columns={columns} data={formatData(projectList)} />
            </Styles>
            <Modal
                isOpen={openModal}
                ariaHideApp={false}
                onRequestClose={toggleEditModal}
                contentLabel="Example Modal"
            > <div className="project-page__form">
                <ProjectsForm handleSubmit={handleSubmit} dialog={dialog}
                              fieldValues={editProject} />
            </div>
            <span className="modalClose" onClick={() => {
                toggleEditModal()
                setEditProject({})
            }}>
              ✕
            </span>
            </Modal>
        </div>)
}

export default ProjectsPage;