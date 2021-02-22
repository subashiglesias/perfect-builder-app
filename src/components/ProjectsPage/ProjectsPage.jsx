import React, {useEffect, useState} from 'react';
import './ProjectsPage.scss';
import {makeStyles} from "@material-ui/core/styles";
import {TabContext, TabPanel} from "@material-ui/lab";
import TabList from "@material-ui/lab/TabList";
import Tab from "@material-ui/core/Tab";
import 'reactjs-popup/dist/index.css';
import addBox from '../../images/add_box.svg'
import ProjectsForm from "../Forms/ProjectsForm";
import {API, Auth} from "aws-amplify";
import {listProjects} from "../../graphql/queries";
import {createProject as createProjectMutation} from '../../graphql/mutations';
import {Avatar} from "@material-ui/core";


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

    const handleSubmit = blocks => async event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewProjectBody(new FormData(form), blocks);
        console.log(body);
        await API.graphql({query: createProjectMutation, variables: {input: body}})
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

    const createNewProjectBody = (formValues, blocks) => {
        return {
            name: formValues.get('name'),
            address: formValues.get('address'),
            comments: formValues.get('comment'),
            noOfBlocks: blocks.length,
            blocks: blocks,
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
                        <Tab icon={<Avatar alt="Add new" src={addBox} />} value={0}/>
                        {projects.map((project) => (<Tab label={project.name} value={project.name}/>))}
                    </TabList>
                    <div className="project-page__panel">

                    </div>
                    <TabPanel value={0}>
                        <div className="project-page__content">
                            <h3> Please select the name of the projects at the side to edit or fill a new one below</h3>
                            <ProjectsForm handleSubmit={handleSubmit} dialog={dialog} fieldValues={{}} classes={classes}/>
                        </div>
                    </TabPanel>
                    {projects.map((project) => (
                        <TabPanel value={project.name}> <ProjectsForm handleSubmit={handleSubmit} dialog={dialog}
                                                                      fieldValues={project} classes={classes}/> </TabPanel>))}
                </TabContext>
            </div>
        </div>)
}

export default ProjectsPage;