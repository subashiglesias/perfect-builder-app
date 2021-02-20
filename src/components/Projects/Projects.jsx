import React, { useState, useEffect } from 'react';
import './Projects.scss';
import { API, Auth } from 'aws-amplify';
import { listProjects } from "../../graphql/queries";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const ProjectsData = await API.graphql({ query : listProjects });
        console.log( await Auth.currentSession());
        console.log(ProjectsData);
        setProjects(ProjectsData.data.listProjects.items);
    };

    return (
        <div>
            {projects.map( project => (<div> {project.title} </div>))}
        </div>
    )
};

export default Projects;