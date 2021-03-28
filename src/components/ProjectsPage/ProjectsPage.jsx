import React, {useEffect, useState} from 'react';
import './ProjectsPage.scss';
import 'reactjs-popup/dist/index.css';
import {API, Auth} from "aws-amplify";
import {listProjects} from "../../graphql/queries";
import {createProject as createProjectMutation, updateProject as updateProjectMutation} from '../../graphql/mutations';
import styled from "styled-components";
import ReactTable from "../ReactTable";
import editBlack from "../../images/edit-black.svg";
import deleteBlack from "../../images/delete-black.svg";
import {Avatar} from "@material-ui/core";
import Modal from 'react-modal';
import ProjectsForm from "../Forms/ProjectsForm";



var moment = require('moment'); // require


const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [dialog, setDialog] = useState('');
    const [editProject, setEditProject] = useState({});
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetchProjects().then(res => setProjects(res.data.listProjects.items));
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
        await API.graphql({query: body.id ? updateProjectMutation : createProjectMutation, variables: {input: body}})
            .then( res => {
                fetchProjects().then(res => {
                    setProjects(res.data.listProjects.items)
                    setDialog('');
                })
            }).catch( async err => {
            await console.log(err);
            setDialog(err.errors[0].message)
        });

    };

    const editRow = (row) => {
        console.log(row.values.projectName);
        console.log(editProject);
        console.log(projects)
        projects.map(async project => {
            if(project.name === row.values.projectName) {
                console.log(project)
                await setEditProject(project)
                toggleEditModal()
            }
            return project
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

    const columns = React.useMemo(
        () => [
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
                        Cell: ({row}) => (<span onClick={ () => editRow(row)}>
                            <Avatar alt="Edit project" src={editBlack}/>
                        </span>),
                    },
                    {
                        Header: 'Delete',
                        Cell: () => (<span>
                            <Avatar alt="Add project" src={deleteBlack}/>
                        </span>),
                    },
                ],
            },
        ],
        []
    )

    const formatData = (projects) => {
        const data = []
        projects.map(project => data.push({
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
            <Styles>
                <ReactTable columns={columns} data={formatData(projects)} />
            </Styles>
            <Modal
                isOpen={openModal}
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
                {/*<TabContext value={value}>*/}
                {/*    <TabList orientation="vertical"*/}
                {/*             variant="scrollable"*/}
                {/*             value={value}*/}
                {/*             onChange={handleChange}*/}
                {/*             aria-label="List of projects"*/}
                {/*             className={classes.tabs}>*/}
                {/*        <Tab icon={<Avatar alt="Add new" src={addBox} />} value={0}/>*/}
                {/*        {projects.map((project) => (<Tab label={project.name} value={project.name}/>))}*/}
                {/*    </TabList>*/}
                {/*    <div className="project-page__panel">*/}

                {/*    </div>*/}
                {/*    <TabPanel value={0}>*/}
                {/*        <div className="project-page__content">*/}
                {/*            <h3> Please select the name of the projects at the side to edit or fill a new one below</h3>*/}
                {/*            <ProjectsForm handleSubmit={handleSubmit} dialog={dialog} fieldValues={{}} classes={classes}/>*/}
                {/*        </div>*/}
                {/*    </TabPanel>*/}
                {/*    {projects.map((project) => (*/}
                {/*        <TabPanel value={project.name}> <ProjectsForm handleSubmit={handleSubmit} dialog={dialog}*/}
                {/*                                                      fieldValues={project} classes={classes}/> </TabPanel>))}*/}
                {/*</TabContext>*/}

        </div>)
}

export default ProjectsPage;