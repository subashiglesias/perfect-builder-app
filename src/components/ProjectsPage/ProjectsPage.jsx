import React, { useEffect, useState } from 'react';
import './ProjectsPage.scss';
import 'reactjs-popup/dist/index.css';
import { API } from "aws-amplify";
import { listProjects } from "../../graphql/queries";
import { createProject as createProjectMutation, updateProject as updateProjectMutation } from '../../graphql/mutations';
import styled from "styled-components";
import ReactTable from "../ReactTable";
import editField from "../../images/edit-black.svg";
import deleteField from "../../images/delete-black.svg";
import addField from "../../images/add_box.svg";
import { Avatar } from "@material-ui/core";
import Modal from 'react-modal';
import ProjectsForm from "../Forms/ProjectsForm";



var moment = require('moment'); // require


const ProjectsPage = ({projectList, getAllProjects, createOrUpdateProjects}) => {
    const [dialog, setDialog] = useState('');
    const [editProject, setEditProject] = useState({});
    const [openModal, setOpenModal] = useState(false);

    useEffect( () => {
        getAllProjects()
    }, []);

    const fetchProjects = async () => {
        const ProjectsData = await API.graphql({query: listProjects});
        console.log(ProjectsData);
        return ProjectsData;
    };

    const handleSubmit = blocks => async event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewProjectBody(new FormData(form), blocks);
        console.log(body);
        createOrUpdateProjects(body)
    };

    const editRow = (row, allProjects) => {
        console.log(row.values.projectName);
        console.log(editProject);
        console.log(allProjects)
        allProjects.forEach(async project => {
            if(project.name === row.values.projectName) {
                console.log(project)
                await setEditProject(project)
                toggleEditModal()
            }
        });
        console.log(editProject)
        console.log("Modal is ", openModal)
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

    const Styles = styled.div`
  padding: 1rem;

  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }

    th {
        background-color: #282c34;
        color: #ffffff;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
    },
    td {
      padding: 12px 15px;

      :last-child {
        border-right: 0;
      }
    }
    
    th:last-of-type {
        padding-left:1rem;
        padding-right:2rem;
    }
    
    tbody tr {
    border-bottom: 1px solid #dddddd;
    }
    
    tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
    }
    
    tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
    }
    
    tbody tr.active-row {
    font-weight: bold;
    color: #009879;
    }
  }
`

    const columns = [
            {
                Header: 'Projects',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'projectName',
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
                        Cell: () => (<span>
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