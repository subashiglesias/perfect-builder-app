import React, {useEffect, useState} from 'react';
import './ProjectsPage.scss';
import server from '../../utils/serverUrl'
import Axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {TabContext, TabPanel} from "@material-ui/lab";
import TabList from "@material-ui/lab/TabList";
import Tab from "@material-ui/core/Tab";
import 'reactjs-popup/dist/index.css';
import ProjectsForm from "../Forms";
import {API, Auth} from "aws-amplify";
import {listProjects} from "../../graphql/queries";
import {createProject as createProjectMutation} from '../../graphql/mutations';


var moment = require('moment'); // require


const ProjectsPage = () => {
    const [value, setValue] = useState(0);
    const [projects, setProjects] = useState([]);
    const [dialog, setDialog] = useState('');

    useEffect(() => {
        fetchProjects().then(res => setProjects(res.data.listProjects.items));
    }, []);

    const fetchProjects = async () => {
        const ProjectsData = await API.graphql({query: listProjects});
        console.log(await Auth.currentSession());
        console.log(ProjectsData);
        return ProjectsData;
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewProjectBody(new FormData(form));
        console.log(body);
        const res = await API.graphql({query: createProjectMutation, variables: {input: body}});
        fetchProjects().then(res => {
            setProjects(res.data.listProjects.items)
            setDialog('');
        }).catch(err => console.log(err))
    };

    const createNewProjectBody = (formValues) => {
        return {
            name: formValues.get('name'),
            area: formValues.get('area'),
            category: formValues.get('category'),
            description: formValues.get('description'),
            createdBy: "Bob cane",
            createdDate: moment().format('DD/MM/YYYY'),
        }
    }

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            display: 'flex',
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        }
    }));
    const classes = useStyles();
    return (
        <div className="project-page">
            <div className={classes.root}>
                <TabContext value={value}>
                    <TabList orientation="vertical"
                             variant="scrollable"
                             value={value}
                             onChange={handleChange}
                             aria-label="List of projects"
                             className={classes.tabs}>
                        <Tab label="Add New" value={0}/>
                        {projects.map((project) => (<Tab label={project.name} value={project.name}/>))}
                    </TabList>
                    <div className="project-page__panel">

                    </div>
                    <TabPanel value={0}>
                        <div className="project-page__content">
                            <h2> Project overview displayed here </h2>
                            <h3> Please select the name of the projects at the side to edit to proceed or Click below to
                                add new</h3>
                            <ProjectsForm handleSubmit={handleSubmit} dialog={dialog} fieldValues={{}}/>
                        </div>
                    </TabPanel>
                    {projects.map((project) => (
                        <TabPanel value={project.name}> <ProjectsForm handleSubmit={handleSubmit} dialog={dialog}
                                                                      fieldValues={project}/> </TabPanel>))}
                </TabContext>
            </div>
        </div>)
}

export default ProjectsPage;