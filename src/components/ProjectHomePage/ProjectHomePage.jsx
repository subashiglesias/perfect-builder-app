import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/lab/TabList';
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider
} from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import {TabPanel, TabContext} from '@material-ui/lab';
import { renderIf } from '../../utils/helpers'
import './ProjectHomePage.scss'
import ProjectsPage from "../ProjectsPage";

const ProjectHomePage = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createMuiTheme({
        overrides: {
            MuiAppBar: {
                colorPrimary: {
                    backgroundColor: "#333232"
                }
            }
        }
    });

    const useStyles = makeStyles(theme => ({
        customizeToolbar: {
            maxHeight: "3rem"
        }
    }));
    const classes = useStyles();

    return (
        <div className="home-page">
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <AppBar position="static" className={classes.customizeToolbar}>
                        <TabList onChange={handleChange} aria-label="Group of screens">
                            <Tab label="Building" value="1"/>
                        </TabList>
                    </AppBar>
                    <TabPanel value="1"> <ProjectsPage/> </TabPanel>
                </TabContext>
            </ThemeProvider>
        </div>)
}

export default ProjectHomePage;